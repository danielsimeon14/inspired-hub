"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react"; // the TypeScript type for inline styles

/* ------------------------------------------------------------------
   TYPES
   TypeScript wants us to describe the shape of our data.
   A "Particle" is one dot or one glowing orb.
------------------------------------------------------------------- */
interface Particle {
  x: number; // horizontal position
  y: number; // vertical position
  vx: number; // horizontal speed (pixels per frame)
  vy: number; // vertical speed (pixels per frame)
  radius: number; // size of the dot
  opacity: number; // 0 = invisible, 1 = solid
  isOrb: boolean; // true = big glowing orb, false = small dot
}

// Anything with an x and y can have a line drawn to it
// (a Particle OR the mouse/finger position)
interface Point {
  x: number;
  y: number;
}

/* ------------------------------------------------------------------
   1. SETTINGS
   Change these numbers to change how the animation looks.
------------------------------------------------------------------- */
const CONFIG = {
  dotColor: "107,145,232", // Soft blue particles and connecting lines
  glowColor: "8,69,197", // Royal blue glowing orbs
  density: 9000,
  maxDots: 120,
  linkDistance: 140,
  speed: 0.25,
  glowCount: 5,
  followPointer: true,
};

const styles: Record<string, CSSProperties> = {
  // The green section that holds everything
  hero: {
    position: "relative",
    minHeight: "100vh",
    background: "#061B4B",
    color: "#FFFFFF",
    overflow: "hidden",
    padding: "24px",
    boxSizing: "border-box",
    fontFamily: "system-ui, sans-serif",
  },

  // The drawing surface. It is stretched over the whole hero, BEHIND the text.
  canvas: {
    position: "absolute", // take it out of normal flow...
    top: 0,
    left: 0,
    width: "100%", // ...and make it cover the whole hero
    height: "100%",
    zIndex: 0, // 0 = bottom layer
    pointerEvents: "none", // taps/clicks go through it to the buttons and text
  },

  // Wrapper for the text so it sits ON TOP of the canvas
  content: {
    position: "absolute",
    zIndex: 1, // 1 = above the canvas
  },

  h1: {
    fontSize: "2.2rem",
    lineHeight: 1.1,
    marginTop: "80px",
    maxWidth: "700px",
    color: "#FFFFFF",
  },

  // The green highlighted word inside the heading
};

