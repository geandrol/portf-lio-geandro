import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { getCvData } from '../data/cvData';
import perfilImg from '../assets/geandro.png';
import { useLanguage } from '../contexts/LanguageContext';

const FloatingBadge = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    className={`absolute glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </motion.div>
);

export const Hero = () => {
  const { language, t } = useLanguage();
  const cvData = getCvData(language);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden section-padding" id="inicio">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="container-responsive grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
            </span>
            {t.hero.available}
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-bold font-heading mb-6 leading-[1.1] tracking-tight text-gray-900 dark:text-white">
            {t.hero.hello} <br />
            <span className="text-gradient block mt-2">{cvData.personalInfo.name}</span>
          </h1>
          
          <h2 className="text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
            {cvData.personalInfo.title}
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projetos" className="btn-primary group">
              {t.hero.viewProjects}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href={`https://wa.me/${cvData.personalInfo.whatsapp}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              {t.hero.contactMe}
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-gray-500 dark:text-gray-400">
            <a href={cvData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-500 transition-colors transform hover:scale-110 duration-300">
              <Github size={24} />
            </a>
            <a href={cvData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-500 transition-colors transform hover:scale-110 duration-300">
              <Linkedin size={24} />
            </a>
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-sm font-medium">
              +10 Anos de Experiência
            </div>
          </div>
        </motion.div>

        {/* Image/Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500/30 to-orange-600/30 blur-3xl animate-pulse"></div>
            
            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden z-0 bg-gray-100 dark:bg-gray-900">
              <img 
                src={perfilImg} 
                alt={cvData.personalInfo.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
              />
            </div>

            {/* Floating Badges */}
            <FloatingBadge className="top-10 left-0 md:-left-10 z-20" delay={0}>
              <span className="w-3 h-3 rounded-full bg-[#61DAFB]"></span>
              <span className="font-bold text-gray-800 dark:text-white">React</span>
            </FloatingBadge>

            <FloatingBadge className="bottom-20 right-0 md:-right-4 z-20" delay={1.5}>
              <span className="w-3 h-3 rounded-full bg-[#339933]"></span>
              <span className="font-bold text-gray-800 dark:text-white">Node.js</span>
            </FloatingBadge>

            <FloatingBadge className="bottom-0 left-10 md:left-0 z-20" delay={2.5}>
              <span className="w-3 h-3 rounded-full bg-[#512BD4]"></span>
              <span className="font-bold text-gray-800 dark:text-white">.NET Core</span>
            </FloatingBadge>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
