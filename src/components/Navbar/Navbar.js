import { Leaf, History, Menu, X } from 'lucide-react';
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
              Smart Crop Health Detection
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <Link href="/" className="text-gray-900 font-semibold hover:text-green-800 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-800 transition">
            About
          </Link>
          <a href="/#how-it-works" className="hover:text-green-800 transition">
            How It Works
          </a>
        </nav>

        {/* Right Actions & Mobile Menu Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* History Button */}
          <Link
            href="/history"
            className="bg-green-800 hover:bg-green-900 text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium flex items-center space-x-1.5 sm:space-x-2 shadow-sm transition cursor-pointer"
          >
            <History className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>History</span>
          </Link>

          {/* Mobile Menu Dropdown (Pure CSS / Native HTML Disclosure - No Client Component required) */}
          <details className="md:hidden group relative list-none">
            <summary className="list-none cursor-pointer p-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-center [&::-webkit-details-marker]:hidden">
              <Menu className="w-5 h-5 group-open:hidden" />
              <X className="w-5 h-5 hidden group-open:block" />
            </summary>

            <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl border border-gray-200 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="px-4 py-2 border-b border-gray-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Navigation Menu
                </span>
              </div>
              <Link
                href="/"
                className="block px-4 py-2.5 text-xs font-semibold text-gray-800 hover:bg-green-50 hover:text-green-800 transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2.5 text-xs font-semibold text-gray-800 hover:bg-green-50 hover:text-green-800 transition"
              >
                About FeildCare
              </Link>
              <a
                href="/#how-it-works"
                className="block px-4 py-2.5 text-xs font-medium text-gray-600 hover:bg-green-50 hover:text-green-800 transition"
              >
                How It Works
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
