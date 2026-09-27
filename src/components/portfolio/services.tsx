'use client'

import { motion } from 'framer-motion'
import { Bug, ClipboardList, Compass, ArrowUpRight } from 'lucide-react'
import { SectionHeader } from './section-header'

const SERVICES = [
  {
    icon: Bug,
    code: 'SRV-01',
    title: 'Manual Software Testing & Bug Reporting',
    description:
      'Comprehensive testing strategies to identify and document critical issues before deployment. Hands-on exploration of UI flows, edge cases, and error paths — turned into clear, reproducible tickets any developer can act on immediately.',
    deliverables: ['Test execution reports', 'Reproducible bug tickets', 'Severity & priority tags'],
    accent: 'primary' as const,
  },
  {
    icon: ClipboardList,
    code: 'SRV-02',
    title: 'Test Case & Test Scenario Creation',
    description:
      'Detailed, methodical test plans tailored to your application\'s unique requirements. Coverage maps that link every requirement to test cases, so nothing ships without explicit verification — and regressions get caught on the next run, not in production.',
    deliverables: ['End-to-end test scenarios', 'Test case repositories', 'Coverage traceability'],
    accent: 'primary' as const,
  },
  {
    icon: Compass,
    code: 'SRV-03',
    title: 'Quality Assurance Consulting',
    description:
      'Strategic guidance for web and tech projects to ensure flawless user experiences. Process design, test strategy, and team workflows — so QA stops being a bottleneck and becomes the reason your release cadence can be trusted.',
    deliverables: ['QA process design', 'Test strategy docs', 'Team workflow review'],
    accent: 'primary' as const,
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          index="04"
          label="Services I Offer"
          title="What I can do for your project"
          description="Three service tracks that take a feature from rough cut to ready to ship — each with concrete deliverables, not just vibes."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="panel-border bg-card/60 p-6 flex flex-col group hover:bg-card transition-colors"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="grid place-items-center h-12 w-12 rounded-md bg-primary/10 border border-primary/30 text-primary group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {s.code}
                </span>
              </div>

              {/* Body */}
              <h3 className="font-bold text-lg leading-snug mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {s.description}
              </p>

              {/* Deliverables */}
              <ul className="mt-5 pt-5 border-t border-border/60 space-y-2">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 font-mono text-[11px] text-foreground/80"
                  >
                    <ArrowUpRight className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
