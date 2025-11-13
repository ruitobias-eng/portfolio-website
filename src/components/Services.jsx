import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/components/LanguageContext';
import { useTheme } from '@/components/ThemeContext';

export default function Services() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const serviceImageUrls = [
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e02bfb1dd3ddcbb6543743/c21f235c2_automao.png',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e02bfb1dd3ddcbb6543743/e0389ce11_chatbotAI.png',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e02bfb1dd3ddcbb6543743/cc44e2bd4_cloud.png',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e02bfb1dd3ddcbb6543743/e94d042cc_dianalytic.png',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e02bfb1dd3ddcbb6543743/e855b9176_erp.png',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e02bfb1dd3ddcbb6543743/92f3583e8_delivery.png'
  ];

  // 🎨 Cores por tema (mesmo padrão Contact/Team)
  const colorsByTheme = {
    light: {
      primary: '#FACC15',       // destaque amarelo
      bgSection: 'bg-white',
      bgCard: 'bg-gray-100',
      borderCard: 'border-gray-300',
      textMain: 'text-gray-800',
      textSecondary: 'text-gray-600',
      accentText: 'text-yellow-600',
    },
    dark: {
      primary: '#FACC15',
      bgSection: 'bg-black',
      bgCard: 'bg-zinc-900',
      borderCard: 'border-zinc-800',
      textMain: 'text-white',
      textSecondary: 'text-gray-300',
      accentText: 'text-yellow-400',
    },
  };

  const colors = colorsByTheme[theme] || colorsByTheme.light;

  return (
    <section
      id="servicos"
      className={`py-24 relative overflow-hidden transition-colors duration-500 ${colors.bgSection}`}
    >
      {/* 🔳 Background pattern apenas para fontes */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, ${colors.primary} 49%, ${colors.primary} 51%, transparent 52%)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div
              className="px-6 py-2 border-2 rounded-full bg-opacity-20"
              style={{ backgroundColor: `${colors.primary}33`, borderColor: colors.primary }}
            >
              <span className="font-bold text-sm tracking-wider" style={{ color: colors.primary }}>
                {t.services.badge}
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span style={{ color: colors.textMain }}>{t.services.title} </span>
            <span style={{ color: colors.primary }}>{t.services.titleHighlight}</span>
          </h2>

          <div
            className="h-1 w-48 mx-auto mb-6"
            style={{ background: `linear-gradient(to right, transparent, ${colors.primary}, transparent)` }}
          />

          <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.textSecondary }}>
            {t.services.description}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="h-full transition-all duration-300 group border-2"
                style={{ backgroundColor: colors.bgCard, borderColor: colors.borderCard }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={serviceImageUrls[index]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3
                    className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors"
                    style={{ color: colors.textMain }}
                  >
                    {service.title}
                  </h3>
                  <p className="mb-4 leading-relaxed" style={{ color: colors.textSecondary }}>
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 border text-xs font-semibold rounded-full"
                        style={{
                          borderColor: colors.primary + '55',
                          backgroundColor: colors.primary + '22',
                          color: colors.primary
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
