// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/IBAADAT_Gallery_App/',
  plugins: [react()],
})
