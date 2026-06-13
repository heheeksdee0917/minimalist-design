import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
