import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-6 pb-[120px]">
      <h1 className="text-[56px] sm:text-[72px] font-light text-[#F5F5F5] tracking-[0.12em]">
        404
      </h1>
      <p className="text-[16px] text-[#888888] mt-4 mb-8">
        This page does not exist.
      </p>
      <Link
        href="/"
        className="text-[13px] text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200 tracking-[0.08em]"
      >
        Return Home
      </Link>
    </main>
  );
}
