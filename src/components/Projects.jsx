
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Factory, Droplet, Building2 } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  // Icons are static and not part of translation data, so they are mapped by index
  const projectIcons = [Factory, Droplet, Building2];

  // Tags are static and not part of translation data, so they are mapped by index
  // If tags needed translation, they would be inside the t.projects.items array
  const projectTags = [
    ['CLPs', 'SCADA', 'Sensores'],
    ['SDCD', 'Otimização', 'Monitoramento'],
    ['BMS', 'IoT', 'Eficiência']
  ];

  return (
    <section id="projetos" className="py-24 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden">
      {/* Yellow accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
      <div className="absolute bottom-0 right-0 w-2/3 h-1 bg-gradient-to-l from-yellow-400 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-6 py-2 bg-yellow-400/20 border-2 border-yellow-400 rounded-full">
              <span className="text-yellow-400 font-bold text-sm tracking-wider">{t.projects.badge}</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">{t.projects.title} </span>
            <span className="text-yellow-400">{t.projects.titleHighlight}</span>
          </h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.projects.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, index) => {
            const Icon = projectIcons[index]; // Get the icon component based on index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-zinc-900 border-2 border-zinc-800 hover:border-yellow-400 transition-all duration-300 group cursor-pointer overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400" />
                  <CardHeader>
                    <div className="relative mb-4">
                      <div className="w-20 h-20 bg-black border-2 border-yellow-400 rounded-xl flex items-center justify-center group-hover:bg-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/20">
                        <Icon className="w-10 h-10 text-yellow-400 group-hover:text-black transition-colors" />
                      </div>
                      <div className="absolute top-0 right-0 px-3 py-1 bg-yellow-400 text-black font-bold text-xs rounded-full">
                        {project.result}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm font-semibold text-yellow-400">
                      {project.client}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projectTags[index].map((tag, idx) => ( // Get tags based on index
                        <Badge 
                          key={idx}
                          className="bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
