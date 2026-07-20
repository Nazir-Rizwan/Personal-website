import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail, ArrowDown, Download,
  MapPin, GraduationCap, Code2, Rocket
} from 'lucide-react'
import Button from '../ui/Button'

const highlights = [
  { icon: MapPin, text: 'Lahore, Pakistan' },
  { icon: GraduationCap, text: 'COMSATS University  2020 – 2024' },
  { icon: Code2, text: 'React · Node · Nest · Next' },
  { icon: Rocket, text: 'Open to remote work' },
]

// Only two stats on the right panel
const stats = [
  { value: '2+', label: 'Years of Experience' },
  { value: '15+', label: 'Projects Delivered' },
]

const NameLetter = ({ char, delay }: { char: string; delay: number }) => (
  <motion.span
    className="inline-block"
    initial={{ opacity: 0, y: 50, rotateX: -70 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {char}
  </motion.span>
)

const Hero = () => {
  const rightRef = useRef(null)
  const inView = useInView(rightRef, { once: true, margin: '-60px' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden dot-bg"
    >
      {/* Orbs */}
      <div
        className="gradient-orb w-[600px] h-[600px] top-[-200px] left-[-200px] animate-float-slow"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)' }}
      />
      <div
        className="gradient-orb w-[450px] h-[450px] bottom-[-100px] right-[-100px] animate-float-mid"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', animationDelay: '2s' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/30 via-transparent to-dark-950/60 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ──────────── LEFT: Identity ──────────── */}
          <div className="flex flex-col items-start">

            {/* Name — letter-by-letter 3-D flip */}
            <div className="mb-4 mt-8" style={{ perspective: '800px' }}>
              <h1
                className="font-display leading-[0.88] tracking-wider text-white"
                style={{ fontSize: 'clamp(4rem,9vw,8rem)' }}
              >
                {'NAZIR'.split('').map((c, i) => (
                  <NameLetter key={i} char={c} delay={0.2 + i * 0.07} />
                ))}
              </h1>

              <div className="relative">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-primary/60 via-primary/20 to-transparent pointer-events-none" />
                <h1
                  className="font-display leading-[0.88] tracking-wider text-gradient-primary relative z-10"
                  style={{ fontSize: 'clamp(4rem,9vw,8rem)' }}
                >
                  {'RIZWAN'.split('').map((c, i) => (
                    <NameLetter key={i} char={c} delay={0.55 + i * 0.07} />
                  ))}
                </h1>
              </div>
            </div>

            {/* Role + blinking cursor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-2 mb-10"
            >
              <span className="font-mono text-sm md:text-base text-slate-400 tracking-[0.2em] uppercase">
                Full Stack Developer
              </span>
              <motion.span
                className="w-0.5 h-4 bg-primary inline-block"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'steps(1)' }}
              />
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <Button variant="primary" size="md" href="#projects">View My Work</Button>
              <Button variant="secondary" size="md" href="#contact">
                <Mail size={15} /> Get In Touch
              </Button>
              <Button variant="ghost" size="md" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={15} /> Resume
              </Button>
            </motion.div>
          </div>

          {/* ──────────── RIGHT: About ──────────── */}
          <div id="about" ref={rightRef} className="flex flex-col gap-5">

            {/* About Me text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-5 rounded-2xl border border-white/[0.07] bg-dark-900"
            >
              <p className="font-mono text-[10px] text-slate-500 tracking-widest uppercase mb-3">About Me</p>
              <p className="font-body text-slate-300 text-sm leading-relaxed mb-2.5">
                I'm a full stack developer who loves building things that are fast, secure, and
                easy to maintain. I care deeply about OWASP security practices, clean architecture,
                and shipping without breaking what works.
              </p>
              <p className="font-body text-slate-400 text-sm leading-relaxed">
                When I'm not coding, I'm exploring new tools, reading about software architecture,
                or figuring out how to make builds even faster.
              </p>
            </motion.div>

            {/* Stats — 2 boxes only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center py-5 rounded-2xl border border-white/[0.07] bg-dark-900 hover:border-primary/20 transition-colors duration-200"
                >
                  <span className="font-display text-4xl text-gradient-primary mb-1">{s.value}</span>
                  <span className="font-mono text-[10px] text-slate-500 text-center px-2">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Highlights — 2×2 grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-2"
            >
              {highlights.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.35 + i * 0.07 }}
                  className="flex items-center gap-2.5 px-3 py-3 rounded-xl border border-white/[0.06] bg-dark-900/70 hover:border-primary/20 hover:bg-primary/5 transition-all duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Icon size={13} className="text-primary" />
                  </div>
                  <span className="font-body text-xs text-slate-300 group-hover:text-white leading-tight transition-colors">
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hover:text-primary transition-colors duration-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  )
}

export default Hero
