import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, GraduationCap, Code2, Rocket } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Delivered', value: '10+' },
  { label: 'Gateways Optimized', value: '40+' },
  { label: 'Build Time Saved', value: '30%' },
]

const highlights = [
  { icon: MapPin, text: 'Lahore, Pakistan' },
  { icon: GraduationCap, text: 'BS Computer Science — COMSATS (2020–2024)' },
  { icon: Code2, text: 'Full Stack (React · Node · Next.js)' },
  { icon: Rocket, text: 'Open to remote opportunities' },
]

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-28 px-6 bg-gradient-mesh">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="section-label mb-3">01 — About</p>
          <h2 className="section-heading">WHO I AM</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Avatar placeholder + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Avatar */}
            <div className="relative w-64 h-64 mx-auto mb-10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-dark-800 to-gold/10 border border-primary/20" />
              <div className="absolute inset-[3px] rounded-2xl bg-dark-900 flex items-center justify-center overflow-hidden">
                {/* Initials avatar */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-800 to-dark-900">
                  <span className="font-display text-7xl text-gradient-cyan select-none">NR</span>
                </div>
              </div>
              {/* Glow ring */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent -z-10 blur-xl" />
              {/* Status dot */}
              <div className="absolute -bottom-3 -right-3 flex items-center gap-2 bg-dark-900 border border-white/10 rounded-full px-3 py-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-slate-400 tracking-wider">Available</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-dark-900/80 border border-white/[0.07] rounded-xl p-4 text-center hover:border-primary/20 transition-colors duration-200"
                >
                  <div className="font-display text-3xl text-gradient-cyan mb-1">{stat.value}</div>
                  <div className="font-body text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="space-y-6"
          >
            <p className="font-body text-slate-300 text-lg leading-relaxed">
              Hey — I'm Nazir, a full stack developer based in Lahore. I build production-grade
              web applications with a focus on performance, maintainability, and security.
            </p>
            <p className="font-body text-slate-400 leading-relaxed">
              Currently at <span className="text-primary font-medium">Techverx</span>, I work
              inside a large Turborepo monorepo delivering Next.js applications, desktop tooling
              with Electron, and automated PDF generation systems.
            </p>
            <p className="font-body text-slate-400 leading-relaxed">
              Previously at <span className="text-gold font-medium">Visnext Software Solutions</span>,
              I optimized 40+ payment gateway integrations on the Ottu platform and hardened frontend
              security through SRI and self-hosted font strategies.
            </p>

            {/* Highlights list */}
            <div className="mt-8 space-y-3 pt-6 border-t border-white/[0.06]">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 font-body text-sm text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-primary" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
