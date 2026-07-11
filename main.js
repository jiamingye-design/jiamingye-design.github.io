/* =========================================================
   Mobile nav toggle
   ========================================================= */
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.textContent = isOpen ? 'Close' : 'Menu';
  });
}

/* =========================================================
   Lightbox (GLightbox) — for project gallery images
   Loaded only if the library + gallery markup exist on this page.
   ========================================================= */
if (window.GLightbox && document.querySelector('[data-glightbox]')) {
  GLightbox({
    selector: '[data-glightbox]',
    touchNavigation: true,
    loop: true,
    zoomable: true,
  });
}

/* =========================================================
   Carousel (Swiper) — for project media sliders
   ========================================================= */
if (window.Swiper) {
  document.querySelectorAll('.swiper').forEach((el) => {
    new Swiper(el, {
      loop: true,
      spaceBetween: 0,
      navigation: {
        nextEl: el.querySelector('.swiper-button-next'),
        prevEl: el.querySelector('.swiper-button-prev'),
      },
      pagination: {
        el: el.querySelector('.swiper-pagination'),
        clickable: true,
      },
    });
  });
}

/* =========================================================
   Hover-preview effect ("Image Hover" from Lay Theme)
   Attach to any element with [data-hover-preview="path/to/image.jpg"]
   A floating box follows the cursor and shows the image while hovering.
   Falls back gracefully — if no matching elements exist, does nothing.
   ========================================================= */
(function hoverPreview() {
  const triggers = document.querySelectorAll('[data-hover-preview]');
  if (!triggers.length) return;

  const box = document.createElement('div');
  box.className = 'hover-preview-box';
  Object.assign(box.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '220px',
    height: '160px',
    pointerEvents: 'none',
    zIndex: '999',
    opacity: '0',
    transform: 'translate(-50%, -50%) scale(.96)',
    transition: 'opacity .25s ease, transform .25s ease',
    border: '1px solid var(--line)',
    background: 'var(--paper-2)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    color: 'var(--muted)',
    textAlign: 'center',
    padding: '8px',
  });
  document.body.appendChild(box);

  let raf = null;
  let targetX = 0, targetY = 0;

  function move(e) {
    targetX = e.clientX;
    targetY = e.clientY - 110; // float slightly above the cursor
    if (!raf) {
      raf = requestAnimationFrame(() => {
        box.style.left = targetX + 'px';
        box.style.top = targetY + 'px';
        raf = null;
      });
    }
  }

  triggers.forEach((el) => {
    const src = el.getAttribute('data-hover-preview');
    const label = el.getAttribute('data-hover-label') || '';
    el.addEventListener('mouseenter', () => {
      if (src) {
        box.style.backgroundImage = `url("${src}")`;
        box.textContent = '';
      } else {
        box.style.backgroundImage = 'none';
        box.textContent = label;
      }
      box.style.opacity = '1';
      box.style.transform = 'translate(-50%, -50%) scale(1)';
      window.addEventListener('mousemove', move);
    });
    el.addEventListener('mouseleave', () => {
      box.style.opacity = '0';
      box.style.transform = 'translate(-50%, -50%) scale(.96)';
      window.removeEventListener('mousemove', move);
    });
  });
})();
