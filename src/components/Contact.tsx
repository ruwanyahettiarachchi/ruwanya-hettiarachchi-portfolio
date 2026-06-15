import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'ruwanyahettiarachchi@gmail.com',
      href: 'mailto:ruwanyahettiarachchi@gmail.com',
      color: 'hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/5'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'ruwanya-hettiarachchi',
      href: 'https://linkedin.com/in/ruwanya-hettiarachchi',
      color: 'hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/5'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'ruwanyahettiarachchi',
      href: 'https://github.com/ruwanyahettiarachchi',
      color: 'hover:text-gray-400 hover:border-gray-400/50 hover:bg-gray-400/5'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+94 70 3810618',
      href: 'tel:+94703810618',
      color: 'hover:text-green-500 hover:border-green-500/50 hover:bg-green-500/5'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans mb-4">
            Get In <span className="text-gradient font-sans">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 dark:from-accent-pink dark:to-accent-rose mx-auto rounded-full"></div>
          <p className="text-gray-500 dark:text-grayCustom mt-4 text-sm md:text-base max-w-lg mx-auto font-sans">
            Have a project in mind, a job opportunity, or just want to connect? Feel free to reach out to me!
          </p>
        </div>

        {/* Centered Contacts Grid from wamsss.com */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-3xl mx-auto">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.label !== 'Phone' ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-6 w-36 h-36 rounded-2xl border border-gray-200 dark:border-darkBorder bg-white dark:bg-darkCard text-gray-600 dark:text-grayCustom transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg ${link.color}`}
            >
              <div className="mb-3">
                {link.icon}
              </div>
              <span className="text-xs font-bold font-sans tracking-wide text-gray-800 dark:text-white">
                {link.label}
              </span>
              <span className="text-[10px] font-mono text-gray-400 dark:text-grayCustom mt-1 text-center truncate w-full">
                {link.value.replace('https://', '')}
              </span>
            </a>
          ))}

          {/* Location flat box */}
          <div 
            className="flex flex-col items-center justify-center p-6 w-36 h-36 rounded-2xl border border-gray-200 dark:border-darkBorder bg-white dark:bg-darkCard text-gray-600 dark:text-grayCustom select-none"
          >
            <div className="mb-3 text-purple-605 dark:text-accent-pink">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold font-sans tracking-wide text-gray-800 dark:text-white">
              Location
            </span>
            <span className="text-[10px] font-mono text-gray-400 dark:text-grayCustom mt-1 text-center">
              Kurunegala, LK
            </span>
          </div>
        </div>

        {/* Centered Console Contact Form */}
        <div className="max-w-xl mx-auto">
          <div className="console-card border border-gray-200 dark:border-darkBorder bg-white dark:bg-darkCard shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6 font-sans">
              // SEND A MESSAGE
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-grayCustom mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 dark:border-darkBorder/60 bg-white/40 dark:bg-darkBg/40 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 dark:focus:border-accent-pink dark:focus:ring-accent-pink/40 transition-colors font-sans"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-455 dark:text-grayCustom mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 dark:border-darkBorder/60 bg-white/40 dark:bg-darkBg/40 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 dark:focus:border-accent-pink dark:focus:ring-accent-pink/40 transition-colors font-sans"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-grayCustom mb-2">
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
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 dark:border-darkBorder/60 bg-white/40 dark:bg-darkBg/40 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 dark:focus:border-accent-pink dark:focus:ring-accent-pink/40 transition-colors resize-none font-sans"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full btn-primary flex items-center justify-center space-x-2 py-3 disabled:opacity-85 font-mono text-sm uppercase tracking-wide"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-white" />
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
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-xl text-sm flex items-center space-x-2 animate-fade-in-up font-sans">
                <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} />
                <span>Thank you! I will respond to your email as soon as possible.</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
