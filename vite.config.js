// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Root is the project folder — index.html lives here
  root: '.',

  build: {
    // Output goes to dist/ — what Vercel deploys
    outDir: 'dist',
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    open: true,
  },
});
