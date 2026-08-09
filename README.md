# amazon-pdp

DearBora marketing landing page — static HTML/CSS/JS, implemented from the
`DearBora PDP Wireframe` design (Claude Design project).

## Run locally

```
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Structure

- `index.html` — all page markup/sections
- `css/styles.css` — design tokens + styles
- `js/main.js` — portfolio carousel, FAQ accordion, video lightbox, mobile nav
- `assets/images/` — portfolio example photos
- `assets/videos/` — hero + "how we work" step videos

All media from the design handoff (hero video, 4 "how we work" step videos,
and all 10 portfolio photos) is in place. Video/image slots still have a
graceful placeholder fallback (a labeled block instead of a broken media
icon) if a file is ever missing or fails to load — see `.img-slot`/
`.video-slot` in `css/styles.css` and the `onerror` handlers in `index.html`.