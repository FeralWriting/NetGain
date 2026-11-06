import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main:     'index.html',
        services: 'services/index.html',
        insights: 'insights/index.html',
        contact:  'contact/index.html',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
