"use client";

import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
  pulseSpeed: number;
  color: string;
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
  opacity: number;
}

const COLORS = {
  primary: [129, 140, 248],    // indigo #818cf8
  secondary: [192, 132, 252],  // purple #c084fc
  accent: [244, 114, 182],     // pink #f472b6
  cyan: [34, 211, 238],        // cyan #22d3ee
};

function lerpColor(c1: number[], c2: number[], t: number): string {
  const r = Math.round(c1[0] + (c2[0] - c1[0]) * t);
  const g = Math.round(c1[1] + (c2[1] - c1[1]) * t);
  const b = Math.round(c1[2] + (c2[2] - c1[2]) * t);
  return `${r}, ${g}, ${b}`;
}

export function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const nodesRef = useRef<Node[]>([]);
  const packetsRef = useRef<DataPacket[]>([]);
  const frameRef = useRef(0);
  const animationRef = useRef<number>(0);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  const createNodes = useCallback((width: number, height: number) => {
    const nodes: Node[] = [];
    const area = width * height;
    const nodeCount = Math.min(Math.max(Math.floor(area / 20000), 35), 90);

    const colorKeys = Object.keys(COLORS) as (keyof typeof COLORS)[];

    for (let i = 0; i < nodeCount; i++) {
      const colorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
      const color = COLORS[colorKey];
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.35 + 0.1,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        color: `${color[0]}, ${color[1]}, ${color[2]}`,
      });
    }
    return nodes;
  }, []);

  const createPacket = useCallback((nodes: Node[]): DataPacket | null => {
    if (nodes.length < 2) return null;
    const from = Math.floor(Math.random() * nodes.length);
    let to = Math.floor(Math.random() * nodes.length);
    let attempts = 0;
    while (to === from && attempts < 10) {
      to = Math.floor(Math.random() * nodes.length);
      attempts++;
    }
    if (to === from) return null;

    const dx = nodes[from].x - nodes[to].x;
    const dy = nodes[from].y - nodes[to].y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > 280) return null;

    const t = Math.random();
    const color = lerpColor(COLORS.primary, COLORS.secondary, t);

    return {
      fromNode: from,
      toNode: to,
      progress: 0,
      speed: Math.random() * 0.015 + 0.005,
      color,
      opacity: Math.random() * 0.5 + 0.2,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimensionsRef.current = { width, height };
      nodesRef.current = createNodes(width, height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const animate = () => {
      const { width, height } = dimensionsRef.current;
      if (!width || !height) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const packets = packetsRef.current;
      const mouse = mouseRef.current;
      const time = frameRef.current++;
      const connectionDist = 220;
      const mouseRadius = 160;

      // Spawn data packets
      if (time % 10 === 0 && packets.length < 15) {
        const packet = createPacket(nodes);
        if (packet) packets.push(packet);
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Float movement
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around edges
        if (node.x < -10) node.x = width + 10;
        if (node.x > width + 10) node.x = -10;
        if (node.y < -10) node.y = height + 10;
        if (node.y > height + 10) node.y = -10;

        // Mouse interaction - gentle attraction
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius * 0.006;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }

        // Damping
        node.vx *= 0.998;
        node.vy *= 0.998;

        // Limit velocity
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > 0.5) {
          node.vx = (node.vx / speed) * 0.5;
          node.vy = (node.vy / speed) * 0.5;
        }

        // Pulse
        node.pulsePhase += node.pulseSpeed;
        const pulse = Math.sin(node.pulsePhase) * 0.3 + 0.7;
        const currentOpacity = node.opacity * pulse;
        const currentRadius = node.radius * (0.8 + pulse * 0.4);

        // Connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const cdx = node.x - other.x;
          const cdy = node.y - other.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < connectionDist) {
            const alpha = (1 - cdist / connectionDist) * 0.07;
            const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
            gradient.addColorStop(0, `rgba(${node.color}, ${alpha})`);
            gradient.addColorStop(1, `rgba(${other.color}, ${alpha})`);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Node glow
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, currentRadius * 4
        );
        glowGradient.addColorStop(0, `rgba(${node.color}, ${currentOpacity * 0.35})`);
        glowGradient.addColorStop(1, `rgba(${node.color}, 0)`);
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 4, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color}, ${currentOpacity})`;
        ctx.fill();
      }

      // Data packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const packet = packets[i];
        packet.progress += packet.speed;

        if (packet.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }

        const fromNode = nodes[packet.fromNode];
        const toNode = nodes[packet.toNode];
        if (!fromNode || !toNode) {
          packets.splice(i, 1);
          continue;
        }

        const px = fromNode.x + (toNode.x - fromNode.x) * packet.progress;
        const py = fromNode.y + (toNode.y - fromNode.y) * packet.progress;

        const fadeMult = packet.progress < 0.15
          ? packet.progress / 0.15
          : packet.progress > 0.85
          ? (1 - packet.progress) / 0.15
          : 1;

        const pOpacity = packet.opacity * fadeMult;

        // Glow
        const trailGradient = ctx.createRadialGradient(px, py, 0, px, py, 6);
        trailGradient.addColorStop(0, `rgba(${packet.color}, ${pOpacity * 0.5})`);
        trailGradient.addColorStop(1, `rgba(${packet.color}, 0)`);
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = trailGradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${packet.color}, ${pOpacity})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [createNodes, createPacket]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: 0.45 }}
      aria-hidden="true"
    />
  );
}
