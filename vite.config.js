import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  base: '/portfolio-website/',  // ✅ correto para GitHub Pages
  plugins: [react(), tailwindcss()], // ✅ integração React + Tailwind
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ✅ bom atalho de importação
    },
  },
})
