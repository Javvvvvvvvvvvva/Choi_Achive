import restart from 'vite-plugin-restart'

export default {
  root: 'src', // Tell Vite your index.html lives here
  publicDir: '../static',
  build: {
    outDir: '../dist', // Output in root-level 'dist'
    emptyOutDir: true,
    sourcemap: true
  },
  plugins: [
    restart({ restart: ['../static/**'] })
  ]
}
