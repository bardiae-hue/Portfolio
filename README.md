Personal Portfolio
My personal portfolio website — built from scratch in vanilla HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies. Just one file.
Live Site · Resume

Features

Cursor glow effect — a warm light follows the mouse using a smoothed requestAnimationFrame loop
Scroll progress bar — a 2px line across the top of the viewport tracks reading progress
Project modals — each project opens a full detail view with an image slider, description, and links
"Open to opportunities" status pill — live pulsing indicator in the navbar
Fade-in on scroll — sections animate in via IntersectionObserver as they enter the viewport
Active nav tracking — the current section is highlighted in the navbar as you scroll
Responsive — works on mobile, tablet, and desktop; the layout adapts at 900px and 600px breakpoints


Stack
LayerTechMarkupHTML5StylingCSS3 — custom properties, grid, flexbox, keyframe animationsLogicVanilla JavaScript (ES6+) — no frameworksFontsEB Garamond, Instrument Serif, DM Sans, DM Mono (Google Fonts)HostingGitHub Pages

Design decisions
Single file — the entire site is index.html. No build step, no bundler, no node_modules. Anyone can open it, read it, and understand it in one sitting.
Typographic hierarchy — three font roles: Instrument Serif / EB Garamond for display headings (editorial feel), DM Sans for body text (readable at small sizes), DM Mono for labels, metadata, and code-adjacent content (developer aesthetic).
Gold accent (#c8a96e) — chosen over the common blue or purple palette. Warm, distinct, and readable against dark backgrounds without being harsh.
No JavaScript libraries — the cursor glow, slider, modal, scroll observer, and nav highlighting are all written in ~150 lines of plain JS. Keeping it lean means the page loads instantly and there are no supply-chain dependencies.


LINK:
https://github.com/bardiae-hue/portfolio.git


Project structure
portfolio/
├── index.html          # Entire site — markup, styles, and scripts
├── resources/
│   ├── Bardia's Resume.pdf
│   ├── Alignfolio main page.png
│   ├── Impact page.png
│   ├── Optimization page.png
│   ├── othello.png
│   ├── othello1.png
│   ├── Paint applicaton.png
│   ├── Color selector.png
│   ├── Acessibility feature.png
│   ├── dog.png
│   ├── dog compressed.png
│   ├── Soundy front page.png
│   ├── Soundy board page.png
│   ├── columns.png
│   └── image (1).png
└── README.md
