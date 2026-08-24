import { Leaf, ShieldCheck, Mail, MapPin, Phone, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 text-gray-600 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group w-fit">
              <div className="bg-green-50 p-2.5 rounded-full border border-green-200 group-hover:bg-green-100 transition">
                <Leaf className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 tracking-tight leading-tight">
                  FeildCare
                </h2>
                <p className="text-[11px] text-gray-400 font-medium">
                  Smart Crop Health Detection
                </p>
              </div>
            </Link>
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
              FeildCare empowers farmers and agronomists with AI-powered instant crop disease detection, early warnings, and reliable agronomic recommendations to maximize crop yield.
            </p>
            <div className="flex items-center space-x-2 text-xs text-green-800 bg-green-50 px-3 py-1.5 rounded-lg border border-green-200 w-fit">
              <ShieldCheck className="w-4 h-4 text-green-700 shrink-0" />
              <span>Certified Plant Pathology Vision Models</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/history" className="hover:text-green-800 transition">
                  Scan History
                </Link>
              </li>
            </ul>
          </div>

          {/* Supported Crop Diseases */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
              Crop Disease Library
            </h3>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>Early Blight</li>
              <li>Late Blight</li>
              <li>Bacterial Leaf Spot</li>
              <li>Powdery Mildew</li>
              <li>Leaf Rust</li>
              <li>Gray Leaf Spot</li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
              Support
            </h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-gray-400" />
                <a href="mailto:support@feildcare.ag" className="hover:text-green-800 transition">
                  support@feildcare.ag
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>Agricultural AI Labs</span>
              </li>
              <li>
                <Link href="/#contact" className="text-green-700 hover:text-green-900 font-medium transition">
                  Contact Advisory Team →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} FeildCare Inc. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600 transition">Terms of Service</a>
            <a href="#" className="hover:text-gray-600 transition">Agronomic Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
