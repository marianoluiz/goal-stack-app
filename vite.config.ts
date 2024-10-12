import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', //default is dist
    emptyOutDir: false, // Ensure this is set to false to prevent cleaning up the directory
  },
  server: {
    port: 3000, // Ensure this port is not conflicting with your backend
  },
});
