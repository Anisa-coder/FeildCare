import { Leaf, History } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2.5 sm:space-x-3 group">
          <div className="bg-green-50 p-2 sm:p-2.5 rounded-full border border-green-200 group-hover:bg-green-100 transition">
            <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-green-700" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight leading-tight">
              FeildCare
            </h1>
            <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium">
              Smart Crop Health
            </p>
          </div>
        </Link>

        {/* Right Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* History Button */}
          <Link
            href="/history"
            className="bg-green-800 hover:bg-green-900 text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium flex items-center space-x-1.5 sm:space-x-2 shadow-sm transition cursor-pointer"
          >
            <History className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>History</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
