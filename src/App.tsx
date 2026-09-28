import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react'

const email = 'ahmad.o.ilawa@gmail.com'
const linkedIn = 'https://www.linkedin.com/in/ahmadilawa/'
const github = 'https://github.com/ahmadeleiwa'

const stats = [
  { value: '40%', label: 'faster RAG responses' },
  { value: '1 month', label: 'idea to launch' },
  { value: '40%', label: 'faster image delivery' },
  { value: '40+', label: 'GitHub stars' },
  { value: '360+', label: 'hours of training' },
]

const projects = [
  {
    name: 'Plantie',
    kind: 'AI · AGRICULTURE',
    role: 'Co-founder · AI engineering',
    description:
      'An AI-powered agriculture platform. I built a multi-tool RAG agent with Mistral embeddings to connect farmers with useful, grounded answers.',
    outcome: 'Reduced backend response times by 40%.',
    tags: ['RAG', 'Mistral', 'AI agents'],
    accent: 'cyan',
  },
  {
    name: 'luxolis.ai',
    kind: 'AI · PRODUCT BUILD',
    role: 'Full-stack development',
    description:
      'Partnered with executive leadership to take luxolis.ai from an idea to a launched product, working across the experience end to end.',
    outcome: 'Built and launched in one month; improved frontend rendering by 20%.',
    tags: ['React', 'AI', 'Product engineering'],
    accent: 'violet',
  },
  {
    name: 'CandySweet',
    kind: 'E-COMMERCE · PLATFORM',
    role: 'Full-stack development',
    description:
      'Built a complete e-commerce platform ahead of schedule, helping streamline the business behind a confectionery brand.',
    outcome: 'Improved image delivery by 40%.',
    tags: ['Supabase', 'Cloudinary', 'Cloudflare'],
    accent: 'pink',
  },
  {
    name: 'Enterprise POS',
    kind: 'REAL-TIME · MERN',
    role: 'Independent project',
    description:
      'A real-time point-of-sale system that keeps sales and inventory in sync and automates day-to-day stock management.',
    outcome: 'Earned 40+ GitHub stars from the developer community.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    accent: 'lime',
  },
]

const skillGroups = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'Redux', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI'],
  },
  {
    name: 'Backend & AI',
    skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs', 'RAG', 'LLM integration', 'Vector databases'],
  },
  {
    name: 'Data & infrastructure',
    skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'Firebase', 'AWS EC2', 'Cloudflare', 'Cloudinary'],
  },
  {
    name: 'Languages & tools',
    skills: ['C++', 'C#', 'Git', 'GitHub', 'Postman', 'Agile', 'Rapid prototyping'],
  },
]

