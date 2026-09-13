import Image from 'next/image';
import Link from 'next/link';
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileImage,
} from 'lucide-react';

function formatDate(value) {
  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}

function EmptyHistory({ query }) {
  return (
    <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-14 text-center shadow-sm">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700">
        <FileImage className="h-7 w-7" />
      </span>
      <h2 className="mt-4 text-lg font-bold text-gray-900">
        {query ? 'No matching scans found' : 'No scans saved yet'}
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-500">
        {query
          ? 'Try another crop name, disease, or image filename.'
          : 'Analyze a crop leaf image and its diagnosis will appear here automatically.'}
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-full bg-green-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
      >
        Analyze a leaf
      </Link>
    </div>
  );
}

export default function HistoryList({ records, error, query }) {
  if (error) {
    return (
      <div role="alert" className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
        <div>
          <h2 className="font-bold">Could not load scan history</h2>
          <p className="mt-1 text-sm leading-relaxed">{error}</p>
        </div>
      </div>
    );
  }

  if (!records.length) return <EmptyHistory query={query} />;

  return (
    <div className="space-y-4">
      {records.map((record) => {
        const healthy = record.class_key.endsWith('__healthy');
        const confidence = Math.min(100, Math.max(0, Number(record.confidence_percent)));

        return (
          <article
            key={record.id}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-sm hover:border-green-300 transition flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5"
          >
            <div className="flex items-start gap-4 min-w-0 flex-1">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-gray-200 relative bg-gray-50">
                <Image
                  src={`/api/history/${record.id}/image`}
                  alt={`Uploaded leaf diagnosed as ${record.display_name}`}
                  fill
                  sizes="(min-width: 640px) 96px, 80px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="text-[10px] font-mono font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    SCAN-{String(record.id).padStart(4, '0')}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                      healthy
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}
                  >
                    {healthy ? <CheckCircle2 className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                    {healthy ? 'Healthy' : 'Disease detected'}
                  </span>
                </div>
                <h2 className="font-bold text-gray-900 text-base leading-snug">
                  {record.display_name}
                </h2>
                <p className="mt-0.5 text-xs text-gray-500">
                  {record.crop} · {record.filename}
                </p>
                <Link
                  href={`/cure?disease=${encodeURIComponent(record.class_key)}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-green-800 transition hover:text-green-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 rounded"
                >
                  View full report
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="flex lg:flex-col items-end justify-between w-full lg:w-48 pt-3 lg:pt-0 border-t lg:border-t-0 border-gray-100 gap-4">
              <div className="w-32 sm:w-40 lg:w-full text-left lg:text-right">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">
                  Confidence Score
                </span>
                <span className="text-2xl font-bold text-green-700">
                  {confidence.toFixed(1)}%
                </span>
                <div className="mt-1 ml-auto w-full bg-gray-100 h-2 rounded-full overflow-hidden" aria-hidden="true">
                  <div
                    className="bg-green-600 h-full rounded-full"
                    style={{ width: `${confidence}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-gray-400 text-right">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <time dateTime={record.created_at}>{formatDate(record.created_at)}</time>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
