import Navbar from '@/components/Navbar/Navbar';
import TreatmentSection from '@/components/TreatmentSection';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "Cure & Treatment Guide - FeildCare",
  description: "Simple cure and prevention guide for crop diseases.",
};

export default function CurePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <section className="relative rounded-3xl overflow-hidden mb-10 bg-linear-to-br from-green-900 via-green-800 to-emerald-950 text-white p-8 md:p-12 shadow-sm">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-green-800/80 border border-green-600/50 px-3.5 py-1.5 rounded-full text-xs font-semibold text-green-200 mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-green-400" />
              <span>Crop Health Recovery</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 leading-tight">
                Cure & Prevention Guide
            </h1>
            <p className="text-green-100 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                Quick and clean field guidance focused on what to do now and how to prevent the next outbreak.
            </p>
              <div className="flex flex-wrap gap-3">
              <span className="bg-green-800/60 border border-green-600/40 text-green-200 text-xs px-3 py-1 rounded-full">
                  5 Cure Actions
              </span>
              <span className="bg-green-800/60 border border-green-600/40 text-green-200 text-xs px-3 py-1 rounded-full">
                  5 Prevention Actions
              </span>
            </div>
          </div>
        </section>

        {/* Full Modular Treatment & Cure Section */}
        <TreatmentSection />

        {/* Return to Scanner CTA */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Have another suspicious crop leaf?
            </h3>
            <p className="text-xs text-gray-500">
              Upload a fresh crop leaf photo for real-time AI diagnosis.
            </p>
          </div>
          <Link
            href="/"
            className="bg-green-800 hover:bg-green-900 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center space-x-2 transition shadow-sm shrink-0"
          >
            <span>Scan Another Leaf</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
