import PortfolioFilter from './PortfolioFilter';

export const metadata = {
  title: 'Work',
  description: 'Portfolio of luxury residential, commercial, and mixed-use projects across Malaysia.',
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-20 sm:pt-[80px] pb-[120px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-[32px] sm:text-[40px] font-light text-[#F5F5F5] tracking-[0.06em] mb-12">
          Work
        </h1>

        <PortfolioFilter />
      </div>
    </main>
  );
}
