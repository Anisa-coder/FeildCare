import { CloudUpload } from 'lucide-react';
import Image from 'next/image';

export default function UploadCard() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative flex flex-col">
      {/* Step Header */}
      <div className="flex items-center space-x-3 mb-1">
        <span className="w-9 h-9 rounded-full bg-green-100 text-green-800 font-bold flex items-center justify-center text-sm border border-green-200">
          1
        </span>
        <div>
          <h3 className="font-bold text-gray-900 text-base">Upload Crop Image</h3>
          <p className="text-xs text-gray-500">
            Upload an image of the affected crop leaf.
          </p>
        </div>
      </div>

      {/* Drag & Drop Zone */}
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-white my-4 cursor-pointer">
        <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mb-3">
          <CloudUpload className="w-6 h-6" />
        </div>
        <p className="text-sm font-medium text-gray-700 mb-1">
          Drag & drop an image here
        </p>
        <p className="text-xs text-gray-400 mb-3">or</p>
        <button className="bg-green-700 hover:bg-green-800 text-white text-sm px-5 py-2 rounded-lg font-medium transition shadow-sm cursor-pointer">
          Choose File
        </button>
      </div>
      <p className="text-[11px] text-gray-400 text-center mb-4">
        Accepted formats: JPG, PNG, JPEG (Max 5MB)
      </p>

      {/* Sample Images Row */}
      <div className="border border-gray-200 rounded-xl p-3">
        <p className="text-xs font-semibold text-gray-700 mb-2">Sample Images</p>
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden border border-gray-200 cursor-pointer hover:opacity-80 transition"
            >
              <Image
                src={`/sample-leaf-${i}.jpg`}
                alt={`Sample leaf ${i}`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
