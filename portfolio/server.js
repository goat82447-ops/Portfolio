const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const defaultChatHandler = require("./api/chat");

const publicDirectory = path.join(__dirname, "portfolio");
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon"
};

function createPortfolioServer({ chatHandler = defaultChatHandler } = {}) {
  const server = http.createServer(async (request, response) => {
    response.setHeader("X-Content-Type-Options", "nosniff");
    response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    try {
      const url = new URL(request.url, "http://localhost");
      if (url.pathname === "/api/chat") return await chatHandler(request, response);
      if (!["GET", "HEAD"].includes(request.method)) {
        response.writeHead(405, { Allow: "GET, HEAD" });
        return response.end();
      }
      const requested = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
      const filename = path.resolve(publicDirectory, `.${requested}`);
      const contentType = contentTypes[path.extname(filename).toLowerCase()];
      if (!filename.startsWith(`${publicDirectory}${path.sep}`) || !contentType) {
        response.writeHead(404);
        return response.end("Not found");
      }
      const content = await fs.readFile(filename);
      response.writeHead(200, { "Content-Type": contentType, "Content-Length": content.length });
      return response.end(request.method === "HEAD" ? undefined : content);
    } catch (error) {
      if (!response.headersSent) response.writeHead(error.code === "ENOENT" ? 404 : 400);
      response.end("Request could not be completed");
    }
  });
  server.requestTimeout = 40000;
  server.headersTimeout = 10000;
  return server;
}

if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  const host = process.env.HOST || "127.0.0.1";
  const server = createPortfolioServer();
  server.on("error", error => {
    console.error(error.code === "EADDRINUSE" ? `Port ${port} is in use. Choose another PORT in .env.` : "The portfolio server could not start.");
    process.exitCode = 1;
  });
  server.listen(port, host, () => {
    console.log(`Portfolio: http://${host === "0.0.0.0" ? "localhost" : host}:${port}`);
    console.log(process.env.OPENROUTER_API_KEY && process.env.OPENROUTER_MODEL
      ? "AI chat configuration detected."
      : "AI chat needs OPENROUTER_API_KEY and OPENROUTER_MODEL in the server environment.");
  });
}

module.exports = { createPortfolioServer };
