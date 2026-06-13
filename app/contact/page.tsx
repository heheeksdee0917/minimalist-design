export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Minimalist Design in Kuala Lumpur.',
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-6 pb-[120px]">
      <h1 className="text-[32px] sm:text-[52px] font-light text-[#F5F5F5] tracking-wider text-center mb-6">
        Let&apos;s work together
      </h1>
      <a
        href="mailto:
        office@minimalistdesign.tv"
        className="text-[20px] text-[#F5F5F5] hover:underline transition-all duration-200"
      >
        office@minimalistdesign.tv
      </a>
      <p className="text-[14px] text-[#888888] mt-6">
        Kuala Lumpur, Malaysia
      </p>
    </main>
  );
}
