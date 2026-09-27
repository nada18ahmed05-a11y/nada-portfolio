'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  index: string // e.g. "01"
  label: string // e.g. "ABOUT"
  title: string
  description?: string
}

export function SectionHeader({ index, label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-10 md:mb-14"
    >
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary/80">
        <span className="text-muted-foreground">{'//'}{index}</span>
        <span className="h-px w-8 bg-primary/40" />
        <span>{label}</span>
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
