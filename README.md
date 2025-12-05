# Tommaso Scalici - Personal Website

A personal portfolio website that bridges the worlds of software engineering and music composition. Built with modern web technologies, this site features a bilingual interface (English/Italian) and showcases both technical projects and musical releases.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build)
- **UI Library:** [React](https://react.dev)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Icons:** [Lucide React](https://lucide.dev) & [React Icons](https://react-icons.github.io/react-icons/)
- **Typography:** Inter & JetBrains Mono (via [@fontsource](https://fontsource.org))
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com)

## ✨ Features

- **Dual Persona:** Distinct sections for "Architecting Code" (Software Engineering) and "Composing Soundscapes" (Music).
- **Bilingual Support:** Fully localized content in English and Italian (`/` and `/it`).
- **Modern UI:** responsive design with dark mode aesthetic, glassmorphism effects, and smooth animations.
- **Dynamic Content:** Data-driven components for Projects and Music releases.

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

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
