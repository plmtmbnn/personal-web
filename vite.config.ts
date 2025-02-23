import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import Inspect from 'vite-plugin-inspect';
import viteCompression from 'vite-plugin-compression';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    Inspect(),
    viteCompression(),
    imagetools()
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
