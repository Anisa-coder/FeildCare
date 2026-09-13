import Link from 'next/link';
import { Search, X } from 'lucide-react';

export default function HistoryFilter({ stats, activeCategory, query }) {
  const filterTabs = [
    { key: 'all', label: 'All Scans', count: stats.total_scans },
    { key: 'disease', label: 'Diseases', count: stats.diseases_detected },
    { key: 'healthy', label: 'Healthy', count: stats.healthy_diagnoses },
  ];

  function filterHref(category) {
    const parameters = new URLSearchParams();
    if (category !== 'all') parameters.set('category', category);
    if (query) parameters.set('q', query);
    const suffix = parameters.toString();
    return suffix ? `/history?${suffix}` : '/history';
  }

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      <nav aria-label="Filter scan history" className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0">
        {filterTabs.map((tab) => (
          <Link
            key={tab.key}
            href={filterHref(tab.key)}
            aria-current={activeCategory === tab.key ? 'page' : undefined}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 ${
              activeCategory === tab.key
                ? 'bg-green-800 text-white shadow-sm'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200/60'
            }`}
          >
            {tab.label} ({tab.count.toLocaleString()})
          </Link>
        ))}
      </nav>

      <form method="GET" action="/history" className="flex items-center gap-2 w-full lg:w-auto">
        {activeCategory !== 'all' && (
          <input type="hidden" name="category" value={activeCategory} />
        )}
        <label className="relative flex-1 lg:w-72">
          <span className="sr-only">Search scan history</span>
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            name="q"
            type="text"
            defaultValue={query}
            maxLength={100}
            placeholder="Search by crop, disease..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-3 py-2.5 text-xs text-gray-700 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
          />
        </label>
        <button
          type="submit"
          className="rounded-xl bg-green-800 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
        >
          Search
        </button>
        {query && (
          <Link
            href={activeCategory === 'all' ? '/history' : `/history?category=${activeCategory}`}
            aria-label="Clear search"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:bg-gray-50 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
          >
            <X className="h-4 w-4" />
          </Link>
        )}
      </form>
    </div>
  );
}
