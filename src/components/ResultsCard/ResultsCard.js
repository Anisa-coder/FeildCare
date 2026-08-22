import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function ResultsCard() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col">
      {/* Step Header */}
      <div className="flex items-center space-x-3 mb-4">
        <span className="w-9 h-9 rounded-full bg-green-100 text-green-800 font-bold flex items-center justify-center text-sm border border-green-200">
          3
        </span>
        <div>
          <h3 className="font-bold text-gray-900 text-base">Results</h3>
          <p className="text-xs text-gray-500">
            Detection result and recommended actions.
          </p>
        </div>
      </div>

      {/* Result Preview Box */}
      <div className="flex items-start space-x-4 mb-4">
        {/* Leaf Image */}
        <div className="w-28 h-24 rounded-xl overflow-hidden flex-shrink-0 border border-gray-200">
          <Image
            src="/diseased-leaf.jpg"
            alt="Diseased crop leaf"
            width={112}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Detection Info */}
        <div>
          <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block mb-0.5">
            Detected Disease
          </span>
          <h4 className="font-bold text-gray-900 text-lg leading-tight">
            Early Blight
          </h4>
          <p className="text-xs text-gray-500 mb-3">(Alternaria solani)</p>

          <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block mb-0.5">
            Confidence Score
          </span>
          <p className="text-3xl font-bold text-green-700 leading-tight">92%</p>
          <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-1.5">
            <div
              className="bg-green-600 h-full rounded-full"
              style={{ width: '92%' }}
            />
          </div>
        </div>
      </div>

      {/* Symptoms */}
      <div className="mb-3">
        <h5 className="text-sm font-bold text-gray-800 mb-1">Symptoms</h5>
        <p className="text-xs text-gray-600 leading-relaxed">
          Dark brown spots with concentric rings on older leaves.
          <br />
          May cause yellowing and leaf drop.
        </p>
      </div>

      {/* Recommended Actions */}
      <div>
        <h5 className="text-sm font-bold text-gray-800 mb-2">
          Recommended Actions
        </h5>
        <ul className="space-y-1.5 text-xs text-gray-600">
          <li className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
            <span>Remove and destroy infected leaves.</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
            <span>Apply fungicide recommended for Early Blight.</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
            <span>Ensure proper field drainage and aeration.</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
            <span>Monitor regularly and detect early.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
