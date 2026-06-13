'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-6 max-w-[480px] min-w-[320px] w-[calc(100%-48px)] sm:w-auto left-1/2 -translate-x-1/2 z-[9999] rounded-full"
      style={{
        background: 'rgba(10, 10, 10, 0.65)',
        backdropFilter: 'blur(20px) saturate(160%)',
        WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        border: '1px solid rgba(255, 255, 255, 0.10)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.48)',
      }}
    >
      <div className="flex items-center justify-center gap-10 max-sm:gap-6 py-3.5 px-8 max-sm:px-6">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] tracking-[0.08em] transition-colors duration-200 ${
                isActive
                  ? 'text-[#F5F5F5] font-semibold underline underline-offset-[4px] decoration-[#F5F5F5]'
                  : 'text-[#888888] font-normal hover:text-[#F5F5F5]'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
