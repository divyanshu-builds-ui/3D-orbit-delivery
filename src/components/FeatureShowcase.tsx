import React from 'react';
import { audio } from '@/src/utils/audio';

interface Feature {
  title: string;
  tagline: string;
  description: string;
  badge: string;
  span: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Zero-Deceleration Orbital Transfer',
    tagline: 'Momentum is never lost, only redirected.',
    description: 'Couriers never come to a dead stop. Through kinetic sling transfers, parcels transition between orbits seamlessly with sub-millimeter precision.',
    badge: 'Physics Engine',
    span: 'lg:col-span-8',
    icon: '⚡'
  },
  {
    title: 'Atmospheric Aerogel Pods',
    tagline: 'Fragile parcels stay intact.',
    description: 'Suspended in pressurized aerogel chambers to withstand 14G orbital insertions without scratch.',
    badge: 'Zero-G Storage',
    span: 'lg:col-span-4',
    icon: '🛡️'
  },
  {
    title: 'Kinetic Planetary Harness',
    tagline: 'Powered by planetary spin.',
    description: 'Harvester coils convert the rotational spin of celestial bodies directly into courier propulsion.',
    badge: '100% Green',
    span: 'lg:col-span-4',
    icon: '🌍'
  },
  {
    title: 'Interactive Spatial WebGL Experience',
    tagline: 'Built with React Three Fiber & Three.js',
    description: 'A fully interactive 3D web experience running at 60 FPS on both mobile phones and desktop browsers with custom shaders and bone-rigged GLTF animations.',
    badge: 'Frontend Engineering',
    span: 'lg:col-span-8',
    icon: '🚀'
  }
];

export const FeatureShowcase: React.FC = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            System Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
            Next-Gen Planetary Logistics.
          </h2>
        </div>
        <p className="text-slate-400 max-w-md text-sm sm:text-base leading-relaxed">
          Engineered for the next century of planetary trade, delivered with the warm touch of a friendly courier.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {features.map((feat, index) => (
          <div
            key={index}
            onMouseEnter={() => audio.playPop()}
            className={`${feat.span} group relative p-8 rounded-3xl bg-slate-900/60 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-700/40 hover:border-blue-500/60 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </span>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {feat.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs font-mono text-blue-400 mb-4">
                {feat.tagline}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feat.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>ORB-SPEC-V4</span>
              <span className="text-blue-400 group-hover:translate-x-1 transition-transform">Explore Spec →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
