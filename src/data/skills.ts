export type SkillCategory = 'Languages' | 'Frontend' | 'Backend' | 'Databases' | 'Tools & DevOps'

export interface Skill {
  name: string
  iconKey: string
  color: string
  bgColor: string
  category: SkillCategory
}

export const skillCategories: SkillCategory[] = [
  'Languages',
  'Frontend',
  'Backend',
  'Databases',
  'Tools & DevOps',
]

export const skills: Skill[] = [
  // Languages
  { name: 'TypeScript', iconKey: 'typescript', color: '#3178C6', bgColor: 'rgba(49,120,198,0.12)', category: 'Languages' },
  { name: 'JavaScript', iconKey: 'javascript', color: '#F7DF1E', bgColor: 'rgba(247,223,30,0.1)', category: 'Languages' },
  { name: 'Python', iconKey: 'python', color: '#3776AB', bgColor: 'rgba(55,118,171,0.12)', category: 'Languages' },
  { name: 'C++', iconKey: 'cplusplus', color: '#00599C', bgColor: 'rgba(0,89,156,0.12)', category: 'Languages' },

  // Frontend
  { name: 'React.js', iconKey: 'react', color: '#61DAFB', bgColor: 'rgba(97,218,251,0.1)', category: 'Frontend' },
  { name: 'Next.js', iconKey: 'nextdotjs', color: '#ffffff', bgColor: 'rgba(255,255,255,0.08)', category: 'Frontend' },
  { name: 'Vue.js', iconKey: 'vuedotjs', color: '#4FC08D', bgColor: 'rgba(79,192,141,0.12)', category: 'Frontend' },
  { name: 'Tailwind CSS', iconKey: 'tailwindcss', color: '#06B6D4', bgColor: 'rgba(6,182,212,0.12)', category: 'Frontend' },
  { name: 'Bootstrap', iconKey: 'bootstrap', color: '#7952B3', bgColor: 'rgba(121,82,179,0.12)', category: 'Frontend' },
  { name: 'Redux Toolkit', iconKey: 'redux', color: '#764ABC', bgColor: 'rgba(118,74,188,0.12)', category: 'Frontend' },
  { name: 'ShadCN UI', iconKey: 'shadcn', color: '#ffffff', bgColor: 'rgba(255,255,255,0.08)', category: 'Frontend' },
  { name: 'TanStack Query', iconKey: 'tanstack', color: '#FF4154', bgColor: 'rgba(255,65,84,0.1)', category: 'Frontend' },

  // Backend
  { name: 'Node.js', iconKey: 'nodedotjs', color: '#339933', bgColor: 'rgba(51,153,51,0.12)', category: 'Backend' },
  { name: 'Express.js', iconKey: 'express', color: '#ffffff', bgColor: 'rgba(255,255,255,0.08)', category: 'Backend' },
  { name: 'NestJS', iconKey: 'nestjs', color: '#E0234E', bgColor: 'rgba(224,35,78,0.12)', category: 'Backend' },

  // Databases
  { name: 'MongoDB', iconKey: 'mongodb', color: '#47A248', bgColor: 'rgba(71,162,72,0.12)', category: 'Databases' },
  { name: 'PostgreSQL', iconKey: 'postgresql', color: '#4169E1', bgColor: 'rgba(65,105,225,0.12)', category: 'Databases' },
  { name: 'MS SQL Server', iconKey: 'microsoftsqlserver', color: '#CC2927', bgColor: 'rgba(204,41,39,0.12)', category: 'Databases' },
  { name: 'Neon DB', iconKey: 'neon', color: '#00E5A0', bgColor: 'rgba(0,229,160,0.1)', category: 'Databases' },

  // Tools & DevOps
  { name: 'Git', iconKey: 'git', color: '#F05032', bgColor: 'rgba(240,80,50,0.12)', category: 'Tools & DevOps' },
  { name: 'Docker', iconKey: 'docker', color: '#2496ED', bgColor: 'rgba(36,150,237,0.12)', category: 'Tools & DevOps' },
  { name: 'Chrome DevTools', iconKey: 'chrome', color: '#4285F4', bgColor: 'rgba(66,133,244,0.12)', category: 'Tools & DevOps' },
  { name: 'Electron', iconKey: 'electron', color: '#47848F', bgColor: 'rgba(71,132,143,0.12)', category: 'Tools & DevOps' },
]
