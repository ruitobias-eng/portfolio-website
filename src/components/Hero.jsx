import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-500/5 via-transparent to-black" />
        
        {/* Animated Glowing Lines */}
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse" />
        <div className="absolute bottom-1/3 right-0 w-1/2 h-1 bg-gradient-to-l from-yellow-400 to-transparent opacity-50" />
        
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 border-2 border-yellow-400"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e0c35965ce1507be46a771/42e03ee96_logoOK1.png"
                  alt="DiBiTech Logo"
                  className="w-24 h-24 object-contain"
                />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-2xl blur-xl opacity-50 animate-pulse" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">dibi</span>
              <span className="text-yellow-400">TECH</span>
              <br />
              <span className="text-white text-4xl md:text-5xl">Engenharia</span>
            </motion.h1>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6"
            >
              <div className="h-1 w-64 bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent mx-auto lg:mx-0" />
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-2xl md:text-3xl text-white mb-4 font-light"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg text-gray-400 mb-12"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection('servicos')}
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6 shadow-2xl shadow-yellow-500/30"
              >
                {t.hero.ctaServices}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('projetos')}
                size="lg"
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-6"
              >
                {t.hero.ctaProjects}
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Hero Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-yellow-500/30 border-4 border-yellow-400/40">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e02bfb1dd3ddcbb6543743/d6607d1ad_hero_image1.jpg"
                alt="Automação Industrial - Robôs em linha de produção"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-yellow-400" />
              <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-yellow-400" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-yellow-400" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-yellow-400" />

              {/* Tech badge overlay */}
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm border-2 border-yellow-400 rounded-xl px-6 py-3">
                <p className="text-yellow-400 font-bold text-sm">{t.hero.industry}</p>
              </div>
            </div>
            
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-yellow-400/20 blur-3xl -z-10 scale-95" />
            
            {/* Circuit decoration */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 border-4 border-yellow-400/30 rounded-full" />
            <div className="absolute -left-8 -top-8 w-24 h-24 border-4 border-yellow-400/20" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}