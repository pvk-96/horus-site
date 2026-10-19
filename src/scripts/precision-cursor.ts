// Precision Cursor - Angular geometric cursor
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(hover: none)').matches;

if (!prefersReducedMotion && !isTouch) {
  const cursor = document.querySelector('.precision-cursor') as HTMLElement | null;

  if (cursor) {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isHovering = false;

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Show cursor on first move
      if (cursor.style.opacity === '0' || cursor.style.opacity === '') {
        cursor.style.opacity = '1';
      }
    });

    // Detect hover over interactive elements
    const updateHoverState = () => {
      const elementUnderCursor = document.elementFromPoint(mouseX, mouseY);
      const isInteractive = elementUnderCursor?.closest('a, button, input, textarea, select, [role="button"]');

      if (isInteractive && !isHovering) {
        isHovering = true;
        cursor.style.width = '24px';
        cursor.style.height = '24px';
        cursor.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
      } else if (!isInteractive && isHovering) {
        isHovering = false;
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        cursor.style.backgroundColor = 'transparent';
      }
    };

    // Smooth cursor animation
    const animate = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;

      cursorX += dx * 0.15;
      cursorY += dy * 0.15;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      updateHoverState();
      requestAnimationFrame(animate);
    };

    animate();

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });
  }
}
