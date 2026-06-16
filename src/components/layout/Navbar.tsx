import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { label: 'Home',       href: '#hero'       },
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
]

const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [active,      setActive]      = useState('#hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
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

  const handleClick = (href: string) => {
    setActive(href)
    setMobileOpen(false)
  }

  return (
    <>
      {/* ══════════════════════════════════════════
          Shared top bar — desktop + mobile
      ══════════════════════════════════════════ */}
      <motion.header
        className={`fixed top-0 inset-x-0 z-[60] flex items-center justify-between px-5 md:px-8 lg:px-16 h-[68px] transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-dark-950/95 backdrop-blur-md border-b border-white/[0.07] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => handleClick('#hero')}
          className="flex items-center gap-2.5 group flex-shrink-0"
        >
          <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/60 transition-all duration-200">
            <Code2 size={17} className="text-primary" />
          </div>
          <span className="font-mono text-white font-medium text-sm tracking-wider">
            nazir<span className="text-primary">.</span>dev
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative px-3.5 py-2 rounded-lg font-body text-sm font-medium transition-all duration-200 ${
                  active === link.href ? 'text-primary' : 'text-slate-400 hover:text-white'
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="mailto:mr.nazirrizwan@gmail.com"
          className="hidden md:inline-flex font-body text-sm font-semibold px-5 py-2 rounded-lg bg-primary text-dark-950 hover:bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.35)] hover:shadow-[0_0_26px_rgba(34,211,238,0.55)] transition-all duration-200"
        >
          Hire Me
        </a>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="md:hidden relative w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/30 transition-all duration-200"
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

      {/* ══════════════════════════════════════════
          Mobile: animated slide-down nav panel
      ══════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Full-screen dim backdrop (below panel) */}
            <motion.div
              className="fixed inset-0 z-[55] bg-dark-950/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-down panel — sits directly below the top bar */}
            <motion.div
              className="fixed inset-x-0 top-[68px] z-[59] bg-dark-900 border-b border-white/[0.07] shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* 3-column grid: 2 rows × 3 cols */}
              <nav className="px-5 pt-5 pb-4">
                <div className="grid grid-cols-3 gap-2">
                  {navLinks.map((link, i) => {
                    const isActive = active === link.href
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={() => handleClick(link.href)}
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

              {/* Bottom strip — hire me */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="px-5 pb-5"
              >
                <a
                  href="mailto:mr.nazirrizwan@gmail.com"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3 rounded-xl bg-primary text-dark-950 font-body font-semibold text-sm shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:bg-cyan-300 transition-all duration-200"
                >
                  Hire Me
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
