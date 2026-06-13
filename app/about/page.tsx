import AboutFirm from '@/components/about/AboutFirm';
import AboutProfile from '@/components/about/AboutProfile';
import AboutServices from '@/components/about/AboutServices';

export const metadata = {
  title: 'About',
  description: 'Minimalist Design is a luxury space planning studio in Kuala Lumpur.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-20 sm:pt-[80px] pb-[120px]">
      <div className="max-w-[680px] mx-auto px-6 sm:px-8">
        <AboutFirm />
        <AboutProfile />
        <AboutServices />
      </div>
    </main>
  );
}
