import { Activity, ShieldCheck, AlertTriangle, TrendingUp } from 'lucide-react';

export default function HistoryStats({ stats }) {
  const healthyRate = stats.total_scans
    ? ((stats.healthy_diagnoses / stats.total_scans) * 100).toFixed(1)
    : '0.0';
  const cards = [
    {
      label: 'Total Scans',
      value: stats.total_scans.toLocaleString(),
      detail: 'Saved crop analyses',
      icon: Activity,
      color: 'text-green-700 bg-green-50 border-green-200',
    },
    {
      label: 'Healthy Diagnoses',
      value: stats.healthy_diagnoses.toLocaleString(),
      detail: `${healthyRate}% healthy rate`,
      icon: ShieldCheck,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      label: 'Diseases Detected',
      value: stats.diseases_detected.toLocaleString(),
      detail: stats.most_common_disease
        ? `${stats.most_common_disease} most common`
        : 'No disease diagnoses yet',
      icon: AlertTriangle,
      color: 'text-amber-700 bg-amber-50 border-amber-200',
    },
    {
      label: 'Avg Confidence',
      value: `${Number(stats.average_confidence).toFixed(1)}%`,
      detail: stats.total_scans ? 'Across all saved scans' : 'No scans to average yet',
      icon: TrendingUp,
      color: 'text-blue-700 bg-blue-50 border-blue-200',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex items-start justify-between"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                {stat.label}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                {stat.value}
              </h3>
              <p className="text-xs text-gray-500 mt-1 font-medium">
                {stat.detail}
              </p>
            </div>
            <div className={`p-3 rounded-xl border ${stat.color}`}>
              <Icon className="w-5 h-5" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
