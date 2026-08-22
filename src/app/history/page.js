import Navbar from '@/components/Navbar/Navbar';
import HistoryHero from '@/components/History/HistoryHero';
import HistoryStats from '@/components/History/HistoryStats';
import HistoryFilter from '@/components/History/HistoryFilter';
import HistoryList from '@/components/History/HistoryList';

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
        <HistoryStats />
        <HistoryFilter />
        <HistoryList />
      </main>
    </div>
  );
}
