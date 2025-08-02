import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // Cette option est cruciale pour le déploiement sur GitHub Pages.
  // Remplacez 'kasa' par le nom de votre repository si différent.
  base: '/kasa/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})