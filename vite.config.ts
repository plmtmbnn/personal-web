import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    Inspect()
  ],
  server: {
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // Optional: Use this for debugging if needed
    rollupOptions: {
      output: {
        // Customize filenames and other output settings if necessary
      }
    }
  }
});
