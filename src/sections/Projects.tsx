import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Tarkeba E-Commerce',
    description:
      'A modular, production-ready e-commerce platform built with domain-driven architecture. Features secure JWT/OAuth authentication, RBAC, atomic stock management via MongoDB transactions, Paymob checkout, and an analytics dashboard.',
    tech: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Paymob'],
    liveUrl: 'https://tarkeba-ecommerce-client.vercel.app/',
    githubUrl: 'https://github.com/Mo-Alsagheer/tarkeba-ecommerce-server',
    featured: true,
  },
  {
    title: 'Maswada-AI',
    description:
      'A full-stack, AI-powered bilingual note-taking application. Integrates Gemini 2.5 for summarizing, rewriting, and translating notes (EN/AR). Features Clerk authentication, RTL/LTR support, Zod validation, and a scalable Express/Sequelize backend.',
    tech: ['React 19', 'Node.js', 'Express', 'Sequelize', 'Gemini AI'],
    liveUrl: 'https://maswada-ai-template.vercel.app/',
    githubUrl: 'https://github.com/Mo-Alsagheer/maswada-ai-template',
    featured: true,
  },
  {
    title: 'Student Activity Management System (SAMS)',
    description:
      'SAMS is a web-based platform designed to centralize and streamline the management of student activity seasons. The system covers the entire activity lifecycle, including recruitment, committee management, and performance monitoring.',
    tech: ['React 19', 'Node.js', 'Express', 'Sequelize', 'FastAPI', 'PostgreSQL', 'NestJS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mo-Alsagheer/SAMS',
    featured: true,
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="A collection of projects that showcase my skills in full-stack development."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <AnimatedSection key={project.title} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`glass glass-hover glow-hover group flex h-full flex-col rounded-2xl p-6 transition-all duration-300 ${
                  project.featured ? 'ring-1 ring-[var(--color-bg-tertiary)]' : ''
                }`}
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-lg"
                    style={{ backgroundColor: 'rgba(50, 49, 51, 0.5)', color: 'var(--color-text-muted)' }}
                  >
                    <FiGithub />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg transition-colors hover:text-[var(--color-text-primary)]"
                        style={{ color: 'var(--color-text-muted)' }}
                        aria-label={`${project.title} source code`}
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg transition-colors hover:text-[var(--color-text-primary)]"
                        style={{ color: 'var(--color-text-muted)' }}
                        aria-label={`${project.title} live demo`}
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3
                  className="font-display text-lg font-semibold group-hover:text-[var(--color-text-primary)]"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-2.5 py-1 text-xs font-medium"
                      style={{
                        backgroundColor: 'rgba(50, 49, 51, 0.4)',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
