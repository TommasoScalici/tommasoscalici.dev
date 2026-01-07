# [1.11.0](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.10.0...v1.11.0) (2026-01-07)


### Features

* implement TikTok pixel and refactor analytics ([738953a](https://github.com/TommasoScalici/tommasoscalici.dev/commit/738953a5b0fa6e21c504ab240624810e5c388a18))

# [1.10.0](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.9.0...v1.10.0) (2026-01-05)


### Features

* Fixed lint errors, alongside SEO enhancements. ([b99c1ae](https://github.com/TommasoScalici/tommasoscalici.dev/commit/b99c1ae22485f8ef4339fac4c33ea4f99631d6e6))

# [1.9.0](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.8.1...v1.9.0) (2026-01-03)


### Features

* add multilingual privacy policy and data deletion pages for the Tax Code app. ([08c5183](https://github.com/TommasoScalici/tommasoscalici.dev/commit/08c51834e981dc7e17703d157a5c3a7fe3929805))

## [1.8.1](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.8.0...v1.8.1) (2026-01-03)


### Performance Improvements

* Improve loading performance by deferring header JS, inlining stylesheets, and prioritizing hero image fetch. ([f53a196](https://github.com/TommasoScalici/tommasoscalici.dev/commit/f53a1962c0913cbde7682c705b79ca05ef538a90))

# [1.8.0](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.7.0...v1.8.0) (2026-01-03)


### Features

* Add music pre-save links, integrate Partytown for analytics, and introduce new project and playlist content with updated navigation. ([83bdb75](https://github.com/TommasoScalici/tommasoscalici.dev/commit/83bdb75e0ba892be3a6c024a16ab44a50007b8de))

# [1.7.0](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.6.0...v1.7.0) (2026-01-03)


### Features

* Implement AVIF/WebP image optimization for music releases and playlists, enhance project details, and refine configurations. ([8947ab1](https://github.com/TommasoScalici/tommasoscalici.dev/commit/8947ab132ac1524eda3e1e58ceb7f901324d9e10))

# [1.6.0](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.5.0...v1.6.0) (2026-01-03)


### Features

* Implement internationalization for project content and navigation, integrate Vitest for testing, and add Husky pre-commit hooks. ([666d3d4](https://github.com/TommasoScalici/tommasoscalici.dev/commit/666d3d4826b4111b2279a30c0df8c9f60b0988f6))

# [1.5.0](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.4.0...v1.5.0) (2026-01-03)


### Features

* Add Google Analytics and theme toggle, and refine UI with glassmorphism styling and accessibility improvements. ([e08a372](https://github.com/TommasoScalici/tommasoscalici.dev/commit/e08a3721334a925ff51a4d6cc87e0033635e2c27))
* Componentize uses page into `UsesPage.astro` and specify Node.js v22.14.0 in `.nvmrc`. ([8920b1a](https://github.com/TommasoScalici/tommasoscalici.dev/commit/8920b1aee9c73a4b735d7170bff2b0fe19a71cd9))
* Implement dark mode support and refine UI styling with new color tokens ([d8ac461](https://github.com/TommasoScalici/tommasoscalici.dev/commit/d8ac4611b43a62d088c8ca196ee2f5830cd19911))
* Migrate site content to Astro Content Collections, replacing TS data files with JSON and updating components. ([237690e](https://github.com/TommasoScalici/tommasoscalici.dev/commit/237690e7157cb897b79c27d2acaafea2ba17137b))

# [1.4.0](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.3.0...v1.4.0) (2026-01-02)


### Features

* Add sitemap integration, refactor color system to CSS variables, and update language switcher to use anchor tags. ([74d4d63](https://github.com/TommasoScalici/tommasoscalici.dev/commit/74d4d63b78a11edbd0a0ea01c97595f4b8c0832c))

# [1.3.0](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.2.0...v1.3.0) (2026-01-02)


### Bug Fixes

* add wrangler.jsonc to .prettierignore, fixed prettier errors ([249491f](https://github.com/TommasoScalici/tommasoscalici.dev/commit/249491fb9308e4b5e62078c2a940117ed153995f))


### Features

* Enable Astro image optimization with Cloudflare adapter compilation, update Cloudflare compatibility flags and preview scripts, and remove debug logs. ([2d82041](https://github.com/TommasoScalici/tommasoscalici.dev/commit/2d82041259d58402151801afe3066f71761cfe30))

# [1.2.0](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.1.0...v1.2.0) (2026-01-02)


### Bug Fixes

* add trailing commas to Astro config for formatting consistency, that was blocking CI/CD pipeline ([af5b8db](https://github.com/TommasoScalici/tommasoscalici.dev/commit/af5b8db46538a977adfd7389202365c4b29d93a9))


### Features

* Configure Cloudflare adapter for passthrough image service and platform proxy, and remove logo image optimization. ([f679bdf](https://github.com/TommasoScalici/tommasoscalici.dev/commit/f679bdf9861f8e1e52b676852aeac9e3308d65e1))

# [1.1.0](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.0.5...v1.1.0) (2026-01-02)


### Bug Fixes

* add .prettierignore to exclude build artifacts, dependencies, and lock files and fixing build fails ([9f43639](https://github.com/TommasoScalici/tommasoscalici.dev/commit/9f4363995117a4f3f2b6de86060c3f0c86346852))
* **debug:** enable prerender on index.astro to bypass SSR ([1011921](https://github.com/TommasoScalici/tommasoscalici.dev/commit/1011921b01d56e67f720aea7fafdfa775033f96a))


### Features

* Add debug logging and remove prerender from index page, and configure Vite SSR external dependencies. ([d0c4c9d](https://github.com/TommasoScalici/tommasoscalici.dev/commit/d0c4c9d0e57c869474c587409f3f64ba4d6bec48))

## [1.0.5](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.0.4...v1.0.5) (2026-01-02)


### Bug Fixes

* revert nuclear test & remove incompatible vite config ([4fcbf73](https://github.com/TommasoScalici/tommasoscalici.dev/commit/4fcbf73f35754b56c6be8d5948ea0c14a8ffb90f))

## [1.0.4](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.0.3...v1.0.4) (2026-01-02)

### Bug Fixes

- fixed prettier error ([42d313f](https://github.com/TommasoScalici/tommasoscalici.dev/commit/42d313f5d2947e8c4437f52122d66249c54d4698))

## [1.0.3](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.0.2...v1.0.3) (2026-01-02)

### Bug Fixes

- malformed index.astro causing [object Object] error (deploy trigger) ([522f1d3](https://github.com/TommasoScalici/tommasoscalici.dev/commit/522f1d35c2f8e8c4fadaf0f9a263ff512b5a2e7f))

## [1.0.2](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.0.1...v1.0.2) (2026-01-01)

### Bug Fixes

- Remove blank lines from CHANGELOG.md and update `wrangler.jsonc` compatibility date and flags. ([e4efe2b](https://github.com/TommasoScalici/tommasoscalici.dev/commit/e4efe2b636f8ebf994914234bdb1a646f288c656))

## [1.0.1](https://github.com/TommasoScalici/tommasoscalici.dev/compare/v1.0.0...v1.0.1) (2026-01-01)

### Bug Fixes

- Remove `main` worker script configuration from `wrangler.jsonc` ([d67b6d1](https://github.com/TommasoScalici/tommasoscalici.dev/commit/d67b6d11e7db6867f70388df27074570aeade5d9))
- remove unnecessary blank lines from CHANGELOG.md that blocked lint ([3ae7ea3](https://github.com/TommasoScalici/tommasoscalici.dev/commit/3ae7ea3e84e3e466381c97ca8c242c5a06b008de))

# 1.0.0 (2026-01-01)

### Bug Fixes

- fixed blocking prettier error. ([db1b798](https://github.com/TommasoScalici/tommasoscalici.dev/commit/db1b798ffbc4070535bb53bd21330614a8b6eeae))

### Features

- Enhance internationalization, SEO, and content with i18n for uses page, JSON-LD identity schema, new hero button, and platform ordering. ([d624144](https://github.com/TommasoScalici/tommasoscalici.dev/commit/d62414433f9b24a5210601b6480e9349f1dd0bf3))
- Implement a new SocialSmartDialog component with expanded social links, integrate it into the footer, update i18n, and refine UI elements in music cards and the hero section. ([6d24560](https://github.com/TommasoScalici/tommasoscalici.dev/commit/6d24560e4f1745a444b5f9a461be77f1afcfe406))
- Implement core website structure with new pages, components, data, and layouts for portfolio and music features. ([8b52905](https://github.com/TommasoScalici/tommasoscalici.dev/commit/8b529053645e7f7c53ae44e8c3848045228601e5))
- Implement multilingual narrative bio section with new data structures and content on homepages. ([a2ef3c0](https://github.com/TommasoScalici/tommasoscalici.dev/commit/a2ef3c013a0eef1a5fcedf4038360d9c6edcc97d))
- Initial scaffold with Astro, Tailwind, React and i18n config ([27606a9](https://github.com/TommasoScalici/tommasoscalici.dev/commit/27606a98d9723a192d31a9477ef4618f18c298d3))
- Initialize personal website with music releases, playlists, and core UI components. ([21ca65b](https://github.com/TommasoScalici/tommasoscalici.dev/commit/21ca65b2118d740dabe75748df5aad751cfa1aaa))
- Introduce CI/CD, code formatting, and linting configurations alongside minor UI and content updates. ([332afbf](https://github.com/TommasoScalici/tommasoscalici.dev/commit/332afbf088709c3965a10d03db5a0946e67fd7ee))
- introduce Spotify playlist integration with new components, data, and an SEO head component, along with dependency updates. ([98de9d0](https://github.com/TommasoScalici/tommasoscalici.dev/commit/98de9d06ce1501cd0bf76984be145e9338263f95))
- Modularize homepage content into dedicated sections and introduce new "Uses" pages. ([8d2941e](https://github.com/TommasoScalici/tommasoscalici.dev/commit/8d2941eff8df7fe6332deefb6af0b5326a17b9b1))
- Upgrade Node.js to v22 in CI and engine requirements, and configure Astro Cloudflare adapter with image service compilation. ([75da62c](https://github.com/TommasoScalici/tommasoscalici.dev/commit/75da62c6d514848e9229824ef8b0151da5ec148e))
