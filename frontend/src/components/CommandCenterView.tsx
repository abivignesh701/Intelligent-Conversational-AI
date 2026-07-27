import React, { useState, useMemo } from 'react';
import { ViewMode } from '../types';

interface CommandCenterViewProps {
  onOpenCase?: (caseId: string) => void;
  onNavigate?: (view: ViewMode) => void;
}

export const CommandCenterView: React.FC<CommandCenterViewProps> = ({
  onOpenCase,
  onNavigate,
}) => {
  // Global Filters State
  const [dateRange, setDateRange] = useState<string>('Last 30 Days');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('All');
  const [selectedStation, setSelectedStation] = useState<string>('All');
  const [selectedCrimeHead, setSelectedCrimeHead] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [trendMode, setTrendMode] = useState<'Daily' | 'Weekly' | 'Monthly'>('Daily');

  // Interactive Hover / Tooltip state for map and charts
  const [activeTooltip, setActiveTooltip] = useState<{ x: number; y: number; text: string } | null>(null);

  // Trigger simulated data refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  // Base Data multiplier derived from selected filters
  const filterMultiplier = useMemo(() => {
    let mult = 1.0;
    if (selectedDistrict !== 'All') mult *= 0.28;
    if (selectedStation !== 'All') mult *= 0.15;
    if (selectedCrimeHead !== 'All') mult *= 0.35;
    if (selectedStatus !== 'All') mult *= 0.45;
    if (dateRange === 'Today') mult *= 0.05;
    else if (dateRange === 'Yesterday') mult *= 0.06;
    else if (dateRange === 'Last 7 Days') mult *= 0.3;
    else if (dateRange === 'Last 3 Months') mult *= 2.5;
    else if (dateRange === 'Last Year') mult *= 8.0;
    return mult;
  }, [dateRange, selectedDistrict, selectedStation, selectedCrimeHead, selectedStatus]);

  // Recalculated Dynamic KPI Summary Values
  const kpiData = useMemo(() => {
    return {
      totalFIRs: Math.round(12845 * filterMultiplier),
      casesToday: Math.round(245 * Math.min(filterMultiplier, 1)),
      underInvestigation: Math.round(4682 * filterMultiplier),
      closedCases: Math.round(6732 * filterMultiplier),
      chargesheetsFiled: Math.round(1843 * filterMultiplier),
      arrestedAccused: Math.round(2901 * filterMultiplier),
      repeatOffenders: Math.round(822 * filterMultiplier),
    };
  }, [filterMultiplier]);

  // Crime Distribution breakdown
  const crimeDistribution = useMemo(() => {
    const total = kpiData.totalFIRs || 1;
    return [
      { name: 'Theft', count: Math.round(total * 0.328), percent: 32.8, color: '#3b82f6' },
      { name: 'Robbery', count: Math.round(total * 0.167), percent: 16.7, color: '#f97316' },
      { name: 'Assault', count: Math.round(total * 0.144), percent: 14.4, color: '#22c55e' },
      { name: 'Cyber Crime', count: Math.round(total * 0.103), percent: 10.3, color: '#4cd7f6' },
      { name: 'Murder', count: Math.round(total * 0.077), percent: 7.7, color: '#ef4444' },
      { name: 'Vehicle Theft', count: Math.round(total * 0.065), percent: 6.5, color: '#a855f7' },
      { name: 'Others', count: Math.round(total * 0.116), percent: 11.6, color: '#eab308' },
    ];
  }, [kpiData.totalFIRs]);

  // Crime Severity breakdown
  const severityData = useMemo(() => {
    const total = kpiData.totalFIRs || 1;
    return [
      { level: 'Low', count: Math.round(total * 0.274), percent: 27.4, color: '#22c55e' },
      { level: 'Medium', count: Math.round(total * 0.360), percent: 36.0, color: '#eab308' },
      { level: 'High', count: Math.round(total * 0.299), percent: 29.9, color: '#f97316' },
      { level: 'Critical', count: Math.round(total * 0.067), percent: 6.7, color: '#ef4444' },
    ];
  }, [kpiData.totalFIRs]);

  // Investigation Status breakdown
  const statusData = useMemo(() => {
    const total = kpiData.totalFIRs || 1;
    return [
      { status: 'FIR Registered', count: Math.round(total * 0.328), percent: 32.8, color: '#3b82f6' },
      { status: 'Under Investigation', count: Math.round(total * 0.364), percent: 36.4, color: '#eab308' },
      { status: 'Chargesheet Filed', count: Math.round(total * 0.143), percent: 14.3, color: '#f97316' },
      { status: 'Closed', count: Math.round(total * 0.165), percent: 16.5, color: '#22c55e' },
    ];
  }, [kpiData.totalFIRs]);

  // Top 5 Districts
  const topDistricts = useMemo(() => {
    return [
      { rank: 1, name: 'Bengaluru City', count: Math.round(2156 * Math.max(filterMultiplier, 0.4)) },
      { rank: 2, name: 'Mysuru', count: Math.round(1287 * Math.max(filterMultiplier, 0.4)) },
      { rank: 3, name: 'Belagavi', count: Math.round(1102 * Math.max(filterMultiplier, 0.4)) },
      { rank: 4, name: 'Davanagere', count: Math.round(987 * Math.max(filterMultiplier, 0.4)) },
      { rank: 5, name: 'Mangaluru', count: Math.round(742 * Math.max(filterMultiplier, 0.4)) },
    ];
  }, [filterMultiplier]);

  // Police Station Performance List
  const policeStations = useMemo(() => {
    return [
      { rank: 1, name: 'Mysuru South PS', reg: Math.round(532 * filterMultiplier), closed: Math.round(412 * filterMultiplier), pending: Math.round(120 * filterMultiplier), rate: 77.44 },
      { rank: 2, name: 'Nazarbad PS', reg: Math.round(487 * filterMultiplier), closed: Math.round(345 * filterMultiplier), pending: Math.round(142 * filterMultiplier), rate: 70.84 },
      { rank: 3, name: 'Vijayanagar PS', reg: Math.round(423 * filterMultiplier), closed: Math.round(312 * filterMultiplier), pending: Math.round(111 * filterMultiplier), rate: 73.76 },
      { rank: 4, name: 'Hebbal PS', reg: Math.round(392 * filterMultiplier), closed: Math.round(298 * filterMultiplier), pending: Math.round(94 * filterMultiplier), rate: 76.02 },
      { rank: 5, name: 'Davanagere Town PS', reg: Math.round(367 * filterMultiplier), closed: Math.round(245 * filterMultiplier), pending: Math.round(122 * filterMultiplier), rate: 66.76 },
      { rank: 6, name: 'BTM Layout PS', reg: Math.round(356 * filterMultiplier), closed: Math.round(230 * filterMultiplier), pending: Math.round(126 * filterMultiplier), rate: 64.61 },
      { rank: 7, name: 'Rajajinagar PS', reg: Math.round(321 * filterMultiplier), closed: Math.round(210 * filterMultiplier), pending: Math.round(111 * filterMultiplier), rate: 65.42 },
      { rank: 8, name: 'Yeshwanthpur PS', reg: Math.round(298 * filterMultiplier), closed: Math.round(198 * filterMultiplier), pending: Math.round(100 * filterMultiplier), rate: 66.44 },
    ];
  }, [filterMultiplier]);

  // Operational Alerts
  const alertsData = useMemo(() => {
    return {
      highPriority: Math.round(156 * filterMultiplier),
      pendingArrests: Math.round(238 * filterMultiplier),
      pendingChargesheets: Math.round(412 * filterMultiplier),
      casesOver90Days: Math.round(189 * filterMultiplier),
      repeatOffenders: Math.round(97 * filterMultiplier),
    };
  }, [filterMultiplier]);

  return (
    <div className="w-full h-[calc(100vh-64px)] overflow-y-auto mt-16 bg-[#090b0e] text-on-surface p-4 lg:p-6 space-y-5">
      {/* -------------------------------------------------- */}
      {/* HEADER & GLOBAL FILTERS */}
      {/* -------------------------------------------------- */}
      <header className="bg-[#111419] border border-white/10 p-4 rounded-xl shadow-2xl flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
        {/* Left Title & Timestamp */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-secondary pulse-dot" />
            <h1 className="font-headline-md text-xl lg:text-2xl font-bold text-on-surface tracking-tight">
              Police Crime Intelligence Dashboard
            </h1>
            <span className="px-2 py-0.5 rounded text-[9px] font-data-mono bg-secondary/15 text-secondary border border-secondary/30 font-bold uppercase">
              STATEWIDE HQ
            </span>
          </div>
          <p className="font-data-mono text-xs text-outline-variant mt-0.5">
            Karnataka State Police • Operational Command & Intelligence Matrix
          </p>
        </div>

        {/* Right Global Filters Toolbar */}
        <div className="flex flex-wrap items-center gap-2 w-full xl:w-auto">
          {/* Date Range Selector */}
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="bg-[#181c22] border border-white/15 rounded-lg px-2.5 py-1.5 font-data-mono text-xs text-on-surface focus:border-secondary outline-none cursor-pointer"
          >
            <option value="Today">Today</option>
            <option value="Yesterday">Yesterday</option>
            <option value="Last 7 Days">Last 7 Days</option>
            <option value="Last 30 Days">Last 30 Days</option>
            <option value="Last 3 Months">Last 3 Months</option>
            <option value="Last 6 Months">Last 6 Months</option>
            <option value="Last Year">Last Year</option>
          </select>

          {/* District Selector */}
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="bg-[#181c22] border border-white/15 rounded-lg px-2.5 py-1.5 font-data-mono text-xs text-on-surface focus:border-secondary outline-none cursor-pointer"
          >
            <option value="All">All Districts</option>
            <option value="Bengaluru City">Bengaluru City</option>
            <option value="Mysuru">Mysuru</option>
            <option value="Belagavi">Belagavi</option>
            <option value="Davanagere">Davanagere</option>
            <option value="Mangaluru">Mangaluru</option>
          </select>

          {/* Station Selector */}
          <select
            value={selectedStation}
            onChange={(e) => setSelectedStation(e.target.value)}
            className="bg-[#181c22] border border-white/15 rounded-lg px-2.5 py-1.5 font-data-mono text-xs text-on-surface focus:border-secondary outline-none cursor-pointer"
          >
            <option value="All">All Stations</option>
            <option value="Mysuru South PS">Mysuru South PS</option>
            <option value="Nazarbad PS">Nazarbad PS</option>
            <option value="Vijayanagar PS">Vijayanagar PS</option>
            <option value="Hebbal PS">Hebbal PS</option>
            <option value="BTM Layout PS">BTM Layout PS</option>
          </select>

          {/* Crime Head Selector */}
          <select
            value={selectedCrimeHead}
            onChange={(e) => setSelectedCrimeHead(e.target.value)}
            className="bg-[#181c22] border border-white/15 rounded-lg px-2.5 py-1.5 font-data-mono text-xs text-on-surface focus:border-secondary outline-none cursor-pointer"
          >
            <option value="All">All Crime Heads</option>
            <option value="Theft">Theft</option>
            <option value="Robbery">Robbery</option>
            <option value="Assault">Assault</option>
            <option value="Cyber Crime">Cyber Crime</option>
            <option value="Murder">Murder</option>
            <option value="Vehicle Theft">Vehicle Theft</option>
          </select>

          {/* Investigation Status Selector */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-[#181c22] border border-white/15 rounded-lg px-2.5 py-1.5 font-data-mono text-xs text-on-surface focus:border-secondary outline-none cursor-pointer"
          >
            <option value="All">All Statuses</option>
            <option value="FIR Registered">FIR Registered</option>
            <option value="Under Investigation">Under Investigation</option>
            <option value="Chargesheet Filed">Chargesheet Filed</option>
            <option value="Closed">Closed</option>
          </select>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            className="px-3 py-1.5 bg-secondary/15 border border-secondary/30 rounded-lg text-secondary hover:bg-secondary/25 transition-all flex items-center gap-1 font-data-mono text-xs font-bold cursor-pointer"
            title="Refresh Data"
          >
            <span className={`material-symbols-outlined text-sm ${isRefreshing ? 'animate-spin' : ''}`}>
              refresh
            </span>
          </button>
        </div>
      </header>

      {/* -------------------------------------------------- */}
      {/* TOP KPI SUMMARY (7 CARDS ROW) */}
      {/* -------------------------------------------------- */}
      <section className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-7 gap-3">
        {/* Card 1: Total FIRs */}
        <div className="glass-panel p-3.5 rounded-xl border border-white/10 flex flex-col justify-between hover:border-secondary/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="font-label-caps text-[9px] text-outline uppercase font-semibold">Total FIRs</span>
            <div className="w-7 h-7 rounded bg-secondary/15 text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-base">description</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="font-headline-lg text-xl lg:text-2xl font-bold text-on-surface font-data-mono">
              {kpiData.totalFIRs.toLocaleString()}
            </span>
            <p className="font-data-mono text-[9px] text-green-400 mt-0.5 flex items-center gap-0.5">
              <span>↑ 12.5%</span> <span className="text-outline-variant">vs last 30d</span>
            </p>
          </div>
        </div>

        {/* Card 2: Cases Registered Today */}
        <div className="glass-panel p-3.5 rounded-xl border border-white/10 flex flex-col justify-between hover:border-secondary/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="font-label-caps text-[9px] text-outline uppercase font-semibold">Cases Today</span>
            <div className="w-7 h-7 rounded bg-blue-500/15 text-blue-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-base">today</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="font-headline-lg text-xl lg:text-2xl font-bold text-on-surface font-data-mono">
              {kpiData.casesToday.toLocaleString()}
            </span>
            <p className="font-data-mono text-[9px] text-green-400 mt-0.5 flex items-center gap-0.5">
              <span>↑ 8.3%</span> <span className="text-outline-variant">vs yesterday</span>
            </p>
          </div>
        </div>

        {/* Card 3: Under Investigation */}
        <div className="glass-panel p-3.5 rounded-xl border border-white/10 flex flex-col justify-between hover:border-secondary/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="font-label-caps text-[9px] text-outline uppercase font-semibold">Under Investigation</span>
            <div className="w-7 h-7 rounded bg-yellow-500/15 text-yellow-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-base">hourglass_top</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="font-headline-lg text-xl lg:text-2xl font-bold text-on-surface font-data-mono">
              {kpiData.underInvestigation.toLocaleString()}
            </span>
            <p className="font-data-mono text-[9px] text-yellow-400 mt-0.5 flex items-center gap-0.5">
              <span>↑ 5.2%</span> <span className="text-outline-variant">vs last 30d</span>
            </p>
          </div>
        </div>

        {/* Card 4: Closed Cases */}
        <div className="glass-panel p-3.5 rounded-xl border border-white/10 flex flex-col justify-between hover:border-secondary/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="font-label-caps text-[9px] text-outline uppercase font-semibold">Closed Cases</span>
            <div className="w-7 h-7 rounded bg-green-500/15 text-green-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-base">check_circle</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="font-headline-lg text-xl lg:text-2xl font-bold text-on-surface font-data-mono">
              {kpiData.closedCases.toLocaleString()}
            </span>
            <p className="font-data-mono text-[9px] text-green-400 mt-0.5 flex items-center gap-0.5">
              <span>↑ 14.8%</span> <span className="text-outline-variant">vs last 30d</span>
            </p>
          </div>
        </div>

        {/* Card 5: Chargesheets Filed */}
        <div className="glass-panel p-3.5 rounded-xl border border-white/10 flex flex-col justify-between hover:border-secondary/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="font-label-caps text-[9px] text-outline uppercase font-semibold">Chargesheets Filed</span>
            <div className="w-7 h-7 rounded bg-purple-500/15 text-purple-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-base">gavel</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="font-headline-lg text-xl lg:text-2xl font-bold text-on-surface font-data-mono">
              {kpiData.chargesheetsFiled.toLocaleString()}
            </span>
            <p className="font-data-mono text-[9px] text-green-400 mt-0.5 flex items-center gap-0.5">
              <span>↑ 14.3%</span> <span className="text-outline-variant">vs last 30d</span>
            </p>
          </div>
        </div>

        {/* Card 6: Arrested Accused */}
        <div className="glass-panel p-3.5 rounded-xl border border-white/10 flex flex-col justify-between hover:border-secondary/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="font-label-caps text-[9px] text-outline uppercase font-semibold">Arrested Accused</span>
            <div className="w-7 h-7 rounded bg-teal-500/15 text-teal-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-base">lock</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="font-headline-lg text-xl lg:text-2xl font-bold text-on-surface font-data-mono">
              {kpiData.arrestedAccused.toLocaleString()}
            </span>
            <p className="font-data-mono text-[9px] text-green-400 mt-0.5 flex items-center gap-0.5">
              <span>↑ 10.3%</span> <span className="text-outline-variant">vs last 30d</span>
            </p>
          </div>
        </div>

        {/* Card 7: Repeat Offenders */}
        <div className="glass-panel p-3.5 rounded-xl border border-white/10 flex flex-col justify-between hover:border-secondary/40 transition-all">
          <div className="flex items-center justify-between">
            <span className="font-label-caps text-[9px] text-outline uppercase font-semibold">Repeat Offenders</span>
            <div className="w-7 h-7 rounded bg-error/15 text-error flex items-center justify-center">
              <span className="material-symbols-outlined text-base">group</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="font-headline-lg text-xl lg:text-2xl font-bold text-on-surface font-data-mono">
              {kpiData.repeatOffenders.toLocaleString()}
            </span>
            <p className="font-data-mono text-[9px] text-red-400 mt-0.5 flex items-center gap-0.5">
              <span>↑ 6.1%</span> <span className="text-outline-variant">vs last 30d</span>
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* MAIN ANALYTICS SECTION (4 CHARTS GRID) */}
      {/* -------------------------------------------------- */}
      <section className="grid grid-cols-12 gap-5">
        {/* 1. Crime Trend Line Chart */}
        <div className="col-span-12 lg:col-span-4 glass-panel p-4 rounded-xl border border-white/10 flex flex-col">
          <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/5">
            <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
              Crime Trend
            </span>
            <div className="flex items-center gap-1 bg-[#161a20] p-1 rounded border border-white/10">
              {(['Daily', 'Weekly', 'Monthly'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setTrendMode(mode)}
                  className={`px-2 py-0.5 text-[9px] font-data-mono rounded transition-colors ${
                    trendMode === mode ? 'bg-secondary text-on-secondary font-bold' : 'text-outline hover:text-white'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Trend Line Chart */}
          <div className="flex-1 flex flex-col justify-end min-h-[160px] pt-4 relative">
            <svg className="w-full h-36 overflow-visible" viewBox="0 0 300 100">
              <defs>
                <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4cd7f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#4cd7f6" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Background grid lines */}
              <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
              <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
              <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />

              {/* Area fill */}
              <polygon
                points="0,85 10,75 30,65 50,80 70,45 90,60 110,35 130,50 150,25 170,40 190,30 210,55 230,20 250,45 270,35 290,50 300,40 300,100 0,100"
                fill="url(#trendGrad)"
              />

              {/* Polyline curve */}
              <polyline
                fill="none"
                stroke="#4cd7f6"
                strokeWidth="2.5"
                points="0,85 10,75 30,65 50,80 70,45 90,60 110,35 130,50 150,25 170,40 190,30 210,55 230,20 250,45 270,35 290,50 300,40"
              />

              {/* Interactive Points */}
              {[
                { x: 150, y: 25, label: '15 May: 612 FIRs' },
                { x: 230, y: 20, label: '22 May: 640 FIRs' },
              ].map((pt, i) => (
                <circle
                  key={i}
                  cx={pt.x}
                  cy={pt.y}
                  r="4"
                  className="fill-secondary stroke-white stroke-2 cursor-pointer hover:r-6 transition-all"
                  onMouseEnter={(e) =>
                    setActiveTooltip({ x: e.clientX, y: e.clientY, text: pt.label })
                  }
                  onMouseLeave={() => setActiveTooltip(null)}
                />
              ))}
            </svg>

            {/* X Axis Dates */}
            <div className="flex justify-between font-data-mono text-[8px] text-outline-variant mt-2 pt-1 border-t border-white/5">
              <span>17 Apr</span>
              <span>24 Apr</span>
              <span>01 May</span>
              <span>08 May</span>
              <span>15 May</span>
              <span>22 May</span>
            </div>
          </div>
        </div>

        {/* 2. Crime Distribution Donut Chart */}
        <div className="col-span-12 lg:col-span-3 glass-panel p-4 rounded-xl border border-white/10 flex flex-col">
          <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/5">
            <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
              Crime Distribution
            </span>
            <span className="font-data-mono text-[9px] text-secondary">Click to filter</span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center relative py-2">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-surface-container" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              {/* Theft 32.8% */}
              <path stroke="#3b82f6" strokeDasharray="32.8, 100" strokeWidth="4" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              {/* Robbery 16.7% */}
              <path stroke="#f97316" strokeDasharray="16.7, 100" strokeDashoffset="-32.8" strokeWidth="4" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              {/* Assault 14.4% */}
              <path stroke="#22c55e" strokeDasharray="14.4, 100" strokeDashoffset="-49.5" strokeWidth="4" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              {/* Cyber 10.3% */}
              <path stroke="#4cd7f6" strokeDasharray="10.3, 100" strokeDashoffset="-63.9" strokeWidth="4" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline-lg text-sm font-bold text-on-surface">{kpiData.totalFIRs.toLocaleString()}</span>
              <span className="font-data-mono text-[8px] text-outline">TOTAL FIRS</span>
            </div>
          </div>

          <div className="space-y-1 font-data-mono text-[9px] border-t border-white/5 pt-2">
            {crimeDistribution.slice(0, 4).map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedCrimeHead(selectedCrimeHead === c.name ? 'All' : c.name)}
                className="w-full flex justify-between items-center hover:bg-white/5 p-1 rounded transition-colors text-left"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                  <span className="text-on-surface">{c.name}</span>
                </div>
                <span className="text-outline-variant">{c.count.toLocaleString()} ({c.percent}%)</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Crime Severity Horizontal Bars */}
        <div className="col-span-12 lg:col-span-2 glass-panel p-4 rounded-xl border border-white/10 flex flex-col">
          <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/5">
            <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
              Crime Severity
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-3 font-data-mono text-[10px]">
            {severityData.map((s) => (
              <div key={s.level} className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-on-surface">{s.level}</span>
                  <span className="text-outline-variant font-bold">{s.count.toLocaleString()} ({s.percent}%)</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${s.percent}%`, backgroundColor: s.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Investigation Status Donut Chart */}
        <div className="col-span-12 lg:col-span-3 glass-panel p-4 rounded-xl border border-white/10 flex flex-col">
          <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/5">
            <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
              Investigation Status
            </span>
            <span className="font-data-mono text-[9px] text-secondary">Click to filter</span>
          </div>

          <div className="flex-1 flex items-center justify-between gap-2 py-2">
            <div className="relative w-28 h-28 flex-shrink-0 flex items-center justify-center">
              <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-surface-container" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path stroke="#3b82f6" strokeDasharray="32.8, 100" strokeWidth="4" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path stroke="#eab308" strokeDasharray="36.4, 100" strokeDashoffset="-32.8" strokeWidth="4" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path stroke="#f97316" strokeDasharray="14.3, 100" strokeDashoffset="-69.2" strokeWidth="4" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-headline-lg text-xs font-bold text-on-surface">{kpiData.totalFIRs.toLocaleString()}</span>
                <span className="font-data-mono text-[7px] text-outline">CASES</span>
              </div>
            </div>

            <div className="space-y-1.5 font-data-mono text-[9px] flex-1">
              {statusData.map((st) => (
                <button
                  key={st.status}
                  onClick={() => setSelectedStatus(selectedStatus === st.status ? 'All' : st.status)}
                  className="w-full flex items-center justify-between hover:bg-white/5 p-1 rounded transition-colors text-left"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: st.color }} />
                    <span className="text-on-surface truncate">{st.status}</span>
                  </div>
                  <span className="text-outline-variant font-bold">{st.percent}%</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* GEOGRAPHICAL INTELLIGENCE & POLICE STATION TABLES */}
      {/* -------------------------------------------------- */}
      <section className="grid grid-cols-12 gap-5">
        {/* Karnataka Crime Map Vector Panel */}
        <div className="col-span-12 lg:col-span-6 glass-panel p-4 rounded-xl border border-white/10 flex flex-col">
          <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/5">
            <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
              Karnataka Crime Map <span className="text-[9px] text-outline-variant lowercase">(by district)</span>
            </span>
            <span className="font-data-mono text-[9px] text-secondary">Interactive Geo Matrix</span>
          </div>

          <div className="flex-1 flex flex-col sm:flex-row gap-4 items-center">
            {/* SVG Karnataka Interactive Heatmap Vector */}
            <div className="relative flex-1 w-full h-64 bg-[#0e1116] border border-white/5 rounded-lg flex items-center justify-center p-2 overflow-hidden">
              <svg className="w-full h-full max-h-60" viewBox="0 0 400 500">
                {/* District Paths */}
                {[
                  { id: 'bengaluru', name: 'Bengaluru City', d: 'M230 380 L270 370 L280 410 L240 420 Z', color: '#ef4444', count: '2,156' },
                  { id: 'mysuru', name: 'Mysuru', d: 'M180 410 L230 390 L240 440 L190 450 Z', color: '#f97316', count: '1,287' },
                  { id: 'belagavi', name: 'Belagavi', d: 'M100 140 L160 120 L180 180 L120 200 Z', color: '#f97316', count: '1,102' },
                  { id: 'davanagere', name: 'Davanagere', d: 'M160 250 L220 240 L230 290 L170 300 Z', color: '#eab308', count: '987' },
                  { id: 'mangaluru', name: 'Mangaluru', d: 'M110 380 L160 370 L150 430 L100 420 Z', color: '#22c55e', count: '742' },
                  { id: 'hubballi', name: 'Hubballi', d: 'M140 200 L190 190 L200 240 L150 250 Z', color: '#eab308', count: '654' },
                  { id: 'kalaburagi', name: 'Kalaburagi', d: 'M220 100 L290 90 L280 160 L210 150 Z', color: '#22c55e', count: '512' },
                ].map((dist) => {
                  const isSelected = selectedDistrict === dist.name;
                  return (
                    <g key={dist.id}>
                      <path
                        d={dist.d}
                        fill={dist.color}
                        opacity={isSelected ? 0.9 : 0.65}
                        stroke={isSelected ? '#ffffff' : '#111419'}
                        strokeWidth={isSelected ? '3' : '1.5'}
                        className="cursor-pointer transition-all hover:opacity-100 hover:stroke-white"
                        onClick={() => setSelectedDistrict(selectedDistrict === dist.name ? 'All' : dist.name)}
                        onMouseEnter={(e) =>
                          setActiveTooltip({ x: e.clientX, y: e.clientY, text: `${dist.name}: ${dist.count} FIRs` })
                        }
                        onMouseLeave={() => setActiveTooltip(null)}
                      />
                      <text x={parseInt(dist.d.split(' ')[0].substring(1)) + 10} y={parseInt(dist.d.split(' ')[2]) + 15} fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">
                        {dist.name.substring(0, 3)}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Map Legend */}
              <div className="absolute bottom-2 left-2 bg-black/70 p-2 rounded border border-white/10 font-data-mono text-[8px] space-y-1">
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500" /> High (1000+)</div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500" /> Medium (500-1000)</div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow-500" /> Low (100-500)</div>
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500" /> Very Low (&lt;100)</div>
              </div>
            </div>

            {/* Top 5 Crime Districts Panel */}
            <div className="w-full sm:w-48 space-y-2 font-data-mono text-xs">
              <span className="font-label-caps text-[10px] text-outline uppercase font-bold block">
                Top 5 Crime Districts
              </span>
              {topDistricts.map((d) => (
                <button
                  key={d.name}
                  onClick={() => setSelectedDistrict(d.name)}
                  className={`w-full flex justify-between items-center p-2 rounded border transition-all text-left ${
                    selectedDistrict === d.name
                      ? 'bg-secondary/20 border-secondary text-secondary font-bold'
                      : 'bg-[#14171c] border-white/5 hover:border-white/20 text-on-surface'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-secondary/15 text-secondary flex items-center justify-center text-[9px] font-bold">
                      {d.rank}
                    </span>
                    <span className="truncate max-w-[100px]">{d.name}</span>
                  </div>
                  <span className="text-[10px] font-bold text-outline-variant">{d.count.toLocaleString()}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Police Station Performance Table */}
        <div className="col-span-12 lg:col-span-6 glass-panel p-4 rounded-xl border border-white/10 flex flex-col">
          <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/5">
            <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
              Police Station Performance
            </span>
            <span className="font-data-mono text-[9px] text-secondary">Ranked by Success Rate</span>
          </div>

          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left font-data-mono text-xs">
              <thead>
                <tr className="border-b border-white/10 text-outline text-[9px] uppercase">
                  <th className="pb-1.5">#</th>
                  <th className="pb-1.5">Police Station</th>
                  <th className="pb-1.5 text-right">Registered</th>
                  <th className="pb-1.5 text-right">Closed</th>
                  <th className="pb-1.5 text-right">Pending</th>
                  <th className="pb-1.5 text-right">Success Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {policeStations.map((st) => (
                  <tr
                    key={st.name}
                    onClick={() => setSelectedStation(selectedStation === st.name ? 'All' : st.name)}
                    className="hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <td className="py-2 text-outline-variant">{st.rank}</td>
                    <td className="py-2 text-on-surface font-medium">{st.name}</td>
                    <td className="py-2 text-right">{st.reg}</td>
                    <td className="py-2 text-right text-green-400 font-bold">{st.closed}</td>
                    <td className="py-2 text-right text-yellow-400">{st.pending}</td>
                    <td className="py-2 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                          <div className="h-full bg-secondary rounded-full" style={{ width: `${st.rate}%` }} />
                        </div>
                        <span className="text-[10px] text-secondary font-bold">{st.rate}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* RECENT FIRS, ACTIVE INVESTIGATIONS, QUICK ACTIONS, ALERTS */}
      {/* -------------------------------------------------- */}
      <section className="grid grid-cols-12 gap-5">
        {/* Recently Registered FIRs */}
        <div className="col-span-12 md:col-span-4 glass-panel p-4 rounded-xl border border-white/10 flex flex-col">
          <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/5">
            <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
              Recently Registered FIRs
            </span>
            <button
              onClick={() => onNavigate && onNavigate('crime-search')}
              className="font-data-mono text-[9px] text-secondary hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All FIRs</span>
              <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
            </button>
          </div>

          <div className="space-y-2.5 overflow-y-auto max-h-52 pr-1">
            {[
              { fir: 'FIR-2025-12485', type: 'Robbery', station: 'Mysuru South PS', time: '23 May 2025, 10:25 AM' },
              { fir: 'FIR-2025-12484', type: 'Theft', station: 'Nazarbad PS', time: '23 May 2025, 10:18 AM' },
              { fir: 'FIR-2025-12483', type: 'Assault', station: 'Hebbal PS', time: '23 May 2025, 10:05 AM' },
              { fir: 'FIR-2025-12482', type: 'Cyber Crime', station: 'BTM Layout PS', time: '23 May 2025, 09:42 AM' },
              { fir: 'FIR-2025-12481', type: 'Vehicle Theft', station: 'Vijayanagar PS', time: '23 May 2025, 09:28 AM' },
            ].map((f) => (
              <div
                key={f.fir}
                onClick={() => onOpenCase && onOpenCase(f.fir)}
                className="p-2 bg-[#14171c] border border-white/5 rounded-lg flex items-center justify-between text-xs hover:border-secondary/40 transition-all cursor-pointer"
              >
                <div>
                  <span className="font-data-mono text-secondary font-bold text-[11px] block">{f.fir}</span>
                  <p className="text-[10px] text-on-surface">{f.type} • <span className="text-outline-variant">{f.station}</span></p>
                </div>
                <span className="font-data-mono text-[8px] text-outline">{f.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Active Investigations */}
        <div className="col-span-12 md:col-span-4 lg:col-span-4 glass-panel p-4 rounded-xl border border-white/10 flex flex-col">
          <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/5">
            <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
              Active Investigations
            </span>
            <button
              onClick={() => onNavigate && onNavigate('case-center')}
              className="font-data-mono text-[9px] text-secondary hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View Active Cases</span>
              <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
            </button>
          </div>

          <div className="space-y-2.5 overflow-y-auto max-h-52 pr-1">
            {[
              { fir: 'FIR-2025-12345', title: 'Robbery Investigation', station: 'Mysuru South PS', priority: 'High', color: 'bg-red-500/20 text-red-400' },
              { fir: 'FIR-2025-12312', title: 'Murder Investigation', station: 'Nazarbad PS', priority: 'High', color: 'bg-red-500/20 text-red-400' },
              { fir: 'FIR-2025-12298', title: 'Cyber Fraud Investigation', station: 'Hebbal PS', priority: 'Medium', color: 'bg-yellow-500/20 text-yellow-400' },
              { fir: 'FIR-2025-12275', title: 'House Breaking Investigation', station: 'Vijayanagar PS', priority: 'Medium', color: 'bg-yellow-500/20 text-yellow-400' },
              { fir: 'FIR-2025-12226', title: 'Theft Investigation', station: 'Davanagere Town PS', priority: 'Low', color: 'bg-green-500/20 text-green-400' },
            ].map((inv) => (
              <div
                key={inv.fir}
                className="p-2 bg-[#14171c] border border-white/5 rounded-lg flex items-center justify-between text-xs hover:border-secondary/40 transition-all cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-data-mono text-secondary font-bold text-[10px]">{inv.fir}</span>
                    <span className={`px-1.5 py-0.2 rounded text-[8px] font-data-mono font-bold ${inv.color}`}>
                      {inv.priority}
                    </span>
                  </div>
                  <p className="text-[10px] text-on-surface mt-0.5">{inv.title}</p>
                </div>
                <span className="font-data-mono text-[9px] text-outline">{inv.station}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Alert Panel (Right Side) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-panel p-4 rounded-xl border border-white/10 flex flex-col">
          <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/5">
            <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
              Alerts & Notifications
            </span>
          </div>

          <div className="space-y-2 flex-1 font-data-mono text-xs">
            {/* High Priority Cases */}
            <div className="p-2 bg-[#14171c] border border-red-500/30 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-red-400 text-base">warning</span>
                <div>
                  <span className="text-[10px] text-on-surface font-medium block">High Priority Cases</span>
                  <span className="text-red-400 font-bold text-sm">{alertsData.highPriority}</span>
                </div>
              </div>
              <button onClick={() => onNavigate && onNavigate('crime-search')} className="text-[9px] text-secondary hover:underline cursor-pointer">View all</button>
            </div>

            {/* Pending Arrests */}
            <div className="p-2 bg-[#14171c] border border-yellow-500/30 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow-400 text-base">person_search</span>
                <div>
                  <span className="text-[10px] text-on-surface font-medium block">Pending Arrests</span>
                  <span className="text-yellow-400 font-bold text-sm">{alertsData.pendingArrests}</span>
                </div>
              </div>
              <button onClick={() => onNavigate && onNavigate('crime-search')} className="text-[9px] text-secondary hover:underline cursor-pointer">View all</button>
            </div>

            {/* Pending Chargesheets */}
            <div className="p-2 bg-[#14171c] border border-purple-500/30 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-purple-400 text-base">article</span>
                <div>
                  <span className="text-[10px] text-on-surface font-medium block">Pending Chargesheets</span>
                  <span className="text-purple-400 font-bold text-sm">{alertsData.pendingChargesheets}</span>
                </div>
              </div>
              <button onClick={() => onNavigate && onNavigate('crime-search')} className="text-[9px] text-secondary hover:underline cursor-pointer">View all</button>
            </div>

            {/* Cases > 90 Days */}
            <div className="p-2 bg-[#14171c] border border-blue-500/30 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-400 text-base">schedule</span>
                <div>
                  <span className="text-[10px] text-on-surface font-medium block">Cases &gt; 90 Days</span>
                  <span className="text-blue-400 font-bold text-sm">{alertsData.casesOver90Days}</span>
                </div>
              </div>
              <button onClick={() => onNavigate && onNavigate('crime-search')} className="text-[9px] text-secondary hover:underline cursor-pointer">View all</button>
            </div>

            {/* Repeat Offender Cases */}
            <div className="p-2 bg-[#14171c] border border-red-500/30 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-error text-base">groups</span>
                <div>
                  <span className="text-[10px] text-on-surface font-medium block">Repeat Offender Cases</span>
                  <span className="text-error font-bold text-sm">{alertsData.repeatOffenders}</span>
                </div>
              </div>
              <button onClick={() => onNavigate && onNavigate('crime-search')} className="text-[9px] text-secondary hover:underline cursor-pointer">View all</button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Tooltip */}
      {activeTooltip && (
        <div
          className="fixed z-50 px-2.5 py-1 bg-black/90 text-white font-data-mono text-[10px] rounded border border-white/20 shadow-xl pointer-events-none transform -translate-x-1/2 -translate-y-full mb-2"
          style={{ left: `${activeTooltip.x}px`, top: `${activeTooltip.y}px` }}
        >
          {activeTooltip.text}
        </div>
      )}
    </div>
  );
};
