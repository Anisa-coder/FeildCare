import Navbar from '@/components/Navbar/Navbar';
import TreatmentSection from '@/components/TreatmentSection';
import Link from 'next/link';
import { AlertCircle, ArrowRight, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Cure & Treatment Guide - FeildCare',
  description: 'Disease-specific treatment and prevention guidance for detected crops.',
};

async function loadTreatment(classKey) {
  if (!classKey) return { treatment: null, error: null };

  const backendUrl = (process.env.BACKEND_URL || 'http://127.0.0.1:8000').replace(/\/$/, '');
  try {
    const response = await fetch(`${backendUrl}/treatments/${encodeURIComponent(classKey)}`, {
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      const payload = await response.json().catch(() => null);
      return {
        treatment: null,
        error: payload?.detail || 'Treatment guidance is unavailable for this result.',
      };
    }
    return { treatment: await response.json(), error: null };
  } catch {
    return {
      treatment: null,
      error: 'The treatment service is unavailable. Make sure FieldCare is running.',
    };
  }
}

function EmptyTreatmentState({ error }) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 text-center shadow-sm">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-700">
        <AlertCircle className="h-7 w-7" />
      </span>
      <h2 className="mt-4 text-xl font-bold text-gray-900">
        {error ? 'Treatment guide unavailable' : 'No diagnosis selected'}
      </h2>
      <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-gray-600">
        {error || 'Run a crop image analysis first, then open the full report from its result.'}
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-900"
      >
        <span>Go to Crop Scanner</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

export default async function CurePage({ searchParams }) {
  const requestedDisease = (await searchParams).disease;
  const classKey = Array.isArray(requestedDisease) ? requestedDisease[0] : requestedDisease;
  const { treatment, error } = await loadTreatment(classKey);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <section className="relative rounded-3xl overflow-hidden mb-10 bg-linear-to-br from-green-900 via-green-800 to-emerald-950 text-white p-8 md:p-12 shadow-sm">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-green-800/80 border border-green-600/50 px-3.5 py-1.5 rounded-full text-xs font-semibold text-green-200 mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-green-400" />
              <span>Crop Health Recovery</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 leading-tight">
              {treatment ? `${treatment.display_name} Guide` : 'Cure & Prevention Guide'}
            </h1>
            <p className="text-green-100 text-sm sm:text-base leading-relaxed mb-6">
              Disease-specific field guidance based on agricultural extension references.
            </p>
            {treatment && (
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-800/60 border border-green-600/40 text-green-100 text-xs px-3 py-1.5 rounded-full">
                  {treatment.cure_points.length} {treatment.management_label}
                </span>
                <span className="bg-green-800/60 border border-green-600/40 text-green-100 text-xs px-3 py-1.5 rounded-full">
                  {treatment.prevention_points.length} Prevention Steps
                </span>
              </div>
            )}
          </div>
        </section>

        {treatment ? <TreatmentSection treatment={treatment} /> : <EmptyTreatmentState error={error} />}

        <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Have another suspicious crop leaf?</h3>
            <p className="text-xs text-gray-500">Upload a fresh crop leaf photo for real-time AI diagnosis.</p>
          </div>
          <Link href="/" className="bg-green-800 hover:bg-green-900 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center space-x-2 transition shadow-sm shrink-0">
            <span>Scan Another Leaf</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
