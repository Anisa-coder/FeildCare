import Link from 'next/link';
import { Camera, History, ArrowRight } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="bg-gradient-to-r from-green-800 to-emerald-800 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Ready to Protect Your Crops?
        </h2>
        <p className="text-green-100 text-xs sm:text-sm leading-relaxed">
          Start scanning crop leaves now for instant disease diagnosis and tailored management plans.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <Link
          href="/"
          className="w-full sm:w-auto bg-white text-green-900 hover:bg-green-50 px-6 py-3 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition shadow-sm"
        >
          <Camera className="w-4 h-4" />
          <span>Start New Scan</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
        <Link
          href="/history"
          className="w-full sm:w-auto bg-green-900/60 hover:bg-green-900 text-white border border-green-600/50 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition"
        >
          <History className="w-4 h-4" />
          <span>View Past Scans</span>
        </Link>
      </div>
    </section>
  );
}
