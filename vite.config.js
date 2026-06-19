import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        contact: resolve(__dirname, 'contact.html'),
        'boys-pg-lohegaon': resolve(__dirname, 'boys-pg-lohegaon.html'),
        'hostel-near-dy-patil-pune': resolve(__dirname, 'hostel-near-dy-patil-pune.html'),
      }
    }
  }
})
