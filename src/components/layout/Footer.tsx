import { Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

const socials = [
  { icon: Github, href: 'https://github.com/Nazir-Rizwan/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/nazir-rizwan', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mr.nazirrizwan@gmail.com', label: 'Email' },
]

const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.06] bg-dark-950/80">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copy */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Code2 size={13} className="text-primary" />
              </div>
              <span className="font-mono text-white text-sm tracking-wide">
                nazir<span className="text-primary">.</span>dev
              </span>
            </a>
            <p className="font-body text-xs text-slate-500 mt-1">
              Built with React · Vite · Tailwind · Framer Motion
            </p>
          </div>

          {/* Socials */}
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
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright + scroll to top */}
          <div className="flex items-center gap-4">
            <p className="font-body text-xs text-slate-500">
              © {new Date().getFullYear()} Nazir Rizwan
            </p>
            <motion.a
              href="#hero"
              whileHover={{ y: -2 }}
              className="w-9 h-9 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
