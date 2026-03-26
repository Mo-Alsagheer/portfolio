import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import { FiCode, FiBriefcase, FiUsers } from 'react-icons/fi';

const stats = [
  { icon: <FiCode className="text-xl" />, value: '50+', label: 'Apps Produced' },
  { icon: <FiBriefcase className="text-xl" />, value: '2+', label: 'Years Experience' },
  { icon: <FiUsers className="text-xl" />, value: '300+', label: 'Students Taught' },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me and what drives my passion for building great software."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Profile Image Area */}
          <AnimatedSection>
            <div className="relative mx-auto w-full max-w-sm group">
              <div
                className="glass relative aspect-square overflow-hidden rounded-3xl transition-transform duration-500 group-hover:scale-[1.02]"
              >
                <img
                  src="/my-image.jpg"
                  alt="Mohamed Portfolio Profile"
                  className="h-full w-full object-cover object-bottom transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Decorative border glow */}
              <div
                className="absolute -inset-1 -z-10 rounded-3xl opacity-30 blur-xl transition-all duration-500 group-hover:opacity-70 group-hover:blur-2xl"
                style={{
                  background: 'linear-gradient(135deg, var(--color-text-muted), transparent)',
                }}
              />
            </div>
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                I'm a <span style={{ color: 'var(--color-text-primary)' }}>Software Engineer</span> with
                hands-on experience in designing and implementing scalable, secure, and efficient web
                applications.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                Skilled in <span style={{ color: 'var(--color-text-primary)' }}>JavaScript</span>,{' '}
                <span style={{ color: 'var(--color-text-primary)' }}>TypeScript</span>,{' '}
                <span style={{ color: 'var(--color-text-primary)' }}>Node.js</span>,{' '}
                <span style={{ color: 'var(--color-text-primary)' }}>React.js</span>,{' '}
                <span style={{ color: 'var(--color-text-primary)' }}>Express.js</span>, and{' '}
                <span style={{ color: 'var(--color-text-primary)' }}>NestJS</span>. I love turning
                complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                What makes me a little different: I've spent years as a coding instructor and team lead, helping
                <span style={{ color: 'var(--color-text-primary)' }}> 300+ students </span> go from zero to building and deploying their own apps. 
                Teaching forced me to truly understand what I build — not just make it work, but explain why it works.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <GlassCard key={stat.label} className="text-center" hover={false}>
                    <div className="mb-2 flex justify-center" style={{ color: 'var(--color-text-muted)' }}>
                      {stat.icon}
                    </div>
                    <p
                      className="font-display text-2xl font-bold"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      {stat.label}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
