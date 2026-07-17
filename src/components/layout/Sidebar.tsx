import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2, Github, Linkedin, Mail, MapPin, Globe } from 'lucide-react'

const navLinks = [
  { label: 'Overview',             href: '#about'      },
  { label: 'Skills',               href: '#skills'     },
  { label: 'Experience',           href: '#experience' },
  { label: 'Engineering Projects', href: '#projects'   },
  { label: 'Contact',              href: '#contact'    },
]

const socials = [
  { icon: Github, href: 'https://github.com/Nazir-Rizwan/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/nazir-rizwan', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mr.nazirrizwan@gmail.com', label: 'Email' },
]

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Body scroll-lock (while the mobile drawer is open) can swallow the
  // browser's native anchor-jump if both happen in the same tick, which is
  // why a link tapped mid-drawer would silently fail to scroll on mobile.
  // Scrolling manually, after the drawer has actually closed, avoids the race.
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const wasOpen = mobileOpen
    setActive(href)
    setMobileOpen(false)
    const scrollToTarget = () => {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', href)
    }
    if (wasOpen) {
      setTimeout(scrollToTarget, 360)
    } else {
      scrollToTarget()
    }
  }

  return (
    <>
      {/* ══════════════════════════════════════════
          Desktop: fixed left sidebar
      ══════════════════════════════════════════ */}
      <motion.aside
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="hidden lg:flex lg:flex-col lg:justify-between fixed inset-y-0 left-0 w-[300px] xl:w-[340px] px-10 py-16 z-40 border-r border-white/[0.06] bg-dark-950/70 backdrop-blur-sm"
      >
        <div>
          <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="group inline-flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/60 transition-all duration-200">
              <Code2 size={17} className="text-primary" />
            </div>
            <span className="font-display text-2xl text-white tracking-wide">
              Nazir<span className="text-primary">.</span>
            </span>
          </a>

          <p className="font-mono text-xs text-slate-400 tracking-wide mb-1">Full Stack Developer</p>
          <p className="font-body text-sm text-slate-500 leading-relaxed mb-5">
            I build fast, secure, and maintainable web applications end to end.
          </p>

          {/* Status card */}
          <div className="mb-12 p-3.5 rounded-xl border border-white/[0.07] bg-dark-900 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span className="font-body text-xs text-slate-300">Available for Work</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-slate-500 flex-shrink-0" />
              <span className="font-body text-xs text-slate-400">Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={12} className="text-slate-500 flex-shrink-0" />
              <span className="font-body text-xs text-slate-400">Remote Worldwide</span>
            </div>
          </div>

          <nav>
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const isActive = active === link.href
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="group flex items-center gap-3 py-2.5"
                    >
                      <span
                        className={`h-px transition-all duration-300 ${
                          isActive ? 'w-8 bg-primary' : 'w-4 bg-slate-600 group-hover:w-8 group-hover:bg-slate-300'
                        }`}
                      />
                      <span
                        className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                          isActive ? 'text-primary' : 'text-slate-400 group-hover:text-white'
                        }`}
                      >
                        {link.label}
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </motion.aside>

      {/* ══════════════════════════════════════════
          Mobile: top bar + slide-down nav panel
      ══════════════════════════════════════════ */}
      <motion.header
        className="lg:hidden fixed top-0 inset-x-0 z-[60] flex items-center justify-between px-5 h-[68px] bg-dark-950/95 backdrop-blur-md border-b border-white/[0.07]"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/60 transition-all duration-200">
            <Code2 size={17} className="text-primary" />
          </div>
          <span className="font-mono text-white font-medium text-sm tracking-wider">
            nazir<span className="text-primary">.</span>dev
          </span>
        </a>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="relative w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/30 transition-all duration-200"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? 'x' : 'menu'}
              initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0,   opacity: 1, scale: 1   }}
              exit={{   rotate:  90,  opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="absolute"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="lg:hidden fixed inset-0 z-[55] bg-dark-950/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              className="lg:hidden fixed inset-x-0 top-[68px] z-[59] bg-dark-900 border-b border-white/[0.07] shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="px-5 pt-5 pb-4">
                <div className="grid grid-cols-3 gap-2">
                  {navLinks.map((link, i) => {
                    const isActive = active === link.href
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleClick(e, link.href)}
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 + 0.05, ease: 'easeOut' }}
                        className={`flex items-center justify-center py-3.5 px-2 rounded-xl font-body text-sm font-medium text-center select-none transition-all duration-200 ${
                          isActive
                            ? 'bg-primary/12 text-primary border border-primary/25'
                            : 'text-slate-400 border border-transparent hover:text-white hover:border-white/10 hover:bg-white/[0.04]'
                        }`}
                      >
                        {link.label}
                      </motion.a>
                    )
                  })}
                </div>
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="flex items-center justify-center gap-3 px-5 pb-5"
              >
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    onClick={() => setMobileOpen(false)}
                    className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar
