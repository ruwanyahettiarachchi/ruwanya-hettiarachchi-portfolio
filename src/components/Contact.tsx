import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'ruwanyahettiarachchi@gmail.com',
      href: 'mailto:ruwanyahettiarachchi@gmail.com',
      gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
      glow: 'rgba(239,68,68,0.3)',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'ruwanya-hettiarachchi',
      href: 'https://linkedin.com/in/ruwanya-hettiarachchi',
      gradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
      glow: 'rgba(14,165,233,0.3)',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'ruwanyahettiarachchi',
      href: 'https://github.com/ruwanyahettiarachchi',
      gradient: 'linear-gradient(135deg, #374151, #111827)',
      glow: 'rgba(55,65,81,0.3)',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+94 70 3810618',
      href: 'tel:+94703810618',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      glow: 'rgba(16,185,129,0.3)',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Kurunegala, Sri Lanka',
      href: undefined,
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      glow: 'rgba(139,92,246,0.3)',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 mb-4 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.18)' }}>
            <MessageSquare className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300 tracking-widest uppercase">Contact</span>
          </div>
          <h2 className="section-heading mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="h-1 w-24 mx-auto rounded-full mb-5"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #ec4899)' }} />
          <p className="text-gray-500 dark:text-grayCustom text-sm md:text-base max-w-lg mx-auto font-sans">
            Have a project in mind, a job opportunity, or just want to connect? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">

          {/* Contact Links */}
          <div className="space-y-4">
            <p className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-5">// Find me on</p>
            {contacts.map((c, idx) => (
              c.href ? (
                <a
                  key={idx}
                  href={c.href}
                  target={c.label !== 'Phone' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(196,181,253,0.3)' }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: c.gradient, boxShadow: `0 6px 16px ${c.glow}` }}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-gray-400 dark:text-grayCustom uppercase tracking-wider">{c.label}</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white font-sans">{c.value}</p>
                  </div>
                </a>
              ) : (
                <div
                  key={idx}
                  className="flex items-center space-x-4 p-4 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(196,181,253,0.3)' }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ background: c.gradient, boxShadow: `0 6px 16px ${c.glow}` }}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-gray-400 dark:text-grayCustom uppercase tracking-wider">{c.label}</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white font-sans">{c.value}</p>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Contact Form */}
          <div className="console-card shadow-xl"
            style={{ background: 'rgba(255,255,255,0.95)' }}>
            <p className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 tracking-widest uppercase mb-6">// Send a Message</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 dark:text-grayCustom mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 text-sm rounded-xl transition-all duration-300 font-sans"
                  style={{ background: 'rgba(124,58,237,0.04)', border: '1.5px solid rgba(196,181,253,0.4)', outline: 'none', color: '#1e1b4b' }}
                  onFocus={(e) => { e.target.style.border = '1.5px solid rgba(124,58,237,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.08)'; }}
                  onBlur={(e) => { e.target.style.border = '1.5px solid rgba(196,181,253,0.4)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 dark:text-grayCustom mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 text-sm rounded-xl transition-all duration-300 font-sans"
                  style={{ background: 'rgba(124,58,237,0.04)', border: '1.5px solid rgba(196,181,253,0.4)', outline: 'none', color: '#1e1b4b' }}
                  onFocus={(e) => { e.target.style.border = '1.5px solid rgba(124,58,237,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.08)'; }}
                  onBlur={(e) => { e.target.style.border = '1.5px solid rgba(196,181,253,0.4)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 dark:text-grayCustom mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 text-sm rounded-xl transition-all duration-300 resize-none font-sans"
                  style={{ background: 'rgba(124,58,237,0.04)', border: '1.5px solid rgba(196,181,253,0.4)', outline: 'none', color: '#1e1b4b' }}
                  onFocus={(e) => { e.target.style.border = '1.5px solid rgba(124,58,237,0.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.08)'; }}
                  onBlur={(e) => { e.target.style.border = '1.5px solid rgba(196,181,253,0.4)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full btn-primary flex items-center justify-center space-x-2 py-3.5 font-mono text-sm uppercase tracking-widest disabled:opacity-80"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {isSuccess && (
              <div className="mt-4 p-4 rounded-xl flex items-center space-x-2 text-sm animate-fade-in-up font-sans"
                style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#059669' }}>
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Thank you! I'll respond as soon as possible.</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
