import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1f140e]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient and vignette overlay (non-blocking for interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1f140e]/60 via-transparent to-[#0f0a07]" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 180px rgba(0,0,0,0.6)' }} />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-amber-100">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-900/40 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-amber-300" />
          <span className="text-xs font-medium tracking-widest text-amber-200/90">WELCOME TO THE WIZARDING STACKS</span>
        </div>
        <h1 className="font-display text-4xl font-bold leading-tight text-amber-50 sm:text-5xl md:text-6xl">
          The Enchanted Library
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-amber-200/90 md:text-base">
          A cozy corner of magic and lore. Explore spellbooks, potions, and stories inspired by the world of Harry, Hermione, and friends.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#collections"
            className="rounded-md bg-amber-700 px-5 py-3 text-sm font-semibold text-amber-50 shadow hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            Browse Collections
          </a>
          <a
            href="#characters"
            className="rounded-md border border-amber-600/60 bg-transparent px-5 py-3 text-sm font-semibold text-amber-100 backdrop-blur hover:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            Meet the Characters
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
