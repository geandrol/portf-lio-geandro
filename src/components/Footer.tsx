import { ArrowUp, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getCvData } from '../data/cvData';

export const Footer = () => {
  const { language, t } = useLanguage();
  const cvData = getCvData(language);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white/50 dark:bg-[#0B0F19]/50 backdrop-blur-lg mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold font-heading tracking-tighter text-gradient block mb-2">
              GLA.
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} {cvData.personalInfo.name}. {t.footer.rights}
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            {cvData.personalInfo.portfolioGithub && (
              <a 
                href={cvData.personalInfo.portfolioGithub} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
              >
                <Github size={16} />
                <span>{t.footer.viewSource}</span>
              </a>
            )}

            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 hover:bg-brand-500 hover:text-white transition-all"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
