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

  // 🎨 Paletas de cores por tema (destaque amarelo no tema claro)
  const colorsByTheme = {
    light: {
      accent: "#FACC15",         // amarelo para destaque
      accentText: "text-yellow-600",
      bgSection: "bg-white",
      bgCard: "bg-gray-100",
      borderCard: "border-gray-300",
      textMain: "text-gray-800",
      textSecondary: "text-gray-600",
      glow: "bg-yellow-400/20 blur-3xl",
    },
    dark: {
      accent: "#FACC15",         // amarelo para destaque
      accentText: "text-yellow-400",
      bgSection: "bg-gradient-to-b from-black via-zinc-900 to-black",
      bgCard: "bg-zinc-900",
      borderCard: "border-zinc-800",
      textMain: "text-white",
      textSecondary: "text-gray-300",
      glow: "bg-yellow-400/20 blur-3xl",
    },
  };

  const colors = colorsByTheme[theme] || colorsByTheme.light;

  const projectIcons = [Factory, Droplet, Building2];
  const projectTags = [
    ["CLPs", "SCADA", "Sensores"],
    ["SDCD", "Otimização", "Monitoramento"],
    ["BMS", "IoT", "Eficiência"],
  ];

  return (
    <section
      id="projetos"
      className={`py-24 relative overflow-hidden transition-colors duration-500 ${colors.bgSection}`}
    >
      {/* 🔳 Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, ${colors.accent} 49%, ${colors.accent} 51%, transparent 52%)`,
            backgroundSize: "20px 20px",
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
              style={{
                backgroundColor: `${colors.accent}33`,
                borderColor: colors.accent,
              }}
            >
              <span className="font-bold text-sm tracking-wider" style={{ color: colors.accent }}>
                {t.projects.badge}
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span style={{ color: colors.textMain }}>{t.projects.title} </span>
            <span style={{ color: colors.accent }}>{t.projects.titleHighlight}</span>
          </h2>

          <div
            className="h-1 w-48 mx-auto mb-6"
            style={{ background: `linear-gradient(to right, transparent, ${colors.accent}, transparent)` }}
          />

          <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.textSecondary }}>
            {t.projects.description}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items?.map((project, index) => {
            const Icon = projectIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full group cursor-pointer overflow-hidden transition-all duration-300 border-2 ${colors.bgCard} ${colors.borderCard}`}
                >
                  {/* Barra superior */}
                  <div
                    className="h-2"
                    style={{
                      background: `linear-gradient(to right, ${colors.accent}, ${colors.accent}99, ${colors.accent})`,
                    }}
                  />

                  <CardHeader>
                    <div className="relative mb-4">
                      <div
                        className="w-20 h-20 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg"
                        style={{
                          border: `2px solid ${colors.accent}`,
                          backgroundColor: colors.bgCard,
                          boxShadow: `0 0 25px ${colors.accent}33`,
                        }}
                      >
                        <Icon
                          className="w-10 h-10 transition-colors group-hover:brightness-110"
                          style={{ color: colors.accent }}
                        />
                      </div>
                      <div
                        className="absolute top-0 right-0 px-3 py-1 font-bold text-xs rounded-full"
                        style={{ backgroundColor: colors.accent, color: colors.bgCard }}
                      >
                        {project.result}
                      </div>
                    </div>

                    <CardTitle style={{ color: colors.textMain }}>{project.title}</CardTitle>
                    <p style={{ color: colors.accent, fontWeight: 600 }}>{project.client}</p>
                  </CardHeader>

                  <CardContent>
                    <p style={{ color: colors.textSecondary }}>{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {projectTags[index]?.map((tag, idx) => (
                        <Badge
                          key={idx}
                          className="text-xs font-semibold transition-all duration-300"
                          style={{
                            backgroundColor: `${colors.accent}1A`,
                            border: `1px solid ${colors.accent}4D`,
                            color: colors.accent,
                          }}
                        >
                          {tag}
                        </Badge>
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
