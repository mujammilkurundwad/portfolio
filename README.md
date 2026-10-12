# Mujjamil Kurundwad – Developer Portfolio

A responsive, dark-themed portfolio built with **React 18 + Vite**, plain CSS, a **Formspree** contact form, and deployment on **Netlify**. All content lives in one file: `src/data/portfolioData.js`.

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── assets/Mujjamil_Kurundwad_Resume.pdf   <- resume download
├── src/
│   ├── components/   Navbar, Hero, About, Skills, Projects, ProjectCard,
│   │                 Experience, Education, Certifications, Contact,
│   │                 Footer, SectionHeading
│   ├── data/portfolioData.js                   <- ALL your content
│   ├── styles/global.css                       <- theme variables + styles
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── netlify.toml
├── package.json
└── vite.config.js
```

## Things you must configure

| What | Where | Status |
|---|---|---|
| Formspree endpoint | `FORMSPREE_ENDPOINT` in `src/data/portfolioData.js` | **Placeholder – you must replace it** |
| Resume PDF | `public/assets/Mujjamil_Kurundwad_Resume.pdf` | Already copied from your upload. To update, overwrite this file keeping the same name |
| GitHub, LinkedIn, LeetCode, project repos | `profile.links` and `projects` in `portfolioData.js` | Filled from the hyperlinks embedded in your resume PDF. Please click each once to confirm |
| Live demo links | `demo` field per project | Empty, so no button is shown. Add a URL to show one |

## Run locally (Windows Command Prompt or PowerShell)

Requires Node.js 18+ (`node -v` to check).

```
cd portfolio
npm install
npm run dev
```

Open the URL shown (usually http://localhost:5173).

Production build and preview:

```
npm run build
npm run preview
```

## Formspree setup

1. Sign up or log in at https://formspree.io.
2. Click **New Form**, name it (e.g. "Portfolio Contact") and set the email that should receive messages.
3. Copy the form endpoint, which looks like `https://formspree.io/f/abcdwxyz`.
4. Paste it into `FORMSPREE_ENDPOINT` in `src/data/portfolioData.js`.
5. Run `npm run dev`, fill in the form and submit a test message.
6. Check that it appears under the form's **Submissions** tab in Formspree (confirm the email address if Formspree asks on first use).
7. After deploying, submit another test from your live Netlify URL. If Formspree blocks it, check the form's allowed-domains setting.

The endpoint is a **public** identifier, not a secret, so it is fine in frontend code. Never put private API keys or passwords in this project. Until the placeholder is replaced, the form shows a clear "not configured" message instead of pretending to send.

## Git and GitHub

```
git init
git branch -M main
git status
git add .
git commit -m "Initial portfolio"
```

Create an empty repository on https://github.com/new (no README), then:

```
git remote add origin https://github.com/mujammilkurundwad/YOUR-REPO-NAME.git
git push -u origin main
```

`.gitignore` already excludes `node_modules`, `dist`, `.env` files and OS clutter.

## Deploy on Netlify

1. Log in at https://app.netlify.com and choose **Add new site → Import an existing project**.
2. Connect GitHub and select your portfolio repository.
3. Confirm the settings (they are also set in `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy**. When it finishes, open the generated `*.netlify.app` URL and verify it.
5. Every later `git push` to `main` triggers an automatic redeploy.

## Customising

- **Content:** edit `src/data/portfolioData.js` (skills, projects, experience, etc.).
- **Colours, fonts, spacing:** edit the CSS variables at the top of `src/styles/global.css`.
- **Add a project:** copy an object in the `projects` array. Omit `github` or `demo` to hide that button.

## Testing checklist

- [ ] `npm run build` completes with no errors
- [ ] Nav links scroll to the right sections and the hamburger menu closes after a click (below 1024px)
- [ ] Both "Download Resume" buttons download the PDF
- [ ] GitHub, LinkedIn, LeetCode and both repo links open correctly
- [ ] Contact form shows validation errors for empty fields and bad emails
- [ ] A test message appears in Formspree, locally and on the live site
- [ ] No horizontal scrolling at 360px, 390px, 768px, 1024px and 1440px
- [ ] Tab key shows a visible focus outline on every control

## Troubleshooting

- **`npm` is not recognized:** install Node.js from nodejs.org and reopen the terminal.
- **Resume download 404:** make sure the file is exactly `public/assets/Mujjamil_Kurundwad_Resume.pdf`.
- **Form says "not configured":** replace the `YOUR_FORM_ID` placeholder in `portfolioData.js`.
- **Form error on the live site only:** check the allowed domains in your Formspree form settings.
- **Netlify build fails:** confirm the build command is `npm run build`, publish directory is `dist`, and that `package.json` and `package-lock.json` were committed.
- **Blank page after deploy:** open the browser console and check that the Netlify publish directory is `dist`, not the repo root.
