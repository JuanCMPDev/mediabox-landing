import { useEffect, useRef } from 'react';

type Node = {
  x: number;
  y: number;
  depth: number;
  size: number;
  color: string;
  phase: number;
};

type Edge = {
  from: number;
  to: number;
  phase: number;
  speed: number;
};

type Card = {
  x: number;
  y: number;
  width: number;
  depth: number;
  color: string;
  phase: number;
};

const nodes: Node[] = [
  { x: 0.5, y: 0.32, depth: 1.1, size: 6, color: '#f8fafc', phase: 0.2 },
  { x: 0.24, y: 0.22, depth: 0.75, size: 4, color: '#00a4dc', phase: 1.4 },
  { x: 0.72, y: 0.24, depth: 0.8, size: 4, color: '#ffc230', phase: 2.1 },
  { x: 0.18, y: 0.58, depth: 0.55, size: 4, color: '#3fc1f1', phase: 3.2 },
  { x: 0.82, y: 0.56, depth: 0.65, size: 4, color: '#4caf50', phase: 0.9 },
  { x: 0.38, y: 0.76, depth: 0.45, size: 3, color: '#c19bff', phase: 2.8 },
  { x: 0.64, y: 0.78, depth: 0.5, size: 3, color: '#ff9800', phase: 1.9 },
];

const edges: Edge[] = [
  { from: 0, to: 1, phase: 0.05, speed: 0.1 },
  { from: 0, to: 2, phase: 0.36, speed: 0.09 },
  { from: 0, to: 3, phase: 0.62, speed: 0.08 },
  { from: 0, to: 4, phase: 0.18, speed: 0.11 },
  { from: 0, to: 5, phase: 0.77, speed: 0.07 },
  { from: 0, to: 6, phase: 0.48, speed: 0.1 },
  { from: 1, to: 3, phase: 0.29, speed: 0.06 },
  { from: 2, to: 4, phase: 0.84, speed: 0.06 },
  { from: 3, to: 5, phase: 0.13, speed: 0.05 },
  { from: 4, to: 6, phase: 0.55, speed: 0.05 },
];

const cards: Card[] = [
  { x: 0.12, y: 0.36, width: 118, depth: 0.4, color: '#00a4dc', phase: 0.3 },
  { x: 0.76, y: 0.38, width: 132, depth: 0.5, color: '#ffc230', phase: 1.7 },
  { x: 0.2, y: 0.82, width: 104, depth: 0.35, color: '#4caf50', phase: 2.4 },
  { x: 0.7, y: 0.84, width: 112, depth: 0.45, color: '#ff9800', phase: 3.1 },
];

function hexToRgb(hex: string) {
  const normalized = hex.replace('#', '');
  const value = Number.parseInt(normalized, 16);

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function rgba(hex: string, alpha: number) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  const r = Math.min(radius, width / 2, height / 2);

  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawCard(ctx: CanvasRenderingContext2D, card: Card, width: number, height: number, time: number, pointerX: number, pointerY: number) {
  const drift = Math.sin(time * 0.55 + card.phase) * 9;
  const x = card.x * width + pointerX * card.depth * 18 - card.width / 2;
  const y = card.y * height + pointerY * card.depth * 16 + drift;
  const h = 30;

  ctx.save();
  roundedRect(ctx, x, y, card.width, h, 8);
  ctx.fillStyle = 'rgba(8, 9, 13, 0.22)';
  ctx.fill();
  ctx.strokeStyle = rgba(card.color, 0.18);
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = rgba(card.color, 0.34);
  roundedRect(ctx, x + 10, y + 9, 18, 12, 4);
  ctx.fill();

  ctx.fillStyle = 'rgba(241, 245, 249, 0.14)';
  roundedRect(ctx, x + 36, y + 8, card.width * 0.42, 4, 2);
  ctx.fill();

  ctx.fillStyle = 'rgba(148, 163, 184, 0.12)';
  roundedRect(ctx, x + 36, y + 18, card.width * 0.28, 3, 2);
  ctx.fill();

  ctx.restore();
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const pointer = { x: 0, y: 0 };
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const setSize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (timestamp: number) => {
      const time = reducedMotion ? 0 : timestamp * 0.001;
      const scrollOffset = Math.min(window.scrollY * 0.025, 48);

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.globalCompositeOperation = 'source-over';

      const resolvedNodes = nodes.map((node) => {
        const floatX = reducedMotion ? 0 : Math.sin(time * 0.35 + node.phase) * 8;
        const floatY = reducedMotion ? 0 : Math.cos(time * 0.4 + node.phase) * 10;

        return {
          ...node,
          px: node.x * width + pointer.x * node.depth * 28 + floatX,
          py: node.y * height + pointer.y * node.depth * 22 + floatY - scrollOffset * node.depth,
        };
      });

      edges.forEach((edge) => {
        const from = resolvedNodes[edge.from];
        const to = resolvedNodes[edge.to];
        const gradient = ctx.createLinearGradient(from.px, from.py, to.px, to.py);

        gradient.addColorStop(0, rgba(from.color, 0.2));
        gradient.addColorStop(1, rgba(to.color, 0.16));

        ctx.beginPath();
        ctx.moveTo(from.px, from.py);
        ctx.lineTo(to.px, to.py);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = edge.from === 0 ? 1.2 : 0.8;
        ctx.stroke();

        if (!reducedMotion) {
          const progress = (time * edge.speed + edge.phase) % 1;
          const pulseX = from.px + (to.px - from.px) * progress;
          const pulseY = from.py + (to.py - from.py) * progress;

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = rgba(to.color, 0.72);
          ctx.fill();
        }
      });

      cards.forEach((card) => {
        drawCard(ctx, card, width, height, time, pointer.x, pointer.y);
      });

      resolvedNodes.forEach((node, index) => {
        const ringSize = node.size + (index === 0 ? 5 : 3);

        ctx.beginPath();
        ctx.arc(node.px, node.py, ringSize, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(node.color, index === 0 ? 0.28 : 0.2);
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(node.px, node.py, node.size, 0, Math.PI * 2);
        ctx.fillStyle = rgba(node.color, index === 0 ? 0.78 : 0.62);
        ctx.fill();
      });

      const veil = ctx.createLinearGradient(0, 0, 0, height);
      veil.addColorStop(0, 'rgba(8, 9, 13, 0)');
      veil.addColorStop(0.72, 'rgba(8, 9, 13, 0.18)');
      veil.addColorStop(1, 'rgba(8, 9, 13, 0.72)');
      ctx.fillStyle = veil;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const start = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!finePointer) return;
      pointer.x = event.clientX / window.innerWidth - 0.5;
      pointer.y = event.clientY / window.innerHeight - 0.5;
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(animationFrame);
        return;
      }

      start();
    };

    const onResize = () => {
      setSize();
      start();
    };

    setSize();
    start();

    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 h-screen w-screen pointer-events-none opacity-70"
      style={{
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
      }}
    />
  );
}
