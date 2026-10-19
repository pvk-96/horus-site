// Hero Animation - Geometric orbital composition

const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement | null;
if (!canvas) {
  console.warn('Hero canvas not found');
} else {
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.warn('Canvas context not available');
  } else {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation state
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
      targetMouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;
    });

    // Geometric elements
    interface GeometricRing {
      radius: number;
      segments: number;
      rotation: number;
      rotationSpeed: number;
      thickness: number;
      color: string;
      opacity: number;
    }

    const rings: GeometricRing[] = [
      {
        radius: 120,
        segments: 6,
        rotation: 0,
        rotationSpeed: 0.0003,
        thickness: 1.5,
        color: '#D4AF37',
        opacity: 0.6
      },
      {
        radius: 180,
        segments: 8,
        rotation: Math.PI / 8,
        rotationSpeed: -0.0002,
        thickness: 1,
        color: '#C89B3C',
        opacity: 0.4
      },
      {
        radius: 240,
        segments: 12,
        rotation: 0,
        rotationSpeed: 0.0001,
        thickness: 0.8,
        color: '#A67C00',
        opacity: 0.3
      }
    ];

    const drawRing = (ring: GeometricRing, centerX: number, centerY: number, mouseInfluence: number) => {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(ring.rotation);

      // Draw segments
      for (let i = 0; i < ring.segments; i++) {
        const angle = (Math.PI * 2 / ring.segments) * i;
        const nextAngle = (Math.PI * 2 / ring.segments) * (i + 1);

        const x1 = Math.cos(angle) * ring.radius;
        const y1 = Math.sin(angle) * ring.radius;
        const x2 = Math.cos(nextAngle) * ring.radius;
        const y2 = Math.sin(nextAngle) * ring.radius;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = ring.color;
        ctx.globalAlpha = ring.opacity * (1 - mouseInfluence * 0.3);
        ctx.lineWidth = ring.thickness;
        ctx.stroke();
      }

      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const mouseInfluence = Math.sqrt(mouseX * mouseX + mouseY * mouseY);

      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Update and draw rings
      rings.forEach(ring => {
        if (!prefersReducedMotion) {
          ring.rotation += ring.rotationSpeed + mouseInfluence * ring.rotationSpeed * 2;
        }

        const offsetX = centerX + mouseX * 30;
        const offsetY = centerY + mouseY * 30;

        drawRing(ring, offsetX, offsetY, mouseInfluence);
      });

      // Draw center marker
      ctx.beginPath();
      ctx.arc(centerX + mouseX * 30, centerY + mouseY * 30, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#D4AF37';
      ctx.globalAlpha = 0.8;
      ctx.fill();

      requestAnimationFrame(animate);
    };

    // Start animation
    if (!prefersReducedMotion) {
      animate();
    } else {
      // Static render for reduced motion
      const rect = canvas.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      rings.forEach(ring => {
        drawRing(ring, centerX, centerY, 0);
      });

      ctx.beginPath();
      ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#D4AF37';
      ctx.globalAlpha = 0.8;
      ctx.fill();
    }
  }
}
