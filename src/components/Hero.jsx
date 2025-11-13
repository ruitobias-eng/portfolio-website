import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, TrendingUp, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageContext';

export default function Hero() {
  const { t, theme } = useLanguage(); // Use apenas useLanguage, pois ele já inclui o theme

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    scrollToSection('servicos');
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 bg-background"
    >
      {/* 🔳 Background pattern usando CSS variable */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, var(--accent) 49%, var(--accent) 51%, transparent 52%)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Container principal com padding top mínimo */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 lg:pt-4 pb-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Lado esquerdo */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 lg:mb-4 leading-tight"
            >
              <span className="text-foreground">dibi</span>
              <span className="text-accent">{'TECH'}</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                {t.hero.engineering || "Engenharia 4.0"}
              </span>
            </motion.h1>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-3 lg:mb-4 h-1 w-40 lg:w-56 mx-auto lg:mx-0 bg-gradient-to-r from-transparent via-accent to-transparent"
            />

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl lg:text-3xl mb-2 lg:mb-3 font-light text-foreground"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-base lg:text-lg mb-6 lg:mb-8 text-muted-foreground"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-2 lg:gap-3 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection('servicos')}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base lg:text-lg px-5 lg:px-7 py-3 lg:py-5 shadow-lg transition-all duration-300"
              >
                {t.hero.ctaServices}
                <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
              </Button>

              <Button
                onClick={() => scrollToSection('projetos')}
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-base lg:text-lg px-5 lg:px-7 py-3 lg:py-5 transition-all duration-300"
              >
                {t.hero.ctaProjects}
              </Button>
            </motion.div>
          </div>

          {/* Lado direito com Floating Stats corrigidos */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-lg lg:shadow-xl border-2 border-accent">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e02bfb1dd3ddcbb6543743/d6607d1ad_hero_image1.jpg"
                alt="Automação Industrial - Robôs em linha de produção"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 bg-black/80 backdrop-blur-sm border border-accent rounded-md lg:rounded-lg px-3 lg:px-4 py-1 lg:py-2">
                <p className="text-accent font-bold text-xs lg:text-sm">
                  {t.hero.industry}
                </p>
              </div>
            </div>

            {/* Floating stats - Agora FORA da imagem, entrando das bordas */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1,
                type: "spring",
                stiffness: 100
              }}
              className="absolute left-0 top-1/4 backdrop-blur-xl rounded-xl p-3 shadow-lg border border-gray-300 dark:border-gray-600 bg-card/90 dark:bg-card/80"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/20 dark:bg-secondary/30 border border-gray-300 dark:border-gray-600">
                  <TrendingUp className="w-4 h-4 text-secondary dark:text-secondary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">
                    {t.hero.engineering || "Engenharia 4.0"}
                  </div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground/90">
                    {t.hero.projects || "Projetos Concluídos"}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.2,
                type: "spring",
                stiffness: 100
              }}
              className="absolute right-0 bottom-1/4 backdrop-blur-xl rounded-xl p-3 shadow-lg border border-gray-300 dark:border-gray-600 bg-card/90 dark:bg-card/80"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 dark:bg-accent/30 border border-gray-300 dark:border-gray-600">
                  <ShieldCheck className="w-4 h-4 text-accent dark:text-accent" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">100%</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground/90">
                    {t.hero.automation || "Automação"}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={handleScrollDown}
      >
        <div
          className="w-5 h-8 rounded-full flex justify-center border border-border bg-background/50 backdrop-blur-sm group-hover:bg-accent/20 transition-all duration-300"
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full mt-1 bg-accent"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          />
        </div>
      </motion.div>
    </section>
  );
}