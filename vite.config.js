import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src/',
  publicDir: '../public', // optional: use this only if you want to serve static files
  server: {
    host: true,
    open: true
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true
  }
})
