'use client';

import Link from 'next/link';
import { useInView } from '@/hooks/useInView';

export default function Hero() {
  const headingRef = useInView<HTMLHeadingElement>({ delay: '0s' });
  const taglineRef = useInView<HTMLParagraphElement>({ delay: '0.15s' });
  const ctaRef = useInView<HTMLDivElement>({ delay: '0.3s' });

  return (
    <section className="h-screen flex flex-col items-center justify-center px-6 relative">

      {/* Main content — centred */}
      <div className="flex flex-col items-center text-center w-full max-w-4xl">
        <h1
          ref={headingRef}
          className="text-[56px] sm:text-[64px] md:text-[72px] font-light text-[#F5F5F5] tracking-[0.12em] text-center w-full fade-in"
        >
          MINIMALIST DESIGN
        </h1>

        <p
          ref={taglineRef}
          className="text-[16px] text-[#888888] mt-6 tracking-wide text-center fade-in"
        >
          Space Planning & Interior Architecture
        </p>
      </div>

      {/* View our work — sits above the bottom nav */}
      <div
        ref={ctaRef}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 fade-in"
      >
        <Link
          href="/portfolio"
          className="text-[12px] text-[#555555] tracking-[0.14em] uppercase hover:text-[#888888] transition-colors duration-300 whitespace-nowrap"
        >
          View Our Work
        </Link>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#555555] animate-bounce"
          style={{ animationDuration: '2s' }}
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

    </section>
  );
}