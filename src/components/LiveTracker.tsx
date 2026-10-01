import React, { useState, useEffect } from 'react';
import { audio } from '@/src/utils/audio';

interface Station {
  id: string;
  name: string;
  code: string;
  region: string;
  eta: string;
  altitude: string;
}

const stations: Station[] = [
  { id: '1', name: 'Neo-Tokyo Spire', code: 'TYO-88', region: 'Sector 04', eta: '12m 44s', altitude: '320 km' },
  { id: '2', name: 'Lunar Base Alpha', code: 'LUN-01', region: 'Mare Tranquillitatis', eta: '41m 18s', altitude: '384,400 km' },
  { id: '3', name: 'Sky-Haven Floating Port', code: 'SHP-99', region: 'Upper Troposphere', eta: '4m 02s', altitude: '45 km' },
  { id: '4', name: 'San Francisco Grid', code: 'SFO-12', region: 'Pacific Hub', eta: '8m 55s', altitude: '180 km' },
];

export const LiveTracker: React.FC = () => {
  const [activeStation, setActiveStation] = useState<Station>(stations[0]);
  const [progress, setProgress] = useState(68);
  const [isDelivered, setIsDelivered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 98 ? 15 : prev + 1));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (station: Station) => {
    audio.playPop();
    setActiveStation(station);
    setIsDelivered(false);
    setProgress(Math.floor(Math.random() * 50) + 20);
  };

  const handleDropSimulation = () => {
    audio.playChime();
    setIsDelivered(true);
    setProgress(100);
    setTimeout(() => {
      setIsDelivered(false);
    }, 4000);
  };

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          LIVE ORBITAL TELEMETRY
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Track Any Parcel in Orbit.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Autonomous couriers maintain continuous momentum. Select a rendezvous point below to simulate planetary trajectory.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Destination Selector Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 px-2 font-medium">
            Active Rendezvous Nodes
          </span>
          {stations.map((st) => (
            <button
              key={st.id}
              onClick={() => handleSelect(st)}
              className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all ${
                activeStation.id === st.id
                  ? 'bg-blue-600/20 border-blue-500/70 text-white shadow-lg shadow-blue-500/10'
                  : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:bg-slate-900/70 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="font-semibold text-sm flex items-center gap-2">
                  <span>{st.name}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                    {st.code}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1">{st.region}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono font-bold text-blue-400">ETA {st.eta}</div>
                <div className="text-[10px] text-slate-500">{st.altitude}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Live Radar & Progress Card */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-xl">
                  📦
                </span>
                <div>
                  <div className="text-xs font-mono text-slate-400">MANIFEST #ORB-9942-X</div>
                  <div className="text-lg font-bold text-white flex items-center gap-2">
                    Priority Kinetic Cargo
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      ON TRACK
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDropSimulation}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 active:scale-95 transition-all flex items-center gap-1.5"
              >
                <span>🎯</span>
                <span>Simulate Drone Drop</span>
              </button>
            </div>

            {/* Trajectory Progress Bar */}
            <div className="my-8">
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-slate-400">Sub-Orbital Injection</span>
                <span className="text-blue-400 font-bold">{progress}% Trajectory Completed</span>
                <span className="text-slate-400">{activeStation.name}</span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full transition-all duration-700 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Real-time Telemetry Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-black/30 border border-slate-800/80 font-mono">
              <div>
                <span className="text-[10px] text-slate-500 block">CURRENT SPEED</span>
                <span className="text-sm font-bold text-slate-200">7.82 km/s</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">ALTITUDE</span>
                <span className="text-sm font-bold text-slate-200">{activeStation.altitude}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">EST. ARRIVAL</span>
                <span className="text-sm font-bold text-emerald-400">{activeStation.eta}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 block">COURIER STATUS</span>
                <span className="text-sm font-bold text-blue-400">Steady Sprint</span>
              </div>
            </div>
          </div>

          {/* Delivered Confirmation Toast in Card */}
          {isDelivered && (
            <div className="mt-4 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs font-semibold flex items-center justify-between animate-fade-in">
              <span className="flex items-center gap-2">
                <span className="text-base">🎉</span>
                <span>Package successfully touched down at {activeStation.name}! Signature verified.</span>
              </span>
              <span className="text-[10px] font-mono uppercase bg-emerald-500/30 px-2 py-0.5 rounded">Delivered</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
