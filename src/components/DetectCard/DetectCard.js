import { Search, Leaf } from 'lucide-react';

export default function DetectCard() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative flex flex-col justify-between h-full">
      {/* Step Header */}
      <div className="flex items-center space-x-3 mb-2">
        <span className="w-9 h-9 rounded-full bg-green-100 text-green-800 font-bold flex items-center justify-center text-sm border border-green-200">
          2
        </span>
        <div>
          <h3 className="font-bold text-gray-900 text-base">Detect Diseases</h3>
          <p className="text-xs text-gray-500">
            Our AI model analyzes the image.
          </p>
        </div>
      </div>

      {/* Central Analysis Graphic */}
      <div className="flex flex-col items-center justify-center flex-1 my-6">
        <div className="relative mb-5 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-green-50/70 border border-green-100 flex items-center justify-center">
            <div className="relative w-14 h-14 rounded-full border-4 border-green-700 flex items-center justify-center bg-white shadow-sm">
              <Leaf className="w-7 h-7 text-green-700 fill-green-600" />
              <div className="absolute -bottom-3 -right-3 w-5 h-2 bg-green-700 rounded-full transform rotate-45" />
            </div>
          </div>
        </div>
        <h4 className="font-bold text-gray-900 text-base mb-1">Analyzing...</h4>
        <p className="text-xs text-gray-400 text-center leading-relaxed">
          Detecting possible diseases in the crop leaf.
        </p>
      </div>

      {/* Progress Bar with 75% on the right */}
      <div className="flex items-center space-x-3 pt-2">
        <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-green-600 h-full rounded-full"
            style={{ width: '75%' }}
          />
        </div>
        <span className="text-xs font-bold text-gray-700">75%</span>
      </div>
    </div>
  );
}
