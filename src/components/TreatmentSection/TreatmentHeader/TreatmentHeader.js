import { Sparkles, ShieldAlert, HeartPulse } from 'lucide-react';

export default function TreatmentHeader() {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="inline-flex items-center space-x-1.5 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
          <HeartPulse className="w-3.5 h-3.5 text-green-700" />
          <span>Disease Recovery Protocol</span>
        </span>
        <span className="bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full border border-red-200">
          Target: Early Blight (Alternaria solani)
        </span>
        <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
          92% Confidence Match
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
            Possible Treatments & Cure Remedies
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl leading-relaxed">
            Detailed step-by-step cures, homemade preparation recipes, and agronomic management practices to eliminate the pathogen and safeguard your crop yield.
          </p>
        </div>
        <div className="text-left md:text-right flex-shrink-0">
          <span className="text-xs font-medium text-gray-400 block">Recommended Action Timeline</span>
          <span className="text-sm font-bold text-green-800">Begin within 24-48 hours</span>
        </div>
      </div>
    </div>
  );
}
