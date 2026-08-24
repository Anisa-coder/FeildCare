import { Sprout, ShieldAlert, Scissors, Waves, Sun, Flame, CheckCircle2 } from 'lucide-react';

const remedies = [
  {
    icon: Scissors,
    title: 'Pruning & Foliar Sanitation',
    points: [
      'Immediately prune and remove all infected leaves showing dark target rings and yellow margins.',
      'Strip off the lowest 12 to 18 inches of bottom foliage from mature plants to eliminate soil-splash contact.',
      'Sanitize pruning shears with 70% isopropyl alcohol or 10% bleach solution between individual plant beds.',
      'Only prune during dry, sunny weather when leaf wounds can callous quickly without fungal entry.',
    ],
  },
  {
    icon: Waves,
    title: 'Irrigation & Moisture Management',
    points: [
      'Transition immediately from overhead sprinkler systems to ground-level drip or soaker hose irrigation.',
      'Keep the plant canopy and leaves dry — Alternaria spores require 4-8 hours of free leaf moisture to germinate.',
      'Water exclusively in early morning (6:00 AM - 8:00 AM) so any accidental foliage splash evaporates rapidly.',
      'Improve furrow drainage and grade soil beds to prevent standing water pools around root zones.',
    ],
  },
  {
    icon: Sun,
    title: 'Mulch Barrier & Soil Health',
    points: [
      'Lay a 2 to 3-inch layer of clean straw, dried leaves, or agricultural plastic mulch beneath the crop canopy.',
      'The mulch acts as a physical shield preventing soil-borne spores from splashing onto lower leaves during heavy rain.',
      'Avoid high-nitrogen fertilizers which force lush, tender vegetative growth highly susceptible to blight hyphae.',
      'Top-dress with well-rotted organic compost to boost beneficial soil microbiome populations.',
    ],
  },
  {
    icon: Flame,
    title: 'Disposal & Crop Rotation Protocol',
    points: [
      'DO NOT place infected leaves or diseased plant debris into domestic or low-temperature compost piles.',
      'Seal diseased foliage in disposal bags and incinerate, solarize, or deeply bury at least 2 feet underground.',
      'Enforce a strict 3-year crop rotation schedule and avoid planting closely related host crops back-to-back.',
      'Plant resistant or tolerant certified cultivars (e.g. Mountain Fresh Plus, Defiant PhR) for upcoming planting seasons.',
    ],
  },
];

export default function TreatmentRemedies() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center text-green-700">
          <Sprout className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">3. Cultural & Preventative Remedies</h3>
          <p className="text-xs text-gray-500">
            Agronomic field interventions that starve the fungal pathogen of moisture, hosts, and spreading pathways.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {remedies.map((remedy, i) => {
          const Icon = remedy.icon;
          return (
            <div
              key={i}
              className="bg-green-50/30 rounded-2xl p-6 border border-green-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 bg-green-100 rounded-xl text-green-800 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                    {remedy.title}
                  </h4>
                </div>

                <ul className="space-y-2.5">
                  {remedy.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-700 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
