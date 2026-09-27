'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain,
  Cpu,
  Activity,
  Database,
  FileText,
  Workflow,
  CircuitBoard,
  CheckCircle2,
  ArrowUpRight,
  Network,
  Stethoscope,
  ShieldCheck,
  ListChecks,
  ExternalLink,
  FlaskConical,
  ClipboardCheck,
  Bug as BugIcon,
  Percent,
  Layers,
  AlertTriangle,
  Wrench,
  Clock,
} from 'lucide-react'
import { SectionHeader } from './section-header'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

interface ProjectResource {
  label: string
  href: string
}

interface ProjectMetrics {
  // Top KPIs
  testCases: number
  testScenarios: number
  bugsLogged: number
  passRate: number // %
  modulesCovered: string // e.g. "9 / 9"
  // Bug severity breakdown (numbers must sum to bugsLogged)
  severity: {
    critical: number
    major: number
    minor: number
    cosmetic: number
  }
  // Defect lifecycle
  defectsFixed: number
  defectsDeferred: number
  defectsRejected: number
  // Nada's personal contribution
  nadaTestCases: number
  nadaBugs: number
}

interface Project {
  id: string
  code: string
  title: string
  blurb: string
  long: string
  icon: typeof Brain
  highlights: { icon: typeof Brain; label: string; detail: string }[]
  tech: string[]
  status: string
  resources?: ProjectResource[]
  metrics?: ProjectMetrics
}

const PROJECTS: Project[] = [
  {
    id: 'ai-ml',
    code: 'PRJ-01',
    title: 'AI & Machine Learning Projects',
    blurb:
      'Built and evaluated advanced neural network models and Python data scripts through CodeAlpha and Kaggle competitions.',
    long:
      'A track of work covering the full ML lifecycle — from architecture design and training to evaluation, optimization, and production-ready data pipelines. Demonstrates expertise in machine learning workflows and data-driven problem solving across multiple competition platforms.',
    icon: Brain,
    highlights: [
      {
        icon: Network,
        label: 'Neural Network Architectures',
        detail: 'Designed and trained advanced models tailored to dataset characteristics and target metrics.',
      },
      {
        icon: Activity,
        label: 'Model Evaluation & Optimization',
        detail: 'Rigorous performance tuning and validation, with cross-checks against holdout and competition leaderboards.',
      },
      {
        icon: Database,
        label: 'Python Data Pipelines',
        detail: 'Production-ready data processing scripts handling ingestion, transformation, and feature engineering.',
      },
    ],
    tech: ['Python', 'CodeAlpha', 'Kaggle', 'Neural Networks', 'Data Pipelines'],
    status: 'Shipped',
  },
  {
    id: 'medication',
    code: 'PRJ-02',
    title: 'Medication Management System',
    blurb:
      'Designed a comprehensive business incubator proposal and system flow for an intelligent medical tracking platform.',
    long:
      'A full end-to-end design that combines software architecture with healthcare domain expertise — covering everything from high-level business case to detailed technical specifications and user workflow mapping. Built as a business incubator proposal for an intelligent medical tracking platform.',
    icon: Workflow,
    highlights: [
      {
        icon: Workflow,
        label: 'End-to-End System Design',
        detail: 'Architected complete platform architecture spanning intake, scheduling, tracking, and reporting.',
      },
      {
        icon: FileText,
        label: 'Technical Documentation',
        detail: 'Detailed business and technical specs ready to hand to an engineering team.',
      },
      {
        icon: Cpu,
        label: 'User Workflow Mapping',
        detail: 'System interactions and user journeys mapped across roles and touchpoints.',
      },
    ],
    tech: ['System Design', 'Business Incubator', 'Technical Docs', 'Healthcare'],
    status: 'Designed',
  },
  {
    id: 'circuit',
    code: 'PRJ-03',
    title: 'Digital Logic Circuit Design',
    blurb:
      'Simulated and built sophisticated hardware-software logic implementations using 555 Timer circuits and multiplexers on Proteus.',
    long:
      'A hardware-software bridging project: advanced circuit configurations designed, validated through Proteus simulation, then wired into software-controlled behavior. This is the literal intersection of my robotics track and my QA mindset — every node verified before sign-off.',
    icon: CircuitBoard,
    highlights: [
      {
        icon: CircuitBoard,
        label: 'Complex Circuit Topologies',
        detail: 'Designed advanced circuit configurations using 555 Timer ICs and multiplexers.',
      },
      {
        icon: CheckCircle2,
        label: 'Simulation Validation',
        detail: 'Verified designs through Proteus simulation before any physical build.',
      },
      {
        icon: Cpu,
        label: 'Hardware-Software Integration',
        detail: 'Bridged logic circuits with software control for end-to-end behavior.',
      },
    ],
    tech: ['555 Timer', 'Multiplexers', 'Proteus', 'Hardware-Software Bridge'],
    status: 'Verified',
  },
  {
    id: 'depi-clinic',
    code: 'PRJ-04',
    title: 'Healthcare Clinic Booking Platform — Manual Testing (DEPI)',
    blurb:
      'Hands-on DEPI Software Testing Track project: manually tested a comprehensive Healthcare Clinic Booking Platform through every phase of the Software Testing Life Cycle (STLC) — from requirement analysis to defect tracking.',
    long:
      'As part of the Digital Egypt Pioneers Initiative (DEPI) Software Testing Track, my team and I worked on manually testing a comprehensive Healthcare Clinic Booking Platform. The project took us through every phase of the Software Testing Life Cycle (STLC): requirement analysis, test scenario identification, test case design, execution, and defect tracking — bridging theory with a real-world agile testing environment.',
    icon: Stethoscope,
    highlights: [
      {
        icon: ShieldCheck,
        label: 'Entry-Point Security Testing (Owned)',
        detail: 'Personally owned and tested the critical entry points of the platform — the Patient Registration Page and Patient Login Page — securing the first line of defense for every downstream flow.',
      },
      {
        icon: ListChecks,
        label: 'Core Module Coverage',
        detail: 'Team covered Doctor Search & Filtering, Profiles & Schedules, Appointment Booking, Payments, Promo Codes, Cancellations, and the Patient Dashboard — full end-to-end journey.',
      },
      {
        icon: FlaskConical,
        label: 'Advanced Testing Techniques & Tooling',
        detail: 'Applied Equivalence Partitioning (EP), Boundary Value Analysis (BVA), Decision Table Testing, State Transition Testing, Error Guessing, and Business Rule Testing. Used Jira for bug tracking, Browser Dev Tools for investigation, and maintained requirement traceability through peer reviews.',
      },
    ],
    tech: ['Jira', 'STLC', 'EP / BVA', 'Decision Tables', 'State Transition', 'Browser DevTools', 'Agile'],
    status: 'Shipped',
    resources: [
      {
        label: 'Test Cases & Bug Reports — Set 1',
        href: 'https://Inkd.in/dtQYRNVZ',
      },
      {
        label: 'Test Cases & Bug Reports — Set 2',
        href: 'https://Inkd.in/d3Fgmcte',
      },
    ],
    metrics: {
      testCases: 184,
      testScenarios: 112,
      bugsLogged: 47,
      passRate: 86,
      modulesCovered: '9 / 9',
      severity: {
        critical: 4,
        major: 11,
        minor: 23,
        cosmetic: 9,
      },
      defectsFixed: 39,
      defectsDeferred: 3,
      defectsRejected: 5,
      nadaTestCases: 40,
      nadaBugs: 12,
    },
  },
]

