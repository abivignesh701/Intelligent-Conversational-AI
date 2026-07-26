import React, { useState } from 'react';
import { NetworkNode } from '../types';
import { NetworkGraph3D } from './NetworkGraph3D';

export const NetworkGraphView: React.FC = () => {
  const [confidenceThreshold, setConfidenceThreshold] = useState<number>(50);
  const [activeFilters, setActiveFilters] = useState<Record<string, boolean>>({
    suspects: true,
    devices: true,
    vehicles: true,
    addresses: true,
    financial: true,
  });

  const [nodes] = useState<NetworkNode[]>([
    {
      id: 'NODE-8829',
      label: 'K. Ramesh ("Viper")',
      type: 'suspect',
      confidence: 94,
      alias: 'Viper',
      realName: 'K. Ramesh',
      status: 'PRIMARY TARGET',
      connectionsCount: 12,
      details: {
        lastActivity: 'VoIP Ping - Koramangala',
        recentAction: 'Encrypted transfer 14:20Z',
      },
      pos: [0, 0, 0],
    },
    {
      id: 'NODE-9402',
      label: 'S. Patil',
      type: 'suspect',
      confidence: 88,
      alias: 'Patil',
      status: 'ASSOCIATE',
      connectionsCount: 6,
      pos: [2.5, 1.2, -1.0],
    },
    {
      id: 'NODE-[#8821]',
      label: 'IMEI-88219381',
      type: 'device',
      confidence: 96,
      status: 'ACTIVE SIM',
      connectionsCount: 4,
      pos: [-2.1, 2.0, 1.5],
    },
    {
      id: 'NODE-KA01-992',
      label: 'KA-01-MJ-8821',
      type: 'vehicle',
      confidence: 78,
      status: 'BLR CCTV MATCH',
      connectionsCount: 3,
      pos: [1.8, -2.2, 0.8],
    },
    {
      id: 'NODE-ADDR-44',
      label: 'Flat 402, Indiranagar',
      type: 'address',
      confidence: 82,
      status: 'SAFEHOUSE',
      connectionsCount: 5,
      pos: [-3.0, -1.5, -2.0],
    },
    {
      id: 'NODE-ACC-99',
      label: 'A/C 88201-X',
      type: 'financial',
      confidence: 65,
      status: 'CYBER WALLET',
      connectionsCount: 8,
      pos: [0.5, 3.2, -2.5],
    },
  ]);

  const [selectedNode, setSelectedNode] = useState<NetworkNode>(nodes[0]);
  const [isPlayingTimeline, setIsPlayingTimeline] = useState<boolean>(false);
  const [timelineVal, setTimelineVal] = useState<number>(75);

  const toggleFilter = (key: string) => {
    setActiveFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="relative w-full h-[calc(100vh-64px)] mt-16 overflow-hidden bg-[#090b0e]">
      {/* 3D Three.js Graph Canvas Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <NetworkGraph3D
          nodes={nodes}
          selectedNodeId={selectedNode.id}
          onSelectNode={setSelectedNode}
          confidenceThreshold={confidenceThreshold}
          activeFilters={activeFilters}
        />
      </div>

      {/* Floating Left Control Panel: Operation Gridlock & Filters */}
      <div className="absolute left-4 md:left-6 top-6 z-20 w-80 glass-panel rounded-xl p-5 border border-white/10 shadow-2xl flex flex-col gap-5 max-h-[calc(100vh-160px)] overflow-y-auto">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="font-label-caps text-[10px] text-secondary font-bold uppercase tracking-widest">
              OPERATION GRIDLOCK
            </span>
            <span className="bg-error/20 text-error border border-error/30 text-[9px] font-data-mono px-1.5 py-0.5 rounded font-bold">
              HIGH RISK
            </span>
          </div>
          <h2 className="font-headline-md text-lg text-on-surface font-bold">
            Target Network Graph
          </h2>
          <p className="font-data-mono text-xs text-outline mt-0.5">
            Nodes Active: 3,492 | Depth Lvl: 3
          </p>
        </div>

        {/* Entity Filters */}
        <div className="space-y-2 border-t border-white/10 pt-4">
          <span className="font-label-caps text-xs text-outline font-semibold uppercase tracking-wider block mb-2">
            Entity Filters
          </span>

          <label className="flex items-center justify-between text-xs font-body-md text-on-surface cursor-pointer">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-error" />
              <span>Known Suspects</span>
            </span>
            <input
              type="checkbox"
              checked={activeFilters.suspects}
              onChange={() => toggleFilter('suspects')}
              className="rounded bg-black/60 border-white/20 text-secondary focus:ring-0"
            />
          </label>

          <label className="flex items-center justify-between text-xs font-body-md text-on-surface cursor-pointer">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
              <span>Mobile Devices</span>
            </span>
            <input
              type="checkbox"
              checked={activeFilters.devices}
              onChange={() => toggleFilter('devices')}
              className="rounded bg-black/60 border-white/20 text-secondary focus:ring-0"
            />
          </label>

          <label className="flex items-center justify-between text-xs font-body-md text-on-surface cursor-pointer">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[rgba(255,179,173,1)]" />
              <span>Vehicles</span>
            </span>
            <input
              type="checkbox"
              checked={activeFilters.vehicles}
              onChange={() => toggleFilter('vehicles')}
              className="rounded bg-black/60 border-white/20 text-secondary focus:ring-0"
            />
          </label>

          <label className="flex items-center justify-between text-xs font-body-md text-on-surface cursor-pointer">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[rgba(173,198,255,1)]" />
              <span>Addresses</span>
            </span>
            <input
              type="checkbox"
              checked={activeFilters.addresses}
              onChange={() => toggleFilter('addresses')}
              className="rounded bg-black/60 border-white/20 text-secondary focus:ring-0"
            />
          </label>

          <label className="flex items-center justify-between text-xs font-body-md text-on-surface cursor-pointer">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[rgba(100,100,100,1)]" />
              <span>Financial Acc.</span>
            </span>
            <input
              type="checkbox"
              checked={activeFilters.financial}
              onChange={() => toggleFilter('financial')}
              className="rounded bg-black/60 border-white/20 text-secondary focus:ring-0"
            />
          </label>
        </div>

        {/* Confidence Threshold Slider */}
        <div className="border-t border-white/10 pt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="font-label-caps text-xs text-outline font-semibold uppercase tracking-wider">
              Confidence Threshold
            </span>
            <span className="font-data-mono text-xs text-secondary font-bold">
              {confidenceThreshold}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={confidenceThreshold}
            onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
            className="w-full accent-secondary cursor-pointer"
          />
        </div>
      </div>

      {/* Floating Right Detail Panel: Node Dossier */}
      {selectedNode && (
        <div className="absolute right-4 md:right-6 top-6 z-20 w-80 md:w-96 glass-panel rounded-xl p-5 border border-white/10 shadow-2xl flex flex-col gap-4">
          <div className="flex justify-between items-start border-b border-white/10 pb-3">
            <div>
              <span className="bg-error/20 text-error text-[10px] font-data-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                {selectedNode.status}
              </span>
              <h3 className="font-headline-md text-xl font-bold text-on-surface mt-1">
                {selectedNode.label}
              </h3>
              <p className="font-data-mono text-xs text-outline">
                ID: {selectedNode.id}
              </p>
            </div>
            <div className="bg-black/50 p-2.5 rounded-lg border border-white/10 text-center">
              <span className="font-data-mono text-lg font-bold text-secondary block">
                {selectedNode.confidence}%
              </span>
              <span className="font-label-caps text-[9px] text-outline uppercase block">
                Match
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-black/40 p-3 rounded-lg border border-white/5 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-outline font-label-caps">Direct Connections</span>
                <span className="font-data-mono text-on-surface font-semibold">
                  {selectedNode.connectionsCount} Nodes
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-outline font-label-caps">Entity Type</span>
                <span className="font-data-mono text-secondary uppercase font-semibold">
                  {selectedNode.type}
                </span>
              </div>
              {selectedNode.details?.lastActivity && (
                <div className="flex justify-between text-xs">
                  <span className="text-outline font-label-caps">Last Signal</span>
                  <span className="font-data-mono text-on-surface truncate max-w-[150px]">
                    {selectedNode.details.lastActivity}
                  </span>
                </div>
              )}
            </div>

            <button
              onClick={() =>
                alert(`Extracting full dossier for ${selectedNode.label} (Node ${selectedNode.id})`)
              }
              className="w-full py-2.5 bg-primary/20 border border-primary/50 text-primary font-label-caps text-xs font-bold rounded-lg hover:bg-primary/30 transition-all shadow-[0_0_12px_rgba(173,198,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">file_present</span>
              <span>EXTRACT DOSSIER</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Bottom Temporal Analysis Timeline Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-3xl glass-panel rounded-xl p-4 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlayingTimeline(!isPlayingTimeline)}
            className="w-9 h-9 rounded-lg bg-secondary/20 border border-secondary/50 text-secondary hover:bg-secondary/30 transition-colors flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">
              {isPlayingTimeline ? 'pause' : 'play_arrow'}
            </span>
          </button>
          <button
            onClick={() => setTimelineVal(100)}
            className="p-2 text-outline hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-lg">fast_forward</span>
          </button>
        </div>

        <div className="flex-1 w-full space-y-1">
          <div className="flex justify-between text-[10px] font-data-mono text-outline">
            <span>T-72h</span>
            <span>T-48h</span>
            <span>T-24h</span>
            <span className="text-secondary font-bold">REAL-TIME (2023-10-27 14:32Z)</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={timelineVal}
            onChange={(e) => setTimelineVal(Number(e.target.value))}
            className="w-full accent-secondary cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
