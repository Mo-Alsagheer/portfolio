import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ${className}`}
    >
      {/* Spotlight Effect */}
      {hover && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(239, 237, 231, 0.06), transparent 40%)`,
            zIndex: 1,
          }}
        />
      )}
      
      {/* Border Glow */}
      {hover && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl border border-transparent transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(125, 121, 110, 0.3), transparent 50%) border-box`,
            WebkitMask: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            zIndex: 0,
          }}
        />
      )}

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
