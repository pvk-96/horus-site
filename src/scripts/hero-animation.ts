import anime from 'animejs/lib/anime.es.js';

const visual = document.getElementById('hero-visual');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (visual && !reducedMotion) {
  const geometry = visual.querySelector('[data-hero-geometry]');
  const facets = visual.querySelectorAll('[data-hero-facet]');
  const orbit = visual.querySelector('[data-hero-orbit]');
  const marker = visual.querySelector('[data-hero-marker]');
  const motion = anime.timeline({ autoplay: true, loop: true });

  motion
    .add({ targets: geometry, rotate: '+=360', duration: 28000, easing: 'linear' }, 0)
    .add({ targets: orbit, rotate: '-=360', duration: 22000, easing: 'linear' }, 0)
    .add({ targets: facets, opacity: [0.25, 0.75], duration: 1800, delay: anime.stagger(240), direction: 'alternate', easing: 'easeInOutSine' }, 0)
    .add({ targets: marker, scale: [0.82, 1.14], opacity: [0.45, 0.9], duration: 1600, direction: 'alternate', easing: 'easeInOutSine' }, 0);

  const onPointerMove = (event: PointerEvent) => {
    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    anime.remove(geometry);
    anime({ targets: geometry, translateX: x * 20, translateY: y * 16, duration: 700, easing: 'easeOutCubic' });
  };

  visual.addEventListener('pointermove', onPointerMove, { passive: true });
  document.addEventListener('visibilitychange', () => { if (document.hidden) motion.pause(); else motion.play(); });
}
