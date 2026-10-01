import React, { useState } from 'react';
import { audio } from '@/src/utils/audio';

export const TechStackBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const cloneCmd = 'git clone https://github.com/divyanshu-builds-ui/3D-orbit-delivery.git';

  const copyClone = () => {
    audio.playPop();
    navigator.clipboard.writeText(cloneCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const stack = [
    { name: 'React 18', role: 'Component UI', color: 'from-cyan-500/20 to-blue-500/20 text-cyan-300' },
    { name: 'Three.js', role: 'WebGL Renderer', color: 'from-emerald-500/20 to-teal-500/20 text-emerald-300' },
    { name: 'React Three Fiber', role: 'Declarative 3D', color: 'from-purple-500/20 to-pink-500/20 text-purple-300' },
    { name: 'TypeScript', role: 'Strict Typing', color: 'from-blue-500/20 to-indigo-500/20 text-blue-300' },
    { name: 'Vite', role: 'Instant HMR Bundler', color: 'from-amber-500/20 to-orange-500/20 text-amber-300' },
    { name: 'Tailwind CSS', role: 'Responsive Styling', color: 'from-sky-500/20 to-cyan-500/20 text-sky-300' },
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-700/60 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10 pb-8 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 mb-3 inline-block">
              Open Source Codebase
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Built for Developers. Free to Explore.
            </h3>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Clean modular structure, DRACO-compressed GLTF assets, rigged skeleton animation hooks, and full production Vercel setup.
            </p>
          </div>

          {/* Copy Git Clone Terminal Box */}
          <div className="w-full lg:w-auto">
            <div className="flex items-center gap-2 p-2 rounded-2xl bg-black/60 border border-slate-800 font-mono text-xs text-slate-300 shadow-inner">
              <span className="text-emerald-400 pl-2">$</span>
              <span className="truncate max-w-xs sm:max-w-sm select-all">
                {cloneCmd}
              </span>
              <button
                onClick={copyClone}
                className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all active:scale-95 flex items-center gap-1"
              >
                {copied ? <span>✓ Copied</span> : <span>Copy</span>}
              </button>
            </div>
          </div>
        </div>

        {/* Stack Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {stack.map((item, i) => (
            <div
              key={i}
              className={`p-3.5 rounded-2xl bg-gradient-to-br ${item.color} border border-white/10 flex flex-col justify-between`}
            >
              <span className="font-bold text-sm tracking-tight text-white mb-1">
                {item.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {item.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