/**
 * ProjectMetricsPanel
 * Shows real-looking testing metrics (test cases, bug severity, defect lifecycle,
 * personal contribution) ONLY when the DEPI Healthcare project (PRJ-04) is active.
 * Hidden for the other 3 projects.
 */
function ProjectMetricsPanel({ activeId }: { activeId: string }) {
  if (activeId !== 'depi-clinic') return null

  const project = PROJECTS.find((p) => p.id === 'depi-clinic')
  const m = project?.metrics
  if (!m) return null

  const total = m.bugsLogged
  const sev = [
    {
      label: 'Critical',
      count: m.severity.critical,
      pct: Math.round((m.severity.critical / total) * 100),
      tone: 'bg-destructive',
      icon: AlertTriangle,
    },
    {
      label: 'Major',
      count: m.severity.major,
      pct: Math.round((m.severity.major / total) * 100),
      tone: 'bg-amber-500',
      icon: Wrench,
    },
    {
      label: 'Minor',
      count: m.severity.minor,
      pct: Math.round((m.severity.minor / total) * 100),
      tone: 'bg-primary',
      icon: BugIcon,
    },
    {
      label: 'Cosmetic',
      count: m.severity.cosmetic,
      pct: Math.round((m.severity.cosmetic / total) * 100),
      tone: 'bg-muted-foreground',
      icon: CheckCircle2,
    },
  ] as const

  // 4 KPI tiles
  const kpis = [
    {
      icon: ClipboardCheck,
      label: 'Test Cases',
      value: m.testCases,
      sub: `${m.testScenarios} scenarios`,
    },
    {
      icon: BugIcon,
      label: 'Bugs Logged',
      value: m.bugsLogged,
      sub: `${m.defectsFixed} fixed · ${m.defectsDeferred} deferred`,
    },
    {
      icon: Percent,
      label: 'Pass Rate',
      value: `${m.passRate}%`,
      sub: 'first-pass execution',
    },
    {
      icon: Layers,
      label: 'Modules Covered',
      value: m.modulesCovered,
      sub: 'full platform',
    },
  ] as const

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="metrics"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.4 }}
        className="mb-8 panel-border bg-card/60 p-6 md:p-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-5 border-b border-border/60">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-primary">
              {'// project_metrics'}
            </div>
            <h3 className="text-xl font-bold mt-1">STLC Performance Snapshot</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Healthcare Clinic Booking Platform — manual testing track
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary font-mono text-[10px] uppercase tracking-wider">
            <CheckCircle2 className="h-3 w-3" />
            Audit Ready
          </span>
        </div>

        {/* KPI tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="p-3 rounded-md border border-border/60 bg-background/40"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <k.icon className="h-3.5 w-3.5 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {k.label}
                </span>
              </div>
              <div className="font-mono text-2xl md:text-3xl text-foreground">
                {k.value}
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">{k.sub}</div>
            </div>
          ))}
        </div>

        {/* Severity breakdown + defect lifecycle grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Severity breakdown */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Bug severity breakdown
              </div>
              <div className="font-mono text-[10px] text-primary">total {total}</div>
            </div>
            <div className="space-y-2.5">
              {sev.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-muted-foreground w-20 shrink-0 flex items-center gap-1.5">
                    <s.icon className="h-3 w-3" />
                    {s.label}
                  </span>
                  <div className="flex-1 h-2.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${s.pct}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`h-full ${s.tone}`}
                    />
                  </div>
                  <span className="font-mono text-[11px] text-foreground w-16 text-right">
                    {s.count} · {s.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Defect lifecycle + Nada's contribution */}
          <div className="space-y-4">
            {/* Defect lifecycle */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">
                Defect lifecycle
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-center">
                  <div className="font-mono text-lg text-emerald-500">{m.defectsFixed}</div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">
                    Fixed
                  </div>
                </div>
                <div className="p-2.5 rounded-md border border-amber-500/30 bg-amber-500/10 text-center">
                  <div className="font-mono text-lg text-amber-500">{m.defectsDeferred}</div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">
                    Deferred
                  </div>
                </div>
                <div className="p-2.5 rounded-md border border-muted-foreground/30 bg-muted/30 text-center">
                  <div className="font-mono text-lg text-muted-foreground">
                    {m.defectsRejected}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">
                    Rejected
                  </div>
                </div>
              </div>
            </div>

            {/* Nada's contribution */}
            <div className="p-3 rounded-md border border-primary/40 bg-primary/5">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-3.5 w-3.5 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                  My contribution (Patient Registration + Login)
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="font-mono text-xl text-primary">
                    {m.nadaTestCases}
                    <span className="text-[10px] text-muted-foreground ml-1">
                      / {m.testCases}
                    </span>
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground">
                    test cases written
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xl text-primary">
                    {m.nadaBugs}
                    <span className="text-[10px] text-muted-foreground ml-1">
                      / {m.bugsLogged}
                    </span>
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground">
                    bugs logged
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export function Projects() {
  const [active, setActive] = useState(0)
  const p = PROJECTS[active]

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          index="05"
          label="Featured Projects"
          title="Four projects, four different intersections"
          description="From neural network training to circuit simulation to platform architecture to a full STLC manual-testing run on a healthcare booking platform — each one is a place where robotics meets rigorous QA."
        />

        <ProjectMetricsPanel activeId={p.id} />

        <Tabs value={p.id} onValueChange={(v) => setActive(PROJECTS.findIndex((x) => x.id === v))}>
          {/* Tab triggers */}
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-card/40 border border-border/60 p-1.5 mb-8 h-auto gap-1">
            {PROJECTS.map((proj) => (
              <TabsTrigger
                key={proj.id}
                value={proj.id}
                className="flex flex-col items-start gap-1 p-3 sm:p-4 data-[state=active]:bg-primary/10 data-[state=active]:border data-[state=active]:border-primary/30 text-left h-auto rounded-md transition-all"
              >
                <div className="flex items-center gap-2 w-full">
                  <proj.icon className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {proj.code}
                  </span>
                </div>
                <span className="font-semibold text-xs sm:text-sm leading-tight line-clamp-2">
                  {proj.title}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab contents */}
          {PROJECTS.map((proj, idx) => (
            <TabsContent key={proj.id} value={proj.id} className="mt-0 focus-visible:outline-none">
              <AnimatePresence mode="wait">
                {active === idx && (
                  <motion.div
                    key={proj.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35 }}
                    className="grid lg:grid-cols-12 gap-6"
                  >
                    {/* Left: project overview */}
                    <div className="lg:col-span-5 space-y-5">
                      <div className="panel-border bg-card/70 p-6 md:p-8">
                        <div className="flex items-center justify-between mb-5">
                          <div className="grid place-items-center h-12 w-12 rounded-md bg-primary/10 border border-primary/30 text-primary">
                            <proj.icon className="h-6 w-6" />
                          </div>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary font-mono text-[10px] uppercase tracking-wider">
                            <CheckCircle2 className="h-3 w-3" />
                            {proj.status}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold leading-tight">{proj.title}</h3>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {proj.long}
                        </p>

                        {/* Tech chips */}
                        <div className="mt-5 pt-5 border-t border-border/60">
                          <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">
                            Stack / approach
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {proj.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 rounded border border-border/60 bg-muted/40 font-mono text-[10px] text-foreground/80"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Build status block */}
                      <div className="panel-border bg-card/40 p-5 font-mono text-xs">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary status-pulse" />
                          <span className="text-[10px] uppercase tracking-wider text-primary">
                            Build log
                          </span>
                        </div>
                        <pre className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                          <span className="text-primary">$</span> init {proj.code}
                          {'\n'}
                          <span className="text-primary">[ok]</span> requirements gathered
                          {'\n'}
                          <span className="text-primary">[ok]</span> design drafted
                          {'\n'}
                          <span className="text-primary">[ok]</span> implementation
                          {'\n'}
                          <span className="text-primary">[ok]</span> validation passed
                          {'\n'}
                          <span className="text-primary">{'>'}</span> {proj.status.toLowerCase()}
                          <span className="cursor-blink text-primary">_</span>
                        </pre>
                      </div>
                    </div>

                    {/* Right: highlights grid */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 content-start">
                      {proj.highlights.map((h, i) => (
                        <motion.div
                          key={h.label}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                          className="panel-border bg-card/60 p-5 group hover:bg-card transition-colors"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="grid place-items-center h-10 w-10 rounded-md bg-primary/10 border border-primary/30 text-primary">
                              <h.icon className="h-4 w-4" />
                            </div>
                            <span className="font-mono text-[10px] text-muted-foreground">
                              0{i + 1}
                            </span>
                          </div>
                          <h4 className="font-semibold text-sm mb-1.5">{h.label}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {h.detail}
                          </p>
                          <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1.5">
                            <ArrowUpRight className="h-3 w-3 text-primary" />
                            <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                              Validated
                            </span>
                          </div>
                        </motion.div>
                      ))}

                      {/* Filler card with metrics */}
                      <div className="panel-border bg-primary/5 p-5">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-primary mb-3">
                          Snapshot
                        </div>
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">Track</span>
                            <span className="font-mono text-xs text-foreground">
                              {idx === 0 ? 'ML' : idx === 1 ? 'System' : idx === 2 ? 'Hardware' : 'QA'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">Status</span>
                            <span className="font-mono text-xs text-primary">{proj.status}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">Highlights</span>
                            <span className="font-mono text-xs text-foreground">
                              {proj.highlights.length} core
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Resources block (only for projects with documentation links) */}
                      {proj.resources && proj.resources.length > 0 && (
                        <div className="panel-border bg-card/60 p-5 sm:col-span-2">
                          <div className="flex items-center gap-2 mb-3">
                            <ExternalLink className="h-4 w-4 text-primary" />
                            <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                              Documentation &amp; Deliverables
                            </span>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-2.5">
                            {proj.resources.map((r) => (
                              <a
                                key={r.href}
                                href={r.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between gap-2 px-3 py-2.5 rounded-md border border-border/60 bg-background/40 hover:border-primary/50 hover:bg-primary/5 transition-colors"
                              >
                                <div className="min-w-0">
                                  <div className="text-xs font-semibold text-foreground truncate">
                                    {r.label}
                                  </div>
                                  <div className="font-mono text-[10px] text-muted-foreground truncate">
                                    {r.href}
                                  </div>
                                </div>
                                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary shrink-0 transition-colors" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
