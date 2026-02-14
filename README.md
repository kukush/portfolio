# Portfolio

A minimal, config-driven personal portfolio built with React and Vite.

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Configuration

The portfolio supports two configuration methods:

### 1. Environment Variables (Recommended)

Create a `.env` file in the root directory with the following variables:

```bash
# Hero Section
VITE_HERO_NAME=Your Name
VITE_HERO_TITLE=Your Title/Role
VITE_HERO_LOCATION=Your Location
VITE_HERO_BIO=Your professional bio
VITE_HERO_STATUS_AVAILABLE=true
VITE_HERO_STATUS_TEXT=Available

# About Section
VITE_ABOUT_TEXT=Your about section text

# Contact Information
VITE_CONTACT_EMAIL=your.email@example.com
VITE_CONTACT_GITHUB=https://github.com/yourusername
VITE_CONTACT_LINKEDIN=https://linkedin.com/in/yourprofile

# Skills Section
VITE_SKILLS_TITLE=Technical Skills
VITE_SKILLS_SUBTITLE=Your skills subtitle text

# Projects Section
VITE_PROJECTS_TITLE=Featured Projects
VITE_PROJECTS_DESCRIPTION=Your projects description
```

### 2. Direct Configuration

Alternatively, you can edit the configuration directly in `src/config.js`. This file contains all the default values and will be used as fallbacks when environment variables are not set.

### Environment Variable Priority

Environment variables take precedence over the default values in `config.js`. If an environment variable is not set, the default value from `config.js` will be used.

## Customization

### Skills Categories

Edit the `skills.categories` array in `src/config.js` to customize your skill categories:

```javascript
categories: [
  {
    name: "Category Name",
    icon: "🎯",
    skills: ["Skill1", "Skill2", "Skill3"]
  }
]
```

### Experience

Update the `experience` array to add your work experience:

```javascript
{
  role: "Job Title",
  company: "Company Name",
  period: "2022 – Present",
  location: "City, Country",
  type: "Full-time",
  technologies: ["Tech1", "Tech2"],
  highlights: ["Achievement 1", "Achievement 2"]
}
```

### Projects

Update the `projects` array to showcase your work:

```javascript
{
  name: "Project Name",
  description: "Project description",
  technologies: ["Tech1", "Tech2"],
  image: "/images/project-image.png",
  codeLink: "https://github.com/username/project",
  demoLink: "https://project-demo.com",
  featured: true
}
```

## Deploy to GitHub Pages

1. Make sure the `base` value in `vite.config.js` matches your repository name (e.g., `/portfolio/`).

2. Build the project:

   ```bash
   npm run build
   ```

3. Deploy the `dist` folder to the `gh-pages` branch:

   ```bash
   git add dist -f
   git commit -m "deploy"
   git subtree push --prefix dist origin gh-pages
   ```

4. In your GitHub repository settings, go to **Pages** and set the source branch to `gh-pages`.

Your site will be available at `https://<username>.github.io/portfolio/`.

## Environment Variables Reference

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_HERO_NAME` | Your full name | "Tesfaye Alemu Getahun" |
| `VITE_HERO_TITLE` | Your professional title | "Senior Software Engineer..." |
| `VITE_HERO_LOCATION` | Your location | "Ethiopia, Addis Abeba" |
| `VITE_HERO_BIO` | Professional bio | "Software architect with 10+ years..." |
| `VITE_HERO_STATUS_AVAILABLE` | Availability status | "true" |
| `VITE_HERO_STATUS_TEXT` | Status text | "Available" |
| `VITE_ABOUT_TEXT` | About section content | "I'm a senior software engineer..." |
| `VITE_CONTACT_EMAIL` | Contact email | "kukushalemu@gmail.com" |
| `VITE_CONTACT_GITHUB` | GitHub profile URL | "https://github.com/kukush" |
| `VITE_CONTACT_LINKEDIN` | LinkedIn profile URL | "https://linkedin.com/in/..." |
| `VITE_SKILLS_TITLE` | Skills section title | "Technical Skills" |
| `VITE_SKILLS_SUBTITLE` | Skills section subtitle | "Comprehensive expertise..." |
| `VITE_PROJECTS_TITLE` | Projects section title | "Featured Projects" |
| `VITE_PROJECTS_DESCRIPTION` | Projects section description | "A selection of projects..." |

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS with CSS Variables
- **Build Tool**: Vite
- **Deployment**: GitHub Pages compatible
