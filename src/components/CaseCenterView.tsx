import React, { useState } from 'react';

export const CaseCenterView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fir' | 'suspect' | 'evidence' | 'assign'>('fir');

  // FIR Form State
  const [firTitle, setFirTitle] = useState('Cyber Ransomware Incident - Tech Park');
  const [firDistrict, setFirDistrict] = useState('Bengaluru Urban');
  const [firCoords, setFirCoords] = useState('12.9352° N, 77.6245° E');
  const [firNarrative, setFirNarrative] = useState(
    'Unidentified cyber entity compromised local server cluster demanding crypto ransom.'
  );

  // Modal State
  const [committedCaseId, setCommittedCaseId] = useState<string | null>(null);

  const handleCommitRecord = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `BLR-2023-FIR-${Math.floor(1000 + Math.random() * 9000)}`;
    setCommittedCaseId(newId);
  };

  return (
    <div className="w-full h-[calc(100vh-64px)] overflow-y-auto p-4 md:p-6 mt-16 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-headline-lg text-2xl md:text-3xl text-on-surface font-bold">
          Case Registration Center
        </h1>
        <p className="font-data-mono text-xs text-outline mt-1">
          KSP Intelligence Intake Protocol v4.1
        </p>
      </div>

      {/* Intake Bento Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <button
          onClick={() => setActiveTab('fir')}
          className={`glass-panel p-4 rounded-xl text-left transition-all border cursor-pointer ${
            activeTab === 'fir'
              ? 'border-secondary bg-secondary/10 cyber-glow-active'
              : 'border-white/10 hover:border-white/20'
          }`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-data-mono text-[10px] text-secondary font-bold">INT-01</span>
            <span className="material-symbols-outlined text-secondary text-xl">description</span>
          </div>
          <h3 className="font-headline-md text-base font-bold text-on-surface">Register FIR</h3>
          <p className="font-body-md text-xs text-outline mt-1">First Information Report Entry</p>
        </button>

        <button
          onClick={() => setActiveTab('suspect')}
          className={`glass-panel p-4 rounded-xl text-left transition-all border cursor-pointer ${
            activeTab === 'suspect'
              ? 'border-secondary bg-secondary/10 cyber-glow-active'
              : 'border-white/10 hover:border-white/20'
          }`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-data-mono text-[10px] text-error font-bold">BIO-02</span>
            <span className="material-symbols-outlined text-error text-xl">person_add</span>
          </div>
          <h3 className="font-headline-md text-base font-bold text-on-surface">Add Criminal</h3>
          <p className="font-body-md text-xs text-outline mt-1">Biometric & Suspect Indexing</p>
        </button>

        <button
          onClick={() => setActiveTab('evidence')}
          className={`glass-panel p-4 rounded-xl text-left transition-all border cursor-pointer ${
            activeTab === 'evidence'
              ? 'border-secondary bg-secondary/10 cyber-glow-active'
              : 'border-white/10 hover:border-white/20'
          }`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-data-mono text-[10px] text-primary font-bold">EVD-03</span>
            <span className="material-symbols-outlined text-primary text-xl">upload_file</span>
          </div>
          <h3 className="font-headline-md text-base font-bold text-on-surface">Upload Evidence</h3>
          <p className="font-body-md text-xs text-outline mt-1">Digital & Physical Vault</p>
        </button>

        <button
          onClick={() => setActiveTab('assign')}
          className={`glass-panel p-4 rounded-xl text-left transition-all border cursor-pointer ${
            activeTab === 'assign'
              ? 'border-secondary bg-secondary/10 cyber-glow-active'
              : 'border-white/10 hover:border-white/20'
          }`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-data-mono text-[10px] text-outline font-bold">OPS-04</span>
            <span className="material-symbols-outlined text-outline text-xl">badge</span>
          </div>
          <h3 className="font-headline-md text-base font-bold text-on-surface">Assign Officer</h3>
          <p className="font-body-md text-xs text-outline mt-1">Investigative Task Force</p>
        </button>
      </div>

      {/* Main Intake Workspace */}
      <div className="glass-panel p-6 md:p-8 rounded-xl border border-white/10">
        {activeTab === 'fir' && (
          <form onSubmit={handleCommitRecord} className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <h2 className="font-headline-md text-lg text-on-surface font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">assignment</span>
                <span>First Information Report Intake (Protocol INT-01)</span>
              </h2>
              <span className="font-data-mono text-xs text-secondary font-bold">
                STATUS: DRAFT
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column Fields */}
              <div className="space-y-4">
                <div>
                  <label className="font-label-caps text-xs text-outline font-semibold block mb-1">
                    Incident Title
                  </label>
                  <input
                    type="text"
                    value={firTitle}
                    onChange={(e) => setFirTitle(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-2.5 font-body-md text-sm text-on-surface focus:border-secondary outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-caps text-xs text-outline font-semibold block mb-1">
                      Jurisdiction District
                    </label>
                    <select
                      value={firDistrict}
                      onChange={(e) => setFirDistrict(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-lg px-3 py-2.5 font-body-md text-sm text-on-surface focus:border-secondary outline-none"
                    >
                      <option>Bengaluru Urban</option>
                      <option>Mysuru Division</option>
                      <option>Hubballi-Dharwad</option>
                      <option>Mangaluru Coastal</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-label-caps text-xs text-outline font-semibold block mb-1">
                      Geo Coordinates
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={firCoords}
                        onChange={(e) => setFirCoords(e.target.value)}
                        className="w-full bg-black/60 border border-white/10 rounded-lg px-3 py-2.5 font-data-mono text-xs text-on-surface focus:border-secondary outline-none pr-8"
                      />
                      <button
                        type="button"
                        onClick={() => setFirCoords('12.9716° N, 77.5946° E')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-secondary hover:text-white"
                        title="My Location"
                      >
                        <span className="material-symbols-outlined text-sm">my_location</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-label-caps text-xs text-outline font-semibold block mb-1">
                    Initial Narrative & Officer Observations
                  </label>
                  <textarea
                    rows={4}
                    value={firNarrative}
                    onChange={(e) => setFirNarrative(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-lg p-3 font-body-md text-sm text-on-surface focus:border-secondary outline-none resize-none"
                  />
                </div>
              </div>

              {/* Right Column Geo Visualization */}
              <div className="flex flex-col gap-3">
                <label className="font-label-caps text-xs text-outline font-semibold">
                  Geospatial Verification
                </label>
                <div className="flex-1 min-h-[220px] rounded-lg border border-white/10 overflow-hidden relative group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4FB3kBvlYIrHpLvw89Yr3DtoYoTWmEcvafDFk9wMwLaQU0LTI1jEvDUmU1C2-oyML1JaQZY7Dsd8LXL4J07R3rHMAxsI0b4WIgxOHV_P_vG6o-EDzdAWHgpn90CTz1yHpH6KuHAOZ8A2QqfXcSqGMV2wkmsStdjbEdwbkPaSA2seUNq0TQElI1yHIRef2z1aVIxi--BevC6-dCadxf0QNw2B-jnKXX3E0W0xucCE6Ji1zlHtcBfyzzA"
                    alt="Geospatial Map"
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <span className="font-data-mono text-xs text-secondary font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary pulse-dot" />
                      <span>COORDS VERIFIED: Koramangala Sector 4</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-secondary text-on-secondary font-label-caps text-xs font-bold rounded-lg hover:bg-secondary-container transition-all shadow-[0_0_15px_rgba(76,215,246,0.3)] flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">verified</span>
                <span>COMMIT RECORD TO DB</span>
              </button>
            </div>
          </form>
        )}

        {activeTab === 'suspect' && (
          <div className="space-y-6">
            <h2 className="font-headline-md text-lg text-on-surface font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-error">fingerprint</span>
              <span>Biometric & Criminal Profile Intake (Protocol BIO-02)</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-dashed border-white/20 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-black/40 hover:border-error/50 transition-colors">
                <span className="material-symbols-outlined text-error text-4xl mb-2">add_a_photo</span>
                <span className="font-label-caps text-xs text-on-surface font-bold">
                  Upload Biometric Photo
                </span>
                <span className="font-data-mono text-[10px] text-outline mt-1">
                  MPEG / PNG / RAW (Facial Indexing)
                </span>
              </div>

              <div className="md:col-span-2 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-caps text-xs text-outline block mb-1">
                      Primary Alias
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Viper"
                      className="w-full bg-black/60 border border-white/10 rounded-lg p-2.5 font-body-md text-sm text-on-surface outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-label-caps text-xs text-outline block mb-1">
                      Government ID / Aadhaar / Passport
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ####-####-8821"
                      className="w-full bg-black/60 border border-white/10 rounded-lg p-2.5 font-body-md text-sm text-on-surface outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-label-caps text-xs text-outline block mb-1">
                    Threat Designation
                  </label>
                  <select className="w-full bg-black/60 border border-white/10 rounded-lg p-2.5 font-body-md text-sm text-on-surface outline-none">
                    <option>LEVEL 1 - CRITICAL (Armed / Cyber Offender)</option>
                    <option>LEVEL 2 - HIGH (Organized Gang Member)</option>
                    <option>LEVEL 3 - MODERATE (Property Offender)</option>
                  </select>
                </div>

                <button
                  onClick={() => alert('Biometric profile committed to KSP Cyber DB.')}
                  className="px-6 py-2.5 bg-error text-on-error font-label-caps text-xs font-bold rounded-lg hover:bg-error-container transition-all cursor-pointer"
                >
                  SAVE SUSPECT DOSSIER
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'evidence' && (
          <div className="space-y-6">
            <h2 className="font-headline-md text-lg text-on-surface font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">upload_file</span>
              <span>Secure Digital Evidence Vault (Protocol EVD-03)</span>
            </h2>

            <div className="border-2 border-dashed border-primary/30 bg-primary/5 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-primary text-5xl mb-2">cloud_upload</span>
              <span className="font-headline-md text-sm font-bold text-on-surface">
                Drag and drop classified evidence files here
              </span>
              <span className="font-data-mono text-xs text-outline mt-1">
                Supports SHA-256 Hash Indexing for Chain of Custody Compliance
              </span>
            </div>
          </div>
        )}

        {activeTab === 'assign' && (
          <div className="space-y-6">
            <h2 className="font-headline-md text-lg text-on-surface font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-outline">badge</span>
              <span>Investigative Operative Assignment (Protocol OPS-04)</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/50 p-4 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center font-data-mono text-secondary font-bold text-xs">
                    RK
                  </div>
                  <div>
                    <h4 className="font-headline-md text-sm font-bold text-on-surface">
                      Insp. R. Kumar
                    </h4>
                    <p className="font-data-mono text-[10px] text-outline">Cyber Cell - Unit 01</p>
                  </div>
                </div>
                <button
                  onClick={() => alert('Assigned Inspector R. Kumar to active docket.')}
                  className="px-3 py-1.5 bg-secondary/20 border border-secondary/50 text-secondary font-label-caps text-xs font-bold rounded hover:bg-secondary/30 cursor-pointer"
                >
                  ASSIGN
                </button>
              </div>

              <div className="bg-black/50 p-4 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center font-data-mono text-primary font-bold text-xs">
                    SP
                  </div>
                  <div>
                    <h4 className="font-headline-md text-sm font-bold text-on-surface">
                      Sub-Insp. S. Patil
                    </h4>
                    <p className="font-data-mono text-[10px] text-outline">Field Intel - Unit 04</p>
                  </div>
                </div>
                <button
                  onClick={() => alert('Assigned Sub-Inspector S. Patil to active docket.')}
                  className="px-3 py-1.5 bg-primary/20 border border-primary/50 text-primary font-label-caps text-xs font-bold rounded hover:bg-primary/30 cursor-pointer"
                >
                  ASSIGN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Success Commitment Modal */}
      {committedCaseId && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="glass-panel max-w-md w-full p-6 rounded-2xl border border-secondary/50 shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 bg-secondary/20 border border-secondary rounded-full flex items-center justify-center mx-auto text-secondary">
              <span className="material-symbols-outlined text-3xl">task_alt</span>
            </div>
            <h3 className="font-headline-lg text-2xl font-bold text-on-surface">
              Record Committed
            </h3>
            <p className="font-data-mono text-xs text-outline">
              Docket assigned official registration reference:
            </p>
            <div className="bg-black/60 py-3 px-4 rounded-lg border border-white/10 font-data-mono text-lg font-bold text-secondary tracking-widest">
              {committedCaseId}
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setCommittedCaseId(null)}
                className="flex-1 py-2.5 bg-white/10 text-on-surface font-label-caps text-xs font-bold rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Printing official docket for ${committedCaseId}...`);
                  setCommittedCaseId(null);
                }}
                className="flex-1 py-2.5 bg-secondary text-on-secondary font-label-caps text-xs font-bold rounded-lg hover:bg-secondary-container transition-colors cursor-pointer"
              >
                Print Docket
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
