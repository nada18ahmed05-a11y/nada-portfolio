'use client'

import { CircuitBg } from '@/components/portfolio/circuit-bg'
import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Competencies } from '@/components/portfolio/competencies'
import { Tools } from '@/components/portfolio/tools'
import { Services } from '@/components/portfolio/services'
import { Projects } from '@/components/portfolio/projects'
import { Education } from '@/components/portfolio/education'
import { Contact } from '@/components/portfolio/contact'

export default function Home() {
  return (
    <>
      <CircuitBg />
      <Navbar />
      <main className="relative min-h-screen">
        <Hero />
        <About />
        <Competencies />
        <Tools />
        <Services />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  )
}
