import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiTerminal } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onActivateCLI?: () => void;
}

export default function Navbar({ onActivateCLI }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Toggle glass background when leaving the exact top
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Hide navbar when scrolling down securely, show when scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled 
          ? 'shadow-lg max-md:bg-bg-primary md:glass-strong md:backdrop-blur-xl md:bg-bg-primary/80' 
          : 'max-md:bg-bg-primary md:bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-end px-6 py-4 md:justify-center">
        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className="relative text-sm font-medium tracking-wide transition-colors duration-200 hover:text-text-primary"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {link.label}
              </button>
            </li>
          ))}
          {/* Developer Mode Toggle Button */}
          <li>
            <button
              onClick={onActivateCLI}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full border px-4 py-2 text-xs font-bold tracking-widest transition-all duration-300 hover:scale-105 hover:opacity-90 shadow-lg"
              style={{
                backgroundColor: 'var(--color-text-primary)',
                color: 'var(--color-bg-primary)',
                borderColor: 'var(--color-text-primary)'
              }}
              aria-label="Activate Developer Mode"
            >
              <div className="absolute inset-0 -z-10 -translate-x-full bg-linear-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <FiTerminal size={14} />
              Developer Mode
            </button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden"
          style={{ color: 'var(--color-text-primary)' }}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-bg-primary border-t md:hidden"
            style={{ borderColor: 'var(--color-glass-border)' }}
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-bg-tertiary"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onActivateCLI?.();
                  }}
                  className="group flex w-full items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-left text-sm font-medium tracking-widest transition-all hover:border-text-muted hover:bg-bg-tertiary"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  <FiTerminal size={16} className="text-text-muted transition-colors group-hover:text-white" />
                  DEVELOPER MODE
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
