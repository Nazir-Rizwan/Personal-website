import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  target?: string
  rel?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  target,
  rel,
  disabled = false,
  type = 'button',
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary:
      'bg-primary text-dark-950 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_30px_rgba(34,211,238,0.55)]',
    secondary:
      'border border-primary/40 text-primary hover:bg-primary-dim hover:border-primary/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]',
    ghost:
      'border border-white/10 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/5',
    gold:
      'bg-gold text-dark-950 font-bold hover:bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_30px_rgba(251,191,36,0.55)]',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}

export default Button
