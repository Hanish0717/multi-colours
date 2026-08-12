"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

/**
 * Brand item definition interface
 */
export interface BrandItem {
  name: string;
  image?: string;
  url?: string;
}

/**
 * Exact brand list from Omkar Enterprises landing page
 */
export const DEFAULT_BRANDS: BrandItem[] = [
  { name: "Top Star", image: "/brands/topstar.png", url: "#" },
  { name: "Jockey", image: "/brands/jockey.png", url: "#" },
  { name: "Ramraj", image: "/brands/ramraj.png", url: "#" },
  { name: "VIP", image: "/brands/vip.png", url: "#" },
  { name: "Alfa", image: "/brands/alfa.png", url: "#" },
];

/**
 * Render official-style typography vector representation for each brand
 * on a white card background.
 */
function renderBrandLogo(name: string) {
  switch (name.toLowerCase()) {
    case "jockey":
      return (
        <svg viewBox="0 0 300 72" fill="none" className="w-[110px] h-[26px] text-black">
          <g fill="currentColor">
            {/* Jockey classic 3-fold swirl icon */}
            <path d="M 37.62 2.59 C 41.15 1.20 45.27 2.92 48.70 4.17 C 65.13 10.92 66.71 37.41 51.62 46.48 C 46.61 49.15 40.81 51.10 35.07 50.36 C 31.70 49.96 29.22 47.50 26.88 45.28 C 26.58 56.16 36.44 64.61 46.75 65.49 C 46.66 60.88 48.39 55.98 52.57 53.59 C 57.73 50.13 64.81 51.62 68.90 56.07 C 66.39 62.37 60.52 67.11 54.06 68.89 C 41.65 71.57 27.25 63.93 23.81 51.42 C 22.21 45.10 23.80 38.38 26.56 32.62 C 28.38 28.79 32.48 27.13 36.33 26.11 C 27.08 20.46 14.86 24.56 8.81 32.95 C 14.03 35.37 17.50 41.36 15.82 47.08 C 14.78 52.00 10.49 55.35 5.82 56.61 C 1.45 51.66 0.63 44.28 2.01 38.02 C 5.38 26.79 17.29 18.84 28.93 19.75 C 36.87 20.38 43.39 26.07 47.62 32.46 C 49.94 35.97 49.29 40.32 48.28 44.15 C 57.76 38.95 60.76 26.36 56.23 16.87 C 52.90 18.77 48.86 20.13 45.10 18.66 C 38.72 16.73 34.38 8.64 37.62 2.59 M 40.57 5.60 C 39.70 10.32 43.41 14.95 48.09 15.48 C 50.34 15.91 52.45 14.82 54.44 13.95 C 51.45 9.13 46.04 6.44 40.57 5.60 M 34.40 30.52 C 28.99 32.31 27.05 39.91 31.02 44.05 C 34.85 48.85 43.34 47.14 45.11 41.28 C 47.75 35.03 40.74 27.84 34.40 30.52 M 6.96 52.55 C 11.19 51.14 13.49 46.12 11.98 41.97 C 11.29 39.42 9.10 37.76 6.90 36.56 C 4.60 41.67 4.98 47.41 6.96 52.55 M 52.96 58.04 C 51.02 60.01 50.71 62.87 50.58 65.49 C 56.12 65.03 60.71 61.57 64.22 57.48 C 61.12 54.57 55.73 54.79 52.96 58.04 Z" />
            {/* Jockey Wordmark Letters (J, O, C, K, E, Y) */}
            <path d="M 106.42 21.40 C 108.37 20.96 110.58 20.79 112.50 21.47 C 113.41 24.81 112.65 28.51 112.88 31.98 C 112.64 38.20 113.91 44.96 110.68 50.63 C 108.05 55.49 102.36 57.85 97.03 57.85 C 91.05 58.21 84.32 56.25 80.88 51.02 C 79.16 48.61 78.87 45.59 78.77 42.73 C 80.54 42.57 82.31 42.40 84.09 42.54 C 85.41 43.92 85.11 46.16 86.20 47.73 C 89.88 53.54 99.99 54.79 104.06 48.78 C 105.23 47.10 105.69 45.06 105.89 43.06 C 106.61 35.86 105.56 28.54 106.42 21.40 Z" />
            <path d="M 128.44 20.68 C 137.95 17.37 149.69 21.81 153.94 31.10 C 157.13 37.78 155.66 46.25 150.47 51.51 C 143.87 58.56 132.28 59.89 124.09 54.90 C 118.24 51.49 114.31 44.84 114.73 38.00 C 114.90 30.03 120.96 22.98 128.44 20.68 M 130.36 25.60 C 123.62 28.11 119.81 36.26 122.17 43.06 C 124.01 49.26 130.59 53.67 137.05 52.59 C 145.51 51.62 151.20 41.74 147.98 33.89 C 145.69 26.91 137.22 22.66 130.36 25.60 Z" />
            <path d="M 157.31 38.93 C 157.00 29.93 164.29 21.96 172.89 20.18 C 181.80 17.97 192.15 22.20 196.25 30.58 C 197.53 34.08 192.23 32.50 190.29 32.73 C 187.69 28.00 182.71 24.27 177.11 24.69 C 169.44 24.93 163.21 32.53 164.20 40.08 C 164.62 47.37 171.72 53.59 179.06 52.65 C 184.59 52.32 188.87 48.01 191.00 43.17 C 193.19 43.19 195.40 43.23 197.55 43.72 C 195.11 52.53 185.97 58.43 176.98 57.87 C 166.89 57.89 157.14 49.29 157.31 38.93 Z" />
            <path d="M 201.85 21.86 C 203.44 20.46 205.70 21.19 207.51 21.68 C 207.34 27.05 207.44 32.42 207.42 37.79 C 212.41 32.60 217.57 27.57 222.68 22.50 C 224.79 20.12 228.35 21.40 231.12 21.18 C 229.04 26.14 224.01 29.17 220.60 33.23 C 225.59 40.58 230.67 47.87 235.59 55.28 C 233.33 56.52 230.61 56.54 228.17 55.93 C 223.66 50.29 220.01 44.01 215.57 38.31 C 213.06 41.18 210.12 43.66 207.68 46.60 C 206.87 49.19 208.16 52.23 206.69 54.66 C 205.33 56.55 202.73 56.21 200.72 56.21 C 200.28 47.13 200.65 38.03 200.49 28.94 C 200.64 26.57 200.04 23.74 201.85 21.86 Z" />
            <path d="M 237.33 24.05 C 237.19 22.56 238.44 21.00 240.02 21.17 C 246.69 21.07 253.36 21.16 260.03 21.13 C 261.48 21.05 263.49 21.37 263.71 23.15 C 264.36 24.80 262.76 26.70 261.03 26.43 C 255.42 26.52 249.81 26.45 244.20 26.42 C 244.17 29.26 244.19 32.09 244.15 34.93 C 249.41 35.10 254.71 34.58 259.95 35.17 C 262.41 35.70 262.53 39.64 260.00 40.26 C 254.74 40.54 249.46 40.29 244.19 40.34 C 244.16 43.81 244.19 47.29 244.18 50.77 C 250.16 50.71 256.13 50.81 262.11 50.69 C 264.11 51.96 264.55 55.13 261.98 56.04 C 254.68 56.45 247.33 56.21 240.02 56.16 C 238.26 56.31 237.13 54.55 237.34 52.95 C 237.30 43.32 237.31 33.68 237.33 24.05 Z" />
            <path d="M 266.02 21.29 C 268.41 21.21 271.89 20.18 273.31 22.78 C 276.12 27.40 278.98 32.00 281.52 36.77 C 285.44 32.03 288.27 26.49 292.16 21.72 C 294.26 20.47 296.92 21.34 299.24 21.24 C 299.04 22.83 298.93 24.54 297.85 25.84 C 293.71 31.71 299.73 37.67 285.55 43.51 C 285.46 47.02 285.69 50.53 285.43 54.03 C 284.82 56.78 280.43 57.03 278.95 54.88 C 278.02 51.17 279.25 47.21 278.32 43.53 C 274.61 37.34 270.60 31.33 266.76 25.21 C 266.21 24.06 264.55 22.44 266.02 21.29 Z" />
          </g>
        </svg>
      );

    case "ramraj":
      return (
        <svg viewBox="0 0 145 36" fill="none" className="w-[125px] h-[32px]">
          {/* Green outer frame */}
          <rect x="2" y="2" width="141" height="32" rx="3" stroke="#0b6635" strokeWidth="2.2" fill="#ffffff" />
          {/* Left emblem container */}
          <rect x="5" y="5" width="22" height="26" fill="#ffffff" stroke="#0b6635" strokeWidth="1" />
          <circle cx="16" cy="11" r="2.2" fill="#dc2626" />
          <line x1="16" y1="15" x2="16" y2="25" stroke="#0b6635" strokeWidth="2" />
          <line x1="12" y1="25" x2="20" y2="25" stroke="#0b6635" strokeWidth="2" />
          <path d="M 16 15 L 10 13 C 12 17, 15 20, 15 22 Z" fill="#0b6635" />
          <path d="M 16 15 L 22 13 C 20 17, 17 20, 17 22 Z" fill="#0b6635" />
          
          {/* RAMRAJ green typography inside right section */}
          <g fill="#0b6635">
            <path d="M 33 25 L 33 9 L 41 9 C 45 9, 47 11, 47 13.5 C 47 16, 45 17.5, 41.5 17.5 L 47 25 L 41 25 L 37 18 L 37 25 Z M 37 14.5 L 40.5 14.5 C 42 14.5, 43 14, 43 12.5 C 43 11, 42 10.5, 40.5 10.5 L 37 10.5 Z" />
            <path d="M 49 25 L 56 9 L 63 25 Z M 52.5 19.5 L 59.5 19.5 L 56 12 Z" />
            <path d="M 65 25 L 65 9 L 71 18 L 77 9 L 77 25 L 72.5 25 L 72.5 14 L 70 17.5 L 67.5 14 L 67.5 25 Z" />
            <path d="M 79 25 L 79 9 L 87 9 C 91 9, 93 11, 93 13.5 C 93 16, 91 17.5, 87.5 17.5 L 93 25 L 87 25 L 83 18 L 83 25 Z M 83 14.5 L 86.5 14.5 C 88 14.5, 89 14, 89 12.5 C 89 11, 88 10.5, 86.5 10.5 L 83 10.5 Z" />
            <path d="M 95 25 L 102 9 L 109 25 Z M 98.5 19.5 L 105.5 19.5 L 102 12 Z" />
            <path d="M 111 9 L 119 9 L 119 20 C 119 23.5, 116.5 25.5, 112 25.5 C 108.5 25.5, 107 23.5, 107 21 L 111.5 21 C 111.5 21.8, 111.8 22, 112.5 22 C 113.5 22, 114 21.2, 114 19.5 L 114 12.5 L 111 12.5 Z" />
          </g>
        </svg>
      );

    case "vip":
      return (
        <div className="bg-[#003882] px-3.5 py-2.5 rounded-lg flex items-center justify-center shadow-sm">
          <svg viewBox="0 0 80 32" fill="currentColor" className="w-[78px] h-[28px] text-white">
            {/* VIP Crown Icon */}
            <path d="M 34 10 C 36 8, 42 8, 44 10 L 42 7 C 41 8, 37 8, 36 7 Z" />
            <circle cx="39" cy="8.5" r="0.75" fill="#003882" />
            <line x1="39" y1="7" x2="33" y2="2" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="33" cy="2" r="0.8" />
            <line x1="39" y1="7" x2="36" y2="1" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="36" cy="1" r="0.8" />
            <line x1="39" y1="7" x2="39" y2="0.5" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="39" cy="0.5" r="0.8" />
            <line x1="39" y1="7" x2="42" y2="1" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="42" cy="1" r="0.8" />
            <line x1="39" y1="7" x2="45" y2="2" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="45" cy="2" r="0.8" />
            {/* V I P Letters */}
            <path d="M 12 10 L 21 10 L 21 12 L 18 12 L 23.5 26 L 29 12 L 26.5 12 L 26.5 10 L 33 10 L 33 12 L 31.5 12 L 25.5 28 L 21.5 28 L 14.5 12 L 12 12 Z" />
            <rect x="34" y="10" width="10" height="2" />
            <rect x="36.5" y="12" width="1.8" height="14" />
            <rect x="39.7" y="12" width="1.8" height="14" />
            <rect x="34" y="26" width="10" height="2" />
            <rect x="47.5" y="10" width="3" height="16" />
            <rect x="45.5" y="10" width="5" height="2" />
            <rect x="45.5" y="26" width="7" height="2" />
            <path d="M 50.5 10 L 59 10 C 63 10, 63 18, 59 18 L 50.5 18 Z M 50.5 12 L 50.5 16 L 58 16 C 60.5 16, 60.5 12, 58 12 Z" />
          </svg>
        </div>
      );

    case "top star":
    case "topstar":
      return (
        <div className="flex items-center justify-center py-0.5">
          <svg viewBox="0 0 160 60" fill="none" className="w-[130px] h-[48px]">
            {/* Vibrant Lime Green Flower / Leaf Emblem */}
            <g transform="translate(30, 2)">
              <path
                d="M 14 14 C 12 7, 5 6, 2 9 C -1 12, 1 18, 7 19 C 4 22, 6 28, 12 28 C 16 28, 20 23, 18 19 C 24 18, 25 11, 20 7 C 17 5, 14 9, 14 14 Z"
                fill="#8ec63f"
              />
              <path
                d="M 10 10 C 8 5, 14 2, 17 4 C 20 8, 16 14, 13 12 Z"
                fill="#7cb342"
              />
              <path
                d="M 8 15 C 3 13, 2 7, 7 6 C 11 5, 12 10, 9 13 Z"
                fill="#9ccc65"
              />
            </g>

            {/* Main Wordmark "Topstar" in Hot Pink / Magenta */}
            <g fill="#e6007e">
              {/* T with extended top bar */}
              <path d="M 4 16 L 36 16 L 36 20 L 25 20 L 25 43 L 19 43 L 19 20 L 4 20 Z" />
              
              {/* O loop around stem */}
              <path d="M 44 26 C 36 26 31 31 31 37 C 31 43 36 47 44 47 C 51 47 55 43 55 37 C 55 31 51 26 44 26 Z M 44 31 C 48 31 49 33 49 37 C 49 41 48 43 44 43 C 40 43 39 41 39 37 C 39 33 40 31 44 31 Z" />
              
              {/* p */}
              <path d="M 58 27 L 64 27 L 64 29 C 66 27 69 26 73 26 C 80 26 83 31 83 37 C 83 43 80 47 73 47 C 69 47 66 45 64 43 L 64 53 L 58 53 Z M 70 31 C 66 31 64 33 64 37 C 64 41 66 43 70 43 C 74 43 76 41 76 37 C 76 33 74 31 70 31 Z" />
              
              {/* s */}
              <path d="M 92 27 L 92 31 C 90 29 88 29 86 29 C 84 29 83 30 83 31 C 83 32 84 33 88 34 C 92 35 95 36 95 40 C 95 44 92 47 86 47 C 83 47 80 45 77 43 L 79 38 C 81 40 84 42 86 42 C 89 42 90 41 90 40 C 90 39 88 38 85 37 C 81 36 78 34 78 31 C 78 27 82 26 86 26 C 89 26 91 26 92 27 Z" />
              
              {/* t */}
              <path d="M 99 21 L 105 21 L 105 26 L 111 26 L 111 30 L 105 30 L 105 41 C 105 42 106 42 107 42 C 108 42 110 42 111 41 L 111 46 C 109 47 107 47 104 47 C 100 47 99 44 99 40 L 99 30 L 96 30 L 96 26 L 99 26 Z" />
              
              {/* a */}
              <path d="M 122 27 L 128 27 L 128 46 L 122 46 L 122 44 C 120 45 117 47 114 47 C 108 47 105 43 105 39 C 105 33 110 31 122 31 Z M 122 35 C 115 35 111 35 111 39 C 111 41 113 43 116 43 C 119 43 122 41 122 37 Z" />
              
              {/* r */}
              <path d="M 131 27 L 137 27 L 137 30 C 139 27 142 26 145 26 L 145 32 C 142 30 139 31 137 34 L 137 46 L 131 46 Z" />
            </g>

            {/* Registered Trademark ® */}
            <g transform="translate(145, 18)">
              <circle cx="5" cy="5" r="5" stroke="#e6007e" strokeWidth="1" fill="none" />
              <text x="5" y="8" textAnchor="middle" fill="#e6007e" fontSize="6.5" fontFamily="system-ui, sans-serif" fontWeight="bold">R</text>
            </g>

            {/* Magenta "Lingerie" Text next to the 'p' stem */}
            <text x="64" y="55" fill="#e6007e" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="10.5" letterSpacing="0.3">Lingerie</text>
          </svg>
        </div>
      );

    case "alfa":
      return (
        <svg viewBox="0 0 100 32" fill="none" className="w-[105px] h-[32px]">
          <circle cx="13" cy="14" r="9" fill="#dc2626" />
          <path d="M 13.5 5 C 16 5 21 7 20.2 12.5 C 19.8 13.8 20.8 14.2 20 15.5 C 19.2 16.5 19.8 17.5 19.2 18.5 C 18.2 20.5 15.5 23 13.5 23 Z" fill="white" />
          <path d="M 7 10 Q 10 14 7 18" stroke="white" strokeWidth="0.8" fill="none" />
          <path d="M 9 8 Q 12 14 9 20" stroke="white" strokeWidth="0.8" fill="none" />
          <path d="M 11 6 Q 14 14 11 22" stroke="white" strokeWidth="0.8" fill="none" />
          <text x="26" y="20" fontFamily="Georgia, Cambria, serif" fontStyle="italic" fontWeight="bold" fontSize="21" fill="#dc2626" letterSpacing="0.5">alfa</text>
          <text x="27" y="28" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="6.5" fill="#4b5563" letterSpacing="0.2">The Real Beauty</text>
        </svg>
      );

    default:
      return (
        <span className="font-sans font-bold text-sm text-zinc-900 tracking-wide">
          {name}
        </span>
      );
  }
}

