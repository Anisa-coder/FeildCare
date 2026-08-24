import Navbar from '@/components/Navbar/Navbar';
import HistoryHero from '@/components/History/HistoryHero';
import HistoryStats from '@/components/History/HistoryStats';
import HistoryFilter from '@/components/History/HistoryFilter';
import HistoryList from '@/components/History/HistoryList';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "Scan History - FeildCare",
  description: "View and review past crop health scan records and disease detection results.",
};

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <HistoryHero />
        <div className="mb-6 flex justify-start sm:justify-end">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-green-300 hover:text-green-800 text-gray-700 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full transition shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
        <HistoryStats />
        <HistoryFilter />
        <HistoryList />
      </main>
    </div>
  );
}
