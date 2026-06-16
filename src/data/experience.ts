export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  current: boolean
  description: string
  highlights: string[]
  tech: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 'techverx',
    company: 'Techverx',
    role: 'Full Stack Developer',
    period: 'Jul 2025 — Present',
    location: 'Lahore, Pakistan',
    current: true,
    description:
      'Working on production-grade Next.js applications within a Turborepo monorepo, delivering high-performance, secure, and maintainable software.',
    highlights: [
      'Diagnosed and resolved production-level bugs across Next.js apps, improving stability and adhering to OWASP Top 10 security practices.',
      'Contributed to a Turborepo monorepo with 2+ Next.js apps using App Router, SSR/CSR strategies, and image optimization — reducing build times by 25–30%.',
      'Built a cross-platform desktop app using Electron + React to process Microsoft Access (.accdb/.mdb) files via Java (Jackcess), converting datasets to structured JSON.',
      'Developed a logic-driven engine generating automated 11"×17" wiring diagrams using PDFKit — reducing manual diagram creation effort by 90%.',
    ],
    tech: ['Next.js', 'React', 'Turborepo', 'Electron', 'PDFKit', 'TypeScript'],
  },
  {
    id: 'visnext',
    company: 'Visnext Software Solutions',
    role: 'Associate Software Engineer',
    period: 'Jul 2024 — Jun 2025',
    location: 'Lahore, Pakistan',
    current: false,
    description:
      'Worked on Ottu — a payment platform enabling businesses to integrate local and global payment gateways for secure, efficient transactions.',
    highlights: [
      'Led optimization of 40+ payment gateway integrations — resolving failed transactions, broken hooks, and frontend issues from API changes.',
      'Implemented self-hosting for Google Fonts to improve loading performance and prevent third-party security risks.',
      'Implemented Sub-resource Integrity (SRI) for external libraries to prevent exploitation risks.',
      'Customized the entire Keycloak Admin UI and introduced a feature allowing client roles to have a single scope permission, then built a JAR for the custom theme.',
    ],
    tech: ['Vue.js', 'JavaScript', 'Keycloak', 'Python', 'PostgreSQL', 'Docker'],
  },
]
