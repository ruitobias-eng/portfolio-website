
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/components/LanguageContext'; // Changed from '@/contexts/LanguageContext'

export default function Services() {
  const { t } = useLanguage();

  // Define image URLs separately, as they are not part of the translated text data structure
  const serviceImageUrls = [
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e02bfb1dd3ddcbb6543743/c21f235c2_automao.png',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e02bfb1dd3ddcbb6543743/e0389ce11_chatbotAI.png',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e02bfb1dd3ddcbb6543743/cc44e2bd4_cloud.png',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e02bfb1dd3ddcbb6543743/e94d042cc_dianalytic.png',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e02bfb1dd3ddcbb6543743/e855b9176_erp.png',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e02bfb1dd3ddcbb6543743/92f3583e8_delivery.png'
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFC700_1px,transparent_1px),linear-gradient(to_bottom,#FFC700_1px,transparent_1px)] bg-[size:2rem_2rem]" />
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
              <span className="text-yellow-400 font-bold text-sm tracking-wider">{t.services.badge}</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">{t.services.title} </span>
            <span className="text-yellow-400">{t.services.titleHighlight}</span>
          </h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-zinc-900 border-2 border-zinc-800 hover:border-yellow-400 transition-all duration-300 group cursor-pointer overflow-hidden">
                <div className="relative h-64 overflow-hidden bg-black">
                  <img 
                    src={serviceImageUrls[index]} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-semibold rounded-full"
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
