import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

// Convert `import.meta.url` to a file path
const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173, // Specify the port
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/client'), // Points to src/client for aliases
    },
  },
  root: __dirname, // Set root to index.html directory
  build: {
    outDir: resolve(__dirname, 'dist'), // Build output still goes to dist
  },
})