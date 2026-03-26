import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Terminal from './components/Terminal';

function App() {
  const [viewMode, setViewMode] = useState<'gui' | 'cli'>('gui');

  return (
    <AnimatePresence mode="wait">
      {viewMode === 'cli' ? (
        <motion.div
          key="cli"
          initial={{ opacity: 0, scale: 0.97, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.03, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="min-h-screen bg-black"
        >
          <Terminal onExit={() => setViewMode('gui')} />
        </motion.div>
      ) : (
        <motion.div
          key="gui"
          initial={{ opacity: 0, scale: 1.03, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.97, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="min-h-screen"
          style={{ backgroundColor: 'var(--color-bg-primary)' }}
        >
          <Navbar onActivateCLI={() => setViewMode('cli')} />
          <main className="flex flex-col gap-24 pb-24 lg:gap-32 lg:pb-32">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
