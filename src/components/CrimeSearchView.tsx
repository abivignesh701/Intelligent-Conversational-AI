import React, { useState } from 'react';
import { SearchResultCase } from '../types';

export const CrimeSearchView: React.FC = () => {
  const [queryRef, setQueryRef] = useState('');
  const [querySubject, setQuerySubject] = useState('');
  const [queryPhone, setQueryPhone] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const [cases] = useState<SearchResultCase[]>([
    {
      id: 'BLR-24-991A',
      subject: 'Unknown ("Viper")',
      alias: 'Viper',
      category: 'Cyber',
      date: '2023-10-24',
      status: 'Critical',
      district: 'Bengaluru Urban',
      summary:
        'Target entity orchestrated phishing breach targeting financial nodes in Sector 4.',
      custodyChain: [
        {
          step: 1,
          title: 'Evidence Seized (Smartphone)',
          logger: 'OFC-7729',
          time: '2023-10-24 10:15Z',
        },
        {
          step: 2,
          title: 'Forensic Hash Indexing',
          logger: 'CYBER-LAB-01',
          time: '2023-10-24 12:40Z',
        },
      ],
      evidenceImages: [
        {
          id: 'EV-01',
          label: 'Seized Mobile Terminal',
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9VVrxMxBs6rSdKs-bfNrZ5ORuVPEfL353gCRGyU7M3sbGJf10tKUifIYYXSiZw6_Jd8gYWtPlq-j1DoQaEfbk1m5h6GTqZsQ57SZhC-mP4EyUW8uYw7e-BR6hZWG-T2yl2pIEgIInBGBo924BFvO5sda_6RWPkvApHSPXlrx-cvADvPBmg2gsFHwSugngo15gnGfDy0U2KqEJSLXCSk9_GWG5hvneAkauQ3z0Z2DOCZlM9SDuk7V7vw',
        },
        {
          id: 'EV-02',
          label: 'Physical Samples',
          url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKsj-oPH47jqJZhTtKwy-pa6tA94QVygpUKYHnDj94Q3_RdgBpXtquNqz_uQwnhSN0gi7SlmaHnbEIkEuYVSMBCNIwK68Hzk-7coUZ0SZ-QwCuE-o0MrIe7SO6gdUvWO6FWRu1Wtxb_PEf-yXNxgflEW-GLuklwsv2f9xkSLo-c9InoEVWyNqmOopemwcCILVHALvA2yedw2JdPKJqPxUM2fwfLWWwaOtK5VtxTw8ivnnzeWQhk08G7w',
        },
      ],
    },
    {
      id: 'MYS-24-112',
      subject: 'Syndicate Alpha',
      category: 'Organized',
      date: '2023-10-18',
      status: 'Active',
      district: 'Mysuru Division',
      summary: 'Illegal logistics movement intercepted near national highway border.',
      custodyChain: [
        {
          step: 1,
          title: 'Vehicle Interception',
          logger: 'OFC-4102',
          time: '2023-10-18 22:10Z',
        },
      ],
      evidenceImages: [],
    },
    {
      id: 'HUB-24-055',
      subject: 'Rajesh Kumar',
      alias: 'Raju',
      category: 'Theft',
      date: '2023-09-30',
      status: 'Closed',
      district: 'Hubballi-Dharwad',
      summary: 'Grand theft auto case resolved with vehicle recovery.',
      custodyChain: [
        {
          step: 1,
          title: 'FIR Filed',
          logger: 'OFC-9912',
          time: '2023-09-30 08:00Z',
        },
        {
          step: 2,
          title: 'Property Returned',
          logger: 'OFC-9912',
          time: '2023-10-02 14:00Z',
        },
      ],
      evidenceImages: [],
    },
  ]);

  const [activeCase, setActiveCase] = useState<SearchResultCase>(cases[0]);

  const categories = ['All', 'Cyber', 'Narcotics', 'Organized', 'Theft', 'Fraud'];

  const filteredCases = cases.filter((c) => {
    if (selectedCategory !== 'All' && c.category !== selectedCategory) return false;
    if (selectedDistrict !== 'All' && c.district !== selectedDistrict) return false;
    if (queryRef && !c.id.toLowerCase().includes(queryRef.toLowerCase())) return false;
    if (querySubject && !c.subject.toLowerCase().includes(querySubject.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="w-full h-[calc(100vh-64px)] overflow-y-auto p-4 md:p-6 mt-16 max-w-[1600px] mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-headline-lg text-2xl md:text-3xl text-on-surface font-bold">
          Crime Search & Intelligence DB
        </h1>
        <p className="font-data-mono text-xs text-outline mt-1">
          KSP Central Unified Criminal Database
        </p>
      </div>

      {/* Query Filter Bar */}
      <div className="glass-panel p-5 rounded-xl border border-white/10 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="font-label-caps text-xs text-outline font-semibold block mb-1">
              Case ID / Reference
            </label>
            <input
              type="text"
              value={queryRef}
              onChange={(e) => setQueryRef(e.target.value)}
              placeholder="e.g. BLR-24-991A"
              className="w-full bg-black/60 border border-white/10 rounded-lg p-2.5 font-data-mono text-xs text-on-surface focus:border-secondary outline-none"
            />
          </div>

          <div>
            <label className="font-label-caps text-xs text-outline font-semibold block mb-1">
              Subject Name / Alias
            </label>
            <input
              type="text"
              value={querySubject}
              onChange={(e) => setQuerySubject(e.target.value)}
              placeholder="e.g. Viper"
              className="w-full bg-black/60 border border-white/10 rounded-lg p-2.5 font-data-mono text-xs text-on-surface focus:border-secondary outline-none"
            />
          </div>

          <div>
            <label className="font-label-caps text-xs text-outline font-semibold block mb-1">
              Phone / IMEI / Vehicle
            </label>
            <input
              type="text"
              value={queryPhone}
              onChange={(e) => setQueryPhone(e.target.value)}
              placeholder="e.g. 9882109920"
              className="w-full bg-black/60 border border-white/10 rounded-lg p-2.5 font-data-mono text-xs text-on-surface focus:border-secondary outline-none"
            />
          </div>

          <div>
            <label className="font-label-caps text-xs text-outline font-semibold block mb-1">
              Jurisdiction District
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full bg-black/60 border border-white/10 rounded-lg p-2.5 font-body-md text-xs text-on-surface focus:border-secondary outline-none"
            >
              <option value="All">All Districts</option>
              <option value="Bengaluru Urban">Bengaluru Urban</option>
              <option value="Mysuru Division">Mysuru Division</option>
              <option value="Hubballi-Dharwad">Hubballi-Dharwad</option>
              <option value="Mangaluru Coastal">Mangaluru Coastal</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-white/10">
          <span className="font-label-caps text-xs text-outline font-semibold mr-2">
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-label-caps transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-secondary text-on-secondary font-bold shadow-[0_0_10px_rgba(76,215,246,0.3)]'
                  : 'bg-surface-container text-outline hover:text-on-surface'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Data Table & Selected Dossier Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column Data Table */}
        <div className="lg:col-span-7 glass-panel rounded-xl overflow-hidden border border-white/10 flex flex-col">
          <div className="p-4 border-b border-white/10 bg-black/40 flex justify-between items-center">
            <span className="font-label-caps text-xs text-outline font-bold uppercase tracking-wider">
              Search Results ({filteredCases.length})
            </span>
            <span className="font-data-mono text-[10px] text-secondary">
              GRID SYNCED
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-body-md text-xs">
              <thead className="bg-black/60 text-outline font-label-caps text-[10px] uppercase border-b border-white/10">
                <tr>
                  <th className="p-3.5">Reference</th>
                  <th className="p-3.5">Subject</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">District</th>
                  <th className="p-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-data-mono">
                {filteredCases.map((item) => {
                  const isSelected = activeCase.id === item.id;
                  return (
                    <tr
                      key={item.id}
                      onClick={() => setActiveCase(item)}
                      className={`cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-secondary/15 border-l-2 border-secondary'
                          : 'hover:bg-white/5'
                      }`}
                    >
                      <td className="p-3.5 font-bold text-secondary">{item.id}</td>
                      <td className="p-3.5 text-on-surface">{item.subject}</td>
                      <td className="p-3.5">
                        <span className="bg-surface-container px-2 py-0.5 rounded text-[10px] text-primary border border-primary/20">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-3.5 text-outline-variant">{item.district}</td>
                      <td className="p-3.5">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            item.status === 'Critical'
                              ? 'bg-error/20 text-error'
                              : item.status === 'Active'
                              ? 'bg-secondary/20 text-secondary'
                              : 'bg-white/10 text-outline'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column Active Case Details */}
        <div className="lg:col-span-5 glass-panel rounded-xl p-6 border border-white/10 space-y-6">
          <div className="flex justify-between items-start border-b border-white/10 pb-4">
            <div>
              <span className="bg-secondary/20 text-secondary text-[10px] font-data-mono px-2 py-0.5 rounded font-bold">
                {activeCase.id}
              </span>
              <h3 className="font-headline-md text-xl font-bold text-on-surface mt-2">
                {activeCase.subject}
              </h3>
              <p className="font-data-mono text-xs text-outline mt-0.5">
                Jurisdiction: {activeCase.district}
              </p>
            </div>
          </div>

          {/* AI Case Summary */}
          <div className="space-y-2">
            <h4 className="font-label-caps text-xs text-primary font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">smart_toy</span>
              <span>AI Case Summary</span>
            </h4>
            <div className="bg-black/50 p-4 rounded-lg border border-white/5 font-body-md text-xs text-on-surface-variant leading-relaxed">
              {activeCase.summary}
            </div>
          </div>

          {/* Chain of Custody */}
          <div className="space-y-2">
            <h4 className="font-label-caps text-xs text-outline font-bold uppercase tracking-wider">
              Chain of Custody Timeline
            </h4>
            <div className="space-y-2">
              {activeCase.custodyChain.map((step) => (
                <div
                  key={step.step}
                  className="bg-black/40 p-3 rounded-lg border border-white/5 flex items-center justify-between text-xs font-data-mono"
                >
                  <div>
                    <span className="text-secondary font-bold mr-2">#{step.step}</span>
                    <span className="text-on-surface">{step.title}</span>
                  </div>
                  <span className="text-outline-variant text-[10px]">{step.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Evidence Gallery Hotlinked Images */}
          {activeCase.evidenceImages.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-label-caps text-xs text-outline font-bold uppercase tracking-wider">
                Evidence Gallery
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {activeCase.evidenceImages.map((img) => (
                  <div
                    key={img.id}
                    className="rounded-lg border border-white/10 overflow-hidden bg-black/60 relative group cursor-pointer"
                  >
                    <img
                      src={img.url}
                      alt={img.label}
                      className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="font-data-mono text-[10px] text-on-surface font-semibold truncate">
                        {img.id}: {img.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
