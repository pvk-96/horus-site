import anime from 'animejs/lib/anime.es.js';

const timeline = document.getElementById('roadmap-timeline');
const progressBar = document.getElementById('timeline-progress');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (timeline && progressBar) {
  const milestones = Array.from(timeline.querySelectorAll<HTMLElement>('.milestone'));
  const update = () => {
    const rect = timeline.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.52 - rect.top) / rect.height));
    anime({ targets: progressBar, height: `${progress * rect.height}px`, duration: reducedMotion ? 1 : 420, easing: 'easeOutCubic' });
    milestones.forEach((milestone, index) => {
      const active = index === 0 || milestone.getBoundingClientRect().top < window.innerHeight * 0.68;
      const wasActive = milestone.classList.contains('active');
      milestone.classList.toggle('active', active);
      if (active && !wasActive && !reducedMotion) anime({ targets: milestone, translateX: [6, 0], opacity: [0.72, 1], duration: 360, easing: 'easeOutCubic' });
    });
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
}
