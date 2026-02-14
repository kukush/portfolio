# Portfolio Documentation

## Important Updates & Changes

### Recent Major Updates

#### 1. Profile Image System (Feb 2026)
- **Changed from external URLs to local image imports**
- **Moved from `public/` folder to `src/` folder for proper Vite handling**
- **Updated import method**: `import profileImage from "./pic.jpeg"`
- **Increased image size**: 120px → 150px (desktop), 100px → 120px (mobile)

#### 2. Status Indicator
- **Added availability status below profile picture**
- **Config-driven**: `hero.status.available` and `hero.status.text`
- **Visual indicator**: Animated dot with color coding (green/red)

#### 3. Social Links Enhancement
- **Added social links to hero section with SVG icons**
- **Moved GitHub, LinkedIn, Email to footer**
- **Icon-based design** instead of text links

#### 4. Contact Section Redesign
- **Professional "Get In Touch" layout**
- **Call-to-action email button**
- **Response time message**
- **Footer with social links**

#### 5. Content Refinement
- **Removed repetitive content in bio and about sections**
- **Streamlined skills list with architecture focus**
- **Updated contact information with real details**

## Supported Image Types

### Recommended Formats
| Format | Best For | File Size | Quality | Browser Support |
|--------|----------|-----------|---------|-----------------|
| **JPEG** | Photographs | Small | Good | ✅ Universal |
| **PNG** | Graphics with transparency | Medium | Excellent | ✅ Universal |
| **SVG** | Icons, simple graphics | Very Small | Infinite | ✅ Universal |
| **WebP** | Modern web optimization | Small | Good | ✅ Modern browsers |
| **GIF** | Simple animations | Small | Limited | ✅ Universal |

### Recommended Image Specifications

#### Profile Picture
- **Format**: JPEG (recommended) or PNG
- **Size**: 150px × 150px (desktop), 120px × 120px (mobile)
- **Shape**: Circular (CSS `border-radius: 50%`)
- **File Size**: Under 200KB for optimal loading
- **Aspect Ratio**: 1:1 (square)

#### File Location
```
src/
├── pic.jpeg          ← Your profile picture
├── App.jsx           ← Import statement
└── config.js         ← Configuration (no longer needs image path)
```

## Image Implementation Guide

### Method 1: Import (Recommended)
```javascript
// In App.jsx
import profileImage from "./pic.jpeg";

// In JSX
<img src={profileImage} alt={hero.name} className="hero-image" />
```

### Method 2: Public Folder (Alternative)
```javascript
// Place image in public/
// In config.js
image: "/pic.jpeg"

// In JSX
<img src={hero.image} alt={hero.name} className="hero-image" />
```

## Configuration Structure

### Hero Section
```javascript
hero: {
  name: "Your Name",
  title: "Your Title",
  location: "Your Location",
  image: "/pic.jpeg", // Only needed for Method 2
  bio: "Brief bio text",
  status: {
    available: true,        // true/false
    text: "Available"       // Custom status text
  }
}
```

### Skills Section
```javascript
skills: [
  "Architectural Patterns",
  "Data Modeling",
  "Distributed Systems: Kafka, RabbitMQ",
  "Platform Blueprinting",
  "JavaScript",
  "TypeScript",
  "React",
  // ... more skills
]
```

### Contact Section
```javascript
contact: {
  email: "your.email@example.com",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username"
}
```

## Deployment Notes

### Netlify Deployment
1. **Build**: `npm run build`
2. **Deploy**: Drag `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
3. **Configuration**: `netlify.toml` included for optimal settings

### GitHub Pages
1. **Update `vite.config.js`**: Set `base` to your repository name
2. **Build**: `npm run build`
3. **Deploy**: Push to `gh-pages` branch

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## File Structure (Clean)
```
portfolio/
├── src/
│   ├── App.jsx           ← Main React component
│   ├── main.jsx          ← React entry point
│   ├── config.js         ← All portfolio content
│   ├── index.css         ← Styles
│   └── pic.jpeg          ← Profile picture
├── public/
│   └── index.html        ← HTML template
├── dist/                 ← Built files (generated)
├── netlify.toml          ← Netlify configuration
├── vite.config.js        ← Vite configuration
└── package.json          ← Dependencies
```

## Best Practices

### Images
- ✅ Use JPEG for photographs
- ✅ Keep file sizes under 200KB
- ✅ Use 1:1 aspect ratio for profile pictures
- ✅ Import images in React components
- ✅ Use descriptive alt text

### Performance
- ✅ Build with `npm run build` before deployment
- ✅ Test on mobile devices
- ✅ Check image loading times
- ✅ Use modern image formats when possible

### Content
- ✅ Keep bio concise (under 100 words)
- ✅ Avoid repetitive content
- ✅ Use consistent formatting
- ✅ Update contact information regularly

## Troubleshooting

### Image Not Showing
1. **Check import path**: `import profileImage from "./pic.jpeg"`
2. **Verify file location**: Image should be in `src/` folder
3. **Check file extension**: Case-sensitive (`.jpeg` vs `.jpg`)
4. **Restart dev server**: `npm run dev`

### Build Issues
1. **Clear cache**: `rm -rf node_modules dist && npm install`
2. **Check syntax**: Validate JSON in `config.js`
3. **Update dependencies**: `npm update`

### Deployment Issues
1. **Check build**: `npm run build` should complete without errors
2. **Verify paths**: Ensure all imports are correct
3. **Test locally**: `npm run preview` before deployment
