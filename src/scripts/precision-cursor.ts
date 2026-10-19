import anime from 'animejs/lib/anime.es.js';

const cursor = document.querySelector('.precision-cursor');
const pointerFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (cursor instanceof HTMLElement && pointerFine && !reducedMotion) {
  document.documentElement.classList.add('has-precision-cursor');
  let visible = false;
  let hovering = false;

  document.addEventListener('pointermove', (event) => {
    if (!visible) {
      visible = true;
      anime({ targets: cursor, opacity: 1, duration: 140, easing: 'linear' });
    }
    anime({ targets: cursor, left: event.clientX, top: event.clientY, duration: 180, easing: 'easeOutQuad' });
  }, { passive: true });

  const setHover = (event: PointerEvent) => {
    const target = event.target;
    const interactive = target instanceof Element && Boolean(target.closest('a, button, input, textarea, select, [role="button"]'));
    if (interactive === hovering) return;
    hovering = interactive;
    anime({ targets: cursor, scale: interactive ? 1.22 : 1, rotate: interactive ? 45 : 0, duration: 180, easing: 'easeOutCubic' });
    cursor.classList.toggle('is-hovering', interactive);
  };

  document.addEventListener('pointerover', setHover, { passive: true });
  document.addEventListener('pointerout', setHover, { passive: true });
  document.addEventListener('pointerleave', () => anime({ targets: cursor, opacity: 0, duration: 140 }), { passive: true });
  document.addEventListener('pointerenter', () => anime({ targets: cursor, opacity: 1, duration: 140 }), { passive: true });
}
