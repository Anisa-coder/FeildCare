import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  Info,
  ShieldCheck,
} from 'lucide-react';

function NumberedList({ items, tone }) {
  const badgeClass =
    tone === 'emerald'
      ? 'bg-emerald-100 text-emerald-800'
      : 'bg-green-100 text-green-800';

  return (
    <ol className="space-y-3">
      {items.map((point, index) => (
        <li key={point} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
          <span
            className={`inline-flex w-6 h-6 mt-0.5 rounded-full items-center justify-center text-xs font-bold shrink-0 ${badgeClass}`}
          >
            {index + 1}
          </span>
          <span>{point}</span>
        </li>
      ))}
    </ol>
  );
}

export default function TreatmentSection({ treatment }) {
  return (
    <section id="treatment-guide" className="mt-10 scroll-mt-20">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-6">
        <div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-green-700 font-semibold mb-2">
              Detected condition
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              {treatment.display_name}
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              {treatment.classification} · {treatment.agent}
            </p>
          </div>
        </div>

        {treatment.note && (
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-amber-700" />
            <p>{treatment.note}</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex w-10 h-10 rounded-xl bg-green-100 border border-green-200 items-center justify-center text-green-700">
              <CheckCircle2 className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">{treatment.management_label}</h3>
              <p className="text-xs text-gray-500">What to do for the detected condition.</p>
            </div>
          </div>
          <NumberedList items={treatment.cure_points} tone="green" />
        </article>

        <article className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 items-center justify-center text-emerald-700">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Prevention Steps</h3>
              <p className="text-xs text-gray-500">How to reduce recurrence or spread.</p>
            </div>
          </div>
          <NumberedList items={treatment.prevention_points} tone="emerald" />
        </article>
      </div>

      <article className="mt-6 bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 items-center justify-center text-sky-700">
            <Info className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Common Cause Factors</h3>
            <p className="text-xs text-gray-500">Conditions commonly associated with this result.</p>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {treatment.cause_factors.map((factor) => (
            <li key={factor} className="flex items-start gap-2.5 rounded-xl bg-gray-50 border border-gray-100 p-3 text-sm text-gray-700">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-sky-500 shrink-0" />
              <span>{factor}</span>
            </li>
          ))}
        </ul>
      </article>

      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-amber-700" />
          <div>
            <h3 className="text-sm font-bold text-amber-950">Agronomic guidance notice</h3>
            <p className="text-sm leading-relaxed text-amber-900 mt-1">{treatment.disclaimer}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-gray-500">
        <BookOpen className="w-4 h-4 shrink-0 mt-0.5 text-green-700" />
        <p>Reference organizations: {treatment.sources.join(', ')}.</p>
      </div>
    </section>
  );
}
