# Deployment Guide

This guide covers deploying your portfolio to GitHub Pages and Netlify.

## 🚀 Quick Deployment Options

### Option 1: Netlify (Recommended)
**Easiest option with continuous deployment**

1. **Push to GitHub First**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Netlify**
   - Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop your entire portfolio folder
   - **OR** connect your GitHub repo for automatic deployments

3. **Netlify Configuration** (Already configured)
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18
   - MIME headers configured for JS/CSS files

### Option 2: GitHub Pages
**Free hosting directly from your GitHub repo**

1. **Install GitHub Pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json** (add these scripts)
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist",
     "homepage": "https://kukush.github.io/portfolio"
   }
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## � Netlify MIME Type Fix

If you encounter "Expected a JavaScript-or-Wasm module script" error:

1. **Updated netlify.toml** with proper MIME headers
2. **Changed vite.config.js base path** to "/" for Netlify
3. **Rebuild and redeploy**:
   ```bash
   npm run build
   # Re-upload to Netlify or push to trigger auto-deploy
   ```

## �📋 Deployment Checklist

### Before Deploying:
- [ ] Run `npm run build` to test build process
- [ ] Test all links and functionality
- [ ] Update environment variables if needed
- [ ] Commit all changes to git

### Netlify Setup:
- [ ] Create Netlify account
- [ ] Connect GitHub repository
- [ ] Configure build settings (already done in `netlify.toml`)
- [ ] Set up custom domain (optional)

### GitHub Pages Setup:
- [ ] Enable GitHub Pages in repo settings
- [ ] Choose source: `gh-pages` branch
- [ ] Configure custom domain (optional)

## 🔧 Configuration Files

### Netlify Configuration (`netlify.toml`)
```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*.js"
  [headers.values]
    Content-Type = "application/javascript"

[[headers]]
  for = "/*.css"
  [headers.values]
    Content-Type = "text/css"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Vite Configuration (`vite.config.js`)
```javascript
export default defineConfig({
  plugins: [react()],
  base: "/", // Use "/" for Netlify, "/portfolio/" for GitHub Pages
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
```

## 🌐 Custom Domain Setup

### Netlify:
1. Go to Domain settings in Netlify dashboard
2. Add your custom domain
3. Update DNS records as instructed

### GitHub Pages:
1. Go to repository Settings > Pages
2. Add custom domain in "Custom domain" section
3. Update DNS records with provided values

## 🔄 Continuous Deployment

### Netlify (Automatic):
- Push to main branch → Auto-deploy
- Pull requests → Preview deployments
- Branch deployments available

### GitHub Pages (Manual):
- Run `npm run deploy` after changes
- Or set up GitHub Actions for automatic deployment

## 📊 Performance Tips

1. **Image Optimization**
   - Images are already optimized by Vite
   - Consider WebP format for better compression

2. **Build Optimization**
   - Code splitting is automatic
   - CSS is minified and purged

3. **SEO Meta Tags**
   - Update `index.html` meta tags as needed
   - Add Open Graph tags for social sharing

## 🚨 Troubleshooting

### Build Errors:
- Check `npm run build` locally first
- Verify all imports are correct
- Check for missing dependencies

### Deployment Issues:
- Clear build cache on platform
- Check environment variables
- Verify build configuration

### MIME Type Errors (Netlify):
- Ensure `netlify.toml` has proper headers
- Check `vite.config.js` base path is "/"
- Clear Netlify cache and redeploy

### Routing Issues:
- SPA routing handled by redirects
- 404 errors should redirect to index.html

## 📞 Support

For deployment issues:
- Netlify: https://www.netlify.com/support/
- GitHub Pages: https://docs.github.com/en/pages
- Vite: https://vitejs.dev/guide/build.html
