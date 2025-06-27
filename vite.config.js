import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
  },
  publicDir: 'assets', // Serve static assets from the 'assets' directory
  server: {
    open: '/index.html', // Open index.html by default
  },
});
