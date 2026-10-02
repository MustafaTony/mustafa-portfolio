# Mustafa Tony, portfolio

React + Vite single page. No Tailwind, router or animation library: the page is one route and the only motion is CSS.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output in dist/
npm run preview  # serve the production build locally
```

## Fill in your links

Open `src/data.js`. Every link starts as an empty string and the page shows a "to be added" marker.
Set a value and the marker becomes a real link. To add a CV button, put the PDF in `public/`
(for example `public/Mustafa-Tony-CV.pdf`) and set `resume: '/Mustafa-Tony-CV.pdf'`.

## Push to GitHub

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

## Deploy on Vercel

1. Import the GitHub repository at vercel.com/new.
2. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
3. Deploy. Every push to `main` redeploys.

## Structure

```
src/
  data.js                    links and Kerb metrics
  styles.css                 design tokens, light and dark themes
  App.jsx
  components/
    Header, Hero, Kerb, LanguageIdentifier, Background, Tools, Contact
    MetricsCompare.jsx       the metric switcher in the Kerb result section
    Slot.jsx                 link, or a "to be added" marker when empty
```

The Kerb numbers come from the Kerb project README (test set, 34,872 rows). If you retrain the model,
update the table in `components/Kerb.jsx` and the `METRICS` object in `src/data.js`.
