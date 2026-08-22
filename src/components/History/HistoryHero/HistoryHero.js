import { History, Sparkles } from 'lucide-react';

export default function HistoryHero() {
  return (
    <section className="relative rounded-3xl overflow-hidden mb-8 bg-gradient-to-r from-green-900 via-green-800 to-emerald-900 text-white p-8 md:p-10 shadow-sm">
      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center space-x-2 bg-green-800/60 border border-green-600/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-green-200 mb-4 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-green-300" />
          <span>Historical Health Records</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 leading-tight">
          Crop Scan History
        </h1>
        <p className="text-green-100/90 text-sm md:text-base leading-relaxed">
          Review all previous crop health analyses, confidence metrics, detected diseases, and historical treatment plans in one place.
        </p>
      </div>

      {/* Background graphic motif */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 flex items-center justify-center pointer-events-none">
        <History className="w-64 h-64 text-white" />
      </div>
    </section>
  );
}
