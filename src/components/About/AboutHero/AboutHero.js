import { Leaf, ShieldCheck, Sprout } from 'lucide-react';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative rounded-3xl overflow-hidden mb-10 bg-gradient-to-br from-green-900 via-green-800 to-emerald-950 text-white p-8 md:p-14 shadow-sm">
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-15 pointer-events-none hidden md:block">
        <Image
          src="/hero-field.jpg"
          alt="Field background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center space-x-2 bg-green-800/80 border border-green-600/50 px-3.5 py-1.5 rounded-full text-xs font-semibold text-green-200 mb-4 backdrop-blur-sm">
          <Sprout className="w-4 h-4 text-green-400" />
          <span>About FeildCare</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
          Empowering Farmers with Intelligent Crop Health
        </h1>
        <p className="text-green-100 text-sm sm:text-base leading-relaxed mb-6">
          FeildCare is built to bridge the gap between advanced agricultural AI and everyday farming. We provide rapid, accurate, on-field crop diagnosis so you can prevent crop loss before it begins.
        </p>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-green-700/60 max-w-lg">
          <div>
            <span className="text-2xl font-bold text-white block">95%+</span>
            <span className="text-[11px] text-green-300 font-medium">Model Accuracy</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-white block">&lt; 3s</span>
            <span className="text-[11px] text-green-300 font-medium">Instant Analysis</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-white block">50+</span>
            <span className="text-[11px] text-green-300 font-medium">Disease Classes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
