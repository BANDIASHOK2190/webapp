import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/webapp/", // Replace with your GitHub repo name
  plugins: [react()],
})
