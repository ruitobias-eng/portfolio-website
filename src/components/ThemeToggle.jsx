// components/ThemeToggle.jsx
import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeContext';

export const ThemeToggle = () => {
  const { theme, setTheme, toggleTheme } = useTheme();

  // Se quiser usar o toggle cíclico
  // return (
  //   <Button variant="outline" size="sm" onClick={toggleTheme}>
  //     {theme === 'light' && <Sun className="w-4 h-4" />}
  //     {theme === 'dark' && <Moon className="w-4 h-4" />}
  //     {theme === 'system' && <Monitor className="w-4 h-4" />}
  //   </Button>
  // );

  // Ou se quiser botões individuais
  return (
    <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md transition-all ${
          theme === 'light' 
            ? 'bg-accent text-accent-foreground shadow-sm' 
            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
        }`}
        title="Tema Claro"
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md transition-all ${
          theme === 'dark' 
            ? 'bg-accent text-accent-foreground shadow-sm' 
            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
        }`}
        title="Tema Escuro"
      >
        <Moon className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md transition-all ${
          theme === 'system' 
            ? 'bg-accent text-accent-foreground shadow-sm' 
            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
        }`}
        title="Seguir Sistema"
      >
        <Monitor className="w-4 h-4" />
      </button>
    </div>
  );
};