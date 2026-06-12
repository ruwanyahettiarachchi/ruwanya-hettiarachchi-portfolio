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
    // Simulate API request
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

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-200 dark:bg-purple-900/10 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans mb-4">
            Get In <span className="text-gradient font-sans">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm md:text-base max-w-lg mx-auto">
            Have a project in mind, a job opportunity, or just want to connect? Feel free to reach out to me!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Contact Information
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
              I am open to discuss frontend/backend roles, quality assurance internships/jobs, and collaborations.
            </p>

            <div className="space-y-4 pt-4">
              {/* Email */}
              <a 
                href="mailto:ruwanyahettiarachchi@gmail.com"
                className="glass-card p-4 flex items-center space-x-4 border border-gray-200/40 dark:border-darkBorder/40 hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:translate-x-1"
              >
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Me</p>
                  <p className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200">
                    ruwanyahettiarachchi@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:+94703810618"
                className="glass-card p-4 flex items-center space-x-4 border border-gray-200/40 dark:border-darkBorder/40 hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:translate-x-1"
              >
                <div className="p-3 rounded-xl bg-pink-50 dark:bg-purple-950/40 text-pink-500 dark:text-pink-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Call Me</p>
                  <p className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200">
                    +94 70 3810618
                  </p>
                </div>
              </a>

              {/* Location */}
              <div 
                className="glass-card p-4 flex items-center space-x-4 border border-gray-200/40 dark:border-darkBorder/40"
              >
                <div className="p-3 rounded-xl bg-teal-50 dark:bg-purple-950/40 text-teal-500 dark:text-teal-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</p>
                  <p className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200">
                    Kurunegala, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex items-center space-x-4 pt-4">
              <a
                href="https://github.com/ruwanyahettiarachchi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gray-50 dark:bg-darkCard hover:bg-purple-50 dark:hover:bg-purple-950/20 text-gray-650 dark:text-gray-400 hover:text-purple-650 dark:hover:text-purple-400 border border-gray-200/50 dark:border-darkBorder/50 shadow-sm transition-all duration-300 hover:-translate-y-1"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ruwanya-hettiarachchi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gray-50 dark:bg-darkCard hover:bg-purple-50 dark:hover:bg-purple-950/20 text-gray-650 dark:text-gray-400 hover:text-purple-650 dark:hover:text-purple-400 border border-gray-200/50 dark:border-darkBorder/50 shadow-sm transition-all duration-300 hover:-translate-y-1"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card p-6 md:p-8 border border-gray-200/40 dark:border-darkBorder/40 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-550 dark:text-gray-450 mb-2">
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
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 dark:border-darkBorder/60 bg-white/40 dark:bg-darkBg/40 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 dark:focus:border-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-550 dark:text-gray-450 mb-2">
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
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 dark:border-darkBorder/60 bg-white/40 dark:bg-darkBg/40 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 dark:focus:border-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-550 dark:text-gray-450 mb-2">
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
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 dark:border-darkBorder/60 bg-white/40 dark:bg-darkBg/40 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 dark:focus:border-purple-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full btn-primary flex items-center justify-center space-x-2 py-3 disabled:opacity-80"
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
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-xl text-sm flex items-center space-x-2 animate-fade-in-up">
                  <Sparkles className="w-4 h-4" />
                  <span>Thank you! I will respond to your email as soon as possible.</span>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
