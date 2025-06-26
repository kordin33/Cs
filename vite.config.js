import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  base: '/', // Ensure base path is correctly set
  build: {
    outDir: 'dist',
  },
  publicDir: 'assets',
  server: {
    open: '/index.html',
  },
});
