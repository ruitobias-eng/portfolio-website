import React from 'react';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { useTheme } from '@/components/ThemeContext'; // ✅ Importa o hook do tema

export default function Footer() {
  const { t } = useLanguage();
  const { theme } = useTheme(); // ✅ Obtém o tema atual (light ou dark)

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ✅ Definir cores dinâmicas com base no tema
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-black' : 'bg-gray-100';
  const textColor = isDark ? 'text-gray-300' : 'text-gray-700';
  const headingColor = isDark ? 'text-white' : 'text-gray-900';
  const accentColor = 'text-yellow-400';
  const borderColor = isDark ? 'border-yellow-400/20' : 'border-yellow-500/30';
  const hoverColor = isDark ? 'hover:text-yellow-400' : 'hover:text-yellow-500';

  return (
    <footer className={`${bgColor} ${textColor} py-16 border-t-2 ${borderColor} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo e descrição */}
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
                <h3 className={`${headingColor} font-bold text-xl`}>
                  dibi<span className={accentColor}>TECH</span>
                </h3>
                <p className={`${accentColor} text-xs`}>Engenharia</p>
              </div>
            </div>
            <p className="leading-relaxed max-w-md mb-4">
              {t.footer.description}
            </p>
            <div className="h-1 w-24 bg-yellow-400" />
          </div>

          {/* Serviços */}
          <div>
            <h4 className={`${headingColor} font-bold mb-4 text-lg`}>{t.footer.services}</h4>
            <ul className="space-y-2">
              {t.footer.servicesList.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('servicos')}
                    className={`${textColor} ${hoverColor} transition-colors text-sm`}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa e Contato */}
          <div>
            <h4 className={`${headingColor} font-bold mb-4 text-lg`}>{t.footer.company}</h4>
            <ul className="space-y-2 mb-6">
              {t.footer.companyList.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      scrollToSection(item === t.footer.companyList[0] ? 'equipe' : 'contato')
                    }
                    className={`${textColor} ${hoverColor} transition-colors text-sm`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            <h4 className={`${headingColor} font-bold mb-4 text-lg`}>
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2 text-sm">
              <p className={textColor}>(15) 3552-2325</p>
              <p className={textColor}>engenharia@dibitech.com.br</p>
              <p className={textColor}>Apiaí, SP</p>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className={`border-t ${isDark ? 'border-zinc-800' : 'border-gray-300'} pt-8 flex flex-col md:flex-row justify-between items-center gap-4`}>
          <p className="text-sm">
            {t.footer.rights}
          </p>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${textColor} ${hoverColor} transition-colors`}
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
