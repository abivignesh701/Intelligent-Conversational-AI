import React, { useState } from 'react';
import { CriticalIncident, DistrictInfo } from '../types';

interface CommandCenterViewProps {
  onOpenCase?: (caseId: string) => void;
}

export const CommandCenterView: React.FC<CommandCenterViewProps> = ({ onOpenCase }) => {
  const [incidents] = useState<CriticalIncident[]>([
    {
      id: 'INC-8892',
      title: 'Armed Robbery, Majestic',
      location: 'Majestic Bus Stand, Sector 1',
      timeAgo: '2 mins ago',
      unitStatus: 'Unit 4 En Route',
      severity: 'HIGH',
    },
    {
      id: 'INC-8891',
      title: 'Suspicious Package, MG Rd',
      location: 'MG Road Metro Station',
      timeAgo: '14 mins ago',
      unitStatus: 'Investigating',
      severity: 'MED',
    },
    {
      id: 'INC-8890',
      title: 'Vehicle Theft, Indiranagar',
      location: '100ft Road, Indiranagar',
      timeAgo: '45 mins ago',
      unitStatus: 'Alert Issued',
      severity: 'MED',
    },
    {
      id: 'INC-8889',
      title: 'Cyber Heist Attempt, Electronic City',
      location: 'Phase 1 Tech Corridor',
      timeAgo: '1h 10m ago',
      unitStatus: 'Unit 9 Deployed',
      severity: 'HIGH',
    },
  ]);

  const [districts] = useState<DistrictInfo[]>([
    {
      id: 'KA-01',
      name: 'Bengaluru Urban',
      code: 'BLR-01',
      zone: 'Z-Alpha',
      totalCrime: 1204,
      threatLevel: 'HIGH',
      pendingFIR: 342,
      solved30d: 89,
      coords: { x: 210, y: 400 },
    },
    {
      id: 'KA-02',
      name: 'Mysuru Division',
      code: 'MYS-02',
      zone: 'Z-Beta',
      totalCrime: 612,
      threatLevel: 'MED',
      pendingFIR: 118,
      solved30d: 92,
      coords: { x: 260, y: 340 },
    },
    {
      id: 'KA-03',
      name: 'Hubballi-Dharwad',
      code: 'HUB-03',
      zone: 'Z-Gamma',
      totalCrime: 489,
      threatLevel: 'MED',
      pendingFIR: 95,
      solved30d: 84,
      coords: { x: 310, y: 280 },
    },
    {
      id: 'KA-04',
      name: 'Mangaluru Coastal',
      code: 'MNG-04',
      zone: 'Z-Delta',
      totalCrime: 320,
      threatLevel: 'LOW',
      pendingFIR: 42,
      solved30d: 95,
      coords: { x: 140, y: 460 },
    },
  ]);

  const [selectedDistrict, setSelectedDistrict] = useState<DistrictInfo | null>(districts[0]);
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);
  const [deployNotification, setDeployNotification] = useState<string | null>(null);

  const handleDeployResources = (districtName: string) => {
    setDeployNotification(`Tactical units deployed to ${districtName} jurisdiction!`);
    setTimeout(() => setDeployNotification(null), 4000);
  };

  return (
    <div className="w-full h-[calc(100vh-64px)] overflow-y-auto p-4 md:p-6 mt-16 max-w-[1600px] mx-auto">
      {/* Toast Alert for Deployment */}
      {deployNotification && (
        <div className="fixed top-20 right-6 z-50 bg-secondary/90 text-on-secondary px-5 py-3 rounded-lg shadow-xl font-data-mono text-xs flex items-center gap-3 backdrop-blur-md animate-bounce">
          <span className="material-symbols-outlined text-lg">local_shipping</span>
          <span>{deployNotification}</span>
        </div>
      )}

      <div className="grid grid-cols-12 gap-4 lg:gap-6 h-full min-h-[700px]">
        {/* Left Column: KPIs & Priority Incidents */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 h-full">
          {/* KPI 1: Heat Index */}
          <div className="glass-panel rounded-xl p-4 neon-glow transition-all group">
            <div className="flex justify-between items-start mb-2">
              <span className="font-label-caps text-xs text-outline uppercase tracking-wider font-semibold">
                State Heat Index
              </span>
              <span className="material-symbols-outlined text-error text-xl group-hover:animate-pulse">
                local_fire_department
              </span>
            </div>
            <div className="font-display-lg text-4xl font-bold text-on-surface tracking-tighter">
              78.4<span className="text-error text-xl font-body-md">%</span>
            </div>
            <div className="font-data-mono text-xs text-on-surface-variant mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-error text-sm">trending_up</span>
              <span>+2.1% (24h)</span>
            </div>
          </div>

          {/* KPI 2: Active Operations */}
          <div className="glass-panel rounded-xl p-4 neon-glow transition-all group">
            <div className="flex justify-between items-start mb-2">
              <span className="font-label-caps text-xs text-outline uppercase tracking-wider font-semibold">
                Active Operations
              </span>
              <span className="material-symbols-outlined text-secondary text-xl">radar</span>
            </div>
            <div className="font-display-lg text-4xl font-bold text-on-surface tracking-tighter">
              142
            </div>
            <div className="font-data-mono text-xs text-on-surface-variant mt-1 flex items-center gap-1.5">
              <div className="w-2 h-2 bg-secondary rounded-full pulse-dot" />
              <span>12 Units Deployed</span>
            </div>
          </div>

          {/* Critical Incidents List */}
          <div className="glass-panel rounded-xl p-4 flex-1 flex flex-col overflow-hidden">
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/10">
              <h3 className="font-label-caps text-xs font-bold text-on-surface uppercase tracking-widest">
                Critical Incidents
              </h3>
              <span className="material-symbols-outlined text-error text-sm">warning</span>
            </div>
            <div className="overflow-y-auto flex-1 pr-1 space-y-2.5">
              {incidents.map((inc) => (
                <div
                  key={inc.id}
                  onClick={() => onOpenCase?.(inc.id)}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    inc.severity === 'HIGH'
                      ? 'bg-error-container/20 border-error/30 hover:bg-error-container/30'
                      : 'bg-surface-container/50 border-outline/20 hover:bg-surface-container'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span
                      className={`font-data-mono text-xs font-semibold ${
                        inc.severity === 'HIGH' ? 'text-error' : 'text-primary'
                      }`}
                    >
                      {inc.id}
                    </span>
                    <span
                      className={`text-[10px] font-label-caps px-1.5 py-0.5 rounded font-bold ${
                        inc.severity === 'HIGH'
                          ? 'text-on-error-container bg-error/20'
                          : 'text-secondary bg-secondary/10'
                      }`}
                    >
                      {inc.severity}
                    </span>
                  </div>
                  <p className="font-body-md text-sm text-on-surface font-medium truncate">
                    {inc.title}
                  </p>
                  <p className="font-data-mono text-outline-variant text-[10px] mt-1">
                    {inc.timeAgo} - {inc.unitStatus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Column: Interactive Theater Map */}
        <div className="col-span-12 lg:col-span-6 flex flex-col h-[520px] lg:h-full relative">
          <div className="glass-panel rounded-xl flex-1 flex flex-col relative overflow-hidden">
            {/* Map Header Overlay */}
            <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-10 pointer-events-none">
              <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 pointer-events-auto flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                <span className="font-label-caps text-xs text-on-surface tracking-widest font-semibold">
                  KARNATAKA THEATER
                </span>
              </div>
              <div className="flex gap-2 pointer-events-auto">
                <button
                  onClick={() => alert('Map zoomed in')}
                  className="w-8 h-8 rounded bg-black/60 border border-white/10 flex items-center justify-center text-on-surface hover:text-secondary transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">zoom_in</span>
                </button>
                <button
                  onClick={() => alert('Map zoomed out')}
                  className="w-8 h-8 rounded bg-black/60 border border-white/10 flex items-center justify-center text-on-surface hover:text-secondary transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">zoom_out</span>
                </button>
              </div>
            </div>

            {/* SVG Theater Map Canvas */}
            <div className="flex-1 w-full h-full bg-[#0c0e12]/40 flex items-center justify-center p-6 cursor-crosshair relative">
              <svg
                className="w-full h-full max-h-[500px] drop-shadow-[0_0_15px_rgba(76,215,246,0.2)]"
                viewBox="0 0 500 600"
              >
                {/* Simplified abstract district polygon representations */}
                {/* District 1: Bengaluru Urban */}
                <path
                  className="fill-[rgba(255,84,81,0.6)] stroke-white/30 hover:fill-[rgba(255,84,81,0.85)] cursor-pointer transition-all"
                  d="M150,400 L200,350 L250,380 L220,450 Z"
                  onClick={() => {
                    setSelectedDistrict(districts[0]);
                    setIsPanelOpen(true);
                  }}
                />
                {/* District 2: Mysuru */}
                <path
                  className="fill-[rgba(255,179,173,0.4)] stroke-white/30 hover:fill-[rgba(255,179,173,0.7)] cursor-pointer transition-all"
                  d="M200,350 L280,300 L300,360 L250,380 Z"
                  onClick={() => {
                    setSelectedDistrict(districts[1]);
                    setIsPanelOpen(true);
                  }}
                />
                {/* District 3: Hubballi-Dharwad */}
                <path
                  className="fill-[rgba(76,215,246,0.2)] stroke-white/30 hover:fill-[rgba(76,215,246,0.5)] cursor-pointer transition-all"
                  d="M280,300 L350,250 L380,320 L300,360 Z"
                  onClick={() => {
                    setSelectedDistrict(districts[2]);
                    setIsPanelOpen(true);
                  }}
                />
                {/* District 4: Mangaluru Coastal */}
                <path
                  className="fill-[rgba(76,215,246,0.15)] stroke-white/30 hover:fill-[rgba(76,215,246,0.4)] cursor-pointer transition-all"
                  d="M150,400 L100,450 L120,500 L180,480 Z"
                  onClick={() => {
                    setSelectedDistrict(districts[3]);
                    setIsPanelOpen(true);
                  }}
                />
                {/* District 5: North Sector */}
                <path
                  className="fill-[rgba(255,179,173,0.35)] stroke-white/30 hover:fill-[rgba(255,179,173,0.6)] cursor-pointer transition-all"
                  d="M350,250 L420,200 L450,280 L380,320 Z"
                  onClick={() => {
                    setSelectedDistrict(districts[2]);
                    setIsPanelOpen(true);
                  }}
                />

                {/* Location Pulse Pins */}
                <circle className="fill-error pulse-dot-critical" cx="210" cy="400" r="5" />
                <circle className="fill-secondary pulse-dot" cx="320" cy="300" r="4" />
                <circle className="fill-primary pulse-dot" cx="130" cy="470" r="4" />
              </svg>
            </div>

            {/* Map Legend Footer */}
            <div className="absolute bottom-0 left-0 w-full p-3 flex justify-center z-10 pointer-events-none">
              <div className="bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-lg border border-white/10 pointer-events-auto flex gap-6 font-label-caps text-[10px] text-outline">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-[rgba(255,84,81,0.7)] rounded-sm" />
                  <span>HIGH HEAT</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-[rgba(255,179,173,0.5)] rounded-sm" />
                  <span>MED HEAT</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-[rgba(76,215,246,0.2)] border border-white/20 rounded-sm" />
                  <span>LOW HEAT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Analytics & Live Intel Ticker */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 h-full">
          {/* Recent FIR Activity Line Chart */}
          <div className="glass-panel rounded-xl p-4 flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <span className="font-label-caps text-xs text-outline uppercase tracking-wider font-semibold">
                Recent FIR Activity
              </span>
              <span className="material-symbols-outlined text-outline text-sm">show_chart</span>
            </div>
            <div className="flex-1 w-full relative flex items-end min-h-[90px]">
              <svg
                className="w-full h-full absolute inset-0 opacity-80"
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
              >
                <polyline
                  fill="none"
                  points="0,40 20,35 40,45 60,20 80,30 100,10"
                  stroke="#4cd7f6"
                  strokeWidth="2"
                />
                <polygon
                  fill="url(#grad1)"
                  points="0,50 0,40 20,35 40,45 60,20 80,30 100,10 100,50"
                />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#4cd7f6', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#4cd7f6', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="w-full flex justify-between font-data-mono text-[9px] text-outline-variant pt-1 border-t border-white/10 mt-1">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
            </div>
          </div>

          {/* Top Categories Bar Chart */}
          <div className="glass-panel rounded-xl p-4 flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <span className="font-label-caps text-xs text-outline uppercase tracking-wider font-semibold">
                Top Categories
              </span>
              <span className="material-symbols-outlined text-outline text-sm">bar_chart</span>
            </div>
            <div className="flex-1 flex flex-col justify-end gap-3 mt-2">
              <div className="w-full flex items-center gap-2">
                <span className="font-data-mono text-[10px] text-outline-variant w-10">THEFT</span>
                <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[85%] rounded-full shadow-[0_0_5px_#4cd7f6]" />
                </div>
                <span className="font-data-mono text-[10px] text-on-surface font-semibold">85%</span>
              </div>
              <div className="w-full flex items-center gap-2">
                <span className="font-data-mono text-[10px] text-outline-variant w-10">FRAUD</span>
                <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[62%] rounded-full" />
                </div>
                <span className="font-data-mono text-[10px] text-on-surface font-semibold">62%</span>
              </div>
              <div className="w-full flex items-center gap-2">
                <span className="font-data-mono text-[10px] text-outline-variant w-10">ASLT</span>
                <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-error w-[40%] rounded-full" />
                </div>
                <span className="font-data-mono text-[10px] text-on-surface font-semibold">40%</span>
              </div>
            </div>
          </div>

          {/* Live Ticker */}
          <div className="glass-panel rounded-xl p-4 overflow-hidden h-28 flex flex-col">
            <span className="font-label-caps text-xs text-outline uppercase tracking-wider font-semibold mb-2">
              Live Intel Feed
            </span>
            <div className="flex-1 relative overflow-hidden bg-black/40 rounded border border-white/5 p-2 flex items-center">
              <div className="whitespace-nowrap font-data-mono text-xs text-on-surface-variant flex gap-8 scroll-ticker">
                <span className="text-secondary">[SYS] Surveillance drone D-04 online.</span>
                <span className="text-error">[ALERT] Unusual border activity Sector 7.</span>
                <span>[INFO] Daily briefing uploaded to DB.</span>
                <span className="text-secondary">[SYS] Facial recog hit: Camera BLR-92.</span>
                <span className="text-primary">[CASE] FIR-23098 auto-indexed.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-Out District Details Panel */}
      {selectedDistrict && isPanelOpen && (
        <div className="fixed right-0 top-[64px] h-[calc(100vh-64px)] w-80 bg-[#1d2023]/95 backdrop-blur-3xl border-l border-white/10 shadow-2xl z-50 flex flex-col transition-all duration-300">
          <div className="p-6 border-b border-white/10 flex justify-between items-start">
            <div>
              <h2 className="font-headline-md text-xl text-on-surface font-bold">
                {selectedDistrict.name}
              </h2>
              <p className="font-data-mono text-xs text-secondary mt-1 font-semibold">
                ID: {selectedDistrict.id} | {selectedDistrict.zone}
              </p>
            </div>
            <button
              onClick={() => setIsPanelOpen(false)}
              className="text-outline hover:text-on-surface transition-colors p-1 rounded"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="p-6 space-y-6 overflow-y-auto flex-1">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-black/50 p-3 rounded-lg border border-white/5">
                <div className="font-label-caps text-[10px] text-outline uppercase mb-1">
                  Total Crime
                </div>
                <div className="font-headline-lg text-2xl font-bold text-on-surface">
                  {selectedDistrict.totalCrime.toLocaleString()}
                </div>
              </div>
              <div className="bg-error/10 p-3 rounded-lg border border-error/20">
                <div className="font-label-caps text-[10px] text-error uppercase mb-1 font-semibold">
                  Threat Lvl
                </div>
                <div className="font-headline-lg text-2xl font-bold text-error">
                  {selectedDistrict.threatLevel}
                </div>
              </div>
              <div className="bg-black/50 p-3 rounded-lg border border-white/5">
                <div className="font-label-caps text-[10px] text-outline uppercase mb-1">
                  Pending FIR
                </div>
                <div className="font-headline-lg text-2xl font-bold text-primary">
                  {selectedDistrict.pendingFIR}
                </div>
              </div>
              <div className="bg-black/50 p-3 rounded-lg border border-white/5">
                <div className="font-label-caps text-[10px] text-outline uppercase mb-1">
                  Solved (30d)
                </div>
                <div className="font-headline-lg text-2xl font-bold text-secondary">
                  {selectedDistrict.solved30d}%
                </div>
              </div>
            </div>

            {/* District Deploy Action */}
            <button
              onClick={() => handleDeployResources(selectedDistrict.name)}
              className="w-full py-3 bg-transparent border border-secondary text-secondary font-label-caps text-xs font-bold rounded-lg hover:bg-secondary hover:text-on-secondary transition-all shadow-[0_0_12px_rgba(76,215,246,0.25)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">local_shipping</span>
              <span>DEPLOY RESOURCES</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
