import React from "react";
import { ChevronRight, Calendar, Star } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "../../config/site";

export function Hero({ onBookClick }: { onBookClick: () => void }) {
  const { hero } = siteConfig;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image + intelligent contrast overlay (readable on any photo luminance) */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.backgroundImage}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Salon atmosphere"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Layered gradients: vignette + vertical wash + optional neutral tint */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-black/75 via-black/45 to-black/65"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-t from-black/85 via-black/35 to-black/55"
          aria-hidden
        />
        <div className="absolute inset-0 z-[3] pointer-events-none bg-black/25" aria-hidden />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md transition-colors duration-300 mb-8"
        >
          <Star className="text-accent-light" size={16} fill="currentColor" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/95 transition-colors duration-300">
            {siteConfig.brand.tagline}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
        >
          {hero.titlePrefix}{" "}
          <span className="text-accent-light">{hero.titleHighlight}</span>
          <br />
          {hero.titleSuffix}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/85 transition-colors duration-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {siteConfig.features.showBooking && (
            <button
              type="button"
              onClick={onBookClick}
              className="group w-full sm:w-auto flex items-center justify-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-black text-primary-foreground shadow-lg shadow-black/30 transition-all duration-300 hover:bg-accent-light hover:text-zinc-950"
            >
              <Calendar size={22} />
              <span>{hero.ctaPrimary}</span>
              <ChevronRight className="transition-transform group-hover:translate-x-1" />
            </button>
          )}
          {siteConfig.features.showServices && (
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-10 py-5 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/55 hover:bg-white/18"
            >
              {hero.ctaSecondary}
            </a>
          )}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-accent-light to-transparent" />
      </div>
    </section>
  );
}
