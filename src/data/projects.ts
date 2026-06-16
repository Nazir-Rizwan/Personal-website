export interface Project {
  id: string
  title: string
  type: string
  description: string
  longDescription: string
  tech: string[]
  githubUrl: string
  liveUrl?: string
  accent: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'speed-tasker',
    title: 'Speed Tasker',
    type: 'Final Year Project',
    description:
      'An online platform connecting clients with skilled service providers for home, office, and business needs — with real-time map-based discovery.',
    longDescription:
      'Full-featured service marketplace with JWT authentication, interactive maps via Leaflet.js, English-to-Urdu i18n using i18next, and skeleton loading states for a polished UX.',
    tech: ['React', 'Leaflet.js', 'JWT', 'i18next', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/Nazir-Rizwan/',
    accent: '#22d3ee',
    featured: true,
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management Software',
    type: 'Desktop Application',
    description:
      'A Point of Sale application solving real retail problems — stock management, transaction history, and dual-role access control.',
    longDescription:
      'Built with separate Cashier and Admin roles. Admin gets full feature access including product management, stock overview, record visualization, and data backup. Cashier focuses on daily sales transactions.',
    tech: ['C++', 'SQL Server', 'WinForms', 'Data Backup'],
    githubUrl: 'https://github.com/Nazir-Rizwan/',
    accent: '#fbbf24',
    featured: true,
  },
  {
    id: 'wiring-diagrams',
    title: 'Wiring Diagram Engine',
    type: 'Professional Project',
    description:
      'A logic-driven engine that auto-generates 11"×17" wiring diagrams from structured data — eliminating 90% of manual diagram work.',
    longDescription:
      'Built at Techverx using PDFKit to programmatically render complex wiring layouts. Accepts structured JSON input and outputs precise, print-ready PDFs.',
    tech: ['Node.js', 'PDFKit', 'TypeScript', 'JSON'],
    githubUrl: 'https://github.com/Nazir-Rizwan/',
    accent: '#a78bfa',
    featured: false,
  },
  {
    id: 'electron-access',
    title: 'Electron Desktop Converter',
    type: 'Professional Project',
    description:
      'Cross-platform desktop app using Electron + React to convert Microsoft Access databases (.accdb/.mdb) to structured JSON via Java integration.',
    longDescription:
      'Integrates Electron (frontend shell), React (UI), and a Java backend using the Jackcess library to read MS Access files. Designed for data migration workflows.',
    tech: ['Electron', 'React', 'Java', 'Jackcess', 'TypeScript'],
    githubUrl: 'https://github.com/Nazir-Rizwan/',
    accent: '#34d399',
    featured: false,
  },
]
