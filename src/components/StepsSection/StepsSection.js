"use client";

import { useEffect, useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  CloudUpload,
  Leaf,
  LoaderCircle,
  RotateCcw,
  Search,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png']);

const STEPS = [
  { label: 'Upload', icon: CloudUpload },
  { label: 'Analyze', icon: Search },
  { label: 'Results', icon: CheckCircle2 },
];

const PLACEHOLDER_ACTIONS = [
  'Remove and destroy infected leaves.',
  'Apply organic copper-based spray.',
  'Keep canopy dry with drip irrigation.',
  'Follow the 14-day recovery schedule.',
];

function responseIsPrediction(value) {
  return Boolean(
    value &&
      typeof value.crop === 'string' &&
      typeof value.disease === 'string' &&
      typeof value.display_name === 'string' &&
      typeof value.confidence_percent === 'number',
  );
}

export default function StepsSection() {
  const [phase, setPhase] = useState('idle');
  const [uploadPercent, setUploadPercent] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);
  const requestRef = useRef(null);
  const previewUrlRef = useRef('');

  useEffect(() => {
    return () => {
      requestRef.current?.abort();
      if (previewUrlRef.current) {
        URL.revokeObjectURL(previewUrlRef.current);
      }
    };
  }, []);

  const showError = (message) => {
    setErrorMessage(message);
    setResult(null);
    setPhase('error');
  };

  const analyzeFile = (file) => {
    requestRef.current?.abort();
    setErrorMessage('');
    setResult(null);
    setUploadPercent(0);
    setPhase('uploading');

    const formData = new FormData();
    formData.append('file', file);
    const request = new XMLHttpRequest();
    requestRef.current = request;
    request.open('POST', '/api/predict');
    request.timeout = 60_000;

    request.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        setUploadPercent(Math.round((event.loaded / event.total) * 100));
      }
    };
    request.upload.onload = () => setPhase('analyzing');
    request.onload = () => {
      if (requestRef.current !== request) return;
      requestRef.current = null;
      let payload;
      try {
        payload = JSON.parse(request.responseText);
      } catch {
        showError('The detection service returned an invalid response.');
        return;
      }

      if (request.status < 200 || request.status >= 300) {
        showError(payload.error || 'The image could not be analyzed.');
        return;
      }
      if (!responseIsPrediction(payload)) {
        showError('The detection result was incomplete. Please try again.');
        return;
      }

      setResult(payload);
      setUploadPercent(100);
      setPhase('success');
    };
    request.onerror = () => {
      if (requestRef.current !== request) return;
      requestRef.current = null;
      showError('The upload failed. Check your connection and try again.');
    };
    request.ontimeout = () => {
      if (requestRef.current !== request) return;
      requestRef.current = null;
      showError('Disease analysis timed out. Please try again.');
    };
    request.send(formData);
  };

  const selectFile = (file) => {
    if (!file) return;
    if (!ALLOWED_TYPES.has(file.type)) {
      showError('Upload a JPG, JPEG, or PNG image.');
      return;
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      showError('The image must be 5 MB or smaller.');
      return;
    }

    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    const nextPreviewUrl = URL.createObjectURL(file);
    previewUrlRef.current = nextPreviewUrl;
    setPreviewUrl(nextPreviewUrl);
    setSelectedFile(file);
    analyzeFile(file);
  };

  const handleFileUpload = (event) => {
    selectFile(event.target.files?.[0]);
    event.target.value = '';
  };

  const resetAnalysis = () => {
    requestRef.current?.abort();
    requestRef.current = null;
    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    previewUrlRef.current = '';
    setPreviewUrl('');
    setSelectedFile(null);
    setResult(null);
    setErrorMessage('');
    setUploadPercent(0);
    setPhase('idle');
  };

  const activeStep = phase === 'success' ? 2 : phase === 'analyzing' ? 1 : 0;
  const progressPercent =
    phase === 'success'
      ? 100
      : phase === 'analyzing'
        ? 67
        : phase === 'uploading'
          ? Math.max(5, Math.round(uploadPercent * 0.33))
          : 0;
  const isBusy = phase === 'uploading' || phase === 'analyzing';
  const confidence = result ? Math.max(0, Math.min(100, result.confidence_percent)) : 0;
  const isUncertain = result && result.confidence < 0.5;

  return (
    <section className="mb-8 bg-white rounded-3xl border border-gray-200 shadow-sm p-5 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-green-700 font-semibold mb-1">
            Live Detection Flow
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">Crop Disease Detection</h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Upload a leaf image and receive a prediction from the FieldCare model.
          </p>
        </div>
        <span className="self-start sm:self-auto inline-flex items-center rounded-full border border-green-200 bg-green-50 text-green-800 text-xs font-semibold px-3 py-1.5">
          Step {activeStep + 1}/3
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-5">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === activeStep;
          const isDone = index < activeStep;
          return (
            <div
              key={step.label}
              className={`rounded-xl border px-3 py-2.5 transition-colors ${
                isActive
                  ? 'border-green-300 bg-green-50'
                  : isDone
                    ? 'border-emerald-200 bg-emerald-50/60'
                    : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                <Icon className={`w-4 h-4 ${isActive || isDone ? 'text-green-700' : 'text-gray-400'}`} />
                <span>{step.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full h-2 bg-gray-100 rounded-full mt-4 overflow-hidden">
        <div
          className={`h-full bg-green-600 rounded-full transition-all duration-500 ${phase === 'analyzing' ? 'animate-pulse' : ''}`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="mt-5 min-h-85 sm:min-h-80 overflow-hidden rounded-2xl border border-gray-100 bg-linear-to-br from-gray-50 to-white p-5 sm:p-6">
        {(phase === 'idle' || phase === 'uploading') && (
          <div>
            <p className="text-xs font-semibold text-green-700 mb-1">
              {phase === 'uploading' ? 'Uploading Crop Image' : 'Upload Crop Image'}
            </p>
            <p className="text-xs text-gray-500 mb-4">
              Choose a clear image of the affected crop leaf.
            </p>
            <input
              id="crop-upload-input"
              type="file"
              accept="image/jpeg,image/png,.jpg,.jpeg,.png"
              onChange={handleFileUpload}
              ref={fileInputRef}
              className="hidden"
              disabled={isBusy}
            />
            <label
              htmlFor="crop-upload-input"
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault();
                if (!isBusy) selectFile(event.dataTransfer.files?.[0]);
              }}
              className={`block border-2 border-dashed rounded-2xl p-10 text-center bg-white transition ${
                isBusy ? 'border-green-300 cursor-wait' : 'border-gray-300 cursor-pointer hover:border-green-400 hover:bg-green-50/30'
              }`}
            >
              <div className={`mx-auto w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-700 mb-3 ${isBusy ? 'animate-pulse' : ''}`}>
                <CloudUpload className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-gray-800">
                {isBusy ? `Uploading ${selectedFile?.name || 'image'}...` : 'Click or drag a crop image here'}
              </p>
              <p className="text-xs text-gray-500 mt-1">JPG, JPEG, PNG up to 5 MB</p>
              {phase === 'uploading' && (
                <p className="text-xs text-green-700 font-semibold mt-3">{uploadPercent}% uploaded</p>
              )}
            </label>
          </div>
        )}

        {phase === 'analyzing' && (
          <div>
            <p className="text-xs font-semibold text-green-700 mb-1">Analyzing Disease Patterns</p>
            <p className="text-xs text-gray-500 mb-6">The model is examining the uploaded image.</p>
            <div className="h-60 flex flex-col items-center justify-center">
              <div className="relative w-28 h-28 rounded-full bg-green-100/80 border border-green-200 flex items-center justify-center mb-5">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-green-700 flex items-center justify-center shadow-sm">
                  <Leaf className="w-8 h-8 text-green-700 fill-green-600" />
                </div>
                <LoaderCircle className="absolute inset-0 m-auto w-24 h-24 text-green-600 animate-spin" strokeWidth={1} />
              </div>
              <p className="text-base font-bold text-gray-900">Analyzing Disease Signatures</p>
              <p className="text-xs text-gray-500 mt-1 text-center max-w-sm">
                Comparing the leaf with 25 trained crop health classes.
              </p>
            </div>
          </div>
        )}

        {phase === 'error' && (
          <div className="h-70 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-4">
              <AlertCircle className="w-7 h-7 text-red-600" />
            </div>
            <h4 className="text-base font-bold text-gray-900">Analysis could not be completed</h4>
            <p className="text-xs text-gray-600 mt-2 max-w-md">{errorMessage}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-5">
              {selectedFile && (
                <button type="button" onClick={() => analyzeFile(selectedFile)} className="text-xs font-semibold text-white bg-green-800 hover:bg-green-900 rounded-lg px-4 py-2.5 cursor-pointer">
                  Try Again
                </button>
              )}
              <button type="button" onClick={() => fileInputRef.current?.click()} className="text-xs font-semibold text-green-800 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg px-4 py-2.5 cursor-pointer">
                Choose Another Image
              </button>
              <input type="file" accept="image/jpeg,image/png,.jpg,.jpeg,.png" onChange={handleFileUpload} ref={fileInputRef} className="hidden" />
            </div>
          </div>
        )}

        {phase === 'success' && result && (
          <div>
            <p className="text-xs font-semibold text-green-700 mb-1">Diagnosis Ready</p>
            <p className="text-xs text-gray-500 mb-4">The model completed the crop image analysis.</p>
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-24 h-20 rounded-xl overflow-hidden border border-gray-200 shrink-0 bg-gray-50">
                  {previewUrl && <Image src={previewUrl} alt="Uploaded crop leaf" fill unoptimized className="object-cover" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">Detected Result</p>
                  <h4 className="text-lg font-bold text-gray-900 leading-tight">{result.display_name}</h4>
                  <p className="text-xs text-gray-500 mb-2">{result.crop} crop</p>
                  <p className="text-sm font-semibold text-green-700">Confidence: {confidence.toFixed(1)}%</p>
                  <div className="w-full max-w-48 bg-gray-100 h-1.5 rounded-full overflow-hidden mt-1.5">
                    <div className="bg-green-600 h-full rounded-full" style={{ width: `${confidence}%` }} />
                  </div>
                </div>
              </div>

              {isUncertain && (
                <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 mb-4 text-xs text-amber-900">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>This result has low confidence. Try a clearer, well-lit leaf image before relying on it.</span>
                </div>
              )}

              <div className="border-t border-gray-100 pt-3">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h5 className="text-sm font-bold text-gray-800">Suggested Actions</h5>
                  <span className="text-[10px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                    Placeholder — not connected yet
                  </span>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2 text-xs text-gray-600">
                  {PLACEHOLDER_ACTIONS.map((action) => (
                    <li key={action} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap items-center gap-2">
                <button type="button" onClick={resetAnalysis} className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-green-800 hover:bg-green-900 rounded-lg px-4 py-2.5 cursor-pointer">
                  <RotateCcw className="w-4 h-4" />
                  <span>Take New Analysis Test</span>
                </button>
                <Link href="/cure" className="inline-flex items-center gap-2 text-xs font-semibold text-green-800 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg px-4 py-2.5">
                  <span>View Full Report</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
