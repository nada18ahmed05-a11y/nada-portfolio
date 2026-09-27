'use client'

import { motion } from 'framer-motion'
import {
  Bug,
  FileCheck,
  ListChecks,
  ShieldQuestion,
  GitBranch,
  Split,
  Braces,
  Repeat,
  Lightbulb,
  ScrollText,
  Code2,
  Database,
  Cpu,
} from 'lucide-react'
import { SectionHeader } from './section-header'

// ─── Software Testing Process (workflow / lifecycle) ───
const TESTING_PROCESS = [
  { icon: Bug, label: 'Manual Testing', note: 'Hands-on UI & API exploration' },
  { icon: FileCheck, label: 'Bug Tracking & Reporting', note: 'Clear, reproducible tickets' },
  { icon: ShieldQuestion, label: 'Quality Assurance', note: 'Process & standards ownership' },
  { icon: ListChecks, label: 'Test Case Design', note: 'Edge-case coverage first' },
]

// ─── Testing Techniques (from the DEPI Healthcare project) ───
const TESTING_TECHNIQUES = [
  { icon: Split, label: 'Equivalence Partitioning', note: 'EP — class partition selection' },
  { icon: GitBranch, label: 'Boundary Value Analysis', note: 'BVA — edge & off-edge inputs' },
  { icon: Braces, label: 'Decision Table Testing', note: 'Logic & business rule matrices' },
  { icon: Repeat, label: 'State Transition Testing', note: 'System state & flow paths' },
  { icon: Lightbulb, label: 'Error Guessing', note: 'Intuition-based defect hunting' },
  { icon: ScrollText, label: 'Business Rule Testing', note: 'Domain-critical rule validation' },
]

// ─── Technical / programming skills ───
const TECHNICAL_SKILLS = [
  { icon: Code2, label: 'Python', note: 'Automation, data, ML' },
  { icon: Cpu, label: 'C, C++, C#', note: 'Systems & robotics' },
  { icon: Code2, label: 'JavaScript', note: 'Web app validation' },
  { icon: Database, label: 'SQL', note: 'Data verification' },
]

// ─── Proficiency bars ───
const PROFICIENCY = [
  { l: 'Python', v: 85 },
  { l: 'C / C++ / C#', v: 78 },
  { l: 'SQL', v: 72 },
  { l: 'JavaScript', v: 68 },
]

interface SkillColumnProps {
  title: string
  module: string
  accentLabel: string
  accentTone: 'primary' | 'amber'
  items: { icon: typeof Bug; label: string; note: string }[]
  delay?: number
}

function SkillColumn({
  title,
  module,
  accentLabel,
  accentTone,
  items,
  delay = 0,
}: SkillColumnProps) {
  const accentClass =
    accentTone === 'amber'
      ? 'border-amber-400/40 bg-amber-400/10 text-amber-400'
      : 'border-primary/40 bg-primary/10 text-primary'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay }}
      className="panel-border bg-card/60 p-6 md:p-7 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-wider text-primary">
            {module}
          </div>
          <h3 className="text-lg font-bold mt-1">{title}</h3>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-mono text-[10px] uppercase tracking-wider ${accentClass}`}
        >
          <span className="h-1.5 w-1.5 rounded-full status-pass-dot status-pulse" />
          {accentLabel}
        </span>
      </div>

      {/* Items */}
      <div className="space-y-2.5 flex-1">
        {items.map((s, i) => (
          <div
            key={s.label}
            className="flex items-start gap-3 p-2.5 rounded-md border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-colors"
          >
            <div className="grid place-items-center h-8 w-8 rounded-md bg-primary/10 border border-primary/30 text-primary shrink-0">
              <s.icon className="h-3.5 w-3.5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-semibold text-sm">{s.label}</span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{s.note}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function Competencies() {
  return (
    <section id="competencies" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          index="02"
          label="Core Competencies"
          title="Three layers of testing depth, one mission: reliability"
          description="A process layer for the QA lifecycle, a techniques layer for the test-design playbook, and a technical layer so I can read code like a reviewer — not just a user."
        />

        <div className="grid md:grid-cols-3 gap-5">
          <SkillColumn
            title="Software Testing"
            module="// module A"
            accentLabel="Active"
            accentTone="primary"
            items={TESTING_PROCESS}
          />
          <SkillColumn
            title="Testing Techniques"
            module="// module B"
            accentLabel="Toolbox"
            accentTone="amber"
            items={TESTING_TECHNIQUES}
            delay={0.1}
          />
          <SkillColumn
            title="Technical Skills"
            module="// module C"
            accentLabel="Stack"
            accentTone="primary"
            items={TECHNICAL_SKILLS}
            delay={0.2}
          />
        </div>

        {/* Proficiency bars — full width below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="panel-border bg-card/60 p-6 md:p-8 mt-5"
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-primary">
                {'// snapshot'}
              </div>
              <h3 className="text-lg font-bold mt-1">Language Proficiency</h3>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              self-assessed · growing
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {PROFICIENCY.map((b) => (
              <div key={b.l} className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-muted-foreground w-28 shrink-0">
                  {b.l}
                </span>
                <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.v}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    className="h-full bg-primary"
                  />
                </div>
                <span className="font-mono text-[11px] text-primary w-9 text-right">
                  {b.v}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
