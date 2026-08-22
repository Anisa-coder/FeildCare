import Navbar from '@/components/Navbar/Navbar';
import AboutHero from '@/components/About/AboutHero';
import AboutFeatures from '@/components/About/AboutFeatures';
import AboutTech from '@/components/About/AboutTech';
import AboutCTA from '@/components/About/AboutCTA';

export const metadata = {
  title: "About Us - FeildCare",
  description: "Learn about FeildCare's mission to empower farmers with smart AI crop health detection.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <AboutHero />
        <AboutFeatures />
        <AboutTech />
        <AboutCTA />
      </main>
    </div>
  );
}
