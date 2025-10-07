import React from 'react';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-gray-300 py-16 border-t-2 border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <img 
                  src={`${import.meta.env.BASE_URL}img/logo.png`}
                  alt="DiBiTech Logo"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">
                  dibi<span className="text-yellow-400">TECH</span>
                </h3>
                <p className="text-yellow-400 text-xs">Engenharia</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-4">
              {t.footer.description}
            </p>
            <div className="h-1 w-24 bg-yellow-400" />
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-lg">{t.footer.services}</h4>
            <ul className="space-y-2">
              {t.footer.servicesList.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('servicos')}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-lg">{t.footer.company}</h4>
            <ul className="space-y-2 mb-6">
              {t.footer.companyList.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item === t.footer.companyList[0] ? 'equipe' : 'contato')}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-bold mb-4 text-lg">{t.footer.contactTitle}</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">(15) 98100-9064</p>
              <p className="text-gray-400">engenharia@dibitech.com.br</p>
              <p className="text-gray-400">Apiaí, SP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {t.footer.rights}
          </p>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
