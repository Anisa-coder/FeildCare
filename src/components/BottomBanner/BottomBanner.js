import { Lightbulb, ShieldCheck, Sprout } from 'lucide-react';

export default function BottomBanner() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Tip Panel */}
      <div className="flex items-start space-x-3 flex-1">
        <div className="p-2.5 bg-green-100 rounded-full text-green-700 flex-shrink-0">
          <Lightbulb className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-green-900 text-sm mb-0.5">Tip</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Early detection helps in better management and
            <br />
            higher crop yield.
          </p>
        </div>
      </div>

      {/* Center Plant Growth Illustration */}
      <div className="hidden md:flex items-end justify-center px-4 flex-shrink-0">
        <svg
          viewBox="0 0 200 60"
          className="w-48 h-12 text-green-700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ground / Soil baseline */}
          <line x1="10" y1="52" x2="190" y2="52" stroke="#854d0e" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Stage 1: Seedling sprout */}
          <g>
            <path d="M25 52 L25 45" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="23" cy="44" r="2" fill="#15803d" />
            <circle cx="27" cy="44" r="2" fill="#15803d" />
            <ellipse cx="25" cy="52" rx="4" ry="1.5" fill="#854d0e" opacity="0.6" />
          </g>

          {/* Stage 2: Small two leaves */}
          <g>
            <path d="M60 52 L60 40" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M60 42 C56 40 54 38 54 35 C58 35 60 38 60 40 Z" fill="#15803d" />
            <path d="M60 42 C64 40 66 38 66 35 C62 35 60 38 60 40 Z" fill="#15803d" />
            <ellipse cx="60" cy="52" rx="5" ry="1.8" fill="#854d0e" opacity="0.6" />
          </g>

          {/* Stage 3: Growing stem with 2 leaves */}
          <g>
            <path d="M100 52 L100 32" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
            <path d="M100 36 C94 33 91 30 92 26 C97 26 100 31 100 34 Z" fill="#15803d" />
            <path d="M100 36 C106 33 109 30 108 26 C103 26 100 31 100 34 Z" fill="#15803d" />
            <ellipse cx="100" cy="52" rx="6" ry="2" fill="#854d0e" opacity="0.6" />
          </g>

          {/* Stage 4: Bushy plant with 4 leaves */}
          <g>
            <path d="M140 52 L140 22" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
            <path d="M140 40 C132 38 128 34 130 29 C136 29 140 35 140 38 Z" fill="#15803d" />
            <path d="M140 40 C148 38 152 34 150 29 C144 29 140 35 140 38 Z" fill="#15803d" />
            <path d="M140 28 C134 25 131 20 133 16 C138 16 140 22 140 25 Z" fill="#15803d" />
            <path d="M140 28 C146 25 149 20 147 16 C142 16 140 22 140 25 Z" fill="#15803d" />
            <ellipse cx="140" cy="52" rx="7" ry="2.2" fill="#854d0e" opacity="0.6" />
          </g>

          {/* Stage 5: Full mature plant with 6 leaves */}
          <g>
            <path d="M175 52 L175 16" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
            <path d="M175 42 C166 40 162 35 164 30 C170 30 175 37 175 40 Z" fill="#15803d" />
            <path d="M175 42 C184 40 188 35 186 30 C180 30 175 37 175 40 Z" fill="#15803d" />
            <path d="M175 30 C168 27 165 21 167 17 C173 17 175 24 175 27 Z" fill="#15803d" />
            <path d="M175 30 C182 27 185 21 183 17 C177 17 175 24 175 27 Z" fill="#15803d" />
            <path d="M175 19 C170 15 171 10 174 8 C177 9 176 14 175 18 Z" fill="#15803d" />
            <path d="M175 19 C180 15 179 10 176 8 C173 9 174 14 175 18 Z" fill="#15803d" />
            <ellipse cx="175" cy="52" rx="8" ry="2.5" fill="#854d0e" opacity="0.6" />
          </g>
        </svg>
      </div>

      {/* Protect Your Crop Panel */}
      <div className="flex items-start space-x-3 flex-1 justify-end">
        <div className="p-2.5 bg-green-100 rounded-full text-green-700 flex-shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-green-900 text-sm mb-0.5">
            Protect Your Crop, Increase Your Yield
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Use early detection to save your crops
            <br />
            and improve productivity.
          </p>
        </div>
      </div>
    </div>
  );
}
