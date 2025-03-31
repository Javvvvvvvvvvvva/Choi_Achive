import restart from 'vite-plugin-restart'

// vite.config.js
export default {
    root: 'src',
    publicDir: '../static',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      sourcemap: true
    }
  }
  
