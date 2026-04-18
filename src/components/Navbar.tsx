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
    <>
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      initial="hidden"
      animate={hidden && !isOpen ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled
            ? 'shadow-lg max-md:bg-bg-primary md:glass-strong md:backdrop-blur-xl md:bg-bg-primary/80'
            : 'max-md:bg-bg-primary md:bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:justify-center">
          {/* Brand name — mobile only */}
          <span className="text-sm font-bold tracking-widest md:hidden">
            <span className="text-gradient">Mo Alsagheer</span>
          </span>
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
            {/* Developer Mode Toggle Button - Desktop */}
            <li>
              <button
                onClick={onActivateCLI}
                className="group relative flex items-center gap-2 overflow-hidden rounded-full border px-4 py-2 text-xs font-bold tracking-widest transition-all duration-300 hover:scale-105 hover:opacity-90 shadow-lg"
                style={{
                  backgroundColor: 'var(--color-text-primary)',
                  color: 'var(--color-bg-primary)',
                  borderColor: 'var(--color-text-primary)',
                }}
                aria-label="Activate Developer Mode"
              >
                <div className="absolute inset-0 -z-10 -translate-x-full bg-linear-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <FiTerminal size={14} />
                Developer Mode
              </button>
            </li>
          </ul>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Developer Mode Button - Mobile (outside menu) */}
            <button
              onClick={onActivateCLI}
              className="group relative flex items-center gap-1.5 overflow-hidden rounded-md border px-1.5 py-1.5 text-xs font-bold tracking-widest transition-all duration-300 hover:scale-105 shadow-md"
              style={{
                backgroundColor: 'var(--color-text-primary)',
                color: 'var(--color-bg-primary)',
                borderColor: 'var(--color-text-primary)',
              }}
              aria-label="Activate Developer Mode"
            >
              <FiTerminal size={12} />
            </button>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl"
              style={{ color: 'var(--color-text-primary)' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — fixed independently so it stays on screen regardless of navbar hide state */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[64px] left-0 right-0 bottom-0 z-40 bg-bg-primary md:hidden overflow-y-auto"
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
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
