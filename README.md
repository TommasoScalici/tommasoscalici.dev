# Tommaso Scalici - Personal Website

![CI/CD & Release](https://github.com/TommasoScalici/tommasoscalici.dev/actions/workflows/ci.yml/badge.svg)

A personal portfolio website that bridges the worlds of software engineering and music composition. Built with modern web technologies, this site features a bilingual interface (English/Italian) and showcases both technical projects and musical releases.

## 🚀 Tech Stack

- **Framework:** [Astro 5](https://astro.build) (SSG Mode)
- **UI Library:** [React 19](https://react.dev)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com) & [Lucide React](https://lucide.dev)
- **Performance:** [Partytown](https://partytown.builder.io) (Analytics off-main-thread)
- **Typography:** Inter & JetBrains Mono (via [@fontsource](https://fontsource.org))
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com) via GitHub Actions

## ✨ Features

- **💯 Excellence:** Achieved **100/100/100/100** on Google Lighthouse (Performance, Accessibility, Best Practices, SEO).
- **🎨 UX/UI:** Responsive design with **Dark/Light Mode**, glassmorphism effects, and smooth animations.
- **🌍 Bilingual:** Fully localized content in English and Italian (`/` and `/it`).
- **🚀 Performance:** Critical CSS inlining, Font optimization, LCP prioritization, and Partytown.
- **🔒 Type Safety:** Strict TypeScript + Zod content schemas.
- **🎵 Music Integration:** Pre-save functionality and smart link routing for music releases.

## 📂 Project Structure

```text
/
├── public/           # Static assets
├── src/
│   ├── components/   # React & Astro UI components (Header, Cards, etc.)
│   ├── data/         # Data files for Bio, Music, and Projects
│   ├── layouts/      # Base page layouts
│   ├── pages/        # Route definitions (including /it/ sub-routes)
│   └── styles/       # Global styles (Tailwind directives)
└── package.json      # Project dependencies and scripts
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run check`   | Run Astro's TypeScript checker               |
| `npm run lint`    | Run ESLint to verify code quality            |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
