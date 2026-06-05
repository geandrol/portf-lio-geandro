import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import { getCvData } from '../data/cvData';
import { useLanguage } from '../contexts/LanguageContext';

export const Education = () => {
  const { language, t } = useLanguage();
  const cvData = getCvData(language) as any;

  const education = cvData.education || [];

  return (
    <section className="py-24 relative" id="formacao">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-3">{t.education.title}</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">{t.education.heading}</h3>
        </motion.div>

        <div className="grid gap-6">
          {education.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl border border-gray-200 dark:border-white/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-brand-500/10 rounded-lg text-brand-500">
                  {index === 0 ? <GraduationCap size={20} /> : <School size={20} />}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{item.institution}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.degree}</p>
                </div>
              </div>
              {item.period && (
                <div className="text-sm px-3 py-1 bg-brand-500/10 text-brand-600 dark:text-brand-400 rounded-full inline-block font-medium mb-4">
                  {item.period}
                </div>
              )}
              {item.details && item.details.length > 0 && (
                <ul className="space-y-2">
                  {item.details.map((d: string, i: number) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-300">
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
