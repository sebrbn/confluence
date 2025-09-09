import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    // increase warning limit (optional)
    chunkSizeWarningLimit: 800, // kB

    rollupOptions: {
      output: {
        // separate big dependencies into their own chunks
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['axios', 'lodash'] // add other big libs you use
        }
      }
    }
  }
})
