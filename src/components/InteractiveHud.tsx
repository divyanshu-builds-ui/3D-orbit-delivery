import React, { useState } from 'react';
import { audio } from '@/src/utils/audio';

export type AppTheme = 'auto' | 'light' | 'dark' | 'cyber';

interface InteractiveHudProps {
  currentTheme: AppTheme;
  onThemeChange: (theme: AppTheme) => void;
  onSpeedBoost: (boost: boolean) => void;
  onTriggerGreeting: () => void;
}

export const InteractiveHud: React.FC<InteractiveHudProps> = ({
  currentTheme,
  onThemeChange,
  onSpeedBoost,
  onTriggerGreeting,
}) => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [speedActive, setSpeedActive] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleSound = () => {
    const isNowActive = audio.toggleMute();
    setSoundEnabled(isNowActive);
  };

  const handleTheme = (theme: AppTheme) => {
    audio.playPop();
    onThemeChange(theme);
  };

  const handleSpeed = () => {
    audio.playPop();
    const next = !speedActive;
    setSpeedActive(next);
    onSpeedBoost(next);
    if (next) audio.playWhoosh(2.5);
  };

  const handleGreeting = () => {
    audio.playChime();
    onTriggerGreeting();
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2 font-sans select-none">
      {/* Main HUD Pill */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 text-white backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all">
        {/* Toggle Collapse Button for mobile */}
        <button
          onClick={() => {
            audio.playPop();
            setCollapsed(!collapsed);
          }}
          className="sm:hidden flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 text-xs"
          title="Toggle HUD"
        >
          {collapsed ? '⚙️' : '✕'}
        </button>

        {!collapsed && (
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                soundEnabled
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
              title={soundEnabled ? 'Mute 3D audio' : 'Enable 3D sound effects'}
            >
              <span>{soundEnabled ? '🔊' : '🔇'}</span>
              <span className="hidden md:inline">{soundEnabled ? 'Audio ON' : 'Audio OFF'}</span>
            </button>

            {/* Atmosphere / Theme Switcher */}
            <div className="flex items-center bg-black/30 p-0.5 rounded-xl border border-white/10">
              <button
                onClick={() => handleTheme('light')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  currentTheme === 'light' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
                title="Daylight Mode"
              >
                ☀️
              </button>
              <button
                onClick={() => handleTheme('dark')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  currentTheme === 'dark' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
                title="Deep Orbit Dark"
              >
                🌙
              </button>
              <button
                onClick={() => handleTheme('cyber')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  currentTheme === 'cyber' ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
                title="Cyber Neon Mode"
              >
                ⚡
              </button>
            </div>

            {/* Warp Speed Boost */}
            <button
              onClick={handleSpeed}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                speedActive
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/40 animate-pulse'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
              title="Toggle Warp Speed"
            >
              <span>🚀</span>
              <span className="hidden md:inline">{speedActive ? 'Warp 2.5x' : 'Speed 1x'}</span>
            </button>

            {/* Greet Courier Button */}
            <button
              onClick={handleGreeting}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white shadow-md active:scale-95 transition-all"
              title="Pause and greet the courier"
            >
              <span>👋</span>
              <span className="hidden sm:inline">Wave</span>
            </button>
          </div>
        )}
      </div>

      {/* Mini Helper Callout for Reel Visitors */}
      {!collapsed && (
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-[10px] text-slate-400">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Interactive 3D • Drag to spin planet</span>
        </div>
      )}
    </div>
  );
};