function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Ahmad Ilawa, home">
      <span>AHMAD ILAWA</span>
    </a>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    ['Work', '#work'],
    ['About', '#about'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Brand />

        <div className={`nav-content ${menuOpen ? 'nav-content-open' : ''}`}>
          <nav className="nav-links" aria-label="Main navigation">
            {links.map(([label, href]) => (
              <a href={href} key={label} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}

            <a
              className="nav-contact"
              href={`mailto:${email}`}
              aria-label="Email Ahmad"
            >
              <Mail size={15} />
            </a>

            <a
              className="nav-contact"
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>

            <a
              className="nav-contact"
              href={linkedIn}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
          </nav>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  const [photoAvailable, setPhotoAvailable] = useState(true)

  return (
    <section id="home" className="hero section-wrap">
      <Reveal className="hero-card">
        <div className="hero-copy">
          <p className="hero-greeting">Hey, I&apos;m Ahmad</p>

          <h1>
            Full Stack
            <br />
            Developer
          </h1>

          <p className="hero-summary">
            I build production-ready AI products and full-stack platforms. Most
            software is built feature by feature — I enjoy building products
            from zero.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              See what I&apos;ve built <ArrowDown size={14} />
            </a>

            <a className="text-link" href={`mailto:${email}`}>
              Get in touch <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="hero-portrait" aria-label="Ahmad Ilawa">
          <div className="portrait-halo halo-one" />
          <div className="portrait-halo halo-two" />

          <div className="portrait-image-wrap">
            {photoAvailable && (
              <img
                className="portrait-image"
                src="/profile_pic.jpg"
                alt="Ahmad Ilawa"
                onError={() => setPhotoAvailable(false)}
              />
            )}

            {!photoAvailable && (
              <span className="portrait-monogram">AI</span>
            )}
          </div>

          <span className="portrait-orbit-dot" />
        </div>
      </Reveal>
    </section>
  )
}

function AchievementTicker() {
  const items = [...stats, ...stats]

  return (
    <section
      className="achievement-section"
      aria-label="A few things I am proud of"
    >
      <div className="ticker-window">
        <div className="ticker-track">
          {items.map((stat, index) => (
            <div
              className="ticker-item"
              key={`${stat.value}-${stat.label}-${index}`}
              aria-hidden={index >= stats.length}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <span className="ticker-separator" aria-hidden="true">
                ✳
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={(index % 2) * 0.07}>
      <article className={`project-card project-${project.accent}`}>
        <div className="project-card-top">
          <span className="project-kind">{project.kind}</span>
        </div>

        <h3>{project.name}</h3>

        <p className="project-role">{project.role}</p>

        <p className="project-description">{project.description}</p>

        <div className="project-outcome">
          <Check size={14} />
          <span>{project.outcome}</span>
        </div>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </article>
    </Reveal>
  )
}

function SkillGroup({ group }) {
  return (
    <div className="skill-group">
      <h4>{group.name}</h4>

      <div className="skill-list">
        {group.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <div id="about" className="about-section">
      <div className="section-heading">
        <span className="section-label">
          <i /> A LITTLE ABOUT ME
        </span>

        <h2>
          I like the messy bit
          <br />
          between <span>idea and launch.</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I&apos;m a software engineer with a background in Computer
            Engineering. I work with startups, founders, and cross-functional
            teams to turn ambitious ideas into real, production-ready
            products.
          </p>

          <p>
            That could mean architecting a full-stack platform, putting an LLM
            to work in a real workflow, or untangling a tricky performance
            problem. I enjoy understanding the problem, choosing a practical
            solution, and seeing it through to launch.
          </p>

          <div className="education-card">
            <span className="education-icon">✳</span>

            <div>
              <strong>360+ hours of learning by doing</strong>
              <span>
                Advanced software engineering &amp; AI training · Gaza Sky
                Geeks &amp; PSD
              </span>
            </div>
          </div>
        </div>

        <div className="skills-panel">
          <div className="skills-panel-heading">
            <span className="section-label">My toolkit</span>
          </div>

          {skillGroups.map((group) => (
            <SkillGroup group={group} key={group.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-wrap contact-wrap">
        <div className="contact-copy">
          <span className="section-label">
            <i /> YOUR TURN
          </span>

          <h2>
            Building something
            <br />
            from <span>zero?</span>
          </h2>

          <p>
            If you&apos;re working on something exciting—or need someone to own
            the architecture and execution—I&apos;d love to hear about it.
          </p>

          <a className="contact-email" href={`mailto:${email}`}>
            {email} <ArrowUpRight size={15} />
          </a>

          <div className="contact-socials flex gap-4">
            <a href={github} target="_blank" rel="noreferrer">
              <Github size={15} /> GitHub
            </a>

            <a href={linkedIn} target="_blank" rel="noreferrer">
              <Linkedin size={15} /> LinkedIn
            </a>

            <a href={`mailto:${email}`}>
              <Mail size={15} /> Email me
            </a>
          </div>
        </div>

        <div className="contact-form h-52 gap-0">
          <span className="form-title">
            <i /> FIND ME ONLINE
          </span>

          <div className="contact-socials flex flex-col gap-4">
            <a href={`mailto:${email}`}>
              <Mail size={15} />
              <span>Email</span>
              <strong>{email}</strong>
              <ArrowRight size={14} />
            </a>

            <a href={github} target="_blank" rel="noreferrer">
              <Github size={15} />
              <span>GitHub</span>
              <strong>@ahmadeleiwa</strong>
              <ArrowRight size={14} />
            </a>

            <a href={linkedIn} target="_blank" rel="noreferrer">
              <Linkedin size={15} />
              <span>LinkedIn</span>
              <strong>@ahmadilawa</strong>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer section-wrap">

      <p>Made with care, somewhere between idea &amp; production.</p>

      <a href="#home" className="footer-top">
        BACK TO TOP ↑
      </a>
    </footer>
  )
}

export default function App() {
  return (
    <div className="app-shell">
      <Header />

      <main>
        <Hero />

        <AchievementTicker />

        <section id="work" className="work-section section-wrap">
          <div className="section-heading work-heading">
            <span className="section-label">
              <i /> SELECTED WORK
            </span>

            <div>
              <h2>
                Good ideas.
                <br />
                <span>Shipped.</span>
              </h2>

              <p>
                A few of the problems I&apos;ve helped turn into working
                products.
              </p>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.number}
                project={project}
                index={index}
              />
            ))}
          </div>

          <About />
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  )
}