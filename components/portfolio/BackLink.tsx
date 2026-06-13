import Link from 'next/link';

export default function BackLink() {
  return (
    <Link
      href="/portfolio"
      className="inline-block text-[13px] text-[#888888] hover:text-[#F5F5F5] transition-colors duration-200 mb-8"
    >
      ← Back to Work
    </Link>
  );
}
