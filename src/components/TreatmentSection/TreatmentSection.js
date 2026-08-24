import { CheckCircle2, ShieldCheck, BarChart3 } from 'lucide-react';

const curePoints = [
  'Remove infected lower leaves immediately and discard them away from the field.',
  'Spray a bio-fungicide (Bacillus subtilis or Trichoderma-based) every 7 days.',
  'Use copper-based fungicide in severe infection zones as per label dose.',
  'Switch to drip irrigation to keep foliage dry during treatment weeks.',
  'Recheck leaves after 10-14 days and repeat treatment if fresh lesions appear.',
];

const preventionPoints = [
  'Maintain plant spacing for airflow and faster leaf drying after watering.',
  'Avoid overhead watering, especially in late evening and night hours.',
  'Apply mulch to reduce soil splash and pathogen transfer to lower leaves.',
  'Rotate with non-host crops for at least 2 seasons before replanting.',
  'Sanitize tools after pruning and remove crop residue after harvest.',
];

const causeFactors = [
  { label: 'Irrigation Moisture', value: 86, color: 'bg-blue-500' },
  { label: 'Weather Humidity', value: 79, color: 'bg-cyan-500' },
  { label: 'Low Sunlight Exposure', value: 68, color: 'bg-amber-500' },
  { label: 'Fertilizer Imbalance', value: 57, color: 'bg-lime-500' },
  { label: 'Airflow Congestion', value: 62, color: 'bg-emerald-500' },
  { label: 'Leaf Surface Damage', value: 49, color: 'bg-orange-500' },
];

export default function TreatmentSection() {
  return (
    <section id="treatment-guide" className="mt-12 pt-8 border-t border-gray-200 scroll-mt-20">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Clean Cure Plan
        </h2>
        <p className="text-sm text-gray-500 mt-2 max-w-2xl">
          A simple, practical guide with exactly five cure actions and five prevention actions.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm mb-6">
        <div className="flex items-center gap-2 mb-5">
          <span className="inline-flex w-9 h-9 rounded-xl bg-sky-100 border border-sky-200 items-center justify-center text-sky-700">
            <BarChart3 className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Disease Cause Factors</h3>
            <p className="text-xs text-gray-500">Estimated field-level influence on outbreak spread.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {causeFactors.map((factor) => (
            <div key={factor.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium text-gray-700">{factor.label}</span>
                <span className="text-xs font-semibold text-gray-500">{factor.value}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className={`h-full rounded-full ${factor.color}`}
                  style={{ width: `${factor.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex w-9 h-9 rounded-xl bg-green-100 border border-green-200 items-center justify-center text-green-700">
              <CheckCircle2 className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-gray-900 text-lg">5 Cure Points</h3>
          </div>

          <ul className="space-y-3">
            {curePoints.map((point, index) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                <span className="inline-flex w-5 h-5 mt-0.5 rounded-full bg-green-100 text-green-800 items-center justify-center text-[11px] font-bold">
                  {index + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-200 items-center justify-center text-emerald-700">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-gray-900 text-lg">5 Prevention Points</h3>
          </div>

          <ul className="space-y-3">
            {preventionPoints.map((point, index) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                <span className="inline-flex w-5 h-5 mt-0.5 rounded-full bg-emerald-100 text-emerald-800 items-center justify-center text-[11px] font-bold">
                  {index + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
