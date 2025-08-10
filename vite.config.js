// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: '/resume/',              // ⬅️ asset path akan /resume/...
  build: { outDir: 'dist/resume' }, // ⬅️ index.html di dist/resume/index.html
  plugins: [vue()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  }
})
