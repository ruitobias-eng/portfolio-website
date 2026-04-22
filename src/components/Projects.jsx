import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Droplet, Building2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { useTheme } from "@/components/ThemeContext";

export default function Projects() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const colorsByTheme = {
  light: {
    accent: "#FACC15",
    bgSection: "bg-white",
    bgCard: "bg-gray-50",
    borderCard: "border-gray-200",
    textMain: "#000000", 
    textSecondary: "text-gray-700",
  },
  dark: {
    accent: "#FACC15",
    bgSection: "bg-black",
    bgCard: "bg-zinc-900",
    borderCard: "border-zinc-800",
    // Alteramos para Hexadecimal puro para evitar conflitos de herança do Tailwind
    textMain: "#FFFFFF",        // Branco puro para títulos
    textSecondary: "#D1D5DB",   // Equivalente ao gray-300, mas fixo em Hex
    accentText: "#FDE047",      // Um amarelo levemente mais claro (yellow-300) para realces no dark
  },
};

  const colors = colorsByTheme[theme] || colorsByTheme.light;
  const projectIcons = [Factory, Droplet, Building2];
  
  const projectTags = [
    ["CLPs", "SCADA", "Indústria 4.0"],
    ["SDCD", "Otimização", "Sistemas"],
    ["BMS", "IoT", "Eficiência"],
  ];

  return (
    <section id="projetos" className={`py-24 relative overflow-hidden ${colors.bgSection}`}>
      {/* Background Pattern Ajustado */}
      <div className="absolute inset-0 opacity-[0.12]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, ${colors.accent} 49%, ${colors.accent} 51%, transparent 52%)`,
            backgroundSize: "25px 25px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div
              className="px-6 py-2 rounded-full shadow-sm"
              style={{ backgroundColor: colors.accent, color: "#000000" }}
            >
              <span className="font-bold text-xs uppercase tracking-widest">
                {t.projects.badge}
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span style={{ color: colors.textMain }}>{t.projects.title} </span>
            <span style={{ color: colors.accent }}>{t.projects.titleHighlight}</span>
          </h2>

          <div className="h-1.5 w-32 mx-auto mb-8 rounded-full" style={{ backgroundColor: colors.accent }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items?.map((project, index) => {
            const Icon = projectIcons[index];
            return (
              <motion.div key={index} whileHover={{ y: -10 }}>
                <Card className={`h-full border-2 border-t-4 ${colors.bgCard} ${colors.borderCard}`} style={{ borderTopColor: colors.accent }}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: colors.accent, color: "#000000" }}>
                        <Icon className="w-9 h-9" />
                      </div>
                      <Badge className="px-3 py-1 font-bold border-none" style={{ backgroundColor: colors.accent, color: "#000000" }}>
                        {project.result}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold" style={{ color: colors.textMain }}>{project.title}</CardTitle>
                    <p className="font-bold" style={{ color: colors.accent }}>{project.client}</p>
                  </CardHeader>

                  <CardContent>
                    <p className="mb-6" style={{ color: colors.textSecondary }}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {projectTags[index]?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-[10px] font-black uppercase border-2 rounded"
                          style={{
                            borderColor: colors.accent,
                            color: theme === 'light' ? '#856404' : colors.accent,
                            backgroundColor: theme === 'light' ? `${colors.accent}15` : 'transparent'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}