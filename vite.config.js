import { defineConfig } from 'vite';

export default defineConfig({
  // your index.html lives at project root
  root: '.',

  // where to copy “public” static assets into dist/
  publicDir: 'public',

  // if you serve from non-root path, adjust this; otherwise "/" is fine
  base: '/',

  build: {
    // output folder
    outDir: 'dist',

    // clear dist/ before each build
    emptyOutDir: true,

    // ensure index.html is the entry point
    rollupOptions: {
      input: 'index.html'
    }
  },

  server: {
    // when you run `npm run dev`, open http://localhost:5173/index.html
    open: '/index.html'
  }
});


