import { Activity, ShieldCheck, AlertTriangle, TrendingUp } from 'lucide-react';

const stats = [
  {
    label: 'Total Scans',
    value: '1,428',
    change: '+14% this month',
    icon: Activity,
    color: 'text-green-700 bg-green-50 border-green-200',
  },
  {
    label: 'Healthy Diagnoses',
    value: '1,092',
    change: '76.4% healthy rate',
    icon: ShieldCheck,
    color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  },
  {
    label: 'Diseases Detected',
    value: '336',
    change: 'Early Blight most common',
    icon: AlertTriangle,
    color: 'text-amber-700 bg-amber-50 border-amber-200',
  },
  {
    label: 'Avg Confidence',
    value: '94.8%',
    change: 'High accuracy model',
    icon: TrendingUp,
    color: 'text-blue-700 bg-blue-50 border-blue-200',
  },
];

export default function HistoryStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div
            key={i}
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
                {stat.change}
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
