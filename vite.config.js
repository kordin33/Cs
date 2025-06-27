import { defineConfig } from 'vite';
import { resolve } from 'path';
import { glob } from 'glob';

// Find all HTML files in the root directory
const htmlFiles = glob.sync('*.html');

const input = htmlFiles.reduce((acc, file) => {
  const name = file.replace('.html', '');
  acc[name] = resolve(__dirname, file);
  return acc;
}, {});

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input,
    },
  },
  server: {
    open: '/index.html',
  },
});
