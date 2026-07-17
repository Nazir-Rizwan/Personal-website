import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail, Github, Linkedin, Phone,
  Copy, CheckCheck, Send, Briefcase
} from 'lucide-react'
import Button from '../ui/Button'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mr.nazirrizwan@gmail.com',
    href: 'mailto:mr.nazirrizwan@gmail.com',
    copyable: true,
    accent: '#3b82f6',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92-301-680-3440',
    href: 'tel:+923016803440',
    copyable: true,
    accent: '#34d399',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Nazir-Rizwan',
    href: 'https://github.com/Nazir-Rizwan/',
    copyable: false,
    accent: '#e2e8f0',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/nazir-rizwan',
    href: 'https://linkedin.com/in/nazir-rizwan',
    copyable: false,
    accent: '#38bdf8',
  },
]

const workModes = [
  { label: 'Remote',  color: '#3b82f6', bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.3)'  },
  { label: 'Hybrid',  color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.3)' },
  { label: 'On-site', color: '#38bdf8', bg: 'rgba(56,189,248,0.1)',  border: 'rgba(56,189,248,0.3)'  },
]

const CopyButton = ({ value, accent }: { value: string; accent: string }) => {
  const [copied, setCopied] = useState(false)
  const handle = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }
  return (
    <button
      onClick={handle}
      className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-slate-200 hover:border-white/25 transition-all duration-200 flex-shrink-0"
      title="Copy"
    >
      {copied
        ? <CheckCheck size={13} style={{ color: accent }} />
        : <Copy size={13} />}
    </button>
  )
}

const Contact = () => {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="relative py-28 px-6 bg-gradient-mesh">
      {/* Orbs */}
      <div
        className="gradient-orb w-[500px] h-[500px] top-0 right-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)' }}
      />
      <div
        className="gradient-orb w-[300px] h-[300px] bottom-0 left-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="section-label mb-3">Contact</p>
          <h2 className="section-heading">LET'S TALK</h2>
          <p className="font-body text-slate-400 mt-4 max-w-lg mx-auto text-base">
            Open to full-time roles, freelance projects, or just a conversation.
            Reach out — I'll get back to you promptly.
          </p>
        </motion.div>

        {/* ── Single card: everything lives here ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="p-9 rounded-2xl border border-primary/20 bg-dark-900 relative overflow-hidden"
          style={{ boxShadow: '0 0 60px rgba(59,130,246,0.08)' }}
        >
          <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl bg-primary/8 pointer-events-none" />

          <div className="relative z-10">
            {/* Card header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center">
                <Send size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl text-white tracking-wide">Quick Connect</h3>
            </div>

            <p className="font-body text-slate-400 text-base leading-relaxed mb-6">
              Whether you have a project in mind, want to discuss an opportunity, or just
              want to say hello — my inbox is always open.
            </p>

            {/* Response time */}
            <div className="flex items-center gap-2.5 mb-7 p-3.5 rounded-xl bg-dark-800 border border-white/[0.06]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span className="font-mono text-sm text-slate-300">
                Avg. response:{' '}
                <span className="text-emerald-400 font-medium">within 24 hours</span>
              </span>
            </div>

            {/* Contact list */}
            <div className="space-y-2.5 mb-7">
              {contactItems.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label !== 'Email' && item.label !== 'Phone' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-xl border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.02] transition-all duration-200 group"
                  >
                    <div
                      className="w-11 h-11 rounded-lg border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                      style={{ borderColor: `${item.accent}30`, backgroundColor: `${item.accent}10` }}
                    >
                      <Icon size={18} style={{ color: item.accent }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-body text-base text-slate-200 group-hover:text-white transition-colors truncate">
                        {item.value}
                      </p>
                    </div>
                    {item.copyable && <CopyButton value={item.value} accent={item.accent} />}
                  </a>
                )
              })}
            </div>

            {/* Work mode */}
            <div className="mb-7 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Briefcase size={14} className="text-primary" />
                </div>
                <p className="font-mono text-xs text-slate-400 tracking-widest uppercase">
                  Work Mode
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {workModes.map((m) => (
                  <span
                    key={m.label}
                    className="font-body text-base font-medium px-4 py-1.5 rounded-full border"
                    style={{ color: m.color, backgroundColor: m.bg, borderColor: m.border }}
                  >
                    {m.label}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <Button
                variant="primary"
                size="lg"
                href="mailto:mr.nazirrizwan@gmail.com"
                className="w-full justify-center"
              >
                <Mail size={17} />
                Send Me an Email
              </Button>
              <Button
                variant="ghost"
                size="md"
                href="https://linkedin.com/in/nazir-rizwan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center"
              >
                <Linkedin size={15} />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
