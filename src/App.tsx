import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  GitBranch,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Network,
  Rocket,
  Send,
  Server,
  Sparkles,
  TableProperties,
  Wrench,
  X,
} from 'lucide-react'
import {
  githubStats,
  journey,
  navItems,
  profile,
  projects,
  services,
  skillGroups,
  type Project,
} from './data/portfolio'

const icons = {
  Server,
  Database,
  GitBranch,
  Wrench,
  Rocket,
  Layers,
  Network,
  TableProperties,
  Code2,
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={{ duration: 0.55 }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <div className="mx-auto my-5 h-px w-28 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
      <p className="text-base leading-7 text-slate-300">{description}</p>
    </motion.div>
  )
}

function TechBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020611]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.2),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.18),transparent_30%),linear-gradient(135deg,#020611_0%,#06111f_48%,#020617_100%)]" />
      <div className="network-grid absolute inset-0 opacity-45" />
      <div className="particle-field absolute inset-0" />
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.22)]">
            YS
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">
            Yashraj Singh Patel
          </span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-200"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-lg border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10 lg:inline-flex"
        >
          Hire Me
        </a>
        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function HeroVisual() {
  return (
    <motion.div
      className="relative mx-auto flex aspect-square max-w-[360px] items-center justify-center"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15 }}
    >
      <div className="absolute inset-3 rounded-full border border-cyan-300/25 shadow-[0_0_80px_rgba(34,211,238,0.18)]" />
      <div className="absolute inset-12 rounded-full border border-blue-400/20" />
      <motion.div
        className="absolute right-2 top-10 rounded-xl border border-white/10 bg-white/10 p-3 text-cyan-200 backdrop-blur"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Server size={28} />
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-0 rounded-xl border border-white/10 bg-white/10 p-3 text-blue-200 backdrop-blur"
        animate={{ y: [7, -7, 7] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Database size={28} />
      </motion.div>
      <div className="relative h-56 w-56 overflow-hidden rounded-full border border-cyan-300/40 bg-gradient-to-br from-slate-800 via-slate-950 to-blue-950 p-2 shadow-[0_0_70px_rgba(14,165,233,0.25)] sm:h-64 sm:w-64">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_10%,rgba(34,211,238,0.24),transparent_35%),linear-gradient(145deg,#0f172a,#020617)]">
          <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-300/10 text-5xl font-semibold text-cyan-100">
            YS
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
            Django
          </p>
          <p className="mt-2 text-xs text-slate-400">Backend Engineer</p>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectMockup({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-950/80 p-3">
      <div className="mb-3 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className={`mb-4 h-24 rounded-lg bg-gradient-to-br ${project.accent} opacity-90`}>
        <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,rgba(2,6,23,0.1)_25%,transparent_25%),linear-gradient(225deg,rgba(2,6,23,0.12)_25%,transparent_25%)] bg-[length:18px_18px]">
          {project.title === 'ATS Score Checker' ? (
            <BriefcaseBusiness className="text-white" size={42} />
          ) : (
            <Bot className="text-white" size={42} />
          )}
        </div>
      </div>
      <div className="space-y-2">
        {project.metrics.map((metric, index) => (
          <div key={metric} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            <span
              className="h-2 rounded-full bg-white/15"
              style={{ width: `${88 - index * 14}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <TechBackground />
      <Navbar />
      <main>
        <section id="home" className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              <Sparkles size={16} />
              Available for backend developer opportunities
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <div className="mt-4 h-9 overflow-hidden text-2xl font-semibold text-cyan-200 sm:text-3xl">
              <span className="typing-text inline-block">{profile.role}</span>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I am a Python Django Developer with {profile.experience}, passionate about building scalable web applications, REST APIs, and backend systems using Python, Django, DRF, SQL, and modern engineering practices.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="glow-button inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
                View Projects <ArrowUpRight size={18} />
              </a>
              <a href={profile.resumeUrl} className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10">
                Download Resume <Download size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 px-5 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-300/10">
                Contact Me <Mail size={18} />
              </a>
            </div>
            <div className="mt-8 flex gap-3">
              <a className="icon-link" href={profile.githubUrl} aria-label="GitHub"><GitBranch size={20} /></a>
              <a className="icon-link" href={profile.linkedinUrl} aria-label="LinkedIn"><BriefcaseBusiness size={20} /></a>
              <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Email"><Mail size={20} /></a>
            </div>
          </motion.div>
          <HeroVisual />
        </section>

        <section id="about" className="section-shell">
          <SectionHeader
            eyebrow="About Me"
            title="Backend-focused, project-driven, and continuously improving"
            description="A professional story shaped by learning, building, debugging, and turning backend ideas into useful web applications."
          />
          <motion.div className="glass-card mx-auto grid max-w-5xl gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Current Focus</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Python, Django, DRF, SQL, MySQL, Git, GitHub</h3>
              <p className="mt-5 text-slate-300">Now expanding into Redis, Celery, Docker, Nginx, AWS, and System Design to become a stronger backend engineer.</p>
            </div>
            <div className="space-y-4 text-base leading-8 text-slate-300">
              <p>
                I specialize in building backend systems with Python and Django, with practical experience creating APIs, working with relational databases, and organizing code for maintainability.
              </p>
              <p>
                My learning journey is focused on becoming the kind of developer recruiters and engineering teams can trust: someone who understands fundamentals, communicates clearly, and keeps improving through real projects.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="section-shell">
          <SectionHeader eyebrow="Skills" title="Technology stack" description="Core backend skills, everyday tools, and the technologies I am actively learning for scalable systems." />
          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {skillGroups.map((group, index) => {
              const Icon = icons[group.icon as keyof typeof icons]
              return (
                <motion.article key={group.title} className="glass-card group p-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.06 }}>
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/25 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                    <Icon size={23} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <SectionHeader eyebrow="Featured Projects" title="Recruiter-ready backend projects" description="Static showcase cards with project screenshots represented as polished UI mockups and placeholder GitHub/live demo links." />
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article key={project.title} className="glass-card p-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.08 }}>
                <ProjectMockup project={project} />
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{project.subtitle}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-md bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-cyan-300/20">{tech}</span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a className="project-button" href="#github-placeholder"><GitBranch size={17} /> GitHub</a>
                  <a className="project-button" href="#demo-placeholder"><ArrowUpRight size={17} /> Live Demo</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="journey" className="section-shell">
          <SectionHeader eyebrow="Learning Journey" title="From fundamentals to scalable architecture" description="A concise timeline of my developer growth and current backend engineering direction." />
          <div className="mx-auto max-w-4xl">
            {journey.map((item, index) => (
              <motion.div key={item.title} className="timeline-item relative grid gap-4 pb-10 pl-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-sm font-bold text-cyan-100">{index + 1}</span>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{item.phase}</p>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="leading-7 text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="services" className="section-shell">
          <SectionHeader eyebrow="Services" title="Backend services I can support" description="Focused service areas aligned with Django backend development, APIs, databases, and web application foundations." />
          <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = icons[service.icon as keyof typeof icons]
              return (
                <motion.article key={service.title} className="glass-card p-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.06 }}>
                  <Icon className="mb-5 text-cyan-200" size={30} />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section className="section-shell">
          <SectionHeader eyebrow="GitHub Activity" title="Static development snapshot" description="Placeholder cards for repository activity, coding focus, and technology stack with no API calls or live integrations." />
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {githubStats.map((stat) => (
              <motion.div key={stat.label} className="glass-card p-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <p className="text-sm uppercase tracking-[0.22em] text-cyan-200">{stat.label}</p>
                <p className="mt-4 text-4xl font-semibold text-white">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell pb-16">
          <SectionHeader eyebrow="Contact" title="Let’s connect about backend opportunities" description="Static contact details and a visual-only form designed for presentation." />
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div className="glass-card p-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="space-y-4">
                <a className="contact-row" href={`mailto:${profile.email}`}><Mail size={20} /> {profile.email}</a>
                <p className="contact-row"><MapPin size={20} /> {profile.location}</p>
                <a className="contact-row" href={profile.githubUrl}><GitBranch size={20} /> GitHub profile placeholder</a>
                <a className="contact-row" href={profile.linkedinUrl}><BriefcaseBusiness size={20} /> LinkedIn profile placeholder</a>
              </div>
            </motion.div>
            <motion.form
              className="glass-card grid gap-4 p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              onSubmit={(event) => event.preventDefault()}
            >
              <input className="form-field" type="text" placeholder="Your name" aria-label="Your name" />
              <input className="form-field" type="email" placeholder="Your email" aria-label="Your email" />
              <textarea className="form-field min-h-36 resize-none" placeholder="Project or opportunity details" aria-label="Message" />
              <button type="submit" className="glow-button inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 font-semibold text-slate-950">
                Visual Form Only <Send size={18} />
              </button>
            </motion.form>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p>Designed for recruiters and hiring managers. Built as a static portfolio.</p>
          <div className="flex items-center gap-2 text-cyan-200"><MessageSquare size={16} /> Python Django Developer</div>
        </div>
      </footer>
    </>
  )
}

export default App
