import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socialLinks = [
  { icon: <FiGithub />, href: 'https://github.com/Mo-Alsagheer', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/mohamed-mostafa-a3a9691b4/', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:mohamedalsgher2004@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer
      className="border-t px-6 py-8"
      style={{ borderColor: 'var(--color-glass-border)', backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          © {new Date().getFullYear()} Mohamed. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-lg transition-colors duration-200 hover:text-[var(--color-text-primary)]"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
