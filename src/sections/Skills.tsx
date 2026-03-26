import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiBootstrap, SiNextdotjs,
  SiNodedotjs, SiExpress, SiNestjs, SiPostgresql, SiMongodb, SiMysql,
  SiGit, SiGithub, SiLinux, SiRedis
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import type { ReactNode } from 'react';

interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; icon: ReactNode }[];
}

const categories: SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Building responsive and accessible user interfaces',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
    ],
  },
  {
    title: 'Backend',
    description: 'Designing scalable APIs, business logic, and databases',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'NestJS', icon: <SiNestjs /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
  },
  {
    title: 'Tools & Infrastructure',
    description: 'Leveraging modern tooling and cloud environments',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Linux (Ubuntu)', icon: <SiLinux /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Redis', icon: <SiRedis /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 py-24"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat, idx) => (
            <AnimatedSection key={cat.title} delay={idx * 0.15}>
              <GlassCard className="h-full" hover={false}>
                <h3
                  className="font-display text-lg font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  {cat.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors duration-200 hover:bg-[var(--color-bg-tertiary)]"
                      style={{
                        backgroundColor: 'rgba(50, 49, 51, 0.3)',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      <span className="text-base">{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
