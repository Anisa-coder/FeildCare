"use client";

import { useEffect, useRef, useState } from 'react';
import {
  CloudUpload,
  Search,
  Leaf,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const STEPS = [
  {
    id: 0,
    label: 'Upload',
    title: 'Uploading Crop Image',
    subtitle: 'Securely receiving your leaf image for diagnosis.',
    icon: CloudUpload,
    chip: 'Step 1/3',
    percent: 33,
  },
  {
    id: 1,
    label: 'Analyze',
    title: 'Analyzing Disease Patterns',
    subtitle: 'AI is scanning lesions, color, and shape signatures.',
    icon: Search,
    chip: 'Step 2/3',
    percent: 67,
  },
  {
    id: 2,
    label: 'Results',
    title: 'Diagnosis Ready',
    subtitle: 'Detection confidence and treatment suggestions are prepared.',
    icon: CheckCircle2,
    chip: 'Step 3/3',
    percent: 100,
  },
];

export default function StepsSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const timersRef = useRef([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current = [];
    };
  }, []);

  const startFakePipeline = () => {
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current = [];

    setActiveStep(0);
    setIsProcessing(true);

    const toAnalyze = setTimeout(() => {
      setActiveStep(1);
    }, 1100);

    const toResults = setTimeout(() => {
      setActiveStep(2);
      setIsProcessing(false);
    }, 3600);

    timersRef.current.push(toAnalyze, toResults);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    setUploadedFileName(file.name);
    startFakePipeline();
  };

  const resetAnalysis = () => {
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current = [];
    setIsProcessing(false);
    setUploadedFileName('');
    setActiveStep(0);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const activeMeta = STEPS[activeStep];
  const progressPercent = uploadedFileName ? activeMeta.percent : 0;

  return (
    <section className="mb-8 bg-white rounded-3xl border border-gray-200 shadow-sm p-5 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-green-700 font-semibold mb-1">
            Live Detection Flow
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Single Stream Crop Scan Simulation
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Fake pipeline preview: upload, analysis, and final diagnosis.
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 text-green-800 text-xs font-semibold px-3 py-1.5">
            {activeMeta.chip}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-5">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === activeStep && (uploadedFileName || idx === 0);
          const isDone = uploadedFileName && idx < activeStep;

          return (
            <div
              key={step.id}
              className={`rounded-xl border px-3 py-2.5 transition-all duration-500 ${
                isActive
                  ? 'border-green-300 bg-green-50'
                  : isDone
                    ? 'border-emerald-200 bg-emerald-50/60'
                    : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                <Icon
                  className={`w-4 h-4 ${
                    isActive || isDone ? 'text-green-700' : 'text-gray-400'
                  }`}
                />
                <span>{step.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full h-2 bg-gray-100 rounded-full mt-4 overflow-hidden">
        <div
          className="h-full bg-green-600 rounded-full transition-all duration-700"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="relative mt-5 min-h-85 sm:min-h-80 overflow-hidden rounded-2xl border border-gray-100 bg-linear-to-br from-gray-50 to-white">
        <div
          className={`absolute inset-0 p-5 sm:p-6 transition-all duration-700 ${
            activeStep === 0
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-6 pointer-events-none'
          }`}
        >
          <p className="text-xs font-semibold text-green-700 mb-1">{STEPS[0].title}</p>
          <p className="text-xs text-gray-500 mb-4">{STEPS[0].subtitle}</p>

          <input
            id="crop-upload-input"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            ref={fileInputRef}
            className="hidden"
          />

          <label
            htmlFor="crop-upload-input"
            className="block border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center bg-white cursor-pointer hover:border-green-400 hover:bg-green-50/30 transition"
          >
            <div className={`mx-auto w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-700 mb-3 ${isProcessing ? 'animate-pulse' : ''}`}>
              <CloudUpload className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-gray-800">
              {uploadedFileName ? 'Replace uploaded crop image' : 'Click to upload crop image'}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              JPG, JPEG, PNG up to 5MB
            </p>
            {uploadedFileName && (
              <p className="text-xs text-green-700 font-medium mt-3 truncate">
                Uploaded: {uploadedFileName}
              </p>
            )}
          </label>

          <p className="mt-4 text-xs text-gray-400 text-center">
            {isProcessing
              ? 'Upload received. Starting analysis...'
              : 'Select a crop image to begin AI analysis.'}
          </p>
        </div>

        <div
          className={`absolute inset-0 p-5 sm:p-6 transition-all duration-700 ${
            activeStep === 1
              ? 'opacity-100 translate-x-0'
              : activeStep < 1
                ? 'opacity-0 translate-x-6 pointer-events-none'
                : 'opacity-0 -translate-x-6 pointer-events-none'
          }`}
        >
          <p className="text-xs font-semibold text-green-700 mb-1">{STEPS[1].title}</p>
          <p className="text-xs text-gray-500 mb-6">{STEPS[1].subtitle}</p>

          <div className="h-60 flex flex-col items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-green-100/80 border border-green-200 flex items-center justify-center mb-5">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-green-700 flex items-center justify-center relative shadow-sm">
                <Leaf className="w-8 h-8 text-green-700 fill-green-600" />
                <span className="absolute -bottom-3 -right-3 w-6 h-2 bg-green-700 rounded-full rotate-45" />
              </div>
            </div>
            <p className="text-base font-bold text-gray-900">Analyzing Disease Signatures</p>
            <p className="text-xs text-gray-500 mt-1 text-center max-w-sm">
              Comparing captured features against broad crop disease patterns.
            </p>
          </div>
        </div>

        <div
          className={`absolute inset-0 p-5 sm:p-6 transition-all duration-700 ${
            activeStep === 2
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-6 pointer-events-none'
          }`}
        >
          <p className="text-xs font-semibold text-green-700 mb-1">{STEPS[2].title}</p>
          <p className="text-xs text-gray-500 mb-4">{STEPS[2].subtitle}</p>

          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-24 h-20 rounded-xl overflow-hidden border border-gray-200 shrink-0 bg-gray-50">
                <Image
                  src="/diseased-leaf.jpg"
                  alt="Detected diseased leaf"
                  width={96}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
                  Detected Disease
                </p>
                <h4 className="text-lg font-bold text-gray-900 leading-tight">Early Blight</h4>
                <p className="text-xs text-gray-500 mb-2">Crop leaf (Alternaria spp.)</p>
                <p className="text-sm font-semibold text-green-700">Confidence: 92%</p>
              </div>
            </div>

            <ul className="grid gap-2 sm:grid-cols-2 text-xs text-gray-600">
              {[
                'Remove and destroy infected leaves.',
                'Apply organic copper-based spray.',
                'Keep canopy dry with drip irrigation.',
                'Follow the 14-day recovery schedule.',
              ].map((action) => (
                <li key={action} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>{action}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center gap-2">
              {uploadedFileName && (
                <button
                  type="button"
                  onClick={resetAnalysis}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-green-800 hover:bg-green-900 rounded-lg px-4 py-2.5 transition cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Take New Analysis Test</span>
                </button>
              )}
              <Link
                href="/cure"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-green-800 hover:bg-green-900 rounded-lg px-4 py-2.5 transition"
              >
                <span>View Full Report</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
