'use client'

import { motion } from 'framer-motion'
import { GraduationCap, ShieldCheck, Brain } from 'lucide-react'
import { SectionHeader } from './section-header'

const TIMELINE = [
  {
    icon: GraduationCap,
    code: 'EDU-01',
    title: 'B.Sc. Computers & Information',
    org: 'Helwan National University',
    detail:
      'Robotics Department — formal foundation in computer science with a robotics specialization. Where I first connected hardware control logic with software reliability.',
    period: 'Undergraduate',
    accent: 'primary' as const,
  },
  {
    icon: ShieldCheck,
    code: 'EDU-02',
    title: 'Software Testing Track (DEPI)',
    org: 'Digital Egypt Pioneers Initiative',
    detail:
      'Professional training in QA methodologies and best practices — covering test design, defect lifecycle, and quality process ownership. The DEPI track is where my QA mindset went from intuition to discipline.',
    period: 'Professional Track',
    accent: 'primary' as const,
  },
  {
    icon: Brain,
    code: 'EDU-03',
    title: 'AI & ML Summer Internship',
    org: 'Information Technology Institute (ITI)',
    detail:
      'Intensive hands-on training in machine learning workflows, model training, and evaluation. Reinforced the connection between data-driven problem solving and rigorous validation.',
    period: 'Summer Internship',
    accent: 'primary' as const,
  },
]

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          index="06"
          label="Education & Professional Development"
          title="The path that built the bridge"
          description="Formal CS education, professional QA training, and applied AI/ML — three layers that together produce a different kind of QA specialist."
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[18px] md:left-1/2 top-2 bottom-2 w-px md:-translate-x-px"
            style={{
              background:
                'linear-gradient(to bottom, transparent, oklch(0.78 0.18 155 / 0.5) 10%, oklch(0.78 0.18 155 / 0.5) 90%, transparent)',
            }}
            aria-hidden
          />

          <div className="space-y-6">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-4 md:gap-12 items-center ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Node marker */}
                <div className="absolute left-0 md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 z-10">
                  <div className="grid place-items-center h-9 w-9 rounded-full bg-background border-2 border-primary/60 text-primary">
                    <t.icon className="h-4 w-4" />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
                >
                  <div className="panel-border bg-card/60 p-5 group hover:bg-card transition-colors">
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        i % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {t.code}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-primary/30 bg-primary/10 text-primary">
                        {t.period}
                      </span>
                    </div>
                    <h3 className="font-bold text-base mb-1">{t.title}</h3>
                    <div
                      className={`font-mono text-xs text-primary mb-2 ${
                        i % 2 === 0 ? 'md:text-right' : ''
                      }`}
                    >
                      {t.org}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{t.detail}</p>
                  </div>
                </div>

                {/* Empty side for layout */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
