// Ambient Background - Subtle geometric grid
const ambientPrefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!ambientPrefersReducedMotion) {
  const background = document.querySelector('.ambient-background') as HTMLElement | null;

  if (background) {
    // Create canvas for ambient effect
    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    background.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.warn('Canvas context not available for ambient background');
    } else {
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Grid parameters
      const gridSize = 80;
      const lineOpacity = 0.05;
      let time = 0;

      const drawGrid = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#D4AF37';
        ctx.lineWidth = 0.5;

        // Vertical lines
        for (let x = 0; x < canvas.width; x += gridSize) {
          const wave = Math.sin(time * 0.001 + x * 0.01) * 2;
          ctx.globalAlpha = lineOpacity;
          ctx.beginPath();
          ctx.moveTo(x + wave, 0);
          ctx.lineTo(x + wave, canvas.height);
          ctx.stroke();
        }

        // Horizontal lines
        for (let y = 0; y < canvas.height; y += gridSize) {
          const wave = Math.cos(time * 0.001 + y * 0.01) * 2;
          ctx.globalAlpha = lineOpacity;
          ctx.beginPath();
          ctx.moveTo(0, y + wave);
          ctx.lineTo(canvas.width, y + wave);
          ctx.stroke();
        }

        time++;
        requestAnimationFrame(drawGrid);
      };

      drawGrid();

      // Pause animation when page is hidden
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          // Animation will naturally pause when tab is not visible
        } else {
          requestAnimationFrame(drawGrid);
        }
      });
    }
  }
}