/* ------------------------------------------------------------------
   3. THE COMPONENT
------------------------------------------------------------------- */
export default function NetworkHero() {
  // A "ref" is a way to grab a real HTML element after React draws it.
  const heroRef = useRef<HTMLElement>(null); // will point to the <section>
  const canvasRef = useRef<HTMLCanvasElement>(null); // will point to the <canvas>

  // useEffect runs ONCE after the component appears on screen.
  // This is where we start the animation.
  useEffect(() => {
    const heroElement = heroRef.current;
    const canvasElement = canvasRef.current;
    const context = canvasElement?.getContext("2d"); // our paintbrush

    // Refs start as null until React has drawn the elements.
    // If anything is missing, stop here.
    if (!heroElement || !canvasElement || !context) return;

    // From here on we KNOW these exist. Copying them into new constants
    // lets TypeScript remember that inside the functions below.
    const hero: HTMLElement = heroElement;
    const canvas: HTMLCanvasElement = canvasElement;
    const ctx: CanvasRenderingContext2D = context; // "ctx" is our paintbrush

    let width = 0;
    let height = 0;
    let dots: Particle[] = []; // the small dots
    let orbs: Particle[] = []; // the big glowing dots
    let animationId = 0; // lets us stop the animation later
    const pointer: Point = { x: -9999, y: -9999 }; // finger/mouse spot (off-screen at first)

    // Small helper: random number between a and b
    const random = (a: number, b: number): number =>
      a + Math.random() * (b - a);

    // ---- Make one particle (a dot or an orb) ----
    function createParticle(isOrb: boolean): Particle {
      const angle = Math.random() * Math.PI * 2; // random direction
      const speed = CONFIG.speed * (isOrb ? 0.7 : random(0.4, 1.2));
      return {
        x: random(0, width), // start position
        y: random(0, height),
        vx: Math.cos(angle) * speed, // velocity = how far it moves each frame
        vy: Math.sin(angle) * speed,
        radius: isOrb ? random(7, 10) : random(1, 2.4),
        opacity: isOrb ? 0.9 : random(0.35, 0.8),
        isOrb,
      };
    }

    // ---- Set canvas size and create particles ----
    function setup() {
      // Phones have sharp screens, so we draw at higher resolution
      // (max 2x) to keep things crisp.
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = hero.clientWidth;
      height = hero.clientHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      // Bigger screen => more dots
      const count = Math.min(
        CONFIG.maxDots,
        Math.round((width * height) / CONFIG.density),
      );
      dots = Array.from({ length: count }, () => createParticle(false));
      orbs = Array.from({ length: CONFIG.glowCount }, () =>
        createParticle(true),
      );
    }

    // ---- Move a particle one step ----
    function move(p: Particle): void {
      p.x += p.vx;
      p.y += p.vy;
      // If it leaves one side, bring it back on the opposite side
      if (p.x < -20) p.x = width + 20;
      else if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      else if (p.y > height + 20) p.y = -20;
    }

    // ---- Draw a line between two points; closer = more visible ----
    function drawLine(
      a: Point,
      b: Point,
      distance: number,
      maxDistance: number,
      boost: number,
    ): void {
      const alpha = (1 - distance / maxDistance) * 0.35 * boost;
      ctx.strokeStyle = `rgba(${CONFIG.dotColor},${alpha})`;
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

    // ---- One frame of the animation (runs ~60 times per second) ----
    function draw() {
      ctx.clearRect(0, 0, width, height); // wipe the previous frame

      const all = dots.concat(orbs); // treat dots and orbs together
      all.forEach(move);

      // Compare every particle with every other one.
      // If two are close enough, draw a line between them.
      for (let i = 0; i < all.length; i++) {
        for (let j = i + 1; j < all.length; j++) {
          const a = all[i];
          const b = all[j];
          const hasOrb = a.isOrb || b.isOrb;

          // Orbs reach further and glow brighter, like a hub
          const maxDistance = hasOrb
            ? CONFIG.linkDistance * 1.6
            : CONFIG.linkDistance;
          const distance = Math.hypot(a.x - b.x, a.y - b.y);

          if (distance < maxDistance) {
            drawLine(a, b, distance, maxDistance, hasOrb ? 1.6 : 1);
          }
        }

        // Connect to the finger/mouse if it is nearby
        if (CONFIG.followPointer) {
          const reach = CONFIG.linkDistance * 1.4;
          const distance = Math.hypot(
            all[i].x - pointer.x,
            all[i].y - pointer.y,
          );
          if (distance < reach) drawLine(all[i], pointer, distance, reach, 1.4);
        }
      }

      // Draw the small dots
      for (const p of dots) {
        ctx.fillStyle = `rgba(${CONFIG.dotColor},${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw the glowing orbs: a soft fading halo + a bright centre
      for (const p of orbs) {
        const halo = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 5,
        );
        halo.addColorStop(0, `rgba(${CONFIG.glowColor},0.55)`); // strong in the middle
        halo.addColorStop(1, `rgba(${CONFIG.glowColor},0)`); // fades to nothing
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(255,255,255,0.9)"; // bright centre
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Ask the browser to call draw() again for the next frame
      animationId = requestAnimationFrame(draw);
    }

    // ---- Track the mouse / finger position ----
    function onPointerMove(e: PointerEvent): void {
      const rect = hero.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    }
    function onPointerLeave() {
      pointer.x = -9999; // move it off-screen so no lines connect
      pointer.y = -9999;
    }

    // ---- Start everything ----
    setup();
    hero.addEventListener("pointermove", onPointerMove);
    hero.addEventListener("pointerleave", onPointerLeave);

    // Re-run setup if the section changes size (e.g. phone rotates)
    const resizeObserver = new ResizeObserver(setup);
    resizeObserver.observe(hero);

    // Respect people who turned off animations in their device settings:
    // draw a single still picture instead of a moving one.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      draw();
      cancelAnimationFrame(animationId);
    } else {
      draw();
    }

    // ---- CLEANUP ----
    // React runs this when the component is removed.
    // We must stop the animation and listeners, or they keep running forever.
    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []); // [] means "run only once"

  // What appears on screen
  return (
    <section ref={heroRef} className="rounded-xl" style={styles.hero}>
      {/* The animated background (empty canvas that we paint on above) */}
      <canvas ref={canvasRef} style={styles.canvas} />

      {/* Your real content, sitting on top of the canvas */}
      <div
        style={styles.content}
        className="mt-20 md:mt-32 lg:mt-38 px-4 md:px-8 lg:px-12"
      >
        <h1 style={styles.h1}>
          Scholarships, Study Abroad Guidance & School Supplies for
          <span className="pl-3" style={{ color: "#ff8a00" }}>
            Students
          </span>
        </h1>

        <p className="max-w-3xl text pt-8" style={{ color: "#ffffff" }}>
          Discover scholarship opportunities, get guidance for studying abroad,
          and find the academic materials you need to succeed.Get academic and
          stationary materials at affordable prices. We are committed to
          providing you with full scholarships to study abroad and get fundings.
        </p>
        <div className="flex pt-8 flex-col md:flex-row justify-evenly  mx-auto max-w-sm items-center gap-4">
          <button className="bg-[#0845C5] w-full text-white py-2 px-4 rounded hover:bg-blue-600">
            Explore Scholarships
          </button>
          <button className=" w-full border hover:text-[#061B4B] border-[#6B91E8] py-2 px-4 rounded hover:bg-gray-100">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
