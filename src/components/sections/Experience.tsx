import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react'
import { experiences } from '../../data/experience'

const companyAccents: Record<string, { primary: string; glow: string; label: string }> = {
  techverx: { primary: '#3b82f6', glow: 'rgba(59,130,246,0.12)', label: 'Current' },
  visnext: { primary: '#8b5cf6', glow: 'rgba(139,92,246,0.1)', label: 'Previous' },
}

const ExperienceCard = ({
  exp,
  index,
  inView,
}: {
  exp: typeof experiences[0]
  index: number
  inView: boolean
}) => {
  const [expanded, setExpanded] = useState(index === 0)
  const accent = companyAccents[exp.id]

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-0 w-4 h-4 rounded-full border-2 border-dark-950 -translate-x-[7px] z-10"
        style={{
          backgroundColor: accent.primary,
          boxShadow: `0 0 12px ${accent.primary}80`,
        }}
      />

      <div
        className="rounded-2xl border border-white/[0.07] bg-dark-900 overflow-hidden transition-all duration-300"
        style={{
          boxShadow: expanded ? `0 0 40px ${accent.glow}` : 'none',
          borderColor: expanded ? `${accent.primary}25` : undefined,
        }}
      >
        {/* Header */}
        <button
          className="w-full text-left p-7 flex items-start justify-between gap-4"
          onClick={() => setExpanded((v) => !v)}
        >
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2.5 mb-2">
              <h3 className="font-display text-2xl text-white tracking-wide">{exp.company}</h3>
              {exp.current && (
                <span
                  className="font-mono text-xs tracking-widest uppercase px-2.5 py-0.5 rounded-full border"
                  style={{
                    color: accent.primary,
                    borderColor: `${accent.primary}40`,
                    backgroundColor: `${accent.primary}10`,
                  }}
                >
                  {accent.label}
                </span>
              )}
            </div>
            <p className="font-body font-semibold text-slate-300 text-lg mb-3">{exp.role}</p>
            <div className="flex flex-wrap items-center gap-4 font-mono text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {exp.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} />
                {exp.location}
              </span>
            </div>
          </div>

          <div
            className="w-9 h-9 rounded-lg border flex-shrink-0 flex items-center justify-center transition-all duration-200 mt-1"
            style={{
              borderColor: `${accent.primary}30`,
              backgroundColor: `${accent.primary}08`,
              color: accent.primary,
            }}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </button>

        {/* Expandable body */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-7 pb-7 space-y-5">
                <div
                  className="h-px"
                  style={{
                    background: `linear-gradient(to right, ${accent.primary}30, transparent)`,
                  }}
                />
                <p className="font-body text-base text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
                <ul className="space-y-3">
                  {exp.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3 font-body text-base text-slate-400"
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: accent.primary }}
                      />
                      {h}
                    </motion.li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-sm px-2.5 py-1 rounded-md border"
                      style={{
                        color: accent.primary,
                        borderColor: `${accent.primary}25`,
                        backgroundColor: `${accent.primary}08`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="relative py-28 px-6 bg-gradient-mesh">
      <div
        className="gradient-orb w-[360px] h-[360px] bottom-20 left-[-80px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">Experience</p>
          <h2 className="section-heading">WHERE I'VE WORKED</h2>
          <p className="font-body text-slate-500 mt-4 max-w-md mx-auto text-base">
            Professional journey — click any card to expand details.
          </p>
        </motion.div>

        {/* Timeline */}
        <div
          className="relative pl-4"
          style={{
            borderLeft: '2px solid',
            borderImageSlice: 1,
            borderImageSource: 'linear-gradient(to bottom, #3b82f6, rgba(59,130,246,0.1))',
          }}
        >
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
