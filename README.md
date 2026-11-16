# Wiphawee Portfolio

Bilingual personal portfolio built with HTML, JavaScript modules, Tailwind CSS and Vite.

## Run locally

Requires Node.js 22.12+ (or a compatible newer version).

```powershell
npm.cmd ci
npm.cmd run dev
```

```powershell
npm.cmd run build
npm.cmd run preview
npm.cmd run format:check
npm.cmd test
```

Browser checks use installed Microsoft Edge. Adjust `channel` in `playwright.config.js` if using another supported browser.

## Where to edit

The active application starts at the root `index.html`. The old `tailwind/` directory and `translations-temp.json` are retained migration backups; they are not used by the dev server or production build. Edit `src/` and the root HTML for future changes.

- `index.html`: page structure and sidebar.
- `src/data/experience.js`: job entries; each translation key refers to the locale files.
- `src/data/projects.js`: project categories and gallery templates (trusted local markup only).
- `src/locales/en.js`, `src/locales/th.js`: matching permanent translation keys. Add new keys to both files; do not renumber existing keys.
- `src/content.js`: repeated experience/project layouts.
- `src/navigation.js`: hash navigation and history.
- `src/language.js`: language selection and persistence.
- `src/motion.js`: scroll reveals and back-to-top.
- `src/styles.css`, `tailwind.config.js`: styling, tokens and animation settings.
- `public/`: static assets, addressed from `/`, and original image sources.

Use `data-i18n="key"` for text and `data-i18n-aria-label="key"` / `data-i18n-alt="key"` for accessible descriptions. Names of companies and technology names remain unchanged across languages.

## Images and deployment

The site serves optimized WebP images. Keep PNG originals for future exports. Run `npm.cmd run optimize:images` after replacing originals and verify the generated files before publishing.

`npm.cmd run build` writes only generated output to `dist/`, which Vite cleans on every build. Deploy `dist/`. Do not store source files in that directory.

Before publishing, verify language switching, direct `#resume` links, Back navigation, image loading, keyboard focus, mobile widths, project links, and the CV link. CV download retains the original document language.
