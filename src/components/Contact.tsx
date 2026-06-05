import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Loader2, MessageCircle } from 'lucide-react';
import { getCvData } from '../data/cvData';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact = () => {
  const { language, t } = useLanguage();
  const cvData = getCvData(language);

  const getWhatsappMessage = () => {
    switch (language) {
      case 'pt':
        return 'Olá Geandro, vi seu portfólio e gostaria de conversar!';
      default:
        return 'Olá Geandro, vi seu portfólio e gostaria de conversar!';
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contato">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-3">{t.contact.title}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">{t.contact.heading}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              {t.contact.description}
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.contact.email}</p>
                  <a href={`mailto:${cvData.personalInfo.email}`} className="font-medium hover:text-brand-500 transition-colors">
                    {cvData.personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.contact.location}</p>
                  <p className="font-medium">{cvData.personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {cvData.personalInfo.whatsapp && (
                <a href={`https://wa.me/${cvData.personalInfo.whatsapp}?text=${encodeURIComponent(getWhatsappMessage())}`} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-colors group flex items-center gap-2">
                  <MessageCircle size={24} className="group-hover:text-green-500 transition-colors" />
                  <span className="font-medium text-sm">{t.contact.whatsapp}</span>
                </a>
              )}
              {cvData.personalInfo.linkedin && (
                <a href={cvData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-colors group">
                  <Linkedin size={24} className="group-hover:text-brand-500 transition-colors" />
                </a>
              )}
              {cvData.personalInfo.github && (
                <a href={cvData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-colors group">
                  <Github size={24} className="group-hover:text-brand-500 transition-colors" />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">{t.contact.formName}</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-gray-50 dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  placeholder={t.contact.formName}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">{t.contact.formEmail}</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-gray-50 dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  placeholder={t.contact.formEmail}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">{t.contact.formMessage}</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full bg-gray-50 dark:bg-[#0B0F19] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none"
                  placeholder={t.contact.formPlaceholder}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    {t.contact.formSending}
                  </>
                ) : isSubmitted ? (
                  <>{t.contact.formSent}</>
                ) : (
                  <>
                    <Send size={18} />
                    {t.contact.formSend}
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
