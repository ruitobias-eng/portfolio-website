import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: t.nav.home, id: 'inicio' },
    { label: t.nav.services, id: 'servicos' },
    { label: t.nav.team, id: 'equipe' },
    { label: t.nav.projects, id: 'projetos' },
    { label: t.nav.contact, id: 'contato' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-lg shadow-2xl border-b border-yellow-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('inicio')}
          >
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}img/logo.png`}
                alt="DiBiTech Logo"
                className="h-14 w-14 object-contain"
              />
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">
                dibi<span className="text-yellow-400">TECH</span>
              </h1>
              <p className="text-yellow-400 text-xs">Engenharia</p>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <LanguageSwitcher />
            <Button
              onClick={() => scrollToSection('contato')}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold shadow-lg shadow-yellow-500/30"
            >
              {t.nav.quote}
            </Button>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 rounded-lg mt-2 p-4 shadow-xl border border-yellow-500/20">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-gray-300 hover:text-yellow-400 py-3 px-4 rounded-lg hover:bg-yellow-400/10 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 mb-4 px-4">
              <LanguageSwitcher />
            </div>
            <Button
              onClick={() => scrollToSection('contato')}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
            >
              {t.nav.quote}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
