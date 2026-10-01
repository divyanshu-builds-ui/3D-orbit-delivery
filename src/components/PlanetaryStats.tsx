import React from 'react';

interface StatItem {
  label: string;
  value: string;
  change: string;
  icon: string;
  detail: string;
}

const stats: StatItem[] = [
  {
    icon: '🪐',
    value: '18,420+',
    label: 'Orbits Completed',
    change: '+14% this month',
    detail: 'Autonomous deliveries routed across low-Earth trajectory.'
  },
  {
    icon: '⚡',
    value: '0.02s',
    label: 'Reaction Latency',
    change: 'Zero deceleration',
    detail: 'Continuous planetary velocity with non-stop courier handoff.'
  },
  {
    icon: '🌿',
    value: '100%',
    label: 'Kinetic & Solar Power',
    change: 'Zero emissions',
    detail: 'Powered completely by planet rotational momentum and solar winds.'
  },
  {
    icon: '⭐',
    value: '4.99 / 5',
    label: 'Recipient Rating',
    change: 'Across 48 colonies',
    detail: 'Trusted for fragile parcels, peace of mind, and smiling couriers.'
  }
];

export const PlanetaryStats: React.FC = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 -mt-10 sm:-mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="group relative p-6 rounded-3xl bg-slate-900/60 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-700/40 hover:border-blue-500/50 shadow-[0_15px_35px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1.5"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl p-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                {stat.icon}
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                {stat.change}
              </span>
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1 font-mono">
              {stat.value}
            </div>

            <div className="text-sm font-semibold text-slate-200 mb-2">
              {stat.label}
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {stat.detail}
            </p>

            {/* Glowing Accent line */}
            <div className="absolute inset-x-6 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/0 group-hover:via-blue-500/70 to-transparent transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};
