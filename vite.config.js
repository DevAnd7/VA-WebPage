import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/virgilioarrieta/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})
