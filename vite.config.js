import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/newsletter-sign-up-form/',  // Replace this with your repo name
  plugins: [react()],
})
