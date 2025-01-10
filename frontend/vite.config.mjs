import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    proxy: {
      '/api': {
        target: `${process.env.REACT_APP_BACKEND_BASEURL}`,
        changeOrigin: true, 
      },
    }
  }
})
