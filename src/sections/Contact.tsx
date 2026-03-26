import { useState, type FormEvent } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeading from '../components/SectionHeading';
import GlassCard from '../components/GlassCard';
import { FiMail, FiMapPin, FiSend, FiCheck, FiAlertCircle, FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: 'mohamedalsgher2004@gmail.com', href: 'mailto:mohamedalsgher2004@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '+20 111 886 7755', href: 'tel:+201118867755' },
    { icon: <FiMapPin />, label: 'Location', value: 'Giza, Egypt', href: undefined },
  ];

  const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/Mo-Alsagheer' },
    { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-mostafa-a3a9691b4/' },
  ];

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-2">
            <AnimatedSection>
              <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                I'm currently available for freelance work and full-time opportunities.
                Whether you have a project that needs building or just want to chat,
                feel free to reach out.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: 'rgba(50, 49, 51, 0.5)', color: 'var(--color-text-muted)' }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm transition-colors hover:text-text-primary"
                          style={{ color: 'var(--color-text-primary)' }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm" style={{ color: 'var(--color-text-primary)' }}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex items-center gap-3 pt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-lg transition-all duration-200 hover:bg-bg-tertiary hover:text-text-primary"
                    style={{ backgroundColor: 'rgba(50, 49, 51, 0.5)', color: 'var(--color-text-muted)' }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <GlassCard hover={false} className="glow">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-text-muted"
                    style={{
                      borderColor: 'var(--color-bg-tertiary)',
                      color: 'var(--color-text-primary)',
                    }}
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-text-muted"
                    style={{
                      borderColor: 'var(--color-bg-tertiary)',
                      color: 'var(--color-text-primary)',
                    }}
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-text-muted"
                    style={{
                      borderColor: 'var(--color-bg-tertiary)',
                      color: 'var(--color-text-primary)',
                    }}
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="glass glass-hover flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 disabled:opacity-50"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {status === 'idle' && (
                    <>
                      Send Message
                      <FiSend className="text-sm" />
                    </>
                  )}
                  {status === 'sending' && (
                    <>
                      Sending...
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      Message Sent!
                      <FiCheck className="text-lg" />
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      Failed to Send
                      <FiAlertCircle className="text-lg" />
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
