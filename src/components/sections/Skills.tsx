import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiTypescript, SiJavascript, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss,
  SiBootstrap, SiRedux, SiShadcnui, SiReactquery,
  SiNodedotjs, SiExpress, SiNestjs,
  SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiDocker, SiGooglechrome, SiElectron,
} from 'react-icons/si'
import { Database, Server } from 'lucide-react'
import { skills, skillCategories, type SkillCategory } from '../../data/skills'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.ComponentType<any>> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  python: SiPython,
  cplusplus: SiCplusplus,
  react: SiReact,
  nextdotjs: SiNextdotjs,
  vuedotjs: SiVuedotjs,
  tailwindcss: SiTailwindcss,
  bootstrap: SiBootstrap,
  redux: SiRedux,
  shadcn: SiShadcnui,
  tanstack: SiReactquery,
  nodedotjs: SiNodedotjs,
  express: SiExpress,
  nestjs: SiNestjs,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  microsoftsqlserver: SiMysql,
  neon: Database,
  neondb: Server,
  git: SiGit,
  docker: SiDocker,
  chrome: SiGooglechrome,
  electron: SiElectron,
}

const categoryColors: Record<SkillCategory, string> = {
  Languages: '#22d3ee',
  Frontend: '#a78bfa',
  Backend: '#34d399',
  Databases: '#fbbf24',
  'Tools & DevOps': '#f472b6',
}

interface SkillCardProps {
  name: string
  iconKey: string
  color: string
  bgColor: string
  index: number
}

const SkillCard = ({ name, iconKey, color, bgColor, index }: SkillCardProps) => {
  const Icon = iconMap[iconKey]
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, scale: 1.04 }}
      className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/[0.07] bg-dark-900 cursor-default select-none transition-all duration-300 hover:border-white/20"
      style={{
        boxShadow: '0 2px 20px rgba(0,0,0,0.3)',
      }}
    >
      {/* Icon container */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: bgColor, border: `1px solid ${color}30` }}
      >
        {Icon ? (
          <Icon size={28} style={{ color }} />
        ) : (
          <span className="font-mono text-xs font-bold" style={{ color }}>
            {name.slice(0, 2)}
          </span>
        )}
      </div>

      {/* Name */}
      <span className="font-body text-xs font-medium text-slate-400 group-hover:text-slate-200 text-center transition-colors duration-200 leading-tight">
        {name}
      </span>

      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 24px ${color}25, inset 0 0 24px ${color}06`,
          border: `1px solid ${color}35`,
        }}
      />
    </motion.div>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All')

  const categories: Array<SkillCategory | 'All'> = ['All', ...skillCategories]

  const filtered =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" ref={ref} className="relative py-28 px-6">
      {/* Faint orb */}
      <div
        className="gradient-orb w-[400px] h-[400px] top-10 right-[-100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="section-label mb-3">Skills</p>
          <h2 className="section-heading">TECH STACK</h2>
          <p className="font-body text-slate-500 mt-4 max-w-md mx-auto text-sm">
            Technologies I use to design, build, and ship production software.
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => {
            const active = activeCategory === cat
            const accent = cat === 'All' ? '#22d3ee' : categoryColors[cat as SkillCategory]
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full font-body text-xs font-semibold border transition-all duration-200"
                style={{
                  borderColor: active ? `${accent}60` : 'rgba(255,255,255,0.08)',
                  backgroundColor: active ? `${accent}14` : 'transparent',
                  color: active ? accent : '#94a3b8',
                  boxShadow: active ? `0 0 16px ${accent}22` : 'none',
                }}
              >
                {cat}
              </button>
            )
          })}
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} {...skill} index={i} />
          ))}
        </div>

        {/* Category legend */}
        {activeCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-12 pt-8 border-t border-white/[0.06]"
          >
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: categoryColors[cat] }}
                />
                {cat}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Skills
