import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import StepsSection from '@/components/StepsSection/StepsSection';
import BottomBanner from '@/components/BottomBanner/BottomBanner';

export default function FeildCarePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <HeroSection />
        <StepsSection />
        <BottomBanner />
      </main>
    </div>
  );
}