# Krishna Kumar Bandoju — Portfolio

A premium, dark-themed personal portfolio for a Senior Full Stack Developer (.NET / Angular / Azure), built from the attached resume and photo. No build step required.

## Files

```
index.html      Structure and content
style.css       Design system + styles
script.js       Data (from the resume) + interactions
assets/
  profile.png   Your photo, used in the Hero section
  resume.pdf    Your resume, used by the "Download Resume" buttons
README.md       This file
```

## Run it locally

You can open `index.html` directly in a browser, but for the smoothest experience (and so the resume download works consistently across browsers), serve it over a local server:

**Option A — Python (already on most machines):**
```bash
cd portfolio
python3 -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

**Option B — VS Code:**
Install the "Live Server" extension, right-click `index.html`, and choose "Open with Live Server."

## What's wired up

- **LinkedIn** → https://www.linkedin.com/in/krishna-bandoju-693453152/ (opens in a new tab)
- **GitHub** → https://github.com/goat82447-ops (opens in a new tab)
- **Download Resume** buttons → download/open `assets/resume.pdf`
- **Email Me** → opens a mail client addressed to krishnaleo.b@gmail.com
- Skill category cards expand/collapse (one open at a time)
- Experience timeline expands per role; the AmpleLogic entry has nested, individually-expandable sub-projects (LowCode v3.0, ATWORK, e-LMS)
- Each project card opens a full case-study modal (closes on the × button, outside click, or Esc)
- Sticky nav with scroll-based active-link highlighting, mobile hamburger menu, and a back-to-top button

## Swapping in updated content later

- **New photo:** replace `assets/profile.png` (keep the same filename, or update the `<img src>` in `index.html`'s hero section).
- **New resume:** replace `assets/resume.pdf` (keep the same filename).
- **Experience / projects / skills text:** all of it lives in the `SKILLS`, `EXPERIENCE`, and `PROJECTS` arrays at the top of `script.js` — edit the text there and it flows through to every rendered section and modal automatically.

## Notes

- All experience, project, and skill details are taken directly from your resume — nothing invented.
- Built with vanilla HTML/CSS/JS. Icons via Font Awesome (CDN); fonts via Google Fonts (CDN). No frameworks, no backend, no build process.
