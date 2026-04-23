import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext'; // Importando seu novo hook
import { CheckCircle2, Zap, Users, Leaf, ShieldCheck, Cpu } from 'lucide-react';

const IndustryComparison = () => {
  const { t } = useLanguage();
  const { theme } = useTheme(); // Usando o tema do ThemeContext
  
  // Lógica para descobrir qual é o tema real se estiver no modo 'system'
  const activeTheme = useMemo(() => {
    if (theme !== 'system') return theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }, [theme]);

  const colorsByTheme = {
    light: {
      bgSection: 'bg-gradient-to-b from-gray-50 to-white',
      textMain: '#000000',
      textSecondary: '#374151',
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      accent: '#FACC15',
      accentText: '#FACC15', 
      accentBg: 'bg-yellow-500/10',
      glow: 'bg-yellow-400/10 blur-3xl',
      shadow: 'shadow-yellow-400/20'
    },
    dark: {
      bgSection: 'bg-black',
      textMain: '#FFFFFF',
      textSecondary: '#D1D5DB',
      cardBg: 'bg-zinc-900',
      cardBorder: 'border-zinc-800',
      accent: '#FACC15',
      accentText: '#FDE047',
      accentBg: 'bg-yellow-400/20',
      glow: 'bg-yellow-500/10 blur-3xl',
      shadow: 'shadow-yellow-500/20'
    }
  };

  // Usa o activeTheme (que resolve o 'system') para pegar as cores
  const colors = colorsByTheme[activeTheme] || colorsByTheme.light;
  const icons = [Zap, Users, Cpu, ShieldCheck, Leaf];

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-500 ${colors.bgSection}`}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, ${colors.accent} 49%, ${colors.accent} 51%, transparent 52%)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`text-xs font-bold tracking-[0.2em] uppercase mb-4 block`} style={{ color: colors.accentText }}>
            {t.comparison.badge}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: colors.textMain }}>
            {t.comparison.title} <span style={{ color: colors.accent }}>{t.comparison.titleHighlight}</span>
          </h2>
          <div className="h-1.5 w-48 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6 rounded-full" />
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: colors.textSecondary }}>
            {t.comparison.description}
          </p>
        </motion.div>

        <div className="relative group">
          <div className={`absolute inset-0 -z-10 ${colors.glow} rounded-3xl scale-95 transition-all duration-500 group-hover:scale-100`} />
          
          <div className={`overflow-x-auto rounded-2xl border-2 ${colors.shadow} ${colors.cardBg} ${colors.cardBorder} transition-all duration-500`}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={activeTheme === 'dark' ? 'bg-zinc-900/50' : 'bg-gray-100'}>
                  <th className="p-6 font-black uppercase text-xs tracking-widest" style={{ color: colors.accentText }}>
                    {t.comparison.headers.feature}
                  </th>
                  <th className="p-6 font-bold text-gray-500 uppercase text-xs tracking-widest">
                    {t.comparison.headers.v4}
                  </th>
                  <th className="p-6 font-black uppercase text-xs tracking-widest" style={{ color: colors.accentText }}>
                    {t.comparison.headers.v5}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.comparison.items.map((item, index) => {
                  const Icon = icons[index];
                  return (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`border-t transition-colors ${colors.cardBorder} hover:bg-yellow-400/5`}
                    >
                      <td className="p-6 flex items-center gap-3">
                        <Icon className="w-5 h-5" style={{ color: colors.accent }} />
                        <span className="font-bold" style={{ color: colors.textMain }}>{item.f}</span>
                      </td>
                      <td className="p-6 font-medium text-gray-500">{item.v4}</td>
                      <td className="p-6 font-bold" style={{ color: colors.textMain }}>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                          {item.v5}
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`mt-12 p-6 rounded-xl border border-dashed text-center ${colors.accentBg}`}
          style={{ borderColor: `${colors.accent}40` }}
        >
          <p className="text-sm italic font-medium" style={{ color: colors.textSecondary }}>
            {t.comparison.footerNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryComparison;