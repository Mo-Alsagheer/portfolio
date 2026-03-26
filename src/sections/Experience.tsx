import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import { FiBriefcase } from 'react-icons/fi';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
}

const experiences: ExperienceItem[] = [
  {
    title: 'Cloud Services Management & Operation',
    company: 'National Telecom Institute (NTI)',
    period: 'Jul 2025 – Sep 2025',
    description: [
      'Mastered Cloud foundations, core AWS services, security, economics, and solutions architecture',
      'Completed the AWS Academy Cloud Architecting track (Storage, Compute, Database, Networking, Microservices, Serverless)',
      'Graduated from the Professional Skills Program, enhancing communication, leadership, and problem-solving capabilities',
    ],
    type: 'education',
  },
  {
    title: 'Full Stack Development Intern',
    company: 'STEM Entrepreneurship Center',
    period: 'Mar 2025 – Jul 2025',
    description: [
      'Gained practical experience across the full stack, including developing interactive user interfaces',
      'Built server-side applications and RESTful APIs, and efficiently managed data using SQL and NoSQL databases',
    ],
    type: 'work',
  },
  {
    title: 'Team Lead',
    company: '3C Coding School',
    period: 'Sep 2024 – Present',
    description: [
      'Directed a team of instructors by providing continuous mentorship, rigorous evaluations, and tailored development',
      'Designed and implemented comprehensive programming curricula aligning with industry standards',
    ],
    type: 'work',
  },
  {
    title: 'Web Development Instructor',
    company: '3C Coding School',
    period: 'Feb 2024 – Present',
    description: [
      'Taught frontend and backend development to students of varying age groups and skill levels',
      'Delivered engaging lessons that enabled students to build and deploy responsive web applications',
    ],
    type: 'work',
  },
  {
    title: 'Information Technology Intern',
    company: 'Gemsa Petroleum Company',
    period: 'Sep 2023 – Oct 2023',
    description: [
      'Gained practical experience supporting technical operations, troubleshooting issues, and resolving IT support needs',
      'Worked on improving system efficiency and ensuring smooth technical workflows',
    ],
    type: 'work',
  },
  {
    title: 'Coding Instructor',
    company: '3C Coding School',
    period: 'Jul 2023 – Present',
    description: [
      'Designed and delivered age-appropriate coding curricula for over 300 students, improving assessment scores',
      'Conducted interactive workshops producing over 50 fully functional applications, tools, and games',
    ],
    type: 'work',
  },
  {
    title: 'B.Sc. Software Engineering',
    company: 'Helwan University',
    period: 'Sep 2022 – Expected Jun 2026',
    description: [
      'Focusing on Software Design, Architecture, Data Structures, Algorithms, and OOP',
      'Building foundational knowledge in full-stack architecture and system design',
    ],
    type: 'education',
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-24"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and education."
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.15}>
                <div className="relative pl-12 md:pl-0">
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full md:left-1/2 md:-translate-x-1/2"
                    style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
                  >
                    <FiBriefcase className="text-sm" style={{ color: 'var(--color-text-muted)' }} />
                  </div>

                  {/* Content */}
                  <div
                    className={`glass rounded-2xl p-6 md:w-[calc(50%-2rem)] ${
                      idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    <span
                      className="text-xs font-medium tracking-wider uppercase"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {exp.period}
                    </span>
                    <h3
                      className="mt-2 font-display text-lg font-semibold"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>
                      {exp.company}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm leading-relaxed"
                          style={{ color: 'var(--color-text-muted)' }}
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full"
                            style={{ backgroundColor: 'var(--color-text-muted)' }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
