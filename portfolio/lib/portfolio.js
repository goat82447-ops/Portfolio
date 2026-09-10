const fs = require("node:fs");
const path = require("node:path");
const cheerio = require("cheerio");
const acorn = require("acorn");
const walk = require("acorn-walk");

const portfolioPath = path.join(__dirname, "..", "index.html");
let cachedKnowledge;
let cachedModified;

function readLiteral(node) {
  if (node.type === "Literal") return node.value;
  if (node.type === "ArrayExpression") return node.elements.map(readLiteral);
  if (node.type === "ObjectExpression") {
    return Object.fromEntries(node.properties.map(property => {
      if (property.type !== "Property" || property.computed || property.method ||
          property.kind !== "init") {
        throw new Error("Portfolio data must contain only literal properties.");
      }
      return [property.key.name ?? property.key.value, readLiteral(property.value)];
    }));
  }
  throw new Error("Portfolio data must contain only literal values.");
}

function getPortfolioKnowledge() {
  const modified = fs.statSync(portfolioPath).mtimeMs;
  if (cachedKnowledge && cachedModified === modified) return cachedKnowledge;
  const page = cheerio.load(fs.readFileSync(portfolioPath, "utf8"));
  const data = {};

  page("script:not([src])").each((index, element) => {
    walk.simple(acorn.parse(page(element).html(), { ecmaVersion: "latest" }), {
      VariableDeclarator(node) {
        if (["SKILLS", "EXPERIENCE", "PROJECTS"].includes(node.id.name)) {
          data[node.id.name] = readLiteral(node.init);
        }
      }
    });
  });

  if (Object.keys(data).length !== 3) throw new Error("Portfolio data is incomplete.");
  page("script, style, svg").remove();

  const sections = page(".hero-copy, #stats, #about, #genai, #architecture, #devops, #credentials, #contact, footer")
    .toArray().map(element => page(element).text().replace(/\s+/g, " ").trim());
  const links = page("#contact a, #credentials a, footer a").toArray()
    .map(element => page(element).attr("href"))
    .filter(href => /^(https:\/\/|mailto:|tel:)/.test(href));

  const knowledge = JSON.stringify({ sections, links: [...new Set(links)], ...data });
  if (knowledge.length > 65000) {
    throw new Error("Portfolio exceeds the configured context limit.");
  }

  cachedKnowledge = knowledge;
  cachedModified = modified;
  return knowledge;
}

module.exports = { getPortfolioKnowledge };
