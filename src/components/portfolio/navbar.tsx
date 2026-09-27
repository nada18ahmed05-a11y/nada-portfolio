'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Cpu, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { ThemeToggle } from './theme-toggle'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'competencies', label: 'Skills' },
  { id: 'tools', label: 'Tools' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // Active section observer
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/85 backdrop-blur-md border-b border-border/60' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 font-mono text-sm"
          >
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 border border-primary/40 text-primary">
              <Cpu className="h-4 w-4" />
            </span>
            <span className="hidden sm:block">
              <span className="text-primary">nada</span>
              <span className="text-muted-foreground">.qa_</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors rounded ${
                  active === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Status pill + theme toggle + mobile menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full border border-primary/40 bg-primary/10">
              <span className="relative grid place-items-center">
                <span className="h-1.5 w-1.5 rounded-full status-pass-dot status-pulse" />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary">
                Online
              </span>
            </div>

            <ThemeToggle />

            <Button
              size="sm"
              className="hidden md:inline-flex gap-1.5"
              onClick={() => go('contact')}
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Hire Me
            </Button>

            {/* Mobile sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-card/95 backdrop-blur">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm text-primary">menu.exe</span>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-4 w-4" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-1">
                  {NAV.map((item, i) => (
                    <SheetClose asChild key={item.id}>
                      <button
                        onClick={() => go(item.id)}
                        className="flex items-center justify-between px-3 py-3 rounded-md border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-colors text-left"
                      >
                        <span className="font-mono text-xs text-muted-foreground">
                          0{i + 1}
                        </span>
                        <span className="text-sm">{item.label}</span>
                      </button>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-8 p-4 rounded-md border border-primary/30 bg-primary/5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-1.5 w-1.5 rounded-full status-pass-dot status-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary">
                      Available for work
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Open to QA collaborations and robotics projects.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
