import anime from 'animejs/lib/anime.es.js';

const background = document.querySelector('.ambient-background');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (background) {
  const sweep = document.createElement('span');
  sweep.className = 'ambient-sweep';
  background.appendChild(sweep);
  const beams = Array.from({ length: 7 }, (_, index) => {
    const beam = document.createElement('span');
    beam.className = 'ambient-beam';
    beam.style.setProperty('--beam-index', String(index));
    background.appendChild(beam);
    return beam;
  });

  if (!reducedMotion) {
    const ambient = anime({
      targets: beams,
      translateX: () => anime.random(-90, 90),
      translateY: () => anime.random(-55, 55),
      opacity: () => anime.random(30, 58) / 100,
      duration: 8200,
      delay: anime.stagger(650),
      direction: 'alternate',
      easing: 'easeInOutSine',
      loop: true,
    });
    const sweepMotion = anime({
      targets: sweep,
      translateX: ['0vw', '72vw'],
      opacity: [0.18, 0.42],
      duration: 14000,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true,
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { ambient.pause(); sweepMotion.pause(); }
      else { ambient.play(); sweepMotion.play(); }
    });
  }
}
