import { Calendar, Clock, ShieldCheck, CheckSquare2, AlertTriangle } from 'lucide-react';

const timelineSteps = [
  {
    day: 'Day 1',
    title: 'Sanitation & Pruning',
    desc: 'Remove lower infected leaves with sanitized shears. Dispose of debris in sealed bags. Apply 3-inch straw mulch.',
  },
  {
    day: 'Day 2',
    title: 'First Foliar Application',
    desc: 'Apply Potassium Bicarbonate spray or Bacillus subtilis bio-fungicide during early morning (6:30 - 8:30 AM).',
  },
  {
    day: 'Day 7-10',
    title: 'Follow-Up Booster',
    desc: 'Re-apply Neem Oil emulsion or bio-shield to protect newly emerged foliage against secondary spore airborne spread.',
  },
  {
    day: 'Day 14',
    title: 'AI Re-Scan & Verification',
    desc: 'Re-scan leaves with FeildCare camera to confirm lesion margin arrest, green recovery, and zero new spore rings.',
  },
];

const safetyPoints = [
  'Always test homemade spray recipes on 1-2 lower leaves 24 hours prior to full field application to check for phytotoxicity.',
  'Wear protective gloves, eye goggles, and a face mask when spraying any solution.',
  'Do not spray during high winds (>10 km/h) or within 3 hours of forecasted heavy rainfall.',
  'Thoroughly rinse backpack sprayers with fresh water between different biological or chemical mixtures.',
];

export default function TreatmentSchedule() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-10">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center text-green-700">
          <Calendar className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">4. Application Schedule & Field Safety Checklist</h3>
          <p className="text-xs text-gray-500">
            Recommended 14-day recovery cycle and essential application safety precautions.
          </p>
        </div>
      </div>

      {/* 14-Day Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {timelineSteps.map((step, i) => (
          <div key={i} className="bg-green-50/40 rounded-2xl p-5 border border-green-100/80 relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-green-800 bg-green-100 px-2 py-0.5 rounded-md">
                {step.day}
              </span>
              <Clock className="w-3.5 h-3.5 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h4>
            <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Safety Points */}
      <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-5">
        <div className="flex items-center space-x-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-amber-700" />
          <h4 className="font-bold text-amber-900 text-xs sm:text-sm uppercase tracking-wide">
            Application Safety & Best Practices Checklist:
          </h4>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {safetyPoints.map((pt, i) => (
            <li key={i} className="flex items-start space-x-2 text-xs text-amber-900/90 leading-relaxed">
              <CheckSquare2 className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 mt-0.5" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
