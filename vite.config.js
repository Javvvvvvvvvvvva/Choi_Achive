import restart from 'vite-plugin-restart'

export default {
  publicDir: 'static', // Keep it relative to root
  build: {
    outDir: 'dist',     // Stay inside project folder
    emptyOutDir: true,
    sourcemap: true
  },
  plugins: [
    restart({ restart: ['static/**'] }) // Watch static folder
  ]
}
