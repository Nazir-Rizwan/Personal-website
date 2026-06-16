import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glowColor?: 'cyan' | 'gold' | 'none'
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  glowColor = 'none',
  onClick,
}) => {
  const glowStyles = {
    cyan: 'hover:border-primary/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]',
    gold: 'hover:border-gold/40 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]',
    none: '',
  }

  const classes = [
    'bg-dark-900 border border-white/[0.07] rounded-xl transition-all duration-300',
    hover ? 'cursor-pointer' : '',
    glowColor !== 'none' ? glowStyles[glowColor] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (hover) {
    return (
      <motion.div
        className={classes}
        onClick={onClick}
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={classes}>{children}</div>
}

export default Card
