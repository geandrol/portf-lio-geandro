import { motion } from 'framer-motion';
import { Code2, Server, Cpu, Database, BarChart3, Bot, BookOpen, GraduationCap, Users } from 'lucide-react';
import { getCvData } from '../data/cvData';
import { useLanguage } from '../contexts/LanguageContext';

const SkillBar = ({ name, level }: { name: string, level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-sm text-gray-500">{level}%</span>
    </div>
    <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-brand-500 to-purple-500 rounded-full"
      />
    </div>
  </div>
);

const SkillCategory = ({ title, icon: Icon, skills }: { title: string, icon: any, skills: any[] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass p-6 rounded-2xl"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-brand-500/10 rounded-lg text-brand-500">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-heading font-semibold">{title}</h3>
    </div>
    <div>
      {skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  </motion.div>
);

export const Skills = () => {
  const { language, t } = useLanguage();
  const cvData = getCvData(language);

  return (
    <section className="py-24 relative" id="skills">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-3">{t.skills.title}</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">{t.skills.heading}</h3>
          <p className="text-gray-500 dark:text-gray-400">
            {t.skills.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title={t.skills.frontend} icon={Code2} skills={cvData.skills.frontend} />
          <SkillCategory title={t.skills.backend} icon={Server} skills={cvData.skills.backend} />
          <SkillCategory title={t.skills.architecture} icon={Cpu} skills={cvData.skills.architecture} />
          
          <SkillCategory title={t.skills.devops} icon={Database} skills={cvData.skills.devops} />
          <SkillCategory title={t.skills.data} icon={BarChart3} skills={cvData.skills.dataAnalytics} />
          <SkillCategory title={t.skills.rpa} icon={Bot} skills={cvData.skills.rpaAutomation} />
          
          <SkillCategory title={t.skills.curriculum} icon={BookOpen} skills={cvData.skills.curriculumDesign} />
          <SkillCategory title={t.skills.instruction} icon={GraduationCap} skills={cvData.skills.techInstruction} />
          <SkillCategory title={t.skills.leadership} icon={Users} skills={cvData.skills.leadershipManagement} />
        </div>
      </div>
    </section>
  );
};
