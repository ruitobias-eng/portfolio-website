// src/themeConfig.js
// 🎨 Definições centralizadas dos temas (light, dark, system)
export const themes = {
  light: {
    name: "light",
    bgSection: "bg-white",
    text: "text-gray-900",
    card: "bg-gray-100",
    // adicione mais propriedades conforme necessário
  },
  dark: {
    name: "dark", 
    bgSection: "bg-gray-900",
    text: "text-gray-100",
    card: "bg-gray-800",
    // adicione mais propriedades conforme necessário
  },
  system: {
    name: "system",
    // Para system, você pode querer definir ambos ou usar funções
    light: {
      bgSection: "bg-white",
      text: "text-gray-900",
      card: "bg-gray-100",
    },
    dark: {
      bgSection: "bg-gray-900",
      text: "text-gray-100",
      card: "bg-gray-800",
    }
  },
};

// Helper function para obter classes baseadas no tema atual
export const getThemeClasses = (theme) => {
  if (theme === 'system') {
    // Para system, você pode retornar classes condicionais ou usar CSS variables
    return {
      bgSection: 'bg-white dark:bg-gray-900',
      text: 'text-gray-900 dark:text-gray-100', 
      card: 'bg-gray-100 dark:bg-gray-800'
    };
  }
  
  return themes[theme];
};

// Tema padrão exportado para uso em outros lugares
export const defaultTheme = "dark";