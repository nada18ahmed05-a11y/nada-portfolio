'use client'

import { motion } from 'framer-motion'
import { Quote, Sparkles } from 'lucide-react'
import { SectionHeader } from './section-header'

export function About() {
  return (
    <section id="about-detail" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          index="01"
          label="About / whoami"
          title="Bridging hardware engineering with rigorous QA"
          description="A snapshot of who I am, what I bring, and why it matters."
        />

        <div className="grid lg:grid-cols-12 gap-8">
          {/* About body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              I&apos;m <span className="text-foreground font-semibold">Nada Ahmed</span>, a
              Computer Science student at{' '}
              <span className="text-foreground">Helwan National University</span>, specializing
              in <span className="text-primary">Robotics</span> with a deep focus on{' '}
              <span className="text-primary">Software Testing</span>. I bridge hardware
              engineering and rigorous quality assurance — ensuring every line of code is as
              reliable as it is elegant.
            </p>
            <p>
              My approach is hands-on: I write detailed test plans, hunt down the edge cases
              most developers miss, and validate behavior until the system behaves exactly as
              promised. The result is a development pipeline where issues are caught long
              before they reach end users.
            </p>
            <p>
              Whether it&apos;s simulating 555 Timer circuits on Proteus, training neural
              networks on Kaggle, or building a complete system architecture for a medication
              management platform, the throughline is the same: precision, methodology, and a
              refusal to ship something I wouldn&apos;t use myself.
            </p>
          </motion.div>

          {/* Quote + value card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="panel-border bg-card/70 p-6 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/30" />
              <p className="font-mono text-sm leading-relaxed text-foreground/90 italic">
                &ldquo;Just like exploring new horizons, I bring curiosity, creativity, and
                bright attention to detail to every digital challenge, ensuring code runs as
                smoothly as a fairytale ending.&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-border/60">
                <div className="font-mono text-[10px] uppercase tracking-wider text-primary">
                  — Nada Ahmed
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                  QA Mindset, in one line
                </div>
              </div>
            </div>

            <div className="panel-border bg-card/70 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                  My Unique Value
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Bridging robotics engineering and rigorous software testing to launch reliable,
                bug-free applications by catching issues before users do.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
