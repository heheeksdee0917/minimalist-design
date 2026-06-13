import type { Metadata } from 'next';
import './globals.css';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  metadataBase: new URL('https://minimalistdesign.my'),
  title: {
    default: 'Minimalist Design',
    template: '%s — Minimalist Design',
  },
  description: 'Luxury space planning and interior architecture consultancy based in Kuala Lumpur. Function-first design for discerning homeowners and property developers.',
  openGraph: {
    siteName: 'Minimalist Design',
    locale: 'en_MY',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/cal-sans@1.0.1/index.min.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'InteriorDesigner',
              name: 'Minimalist Design',
              url: 'https://minimalistdesign.my',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kuala Lumpur',
                addressCountry: 'MY',
              },
              description: 'Luxury space planning and interior architecture consultancy in Kuala Lumpur.',
              areaServed: 'Malaysia',
              priceRange: '$$$',
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#0A0A0A] pb-28 max-sm:pb-24">
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
