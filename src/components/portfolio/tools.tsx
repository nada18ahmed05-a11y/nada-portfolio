'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  CircuitBoard,
  Braces,
  SquareTerminal,
  Bug,
} from 'lucide-react'
import { SectionHeader } from './section-header'

const TOOLS = [
  {
    icon: SquareTerminal,
    name: 'IntelliJ IDEA',
    type: 'IDE',
    note: 'Java / JVM-side development & refactoring',
  },
  {
    icon: Braces,
    name: 'Code::Blocks',
    type: 'IDE',
    note: 'C / C++ builds for robotics coursework',
  },
  {
    icon: Code2,
    name: 'VS Code',
    type: 'Editor',
    note: 'Python, JS, and quick edits across the stack',
  },
  {
    icon: CircuitBoard,
    name: 'Proteus',
    type: 'Simulator',
    note: '555 Timer / multiplexer circuit design',
  },
  {
    icon: Bug,
    name: 'Jira',
    type: 'Tracker',
    note: 'Bug tracking & defect lifecycle management',
  },
]

export function Tools() {
  return (
    <section id="tools" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          index="03"
          label="Tools & Environment"
          title="Five tools, each tied to a job"
          description="From authoring code in multiple languages to simulating hardware logic to tracking defects — every tool on this list earns its place in my workflow."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="panel-border bg-card/60 p-5 group hover:bg-card transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="grid place-items-center h-11 w-11 rounded-md bg-primary/10 border border-primary/30 text-primary group-hover:bg-primary/20 transition-colors">
                  <t.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground px-2 py-1 rounded border border-border/60 bg-muted/30">
                  {t.type}
                </span>
              </div>
              <h3 className="font-semibold text-base">{t.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{t.note}</p>
              <div className="mt-4 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full status-pass-dot status-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                  Loaded
                </span>
              </div>
            </motion.div>
          ))}

          {/* Filler info card — explains the tool selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: TOOLS.length * 0.08 }}
            className="panel-border bg-primary/5 p-5 flex flex-col"
          >
            <div className="font-mono text-[10px] uppercase tracking-wider text-primary mb-3">
              {'// workflow_map'}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1">
              Each tool maps to a phase of my work:{' '}
              <span className="text-foreground">author</span> →{' '}
              <span className="text-foreground">build</span> →{' '}
              <span className="text-foreground">simulate</span> →{' '}
              <span className="text-foreground">test</span> →{' '}
              <span className="text-foreground">track</span>.
            </p>
            <div className="mt-4 pt-3 border-t border-border/50 font-mono text-[10px] text-primary">
              5 tools · 0 idle
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
