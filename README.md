# Nazir Rizwan — Portfolio

Personal portfolio website built with React + Vite + TypeScript + Tailwind CSS + Framer Motion.

## Tech Stack

- **React 18** + **Vite** — fast development + bundling
- **TypeScript** — type safety throughout
- **Tailwind CSS** — utility-first styling with custom design tokens
- **Framer Motion** — smooth animations and transitions
- **react-icons** — SimpleIcons for tech stack logos
- **Lucide React** — clean UI icons

## Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Desktop top nav + mobile bottom FAB with slide-up panel
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx       # Filterable icon cards by category
│   │   ├── Experience.tsx   # Expandable timeline cards
│   │   ├── Projects.tsx     # Featured + mini project cards
│   │   └── Contact.tsx      # Contact list with copy-to-clipboard
│   └── ui/
│       ├── Button.tsx       # Reusable button with variants
│       └── Card.tsx         # Reusable card wrapper
├── data/
│   ├── skills.ts
│   ├── experience.ts
│   └── projects.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design Tokens

| Token        | Value       |
|-------------|-------------|
| Background  | `#07091f`   |
| Surface     | `#0d1330`   |
| Primary     | `#22d3ee` (electric cyan) |
| Gold accent | `#fbbf24`   |
| Display font | Bebas Neue |
| Body font   | Outfit      |
| Mono font   | JetBrains Mono |

## Customization

- **Personal info**: Update `src/data/` files
- **Colors**: Edit `tailwind.config.js` color tokens
- **Sections**: Each section is a standalone component in `src/components/sections/`
- **Resume**: Replace `/public/resume.pdf` with your actual resume
