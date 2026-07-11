# Personal Portfolio Site — Skeleton Guide

This is a **zero-build** static site: just HTML / CSS / JS files.
No Jekyll, no Node, no database. Edit the files, push to GitHub, and it
goes live for free via GitHub Pages — viewable on both desktop and mobile.

## File structure

```
portfolio-site/
├── index.html              Homepage = portfolio thumbnail grid (site entry point)
├── about.html               About / bio
├── portfolio.html          Old-link redirect (auto-forwards to index.html — safe to ignore)
├── project-example.html    Single project detail page template (copy it to add new projects)
├── publications.html       Publications list
├── news.html                News / updates
├── assets/
│   ├── css/style.css       Site-wide styles (edit here = edit the whole site's look)
│   ├── js/main.js          Logic for nav toggle, lightbox, carousel, hover preview
│   ├── img/                 Put your images here
│   └── pdf/                 Put your PDFs here (papers, drawings, reports)
└── README.md
```

## Deploy to GitHub Pages in three steps (free)

1. Create a new GitHub repository named `your-username.github.io`
   (this exact naming pattern makes GitHub treat it as your personal homepage).
2. Upload all the files in this folder to the root of that repository
   (either via the web UI or `git push` — the web UI is easier for beginners:
   open the repo page → Add file → Upload files → drag them in → Commit).
3. Go to the repo's Settings → Pages, set Source to the `main` branch /
   `root` folder → Save. Within a minute or two your site will be live at
   `https://your-username.github.io`.

If you'd rather use a domain you've purchased yourself (e.g. `yourname.com`),
enter it as the Custom domain on that same Pages settings page — GitHub will
show you the DNS records to add.

## How to replace the placeholder content with your own

- **Text**: open the relevant `.html` file and search for the placeholder
  text (things like "replace with...") and edit it directly.
- **Images**: put image files into `assets/img/`, then replace the
  corresponding `<div class="thumb">...</div>` or `.g-item` with:
  ```html
  <img src="assets/img/your-image.jpg" alt="Project description">
  ```
  Compress or convert to **WebP** first (the free tool squoosh.app works
  well) — otherwise a lot of high-res photos will make the site slow to
  load on mobile.
- **PDFs**: put files into `assets/pdf/`, then change the `href="#"` on the
  `pdf-link` button or in the publications list to
  `href="assets/pdf/your-file.pdf"`.
- **Adding a new portfolio project**: copy `project-example.html`, rename
  it (e.g. `project-02.html`), edit its content, then go back to
  `portfolio.html` and add a new card whose link points to this new file.

## The three interactive effects already built in

(These correspond to the Lay Theme add-ons you referenced — all free and
open-source. See them in action in `project-example.html`.)

| Effect | Library used | Where to find it |
|---|---|---|
| Click an image to zoom in (Lightbox) | [GLightbox](https://biati-digital.github.io/glightbox/) | `.gallery` section in `project-example.html` |
| Carousel | [Swiper](https://swiperjs.com/) | `.carousel-wrap` section in `project-example.html` |
| Image preview that follows the cursor on hover (Image Hover) | Custom ~30-line script, see `assets/js/main.js` | The "Related projects" block at the bottom of `project-example.html` — can also be added to text links in `portfolio.html` |

All three libraries are loaded via CDN links (visible in the `<head>` and
just before `</body>` in `project-example.html`) — nothing to install.

## About the fullscreen slider / infinite canvas zoom (Scroll Slider)

These two more experimental effects aren't included in the skeleton by
default, because:
1. They demand stricter control over layout, and are easy to get wrong on mobile;
2. It's better to fill in the core content and images first, then decide
   whether you actually need them.

If you want to add them later, let me know which project page you'd like
to use them on, and I can help add `fullPage.js` (fullscreen slide
transitions) or `panzoom.js` (pan and zoom) to that page.

## Visual design notes (to help you understand/tweak `style.css`)

- Background: pure white `#FFFFFF`; text: near-black ink `#141414`
- Accent color: a restrained moss green `#3E5A45`, used only for hover
  states, the current page indicator, and tags
- Typography: **Fraunces** (a characterful serif) for headings, **Inter**
  for body text, and the monospace **IBM Plex Mono** for index numbers,
  years, and category tags (echoing the feel of research data/indexing)
- Navigation: no more left sidebar — it's now a small cluster of text
  links fixed in the **top-right corner** (brand name + About / Portfolio /
  Publications / News), with no dividing line and no background block,
  shared across every page
- Portfolio grid: thumbnails now sit with clear gaps between them
  (the `gap` on `.portfolio-grid`) instead of being tiled edge-to-edge
  with colored seams — closer to the whitespace feel of lab-v.be
- The homepage now shows the Portfolio directly; About lives on its own
  `about.html` page
