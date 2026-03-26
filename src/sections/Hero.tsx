import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="hero-glow" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase"
          style={{
            borderColor: 'var(--color-glass-border)',
            backgroundColor: 'var(--color-glass-bg)',
            color: 'var(--color-text-primary)'
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Available for Work
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-6xl font-extrabold tracking-tighter md:text-8xl lg:text-9xl"
        >
          <span className="text-gradient">Mohamed Alsagheer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed md:text-xl lg:text-2xl"
          style={{ color: 'var(--color-text-muted)' }}
        >
          A <span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>Software Engineer</span> architecting
          elegant, high-performance web applications using modern technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{
              backgroundColor: 'var(--color-text-primary)',
              color: 'var(--color-bg-primary)'
            }}
          >
            Let's Talk
          </a>
          <a
            href="/Mohamed_Mostafa_CV.pdf"
            download="Mohamed_Mostafa_CV.pdf"
            className="flex items-center gap-2 rounded-full border px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
            style={{ 
              color: 'var(--color-text-primary)', 
              borderColor: 'var(--color-bg-tertiary)',
              backgroundColor: 'var(--color-glass-bg)'
            }}
          >
            <FiDownload />
            Download Resume
          </a>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {['React', 'TypeScript', 'Node.js', 'NestJS', 'Express'].map((tech) => (
            <span
              key={tech}
              className="glass rounded-full px-4 py-1.5 text-xs font-medium tracking-wide"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border pt-2"
          style={{ borderColor: 'var(--color-bg-tertiary)' }}
        >
          <div
            className="h-1.5 w-1 rounded-full"
            style={{ backgroundColor: 'var(--color-text-muted)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
