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

const EMPTY_STATS = {
  total_scans: 0,
  healthy_diagnoses: 0,
  diseases_detected: 0,
  average_confidence: 0,
  most_common_disease: null,
};

async function loadHistory(category, query) {
  const backendUrl = (process.env.BACKEND_URL || 'http://127.0.0.1:8000').replace(/\/$/, '');
  const parameters = new URLSearchParams({ category, limit: '100' });
  if (query) parameters.set('q', query);

  try {
    const [historyResponse, statsResponse] = await Promise.all([
      fetch(`${backendUrl}/history?${parameters}`, {
        cache: 'no-store',
        signal: AbortSignal.timeout(10_000),
      }),
      fetch(`${backendUrl}/history/stats`, {
        cache: 'no-store',
        signal: AbortSignal.timeout(10_000),
      }),
    ]);

    if (!historyResponse.ok || !statsResponse.ok) {
      throw new Error('History request failed');
    }

    const [history, stats] = await Promise.all([
      historyResponse.json(),
      statsResponse.json(),
    ]);
    return { records: history.records || [], stats, error: null };
  } catch {
    return {
      records: [],
      stats: EMPTY_STATS,
      error: 'Scan history is unavailable. Make sure the FieldCare service is running.',
    };
  }
}

export default async function HistoryPage({ searchParams }) {
  const requested = (await searchParams) || {};
  const rawCategory = Array.isArray(requested.category)
    ? requested.category[0]
    : requested.category;
  const category = ['all', 'disease', 'healthy'].includes(rawCategory)
    ? rawCategory
    : 'all';
  const rawQuery = Array.isArray(requested.q) ? requested.q[0] : requested.q;
  const query = (rawQuery || '').trim().slice(0, 100);
  const { records, stats, error } = await loadHistory(category, query);

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
        <HistoryStats stats={stats} />
        <HistoryFilter stats={stats} activeCategory={category} query={query} />
        <HistoryList records={records} error={error} query={query} />
      </main>
    </div>
  );
}
