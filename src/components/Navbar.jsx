import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTheme } from "@/components/ThemeContext";

export default function Navbar() {
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: t.nav.home, id: "inicio" },
    { label: t.nav.services, id: "servicos" },
    { label: t.nav.team, id: "equipe" },
    { label: t.nav.projects, id: "projetos" },
    { label: t.nav.contact, id: "contato" },
  ];

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const themeIcon = () => {
    if (theme === "light") return <Sun className="w-5 h-5" />;
    if (theme === "dark") return <Moon className="w-5 h-5" />;
    return <Laptop className="w-5 h-5" />;
  };

  // 🎨 Estilos simplificados com melhor contraste
  const getNavStyles = (isScrolled) => {
    return {
      // Background e bordas
      bg: isScrolled
        ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg"
        : "bg-background/80 backdrop-blur-md",
      mobileBg: "bg-background border border-border",
      
      // Textos com melhor contraste
      text: "text-foreground font-semibold",
      textSecondary: "text-muted-foreground",
      
      // Interações
      linkHover: "hover:text-accent hover:scale-105",
      buttonHover: "hover:bg-accent/90",
      
      // Botões
      themeButton: "bg-background border border-border hover:bg-accent hover:text-accent-foreground",
      ctaButton: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg",
      
      // Efeitos
      logoContainer: "bg-accent/15 hover:bg-accent/20",
      hoverBg: "hover:bg-accent/15"
    };
  };

  const styles = getNavStyles(isScrolled);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${styles.bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Sem fundo amarelo, melhor contraste */}
          <div
            className={`flex items-center gap-3 cursor-pointer transition-all duration-300 ${styles.logoContainer} rounded-2xl px-4 py-2`}
            onClick={() => scrollToSection("inicio")}
          >
            <img
              src={`${import.meta.env.BASE_URL}img/logo.png`}
              alt="DiBiTech Logo"
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col">
              <h1 className={`font-bold text-xl md:text-2xl ${styles.text}`}>
                dibi<span className="text-accent">TECH</span>
              </h1>
              <p className={`text-xs font-medium ${styles.textSecondary}`}>
                Engenharia & Inovação
              </p>
            </div>
          </div>

          {/* Menu Desktop - Melhor contraste e espaçamento */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`${styles.text} ${styles.linkHover} transition-all duration-200 font-medium relative group text-base px-2 py-1`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            {/* Controles */}
            <div className="flex items-center gap-4 pl-4 border-l border-border">
              <LanguageSwitcher />

              <button
                onClick={cycleTheme}
                title={`Tema atual: ${theme}`}
                className={`p-3 rounded-xl transition-all duration-300 ${styles.themeButton}`}
              >
                {themeIcon()}
              </button>

              <Button
                onClick={() => scrollToSection("contato")}
                className={`font-bold text-base px-6 py-2 tracking-wide ${styles.ctaButton} transition-all duration-300`}
              >
                {t.nav.quote}
              </Button>
            </div>
          </div>

          {/* Menu Mobile - Melhor visibilidade */}
          <button
            className={`md:hidden p-3 rounded-xl border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu Mobile Expandido - Melhor contraste */}
        {isMobileMenuOpen && (
          <div className={`md:hidden ${styles.mobileBg} rounded-xl mt-2 p-6 shadow-2xl backdrop-blur-lg transition-all duration-300`}>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left ${styles.text} ${styles.linkHover} py-4 px-4 rounded-xl ${styles.hoverBg} transition-all duration-200 font-medium text-lg border border-transparent hover:border-accent/20`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border space-y-4">
              <div className="flex items-center justify-between px-2">
                <span className={`text-sm ${styles.textSecondary}`}>Idioma:</span>
                <LanguageSwitcher />
              </div>
              
              <div className="flex items-center justify-between px-2">
                <span className={`text-sm ${styles.textSecondary}`}>Tema:</span>
                <button
                  onClick={cycleTheme}
                  title={`Tema atual: ${theme}`}
                  className={`p-3 rounded-xl transition-all duration-300 ${styles.themeButton} flex items-center gap-2`}
                >
                  {themeIcon()}
                  <span className="text-sm font-medium capitalize">{theme}</span>
                </button>
              </div>

              <Button
                onClick={() => scrollToSection("contato")}
                className={`w-full font-bold text-lg py-4 tracking-wide ${styles.ctaButton} transition-all duration-300 mt-4`}
              >
                {t.nav.quote}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}