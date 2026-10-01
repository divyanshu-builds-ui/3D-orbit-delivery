import React, { useState } from 'react';
import Demo from '@/components/ui/demo';
import { InteractiveHud, AppTheme } from '@/src/components/InteractiveHud';
import { CreatorBadge } from '@/src/components/CreatorBadge';
import { PlanetaryStats } from '@/src/components/PlanetaryStats';
import { LiveTracker } from '@/src/components/LiveTracker';
import { FeatureShowcase } from '@/src/components/FeatureShowcase';
import { TechStackBanner } from '@/src/components/TechStackBanner';
import { Footer } from '@/src/components/Footer';

export default function App() {
  const [theme, setTheme] = useState<AppTheme>('dark');

  const handleSpeedBoost = (boost: boolean) => {
    const event = new KeyboardEvent('keydown', {
      key: 'ArrowRight',
      code: 'ArrowRight',
      bubbles: true,
    });
    window.dispatchEvent(event);
  };

  const handleTriggerGreeting = () => {
    window.dispatchEvent(new CustomEvent('orbit:trigger-greeting'));
  };

  const bgClasses = {
    dark: 'bg-[#090e1a] text-slate-100',
    cyber: 'bg-[#06030e] text-slate-100',
    light: 'bg-[#f4f7fc] text-slate-900',
    auto: 'bg-[#090e1a] text-slate-100',
  }[theme];

  return (
    <div className={`min-h-screen w-full transition-colors duration-500 overflow-x-hidden ${bgClasses}`}>
      {/* Floating Controls HUD (Sound, Theme, Speed, Wave) */}
      <InteractiveHud
        currentTheme={theme}
        onThemeChange={setTheme}
        onSpeedBoost={handleSpeedBoost}
        onTriggerGreeting={handleTriggerGreeting}
      />

      {/* Floating Creator Badge */}
      <CreatorBadge
        instagramHandle="divyanshu.builds"
        githubUrl="https://github.com/divyanshu-builds-ui/3D-orbit-delivery"
      />

      {/* 3D Hero Section */}
      <div className="relative">
        <Demo theme={theme === 'cyber' ? 'cyber' : theme} />
      </div>

      {/* Ambient lighting & content sections below hero */}
      <div className="relative overflow-hidden">
        {theme === 'cyber' ? (
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[140px]" />
            <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[140px]" />
          </div>
        ) : theme === 'dark' ? (
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[160px]" />
            <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-indigo-700 rounded-full blur-[160px]" />
          </div>
        ) : null}

        {/* Live Planetary Telemetry Stats */}
        <PlanetaryStats />

        {/* Interactive Live Orbital Delivery Tracker */}
        <LiveTracker />

        {/* Feature Bento Grid */}
        <FeatureShowcase />

        {/* Developer Tech Stack Banner with 1-click clone */}
        <TechStackBanner />

        {/* Polished Footer */}
        <Footer />
      </div>
    </div>
  );
}
