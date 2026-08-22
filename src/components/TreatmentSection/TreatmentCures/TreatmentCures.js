import { ShieldCheck, Beaker, Leaf, CheckCircle2, AlertCircle } from 'lucide-react';

const organicCures = [
  {
    name: 'Bacillus Subtilis Bio-Fungicide',
    type: 'Biological Control',
    points: [
      'Beneficial bacterial strain that colonizes the leaf surface and colonially outcompetes Alternaria fungal spores.',
      'Produces natural lipopeptides that puncture and break down fungal cell membranes.',
      'Zero pre-harvest interval (PHI) — 100% safe for organic farming and immediate consumption after washing.',
    ],
  },
  {
    name: 'Copper Octanoate (Copper Soap)',
    type: 'Organic Protectant',
    points: [
      'Fixed copper formulation that denatures fungal proteins and halts germination of new spore rings.',
      'Gentle on tender foliage compared to traditional Bordeaux mixtures without causing copper phytotoxicity.',
      'Forms a protective chemical barrier on healthy leaves adjacent to infected plots.',
    ],
  },
  {
    name: 'Potassium Silicate & Calcium Fortifier',
    type: 'Cell-Wall Strengthener',
    points: [
      'Deposits microscopic silicon crystals into the leaf epidermis to physically block hyphal penetration.',
      'Calcium supplements reduce cellular pectin degradation caused by Alternaria solani enzymes.',
      'Enhances drought resistance and photosynthetic vitality during plant recovery.',
    ],
  },
];

const conventionalCures = [
  {
    name: 'Chlorothalonil (Broad-Spectrum Contact)',
    type: 'Standard Fungicide',
    points: [
      'Inactivates fungal sulfhydryl enzymes, preventing cellular respiration of Alternaria spores.',
      'Multi-site mode of action prevents pathogen resistance buildup over extended cropping cycles.',
      'Ideal for preventative knockdown during wet, humid weather forecasting.',
    ],
  },
  {
    name: 'Azoxystrobin (QoI / Strobilurin Systemic)',
    type: 'Translaminar Systemic',
    points: [
      'Absorbed through the leaf cuticle and redistributes internally to protect untreated new shoot growth.',
      'Inhibits mitochondrial electron transport, stopping fungal energy production within hours.',
      'Provides 14-21 days of residual protection against concentric leaf spot spreading.',
    ],
  },
];

export default function TreatmentCures() {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center text-green-700">
          <Beaker className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">1. What is the Cure? (Medication & Control Options)</h3>
          <p className="text-xs text-gray-500">
            Selected active ingredients proven by agronomic plant pathologists to eradicate Alternaria fungal blight.
          </p>
        </div>
      </div>

      {/* Organic Cures Grid */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Leaf className="w-4 h-4 text-green-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-green-900">
            Organic & Biological Cures (Recommended)
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {organicCures.map((cure, i) => (
            <div
              key={i}
              className="bg-green-50/40 rounded-2xl p-5 border border-green-100/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-green-100 text-green-800 border border-green-200">
                    {cure.type}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-3">{cure.name}</h4>
                <ul className="space-y-2">
                  {cure.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conventional Chemical Options */}
      <div>
        <div className="flex items-center space-x-2 mb-3">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
            Conventional Chemical Cures (For Severe Field Outbreaks)
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {conventionalCures.map((cure, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-5 border border-gray-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-gray-200 text-gray-700">
                    {cure.type}
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-3">{cure.name}</h4>
                <ul className="space-y-2">
                  {cure.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