export interface TrustedBrandsProps {
  brands?: BrandItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * Reusable TrustedBrands Component
 * Displays a continuous infinite marquee carousel of brand cards with white backgrounds.
 */
export function TrustedBrands({
  brands = DEFAULT_BRANDS,
  title = "Trusted Brands",
  subtitle = "Available at Multi Colours",
  className = "",
}: TrustedBrandsProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Duplicate list to guarantee smooth continuous horizontal scrolling marquee
  const loop = [...brands, ...brands, ...brands, ...brands];

  const handleImageError = (brandName: string) => {
    setImageErrors((prev) => ({ ...prev, [brandName]: true }));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label={title}
      className={`relative w-full overflow-hidden px-0 py-6 ${className}`}
    >
      {/* Embedded CSS keyframes to ensure self-contained marquee animation & header shimmer */}
      <style>{`
        @keyframes trusted-brands-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-trusted-brands-marquee {
          animation: trusted-brands-marquee 25s linear infinite;
        }
        .animate-trusted-brands-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes header-gold-shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gold-shimmer {
          background-size: 200% auto;
          animation: header-gold-shimmer 4s ease infinite;
        }
      `}</style>

      {/* Header section with animated text and expanded typography */}
      <div className="mb-6 text-center">
        {/* Animated Badge Title "Trusted Brands" */}
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1 mb-2.5 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-ping" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#D4AF37] via-[#FFF3B0] to-[#D4AF37] bg-clip-text text-transparent animate-gold-shimmer">
            {title}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
        </motion.div>

        {/* Subtitle "Available at Multi Colours" in solid clean white */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto text-xl sm:text-2xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]"
        >
          {subtitle}
        </motion.h2>
      </div>
      
      <div className="relative w-full overflow-hidden">
        {/* Edge gradient fades for seamless visual overflow */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

        {/* Carousel marquee */}
        <div className="flex w-max animate-trusted-brands-marquee cursor-pointer items-center gap-4.5 py-2 px-3">
          {loop.map((brand, i) => {
            const hasImage = !imageErrors[brand.name] && brand.image;
            return (
              <a
                href={brand.url || "#"}
                key={`${brand.name}-${i}`}
                className="flex h-[90px] w-[184px] shrink-0 items-center justify-center rounded-[26px] bg-white px-2 py-1 shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(255,255,255,0.4)] overflow-hidden"
              >
                {hasImage ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={brand.image!}
                      alt={`${brand.name} logo`}
                      fill
                      sizes="200px"
                      className="object-contain scale-115"
                      onError={() => handleImageError(brand.name)}
                    />
                  </div>
                ) : (
                  renderBrandLogo(brand.name)
                )}
              </a>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default TrustedBrands;

