'use client'

import { motion } from 'framer-motion'
import {
  ArrowDown,
  Bug,
  ShieldCheck,
  Cpu,
  Mail,
  Linkedin,
  Phone,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AvatarOrPlaceholder } from './avatar'

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: identity + hook */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            {/* Status row */}
            <div className="flex flex-wrap items-center gap-3 mb-6 font-mono text-[10px] uppercase tracking-wider">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary">
                <span className="h-1.5 w-1.5 rounded-full status-pass-dot status-pulse" />
                System Online
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border bg-muted/40 text-muted-foreground">
                <Cpu className="h-3 w-3" /> Helwan NU • Robotics
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border bg-muted/40 text-muted-foreground">
                <ShieldCheck className="h-3 w-3" /> QA Track • DEPI
              </span>
            </div>

            {/* HOOK — punchy, client-focused headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] tracking-tight">
                <span className="text-foreground">Bugs don&apos;t ship</span>{' '}
                <span className="text-primary text-glow">on my watch.</span>
              </h2>
              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                I&apos;m the last line of defense between your code and your users —
                catching what automated tests miss and what users would&apos;ve found first.
              </p>
            </motion.div>

            {/* Identity block */}
            <div className="font-mono text-xs text-muted-foreground mb-2">
              $ whoami<span className="cursor-blink text-primary">_</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Nada <span className="text-primary text-glow">Ahmed</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              <span className="font-mono text-primary">{'>'}</span>{' '}
              <span className="text-foreground font-semibold">
                Software QA &amp; Testing Specialist
              </span>{' '}
              ·{' '}
              <span className="text-foreground font-semibold">Robotics Student</span>.
              I bridge hardware precision with software reliability — so every release
              you ship lands flawless.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#projects">
                  <Bug className="mr-1.5 h-4 w-4" />
                  See the Work
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  <Mail className="mr-1.5 h-4 w-4" />
                  Hire Me
                </a>
              </Button>
            </div>

            {/* Client-relevant stats */}
            <div className="mt-9 grid grid-cols-3 gap-3 max-w-md">
              {[
                { k: '0', v: 'Bugs Shipped to Production' },
                { k: '4', v: 'Real-World Projects' },
                { k: '100%', v: 'Release-Ready Mindset' },
              ].map((s) => (
                <div key={s.v} className="panel-border p-3 bg-card/40">
                  <div className="font-mono text-2xl text-primary">{s.k}</div>
                  <div className="text-[11px] text-muted-foreground mt-1 leading-tight">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-5 flex items-center gap-2 text-xs text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="font-mono">
                Available for freelance QA · remote-friendly · fast turnaround
              </span>
            </motion.div>
          </motion.div>

          {/* Right: avatar + mini links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Avatar card */}
            <div className="panel-border bg-card/70 backdrop-blur p-5">
              {/* Card header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground">
                  profile.jpg
                </span>
              </div>

              {/* Avatar frame */}
              <AvatarOrPlaceholder />

              {/* Caption */}
              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm">Nada Ahmed</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-primary">
                    QA · Robotics · CS
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary font-mono text-[9px] uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full status-pass-dot status-pulse" />
                  Online
                </span>
              </div>
            </div>

            {/* Mini link cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <a
                href="https://www.linkedin.com/in/nada-ahmed-robotics/"
                target="_blank"
                rel="noopener noreferrer"
                className="panel-border bg-card/60 p-3 hover:bg-card transition-colors group"
              >
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                  <span className="font-mono text-[11px] uppercase tracking-wider">LinkedIn</span>
                </div>
                <p className="mt-1 text-xs text-foreground/80 truncate">/nada-ahmed-robotics</p>
              </a>
              <a
                href="mailto:nada.18.ahmed.0.5@gmail.com"
                className="panel-border bg-card/60 p-3 hover:bg-card transition-colors group"
              >
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  <span className="font-mono text-[11px] uppercase tracking-wider">Email</span>
                </div>
                <p className="mt-1 text-xs text-foreground/80 truncate">nada.18.ahmed.0.5@gmail</p>
              </a>
              <a
                href="tel:+201017549141"
                className="panel-border bg-card/60 p-3 hover:bg-card transition-colors group col-span-2 sm:col-span-1"
              >
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  <span className="font-mono text-[11px] uppercase tracking-wider">Phone</span>
                </div>
                <p className="mt-1 text-xs text-foreground/80 truncate font-mono">+20 101 754 9141</p>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-muted-foreground"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest mb-1">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
          >
            <ArrowDown className="h-4 w-4 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
