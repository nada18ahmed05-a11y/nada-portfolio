'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Phone, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="panel-border bg-card/70 backdrop-blur p-8 md:p-14 text-center relative overflow-hidden"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/50" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/50" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/50" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/50" />

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary status-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
              Available for collaboration
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            <Sparkles className="h-3 w-3 text-primary" />
            <span>./contact.sh</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Let&apos;s Build a Brighter
            <br />
            <span className="text-primary text-glow">Digital World</span> Together
          </h2>

          <p className="mt-5 max-w-xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            Ready to launch reliable, bug-free applications? Let&apos;s collaborate on your next
            project and ensure flawless digital experiences.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild>
              <a href="mailto:nada.18.ahmed.0.5@gmail.com">
                <Mail className="mr-1.5 h-4 w-4" />
                Send Email
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/nada-ahmed-robotics/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-1.5 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+201017549141">
                <Phone className="mr-1.5 h-4 w-4" />
                Call Me
              </a>
            </Button>
          </div>

          {/* Email display */}
          <div className="mt-8 pt-6 border-t border-border/60 font-mono text-xs text-muted-foreground">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary" />
                <span className="text-foreground">nada.18.ahmed.0.5@gmail.com</span>
              </div>
              <span className="hidden sm:block text-border">|</span>
              <div className="flex items-center gap-2">
                <Linkedin className="h-3.5 w-3.5 text-primary" />
                <span className="text-foreground">/nada-ahmed-robotics</span>
              </div>
              <span className="hidden sm:block text-border">|</span>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary" />
                <span className="text-foreground">+20 101 754 9141</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-12 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Nada Ahmed · Software QA &amp; Robotics · Built with
            Next.js + shadcn/ui
          </p>
          <p className="mt-1 text-primary">{'// system status: ready_to_collaborate_'}</p>
        </footer>
      </div>
    </section>
  )
}
