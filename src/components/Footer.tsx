import React from 'react';
import { audio } from '@/src/utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    audio.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800 bg-slate-950/90 text-slate-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        <div className="flex items-center gap-3">
          <span className="text-xl">🪐</span>
          <div>
            <div className="font-bold text-white tracking-tight">Orbit Delivery 3D</div>
            <div className="text-xs text-slate-500 font-mono">
              Designed & Built by{' '}
              <a
                href="https://instagram.com/divyanshu.builds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2"
              >
                @divyanshu.builds
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono">
          <a
            href="https://github.com/divyanshu-builds-ui/3D-orbit-delivery"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub Repository
          </a>
          <a
            href="https://instagram.com/divyanshu.builds"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            Instagram
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <span>Top</span>
            <span>↑</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-600 font-mono">
        © {new Date().getFullYear()} Orbit Delivery 3D • Released under MIT License • Open for showcase & forks
      </div>
    </footer>
  );
};
