# Travel Photo Library

Put real travel photos here and reference them from `data/destinations.js`.

Recommended structure:

```text
assets/photos/
  germany-berlin/
    hero-cover.jpg
    germany-berlin-cover.jpg
    gallery-01.jpg
    gallery-02.jpg
    gallery-03.jpg
    map-route.png
```

Suggested image sizes:

- Hero and city covers: 1800px wide or larger.
- Gallery images: 1400px wide or larger.
- Use `.jpg` or `.webp` for photos, `.png` for route maps or screenshots.
- Keep filenames lowercase and use hyphens.

To add a new destination:

1. Create a folder under `assets/photos/`.
2. Add a destination object in `data/destinations.js`.
3. Copy `berlin/index.html` into a new city folder.
4. Change the page `data-destination` value to match the new destination `slug`.
