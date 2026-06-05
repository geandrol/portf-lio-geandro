import { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, MessageCircle, FileDown, Globe } from 'lucide-react';
import { getCvData } from '../data/cvData';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../data/translations';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { language, setLanguage, t } = useLanguage();
  const langMenuRef = useRef<HTMLDivElement>(null);
  
  const cvData = getCvData(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = [
    { label: t.nav.about, href: '#sobre' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.experience, href: '#experiencia' },
    { label: t.nav.education, href: '#formacao' },
    { label: t.nav.projects, href: '#projetos' },
    { label: t.nav.contact, href: '#contato' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'pt', label: 'Português' }
  ];

  const handleLanguageSelect = (code: Language) => {
    setLanguage(code);
    setIsLangMenuOpen(false);
  };

  const getWhatsappMessage = (lang: Language) => {
    switch (lang) {
      case 'pt':
        return 'Olá Marcelo, vi seu portfólio e gostaria de conversar!';
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-heading tracking-tighter text-gradient">
          GLA.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-brand-500 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-gray-300 dark:border-gray-700 pl-4">
            {cvData.personalInfo.cvUrl && (
              <a 
                href={cvData.personalInfo.cvUrl} 
                download
                className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors flex items-center gap-2" 
                aria-label={t.nav.downloadCV}
              >
                <FileDown size={18} />
                <span className="text-sm font-medium hidden lg:block">{t.nav.downloadCV}</span>
              </a>
            )}
            
            <div className="relative" ref={langMenuRef}>
              
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 glass rounded-xl shadow-lg overflow-hidden py-1 border border-gray-200 dark:border-white/10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-brand-500/10 transition-colors ${language === lang.code ? 'text-brand-500 font-bold' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300" aria-label="Toggle Theme">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            {cvData.personalInfo.whatsapp && (
              <a href={`https://wa.me/${cvData.personalInfo.whatsapp}?text=${encodeURIComponent(getWhatsappMessage(language))}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-500 transition-colors" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            )}
            {cvData.personalInfo.github && (
              <a href={cvData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300" aria-label="GitHub">
                <Github size={18} />
              </a>
            )}
            <a href={cvData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle & Icons */}
        <div className="md:hidden flex items-center gap-3">
          {cvData.personalInfo.cvUrl && (
            <a 
              href={cvData.personalInfo.cvUrl} 
              download
              className="p-2 text-blue-600 dark:text-blue-500" 
              aria-label={t.nav.downloadCV}
            >
              <FileDown size={20} />
            </a>
          )}
          {cvData.personalInfo.whatsapp && (
            <a href={`https://wa.me/${cvData.personalInfo.whatsapp}?text=${encodeURIComponent(getWhatsappMessage(language))}`} target="_blank" rel="noopener noreferrer" className="p-2 text-green-600 dark:text-green-500" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
          )}
          
          <button onClick={() => {
            const nextLang = languages[(languages.findIndex(l => l.code === language) + 1) % languages.length].code;
            setLanguage(nextLang);
          }} className="p-2 flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300" aria-label="Toggle Language">
            <Globe size={20} />
          </button>

          <button onClick={() => setIsDark(!isDark)} className="p-2 text-gray-700 dark:text-gray-300" aria-label="Toggle Theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-700 dark:text-gray-300" aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-white/10">
          <ul className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="block text-lg font-medium text-gray-900 dark:text-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLanguageSelect(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex-1 py-2 text-sm rounded-lg transition-colors border ${language === lang.code ? 'bg-brand-500/10 text-brand-500 border-brand-500/30 font-bold' : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'}`}
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
