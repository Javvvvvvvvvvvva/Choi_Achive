# Deployment Guide for CHOI ARCHIVE

## Issues Fixed

The main issue was that the 3D model and texture files were not being copied to the build output when deploying to Vercel. This caused the model to not display on the deployed site.

## What Was Fixed

1. **File Paths**: Changed absolute paths (`/textures/...`) to relative paths (`./textures/...`) in `script.js`
2. **Asset Copying**: Added a postbuild script to ensure 3D model and texture files are copied to the build output
3. **Error Handling**: Added comprehensive error handling and logging for model and texture loading
4. **Vercel Configuration**: Created `vercel.json` with proper routing and caching headers

## Deployment Steps

1. **Build the project locally first**:
   ```bash
   npm run build
   ```

2. **Verify the build output**:
   Check that `dist/` folder contains:
   - `model.obj` (3D model file)
   - `textures/` folder with all texture files
   - `audio/` folder with audio files
   - `index.html` and `assets/` folder

3. **Deploy to Vercel**:
   ```bash
   # If using Vercel CLI
   vercel --prod
   
   # Or push to GitHub and let Vercel auto-deploy
   git add .
   git commit -m "Fix 3D model deployment issues"
   git push origin main
   ```

## Troubleshooting

If the model still doesn't appear:

1. **Check browser console** for error messages
2. **Verify file paths** in the deployed version
3. **Check network tab** to see if assets are loading
4. **Ensure all files** are in the correct locations in the build output

## File Structure After Build

```
dist/
├── index.html
├── model.obj
├── textures/
│   ├── tiles.png
│   ├── tiles_normalGL.jpg
│   ├── tiles_roughness.jpg
│   ├── tiles_displacement.jpg
│   ├── cyber.jpg
│   └── cyber2.jpeg
├── audio/
│   └── ambient.mp3
└── assets/
    ├── index-*.js
    ├── index-*.css
    └── ambient-*.mp3
```

## Key Changes Made

- **script.js**: Fixed texture and model loading paths
- **package.json**: Added postbuild script for asset copying
- **vercel.json**: Added proper deployment configuration
- **Error handling**: Added comprehensive logging and fallbacks

## Testing Locally

Before deploying, test the build locally:
```bash
npm run build
npm run preview
```

This will help catch any issues before deploying to Vercel.
