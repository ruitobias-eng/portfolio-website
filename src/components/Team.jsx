
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/components/LanguageContext';

export default function Team() {
  const { t } = useLanguage();

  const teamInitials = [
    { initials: 'RC' },
    { initials: 'RT' }
  ];

  return (
    <section id="equipe" className="py-24 bg-black relative overflow-hidden">
      {/* Circuit Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#FFC700_49%,#FFC700_51%,transparent_52%)] bg-[size:20px_20px]" />
      </div>

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
              <span className="text-yellow-400 font-bold text-sm tracking-wider">{t.team.badge}</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">{t.team.title} </span>
            <span className="text-yellow-400">{t.team.titleHighlight}</span>
          </h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6" />
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t.team.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.team.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-zinc-900 border-2 border-zinc-800 hover:border-yellow-400 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl shadow-yellow-500/30 relative z-10">
                        <span className="text-black font-bold text-3xl">{teamInitials[index].initials}</span>
                      </div>
                      <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur-xl opacity-50 animate-pulse" />
                      {/* Circuit decoration */}
                      <div className="absolute -right-2 -bottom-2 w-6 h-6 border-2 border-yellow-400 rounded" />
                      <div className="absolute -left-2 -top-2 w-4 h-4 border-2 border-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-yellow-400 font-semibold text-sm mb-3">{member.role}</p>
                      <div className="h-1 w-16 bg-yellow-400" />
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
