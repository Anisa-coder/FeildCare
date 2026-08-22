import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative rounded-3xl overflow-hidden mb-8 min-h-[220px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-field.jpg"
          alt="Green crop field background"
          fill
          className="object-cover object-right"
          priority
        />
        {/* Soft gradient blend from light background on left to image on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#eef7f0] via-[#eef7f0]/80 via-40% to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 sm:p-10 md:p-12 max-w-xl">
        <div className="inline-flex items-center space-x-2 bg-green-100/90 text-green-900 border border-green-300/80 px-3 py-1 rounded-full text-xs font-bold mb-3 backdrop-blur-xs">
          <span>🍅 Tomato & 🌽 Corn AI Pathology</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 tracking-tight mb-3 leading-tight">
          Early Tomato & Corn Detection
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Upload a tomato or corn leaf image to detect blights, rusts, and leaf spots early and get instant verified cures.
        </p>
      </div>
    </section>
  );
}
