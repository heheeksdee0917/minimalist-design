'use client';

import { useEffect, useRef } from 'react';

interface Options {
  threshold?: number;   // how much of the element must be visible — default 0.15
  once?: boolean;       // only trigger once — default true
  delay?: string;       // CSS delay e.g. '0.1s' — default '0s'
}

export function useInView<T extends HTMLElement>({
  threshold = 0.15,
  once = true,
  delay = '0s',
}: Options = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set the CSS delay variable
    el.style.setProperty('--delay', delay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          if (once) observer.disconnect();
        } else if (!once) {
          el.classList.remove('is-visible');
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once, delay]);

  return ref;
}