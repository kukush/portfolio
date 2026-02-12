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

All portfolio content is defined in `src/config.js`. Edit that file to update your name, skills, experience, projects, and contact information.

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
