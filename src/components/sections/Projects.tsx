import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Github, ArrowLeft, ExternalLink, FolderGit2 } from 'lucide-react'
import { projects, type Project } from '../../data/projects'

// Short summaries — human readable one-liners
const summaries: Record<string, string> = {
  'speed-tasker': 'A service marketplace connecting clients with skilled workers, featuring real-time map discovery and JWT authentication.',
  'inventory-management': 'A dual-role Point of Sale system for retail shops — managing stock, sales history, and data backup.',
  'wiring-diagrams': 'A logic-driven engine that auto-generates print-ready 11×17 wiring diagrams from structured JSON, cutting manual work by 90%.',
  'electron-access': 'Cross-platform desktop app that converts Microsoft Access databases to JSON via Electron + React + Java (Jackcess).',
}

// ── Project Detail View ──
const ProjectDetail = ({
  project,
  onBack,
}: {
  project: Project
  onBack: () => void
}) => {
  useEffect(() => {
    window.location.hash = `project-${project.id}`
    return () => { window.location.hash = 'projects' }
  }, [project.id])

  return (
    <motion.div
      key="detail"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-4xl mx-auto"
    >
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 font-body text-base text-slate-400 hover:text-primary mb-8 transition-colors duration-200 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
        Back to Projects
      </button>

      {/* Hero band */}
      <div
        className="w-full rounded-2xl flex items-center justify-center py-16 mb-8 relative overflow-hidden"
        style={{ backgroundColor: `${project.accent}08`, border: `1px solid ${project.accent}20` }}
      >
        <div className="absolute inset-0 dot-bg opacity-30" />
        <div className="relative z-10 text-center">
          <div
            className="w-24 h-24 rounded-2xl border-2 flex items-center justify-center font-display text-5xl mx-auto mb-4"
            style={{
              borderColor: `${project.accent}50`,
              backgroundColor: `${project.accent}15`,
              color: project.accent,
              boxShadow: `0 0 40px ${project.accent}35`,
            }}
          >
            <FolderGit2 size={40} style={{ color: project.accent }} />
          </div>
          <span
            className="font-mono text-sm tracking-widest uppercase px-3 py-1 rounded-full border"
            style={{ color: project.accent, borderColor: `${project.accent}35`, backgroundColor: `${project.accent}10` }}
          >
            {project.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-9 rounded-2xl border border-white/[0.07] bg-dark-900 space-y-7">
        <div>
          <h2 className="font-display text-4xl text-white tracking-wide mb-3">{project.title}</h2>
          <p className="font-body text-slate-300 text-lg leading-relaxed">{project.description}</p>
        </div>

        <div
          className="h-px"
          style={{ background: `linear-gradient(to right, ${project.accent}30, transparent)` }}
        />

        <div>
          <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-3">Details</p>
          <p className="font-body text-slate-400 text-base leading-relaxed">{project.longDescription}</p>
        </div>

        <div>
          <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-sm px-3 py-1.5 rounded-lg border"
                style={{
                  color: project.accent,
                  borderColor: `${project.accent}30`,
                  backgroundColor: `${project.accent}08`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-body text-base font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{
              borderColor: `${project.accent}35`,
              color: project.accent,
              backgroundColor: `${project.accent}10`,
              border: `1px solid ${project.accent}35`,
            }}
          >
            <Github size={17} />
            View Source Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 font-body text-base text-slate-400 hover:text-white hover:border-white/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ── Project List Card ──
const ProjectCard = ({
  project,
  index,
  inView,
  onSelect,
}: {
  project: Project
  index: number
  inView: boolean
  onSelect: (p: Project) => void
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -4 }}
    className="group flex flex-col p-8 rounded-2xl border border-white/[0.07] bg-dark-900 hover:border-white/15 transition-all duration-300 cursor-pointer"
    style={{ boxShadow: `0 2px 24px ${project.accent}05` }}
    onClick={() => onSelect(project)}
  >
    {/* Top row */}
    <div className="flex items-start justify-between mb-5">
      <div
        className="w-14 h-14 rounded-xl border flex items-center justify-center"
        style={{
          borderColor: `${project.accent}30`,
          backgroundColor: `${project.accent}10`,
        }}
      >
        <FolderGit2 size={24} style={{ color: project.accent }} />
      </div>
      {project.featured && (
        <span
          className="font-mono text-xs tracking-widest uppercase px-2.5 py-1 rounded-full border"
          style={{
            color: project.accent,
            borderColor: `${project.accent}30`,
            backgroundColor: `${project.accent}08`,
          }}
        >
          Featured
        </span>
      )}
    </div>

    {/* Type */}
    <span
      className="font-mono text-xs tracking-widest uppercase mb-2.5"
      style={{ color: `${project.accent}90` }}
    >
      {project.type}
    </span>

    {/* Title */}
    <h3 className="font-body font-semibold text-white text-2xl mb-3 group-hover:text-slate-100 transition-colors leading-tight">
      {project.title}
    </h3>

    {/* Short summary */}
    <p className="font-body text-slate-400 text-base leading-relaxed mb-6 flex-1">
      {summaries[project.id] || project.description}
    </p>

    {/* Tech pills */}
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.slice(0, 4).map((t) => (
        <span
          key={t}
          className="font-mono text-xs px-2.5 py-1 rounded border"
          style={{
            color: `${project.accent}90`,
            borderColor: `${project.accent}20`,
            backgroundColor: `${project.accent}06`,
          }}
        >
          {t}
        </span>
      ))}
      {project.tech.length > 4 && (
        <span className="font-mono text-xs px-2.5 py-1 rounded border border-white/10 text-slate-500">
          +{project.tech.length - 4}
        </span>
      )}
    </div>

    {/* CTA */}
    <button
      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-body text-base font-medium border transition-all duration-200 group-hover:opacity-100 opacity-80"
      style={{
        color: project.accent,
        borderColor: `${project.accent}30`,
        backgroundColor: `${project.accent}08`,
      }}
    >
      View Project
      <ExternalLink size={15} />
    </button>
  </motion.div>
)

// ── Main Section ──
const Projects = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState<Project | null>(null)

  const handleBack = () => {
    setSelected(null)
    window.location.hash = 'projects'
  }

  return (
    <section id="projects" ref={ref} className="relative py-28 px-6">
      <div
        className="gradient-orb w-[500px] h-[500px] top-20 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">Projects</p>
          <h2 className="section-heading">WHAT I'VE BUILT</h2>
          <p className="font-body text-slate-500 mt-4 max-w-md mx-auto text-base">
            Click any project card to explore the full story.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {selected ? (
            <ProjectDetail key="detail" project={selected} onBack={handleBack} />
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* All projects grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {projects.map((p, i) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    index={i}
                    inView={inView}
                    onSelect={setSelected}
                  />
                ))}
              </div>

              {/* GitHub CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-center mt-14"
              >
                <a
                  href="https://github.com/Nazir-Rizwan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-body text-sm text-slate-400 hover:text-primary border border-white/10 hover:border-primary/30 px-6 py-3 rounded-xl transition-all duration-200 hover:bg-primary/5"
                >
                  <Github size={16} />
                  See all repositories on GitHub
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
