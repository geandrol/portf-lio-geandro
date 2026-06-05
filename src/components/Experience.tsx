import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { getCvData } from '../data/cvData';
import { useLanguage } from '../contexts/LanguageContext';

export const Experience = () => {
  const { language, t } = useLanguage();
  const cvData = getCvData(language);

  return (
    <section className="py-24 relative bg-gray-100/50 dark:bg-white/[0.02]" id="experiencia">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-3">{t.experience.title}</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">{t.experience.heading}</h3>
        </motion.div>

        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4 md:ml-0">
          {cvData.experience.map((exp, companyIndex) => (
            <div key={companyIndex} className="mb-12 relative">
              {/* Company Header */}
              <div className="flex items-center mb-6 -ml-4 md:-ml-0">
                <div className="absolute -left-[21px] md:-left-[21px] w-10 h-10 rounded-full bg-white dark:bg-[#0B0F19] border-4 border-brand-500 flex items-center justify-center">
                  <Briefcase size={16} className="text-brand-500" />
                </div>
                <div className="ml-10">
                  <h4 className="text-xl font-bold font-heading">{exp.company}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Roles */}
              <div className="ml-10 flex flex-col gap-6">
                {exp.roles.map((role, roleIndex) => (
                  <motion.div 
                    key={roleIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: roleIndex * 0.1 }}
                    className="glass p-6 rounded-2xl relative"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">{role.title}</h5>
                      <span className="text-sm px-3 py-1 bg-brand-500/10 text-brand-600 dark:text-brand-400 rounded-full font-medium">
                        {role.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {role.description}
                    </p>

                    {role.achievements && role.achievements.length > 0 && (
                      <ul className="mb-4 space-y-2">
                        {role.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <CheckCircle2 size={16} className="text-brand-500 mt-0.5 shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                      {role.techs.map((tech, i) => (
                        <span key={i} className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
