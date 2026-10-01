import React, { useState } from 'react';
import { audio } from '@/src/utils/audio';

interface CreatorBadgeProps {
  instagramHandle?: string;
  githubUrl?: string;
}

export const CreatorBadge: React.FC<CreatorBadgeProps> = ({
  instagramHandle = "divyanshu.builds",
  githubUrl = "https://github.com/divyanshu-builds-ui/3D-orbit-delivery",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    audio.playPop();
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <aside 
      aria-label="Creator badge and links"
      className="fixed bottom-4 left-4 z-50 flex flex-wrap items-center gap-2 p-1.5 pr-3 rounded-full bg-slate-900/85 text-slate-100 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-blue-400/40 hover:scale-[1.02]"
    >
      {/* Creator Avatar & Name */}
      <a
        href={`https://instagram.com/${instagramHandle}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => audio.playPop()}
        className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full hover:bg-white/10 transition-colors group"
      >
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-[1.5px] shadow-sm">
          <span className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-[11px] font-bold text-white group-hover:bg-transparent transition-colors">
            DB
          </span>
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
        </span>
        <div className="flex flex-col text-left leading-none">
          <span className="text-[11px] font-semibold tracking-wide text-white group-hover:text-blue-300 transition-colors">
            Built by Divyanshu
          </span>
          <span className="text-[9px] text-slate-400 font-mono">
            @{instagramHandle}
          </span>
        </div>
      </a>

      <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />

      {/* Instagram Button */}
      <a
        href={`https://instagram.com/${instagramHandle}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => audio.playPop()}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/35 hover:to-purple-500/35 border border-pink-500/30 text-pink-200 transition-all active:scale-95"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        <span>Instagram</span>
      </a>

      {/* GitHub Star Button */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => audio.playPop()}
        className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/5 hover:bg-white/15 border border-white/10 text-slate-200 transition-all active:scale-95"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
        <span>⭐ Star</span>
      </a>

      {/* Quick Share / Copy Link */}
      <button
        onClick={handleCopyLink}
        title="Copy link to clipboard"
        className="flex items-center justify-center h-7 w-7 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 transition-all active:scale-90"
      >
        {copied ? (
          <span className="text-[10px] text-emerald-400 font-bold">✓</span>
        ) : (
          <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        )}
      </button>

      {/* Copied Toast */}
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-emerald-500 text-slate-950 text-[10px] font-bold shadow-lg animate-bounce">
          Link Copied!
        </span>
      )}
    </aside>
  );
};
