import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Info, Github } from 'lucide-react';
import { getCvData } from '../data/cvData';
import { useLanguage } from '../contexts/LanguageContext';

export const Projects = () => {
  const { language, t } = useLanguage();
  const cvData = getCvData(language);
  type Project = (typeof cvData.projects)[number];
  const [selectedProject, setSelectedProject] = useState<typeof cvData.projects[0] | null>(null);
  const hasLongDescription = (project: Project): project is Project & { longDescription: string } => 'longDescription' in project;
  const hasGithubLink = (project: Project): project is Project & { githubLink: string } => 'githubLink' in project;
  const isErpProject = (project: Project) =>
    /erp imobiliário|real estate erp|erp inmobiliario/i.test(project.title);
  const isDashboardProject = (project: Project) =>
    /dashboards educacionais|educational dashboards|dashboards educativos/i.test(project.title);
  const orderedProjects = cvData.projects
    .map((project, index) => ({ project, index }))
    .sort((a, b) => {
      const aIsErp = isErpProject(a.project);
      const bIsErp = isErpProject(b.project);
      if (aIsErp !== bIsErp) {
        return aIsErp ? -1 : 1;
      }
      const aIsDashboard = isDashboardProject(a.project);
      const bIsDashboard = isDashboardProject(b.project);
      if (aIsDashboard !== bIsDashboard) {
        return aIsDashboard ? -1 : 1;
      }
      const aHasLink = a.project.link !== '#';
      const bHasLink = b.project.link !== '#';
      if (aHasLink === bHasLink) {
        return a.index - b.index;
      }
      return bHasLink ? 1 : -1;
    })
    .map(({ project }) => project);

  return (
    <section className="py-24 relative" id="projetos">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl opacity-50 mix-blend-screen -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-3">{t.projects.title}</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">{t.projects.heading}</h3>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {orderedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group glass rounded-2xl overflow-hidden flex flex-col h-full border border-gray-200 dark:border-white/10 hover:border-brand-500/50 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold font-heading mb-3">{project.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-xs font-semibold text-brand-500 uppercase block mb-2">{t.projects.results}</span>
                  <p className="text-sm font-medium border-l-2 border-brand-500 pl-3 py-1">
                    {project.results}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/5 rounded-md font-medium text-gray-600 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                  {hasGithubLink(project) && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Acessar repositório GitHub de ${project.title}`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {hasLongDescription(project) && (
                    <button 
                      onClick={() => setSelectedProject(project as typeof cvData.projects[0])}
                      className="flex items-center justify-center gap-2 flex-1 py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium text-sm transition-colors"
                    >
                      <Info size={16} />
                      {t.projects.seeMore}
                    </button>
                  )}
                  {project.link !== '#' && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 flex-1 py-2 px-4 rounded-lg bg-brand-500/10 hover:bg-brand-500/20 text-brand-600 dark:text-brand-400 font-medium text-sm transition-colors"
                    >
                      <ExternalLink size={16} />
                      {t.projects.accessApp}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl flex flex-col"
            >
              <div className="sticky top-0 z-10 flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white pr-8">
                  {selectedProject.title}
                </h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 sm:right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
                  aria-label={t.projects.close}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-4 sm:p-6">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-48 sm:h-64 object-cover rounded-xl mb-6 border border-gray-200 dark:border-gray-800"
                />

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Visão Geral</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {hasLongDescription(selectedProject)
                        ? selectedProject.longDescription 
                        : selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techs.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t.projects.results}</h4>
                    <div className="p-4 bg-brand-500/10 border border-brand-500/20 rounded-xl">
                      <p className="font-medium text-brand-700 dark:text-brand-300">
                        {selectedProject.results}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {selectedProject.link !== '#' && (
                <div className="sticky bottom-0 p-4 sm:p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-md flex justify-end">
                  <a 
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-brand-500/25"
                  >
                    {t.projects.accessApp}
                    <ExternalLink size={18} />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
