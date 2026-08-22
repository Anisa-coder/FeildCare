import Image from 'next/image';
import { CheckCircle2, AlertCircle, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

const scanRecords = [
  {
    id: 'SCAN-2026-0891',
    image: '/diseased-leaf.jpg',
    crop: 'Tomato Plant (Solanum lycopersicum)',
    disease: 'Early Blight',
    pathogen: 'Alternaria solani',
    date: 'Aug 21, 2026 • 14:32 PM',
    confidence: 92,
    severity: 'High',
    severityColor: 'bg-red-50 text-red-700 border-red-200',
    status: 'Action Required',
    statusColor: 'bg-amber-50 text-amber-800 border-amber-200',
    action: 'Apply recommended copper-based fungicide and prune lower infected foliage.',
  },
  {
    id: 'SCAN-2026-0889',
    image: '/sample-leaf-2.jpg',
    crop: 'Squash / Cucurbit Leaf',
    disease: 'Powdery Mildew',
    pathogen: 'Podosphaera xanthii',
    date: 'Aug 20, 2026 • 10:15 AM',
    confidence: 88,
    severity: 'Moderate',
    severityColor: 'bg-amber-50 text-amber-700 border-amber-200',
    status: 'Treatment Scheduled',
    statusColor: 'bg-blue-50 text-blue-800 border-blue-200',
    action: 'Spray neem oil extract or potassium bicarbonate solution in late evening.',
  },
  {
    id: 'SCAN-2026-0885',
    image: '/sample-leaf-3.jpg',
    crop: 'Soybean Field (Plot B-4)',
    disease: 'Target Spot / Necrotic Blight',
    pathogen: 'Corynespora cassiicola',
    date: 'Aug 19, 2026 • 16:45 PM',
    confidence: 94,
    severity: 'High',
    severityColor: 'bg-red-50 text-red-700 border-red-200',
    status: 'Treated',
    statusColor: 'bg-green-50 text-green-800 border-green-200',
    action: 'Field fungicide applied. Drainage aeration improved across sector B-4.',
  },
  {
    id: 'SCAN-2026-0882',
    image: '/sample-leaf-4.jpg',
    crop: 'Bell Pepper (Capsicum annuum)',
    disease: 'Bacterial Leaf Spot',
    pathogen: 'Xanthomonas campestris',
    date: 'Aug 18, 2026 • 09:20 AM',
    confidence: 90,
    severity: 'Moderate',
    severityColor: 'bg-amber-50 text-amber-700 border-amber-200',
    status: 'Under Observation',
    statusColor: 'bg-purple-50 text-purple-800 border-purple-200',
    action: 'Avoid overhead irrigation to minimize bacterial spread on leaves.',
  },
  {
    id: 'SCAN-2026-0879',
    image: '/sample-leaf-1.jpg',
    crop: 'Potato Crop (Field North-1)',
    disease: 'Early Blight (Initial Stage)',
    pathogen: 'Alternaria solani',
    date: 'Aug 17, 2026 • 11:05 AM',
    confidence: 96,
    severity: 'Low',
    severityColor: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    status: 'Resolved',
    statusColor: 'bg-green-50 text-green-800 border-green-200',
    action: 'Infected leaflets destroyed. Follow-up scan showed no spread.',
  },
];

export default function HistoryList() {
  return (
    <div className="space-y-4">
      {scanRecords.map((record) => (
        <div
          key={record.id}
          className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:border-green-300 transition flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          {/* Left: Leaf Thumbnail & Diagnosis */}
          <div className="flex items-start space-x-4 flex-1">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 border border-gray-200 relative bg-gray-50">
              <Image
                src={record.image}
                alt={record.disease}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1 flex-wrap gap-y-1">
                <span className="text-[10px] font-mono font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                  {record.id}
                </span>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${record.severityColor}`}>
                  {record.severity} Severity
                </span>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${record.statusColor}`}>
                  {record.status}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-base leading-snug">
                {record.disease}
              </h3>
              <p className="text-xs text-gray-500 italic">
                {record.pathogen} • {record.crop}
              </p>
              <p className="text-xs text-gray-600 mt-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                <strong className="text-gray-800">Recommendation:</strong> {record.action}
              </p>
            </div>
          </div>

          {/* Right: Confidence Score & Timestamp */}
          <div className="flex lg:flex-col items-center lg:items-end justify-between w-full lg:w-auto pt-3 lg:pt-0 border-t lg:border-t-0 border-gray-100">
            <div className="text-left lg:text-right mb-2">
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">
                Confidence Score
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-green-700">
                  {record.confidence}%
                </span>
                <div className="w-16 bg-gray-100 h-2 rounded-full overflow-hidden hidden sm:block">
                  <div
                    className="bg-green-600 h-full rounded-full"
                    style={{ width: `${record.confidence}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1.5 text-xs text-gray-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{record.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
