import { Search, Filter, Calendar } from 'lucide-react';

export default function HistoryFilter() {
  const filterTabs = ['All Scans (1,428)', 'Diseases (336)', 'Healthy (1,092)', 'High Severity (48)'];

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Category Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
        {filterTabs.map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              i === 0
                ? 'bg-green-800 text-white shadow-sm'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200/60'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search & Date Controls (Server-rendered UI) */}
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <div className="relative flex-1 md:w-64">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            readOnly
            placeholder="Search by crop, disease..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-3 py-2 text-xs text-gray-700 focus:outline-none placeholder-gray-400"
          />
        </div>
        <div className="flex items-center space-x-1.5 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium text-gray-600">
          <Calendar className="w-3.5 h-3.5 text-gray-500" />
          <span>Last 30 Days</span>
        </div>
      </div>
    </div>
  );
}
