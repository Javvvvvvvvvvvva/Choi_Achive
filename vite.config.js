import restart from 'vite-plugin-restart'

// vite.config.js
export default {
    publicDir: 'static',
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: true
    },
    plugins: [
      restart({ restart: ['static/**'] })
    ]
  }
  
