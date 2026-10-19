// Roadmap Progress - Scroll-based timeline activation
const timeline = document.getElementById('roadmap-timeline');
const progressBar = document.getElementById('timeline-progress');

if (timeline && progressBar) {
  const milestones = timeline.querySelectorAll('.milestone');

  const updateProgress = () => {
    const timelineRect = timeline.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportMiddle = viewportHeight / 2;

    // Calculate progress based on scroll
    const timelineTop = timelineRect.top;
    const timelineHeight = timelineRect.height;
    const scrollProgress = Math.max(0, Math.min(1, (viewportMiddle - timelineTop) / timelineHeight));

    // Update progress bar
    progressBar.style.height = `${scrollProgress * timelineHeight}px`;

    // Activate milestones as they enter viewport
    milestones.forEach((milestone, index) => {
      const rect = milestone.getBoundingClientRect();
      const milestoneMiddle = rect.top + rect.height / 2;

      if (milestoneMiddle < viewportMiddle + 100) {
        milestone.classList.add('active');
      } else {
        milestone.classList.remove('active');
      }
    });
  };

  // Initial update
  updateProgress();

  // Update on scroll
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateProgress();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Update on resize
  window.addEventListener('resize', updateProgress);

  // Support keyboard navigation
  milestones.forEach((milestone) => {
    const links = milestone.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('focus', () => {
        milestone.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
  });
}
