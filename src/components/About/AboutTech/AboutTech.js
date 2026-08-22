import { Camera, Search, FileText, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Camera,
    title: 'High-Res Image Capture',
    desc: 'Capture or upload clear photos of crop leaves showing suspicious spots, mold, or discoloration.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Computer Vision Analysis',
    desc: 'Convolutional neural networks extract microscopic lesion patterns, concentric rings, and discoloration halos.',
  },
  {
    step: '03',
    icon: FileText,
    title: 'Confidence & Pathogen Match',
    desc: 'Identifies the precise disease species (e.g. Alternaria solani) with a probability confidence score.',
  },
  {
    step: '04',
    icon: CheckCircle2,
    title: 'Targeted Remediation',
    desc: 'Provides immediate practical steps for fungicides, leaf removal, and field drainage management.',
  },
];

export default function AboutTech() {
  return (
    <section className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm mb-10">
      <div className="max-w-xl mb-8">
        <span className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-1">
          The Technology
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
          How FeildCare AI Works Under the Hood
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="relative bg-gray-50 rounded-2xl p-5 border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-green-800 bg-green-100 px-2 py-1 rounded-md mb-4 inline-block">
                  {item.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-green-700 mb-3 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
