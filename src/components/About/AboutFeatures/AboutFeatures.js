import { Cpu, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Precision AI Vision Engine',
    description:
      'Trained on hundreds of thousands of expert-verified agricultural images spanning broad crop and vegetable disease categories.',
  },
  {
    icon: Zap,
    title: 'Early Stage Detection',
    description:
      'Identify fungal spots, bacterial blights, and nutrient deficiencies before they spread throughout your field plots.',
  },
  {
    icon: ShieldCheck,
    title: 'Actionable Agronomic Advice',
    description:
      'Every diagnosis comes with step-by-step treatment guidance, safe fungicide recommendations, and cultural practices to protect yield.',
  },
  {
    icon: Sparkles,
    title: 'Fast & Lightweight',
    description:
      'Engineered for low-latency inference so agronomists and farmers can scan crop leaves directly in the field in seconds.',
  },
];

export default function AboutFeatures() {
  return (
    <section className="mb-10">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-2">
          Why Farmers Choose FeildCare
        </h2>
        <p className="text-sm text-gray-500">
          State-of-the-art agricultural technology crafted for simplicity, speed, and dependable harvest protection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feat, i) => {
          const Icon = feat.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-start space-x-4 hover:border-green-300 transition"
            >
              <div className="p-3 bg-green-50 rounded-xl border border-green-200 text-green-700 shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">
                  {feat.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
