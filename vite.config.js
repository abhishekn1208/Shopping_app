import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/index.html' // This tells Vite to treat index.html as the entry point
    } // Specify output directory (Vercel expects this by default)
  },
})
