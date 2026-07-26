import React, { useState } from 'react';

export const AIAssistantView: React.FC = () => {
  // Input Form States
  const [description, setDescription] = useState<string>(
    'Victim was found unconscious inside his residence. Main door was open. Blood stains were found in the bedroom. Cupboard was broken. Gold jewellery is missing. Neighbours heard shouting around 11 PM.'
  );

  const [selectedEvidence, setSelectedEvidence] = useState<string[]>([
    'Blood Sample',
    'Fingerprints',
    'CCTV Footage',
    'Mobile Phone',
  ]);

  const [witnesses, setWitnesses] = useState<string[]>([
    'Ramesh Kumar (Neighbour - Heard shouting)',
  ]);

  const [uploadCounts, setUploadCounts] = useState({
    images: 5,
    cctv: 2,
    docs: 3,
    audio: 0,
    other: 0,
  });

  // App control states
  const [loading, setLoading] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  // Results Dashboard Interactive States
  const [roadmapCompleted, setRoadmapCompleted] = useState<boolean[]>([
    true,   // 1. Secure the crime scene
    true,   // 2. Collect and preserve evidence
    false,  // 3. Record witness statements
    false,  // 4. Verify CCTV footage
    false,  // 5. Forensic analysis & FSL
    false,  // 6. Identify & interrogate suspects
    false,  // 7. Arrest & further investigation
  ]);

  const [nextActionsCompleted, setNextActionsCompleted] = useState<boolean[]>([
    true,   // Seal and guard the crime scene
    true,   // Photograph and document everything
    true,   // Collect biological and physical evidence
    false,  // Send exhibits to Forensic Science Lab
    false,  // Recover and analyse CCTV footage
    false,  // Obtain Call Detail Records (CDR)
    false,  // Identify and interrogate suspects
    false,  // Prepare seizure mahazar and case diary
  ]);

  const evidenceOptions = [
    'Blood Sample',
    'Fingerprints',
    'CCTV Footage',
    'Weapon',
    'DNA',
    'Footwear Impression',
    'Mobile Phone',
    'Wallet',
    'Vehicle',
    'Laptop / Device',
    'Other',
  ];

  const handleToggleEvidence = (option: string) => {
    if (selectedEvidence.includes(option)) {
      setSelectedEvidence(selectedEvidence.filter((item) => item !== option));
    } else {
      setSelectedEvidence([...selectedEvidence, option]);
    }
  };

  const handleAddWitness = () => {
    const name = prompt('Enter witness name / details:');
    if (name && name.trim()) {
      setWitnesses([...witnesses, name.trim()]);
    }
  };

  const handleRemoveWitness = (idx: number) => {
    setWitnesses(witnesses.filter((_, i) => i !== idx));
  };

  const handleAnalyze = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAnalyzed(true);
    }, 1500);
  };

  const handleNewAnalysis = () => {
    setAnalyzed(false);
    setDescription('');
    setSelectedEvidence([]);
    setWitnesses([]);
    setUploadCounts({
      images: 0,
      cctv: 0,
      docs: 0,
      audio: 0,
      other: 0,
    });
    setRoadmapCompleted([false, false, false, false, false, false, false]);
    setNextActionsCompleted([false, false, false, false, false, false, false, false]);
  };

  const handleExportPDF = () => {
    window.print();
  };

  const toggleRoadmap = (idx: number) => {
    const updated = [...roadmapCompleted];
    updated[idx] = !updated[idx];
    setRoadmapCompleted(updated);
  };

  const toggleNextAction = (idx: number) => {
    const updated = [...nextActionsCompleted];
    updated[idx] = !updated[idx];
    setNextActionsCompleted(updated);
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row h-[calc(100vh-64px)] mt-16 overflow-hidden w-full relative bg-[#111417] text-on-surface">
      {/* Print PDF Custom Stylesheet */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          /* 1. Force background graphics and exact color printing */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            box-sizing: border-box !important;
          }

          html, body {
            background: #ffffff !important;
            color: #0f172a !important;
            height: auto !important;
            overflow: visible !important;
          }

          /* Hide UI elements non-essential for print report */
          body * {
            visibility: hidden !important;
          }

          /* Show print container & children */
          #print-area, #print-area * {
            visibility: visible !important;
          }

          /* Unclip page containers and allow multi-page flow */
          #print-area {
            position: static !important;
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 20px !important;
            background: #ffffff !important;
            color: #0f172a !important;
            overflow: visible !important;
            height: auto !important;
          }

          /* Unclip all scrollable boxes & containers so FULL analysis content exports */
          #print-area div,
          #print-area main,
          #print-area section,
          #print-area ul,
          #print-area tbody,
          .overflow-y-auto,
          .overflow-x-auto,
          .max-h-56,
          .max-h-64 {
            overflow: visible !important;
            max-height: none !important;
            height: auto !important;
          }

          /* Prevent text truncation in print mode */
          #print-area .line-clamp-2,
          #print-area .line-clamp-3,
          #print-area [class*="line-clamp"] {
            -webkit-line-clamp: unset !important;
            line-clamp: unset !important;
            display: block !important;
          }

          /* Ensure Grid Cards layout cleanly inside PDF export */
          #print-area .grid {
            display: grid !important;
            overflow: visible !important;
          }

          /* High-Contrast Card Styling for White PDF Output */
          #print-area .glass-panel,
          #print-area .glass-card {
            background-color: #f8fafc !important;
            border: 1.5px solid #cbd5e1 !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
            margin-bottom: 12px !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            color: #0f172a !important;
          }

          /* 2. ENLARGED & HIGH CONTRAST DARK FONTS FOR PDF EXPORT */
          #print-area {
            font-size: 13px !important;
            line-height: 1.5 !important;
          }

          #print-area h1, #print-area h2, #print-area h3, #print-area h4, #print-area h5, #print-area h6 {
            color: #020617 !important;
            font-weight: 800 !important;
          }

          #print-area p, #print-area span, #print-area td, #print-area th, #print-area li, #print-area div {
            color: #0f172a !important;
          }

          /* Elevate small font sizes so text is big & dark */
          #print-area .text-\[8px\],
          #print-area .text-\[9px\] {
            font-size: 11px !important;
            font-weight: 600 !important;
            color: #1e293b !important;
          }

          #print-area .text-\[10px\],
          #print-area .text-\[11px\] {
            font-size: 13px !important;
            font-weight: 600 !important;
            color: #0f172a !important;
          }

          #print-area .text-xs {
            font-size: 14px !important;
            font-weight: 700 !important;
            color: #020617 !important;
          }

          #print-area .text-sm {
            font-size: 16px !important;
            font-weight: 800 !important;
            color: #020617 !important;
          }

          #print-area .text-base {
            font-size: 18px !important;
            font-weight: 800 !important;
            color: #020617 !important;
          }

          #print-area .text-outline,
          #print-area .text-outline-variant,
          #print-area .text-on-surface-variant {
            color: #334155 !important;
            font-weight: 600 !important;
          }

          #print-area .text-secondary {
            color: #0284c7 !important;
            font-weight: 700 !important;
          }

          #print-area .text-on-surface {
            color: #0f172a !important;
            font-weight: 700 !important;
          }

          /* Badges & Background Accents */
          #print-area .bg-white\/5,
          #print-area .bg-white\/10 {
            background-color: #f1f5f9 !important;
            border-color: #cbd5e1 !important;
          }

          /* Hide interactive navigation links & buttons */
          .no-print, button, a[href^="#"] {
            display: none !important;
          }
        }
      `}} />

      {/* Left Input Sidebar Panel */}
      <aside className="w-full md:w-[380px] flex-shrink-0 border-r border-white/10 bg-[#0e1014] overflow-y-auto p-4 md:p-6 flex flex-col gap-5 no-print">
        {/* Header with New Analysis Button */}
        <div className="flex justify-between items-center pb-2 border-b border-white/5">
          <h2 className="font-label-caps text-xs text-secondary font-bold tracking-wider uppercase">
            Crime Assessment Form
          </h2>
          <button
            onClick={handleNewAnalysis}
            className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] rounded border border-white/10 bg-white/5 text-outline hover:text-white hover:bg-white/10 transition-all font-data-mono cursor-pointer"
            title="Reset form for new analysis"
          >
            <span className="material-symbols-outlined text-[12px]">refresh</span>
            <span>Reset Form</span>
          </button>
        </div>

        {/* 1. Crime Scene Description */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h3 className="font-label-caps text-[11px] text-on-surface font-semibold tracking-wide uppercase">
              1. Crime Scene Description
            </h3>
            <span className="font-data-mono text-[9px] text-outline-variant">
              {description.length} / 2000
            </span>
          </div>
          <p className="text-[10px] text-outline-variant leading-relaxed">
            Describe the crime scene, surroundings, and sequence of events.
          </p>
          <div className="relative">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter crime scene details..."
              className="w-full bg-[#16191d] border border-white/10 rounded-lg p-3 text-xs text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary/20 outline-none h-32 resize-none transition-all placeholder:text-outline-variant"
            />
            <button
              onClick={() => alert('Voice input activated. Please speak details.')}
              className="absolute bottom-3 right-3 text-outline-variant hover:text-primary transition-colors cursor-pointer"
              title="Voice Input"
            >
              <span className="material-symbols-outlined text-[18px]">mic</span>
            </button>
          </div>
        </div>

        {/* 2. Evidence Collected */}
        <div className="flex flex-col gap-2">
          <h3 className="font-label-caps text-[11px] text-on-surface font-semibold tracking-wide uppercase">
            2. Evidence Collected <span className="text-outline-variant text-[10px] lowercase">(select)</span>
          </h3>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {evidenceOptions.map((option) => {
              const isSelected = selectedEvidence.includes(option);
              return (
                <button
                  key={option}
                  onClick={() => handleToggleEvidence(option)}
                  className={`px-2.5 py-1.5 rounded text-[10px] border font-body-md transition-all flex items-center gap-1 cursor-pointer ${
                    isSelected
                      ? 'bg-secondary/15 border-secondary/50 text-secondary font-medium shadow-[0_0_8px_rgba(76,215,246,0.15)]'
                      : 'bg-[#16191d] border-white/5 text-outline-variant hover:border-white/20'
                  }`}
                >
                  {isSelected && <span className="material-symbols-outlined text-[10px]">check</span>}
                  <span>{option}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Witness Information */}
        <div className="flex flex-col gap-2">
          <h3 className="font-label-caps text-[11px] text-on-surface font-semibold tracking-wide uppercase">
            3. Witness Information <span className="text-outline-variant text-[10px] lowercase">(optional)</span>
          </h3>
          {witnesses.length > 0 && (
            <ul className="space-y-1.5 my-1">
              {witnesses.map((w, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-[#16191d] border border-white/5 rounded px-2.5 py-1.5 text-[10px] text-on-surface"
                >
                  <span className="truncate max-w-[280px]">{w}</span>
                  <button
                    onClick={() => handleRemoveWitness(idx)}
                    className="text-outline-variant hover:text-error transition-colors"
                  >
                    <span className="material-symbols-outlined text-[14px]">delete</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={handleAddWitness}
            className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#16191d] border border-dashed border-white/10 text-[10px] text-outline hover:text-white hover:bg-white/5 transition-all cursor-pointer font-medium"
          >
            <span className="material-symbols-outlined text-[14px]">add</span>
            <span>Add Witness</span>
          </button>
        </div>

        {/* 4. Upload Evidence */}
        <div className="flex flex-col gap-2">
          <h3 className="font-label-caps text-[11px] text-on-surface font-semibold tracking-wide uppercase">
            4. Upload Evidence
          </h3>
          <div className="grid grid-cols-2 gap-2 mt-1">
            {/* Images */}
            <button
              onClick={() => setUploadCounts({ ...uploadCounts, images: uploadCounts.images + 1 })}
              className="bg-[#16191d] border border-white/5 hover:border-secondary/40 rounded-lg p-2.5 flex flex-col items-center justify-center gap-1 transition-all cursor-pointer group"
            >
              <span className="material-symbols-outlined text-[18px] text-outline-variant group-hover:text-secondary">photo_camera</span>
              <span className="text-[10px] text-on-surface font-medium truncate">Crime Images</span>
              <span className="font-data-mono text-[9px] text-secondary">{uploadCounts.images} files</span>
            </button>

            {/* Video */}
            <button
              onClick={() => setUploadCounts({ ...uploadCounts, cctv: uploadCounts.cctv + 1 })}
              className="bg-[#16191d] border border-white/5 hover:border-secondary/40 rounded-lg p-2.5 flex flex-col items-center justify-center gap-1 transition-all cursor-pointer group"
            >
              <span className="material-symbols-outlined text-[18px] text-outline-variant group-hover:text-secondary">videocam</span>
              <span className="text-[10px] text-on-surface font-medium truncate">CCTV Footage</span>
              <span className="font-data-mono text-[9px] text-secondary">{uploadCounts.cctv} files</span>
            </button>

            {/* Documents */}
            <button
              onClick={() => setUploadCounts({ ...uploadCounts, docs: uploadCounts.docs + 1 })}
              className="bg-[#16191d] border border-white/5 hover:border-secondary/40 rounded-lg p-2.5 flex flex-col items-center justify-center gap-1 transition-all cursor-pointer group"
            >
              <span className="material-symbols-outlined text-[18px] text-outline-variant group-hover:text-secondary">description</span>
              <span className="text-[10px] text-on-surface font-medium truncate">Documents</span>
              <span className="font-data-mono text-[9px] text-secondary">{uploadCounts.docs} files</span>
            </button>

            {/* Audio */}
            <button
              onClick={() => setUploadCounts({ ...uploadCounts, audio: uploadCounts.audio + 1 })}
              className="bg-[#16191d] border border-white/5 hover:border-secondary/40 rounded-lg p-2.5 flex flex-col items-center justify-center gap-1 transition-all cursor-pointer group"
            >
              <span className="material-symbols-outlined text-[18px] text-outline-variant group-hover:text-secondary">volume_up</span>
              <span className="text-[10px] text-on-surface font-medium truncate">Audio Tracks</span>
              <span className="font-data-mono text-[9px] text-secondary">{uploadCounts.audio} files</span>
            </button>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleAnalyze}
          disabled={loading || !description.trim()}
          className="w-full py-3 bg-primary text-on-primary font-label-caps text-xs font-bold rounded-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(173,198,255,0.15)] disabled:opacity-50 mt-2"
        >
          <span className="material-symbols-outlined text-sm">psychology</span>
          <span>ANALYZE CRIME</span>
        </button>
      </aside>

      {/* Right Dashboard Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#0b0c10] relative flex flex-col">
        {loading ? (
          /* Sleek scanning loading screen */
          <div className="flex-1 flex flex-col items-center justify-center text-center my-auto py-12">
            <div className="relative w-24 h-24 mb-6">
              <span className="material-symbols-outlined text-secondary text-7xl animate-pulse">
                radar
              </span>
              <div className="absolute inset-0 border-2 border-secondary/30 rounded-full animate-ping" />
            </div>
            <h3 className="font-headline-md text-lg text-on-surface font-bold mb-1 tracking-wider uppercase">
              AI Analysis in Progress
            </h3>
            <p className="font-data-mono text-xs text-outline-variant max-w-sm mb-4">
              Running spatial-temporal matching engine, scraping district records, and parsing legal segments...
            </p>
            <div className="w-48 h-1 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-2/3 rounded-full animate-[loading-bar_1.5s_infinite_linear]" style={{
                backgroundImage: 'linear-gradient(90deg, #4cd7f6 0%, #4c7df6 100%)'
              }} />
            </div>
          </div>
        ) : !analyzed ? (
          /* Awaiting State */
          <div className="flex-1 flex flex-col items-center justify-center text-center my-auto py-12 max-w-xl mx-auto">
            <span className="material-symbols-outlined text-primary text-6xl opacity-30 mb-4">
              query_stats
            </span>
            <h3 className="font-headline-md text-xl text-on-surface font-bold mb-2">
              Awaiting Crime Details
            </h3>
            <p className="font-body-md text-xs text-outline-variant leading-relaxed mb-6">
              Please enter the crime description, select any recovered evidence, and click the <strong>Analyze Crime</strong> button in the left panel. The AI Assistant will construct a visual tactical analysis layout, suspect classification, and next steps roadmap.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#16191d] border border-white/5 rounded font-data-mono text-[10px] text-outline">
              <span className="material-symbols-outlined text-[12px] text-secondary">security</span>
              <span>KSP Crime Analysis Module v3.1</span>
            </div>
          </div>
        ) : (
          /* The Dashboard Grid */
          <div id="print-area" className="flex-1 flex flex-col gap-6">
            {/* Print Official Document Header (Visible only when exported/printed) */}
            <div className="hidden print:block pb-4 mb-2 border-b-2 border-slate-700 text-slate-900">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-xl font-extrabold uppercase tracking-wide text-slate-900">
                    KARNATAKA STATE POLICE
                  </h1>
                  <p className="text-xs font-bold text-slate-700">
                    Crime Intelligence Command Center • Official Tactical AI Analysis Report
                  </p>
                </div>
                <div className="text-right text-xs text-slate-700 font-mono">
                  <p className="font-bold text-red-700 uppercase">CONFIDENTIAL / LAW ENFORCEMENT</p>
                  <p>Report Generated: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                </div>
              </div>
            </div>

            {/* Top Info Banner */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-xl border border-secondary/20 bg-secondary/5 relative overflow-hidden">
              <div className="scan-line" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-secondary/15 flex items-center justify-center text-secondary border border-secondary/30">
                  <span className="material-symbols-outlined text-[20px]">task_alt</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-sm md:text-base font-bold text-on-surface">
                    ANALYSIS COMPLETE
                  </h4>
                  <p className="font-data-mono text-[10px] text-outline">
                    Report generated on 24 May 2025, 10:45 AM
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 sm:mt-0 bg-[#0e1014] border border-white/10 px-3 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-secondary pulse-dot" />
                <span className="font-data-mono text-[10px] text-secondary font-semibold">
                  SECURE LINK ACTIVE
                </span>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="grid grid-cols-12 gap-4 lg:gap-6 flex-1">
              
              {/* Row 1, Col 1: Crime Classification */}
              <div className="col-span-12 md:col-span-4 glass-panel rounded-xl p-4 flex flex-col">
                <div className="flex justify-between items-center mb-3 pb-1 border-b border-white/5">
                  <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
                    Crime Classification
                  </span>
                  <span className="material-symbols-outlined text-outline text-sm">gavel</span>
                </div>
                
                <div className="flex-1 flex flex-col justify-center gap-3">
                  {/* Robbery */}
                  <div>
                    <div className="flex justify-between font-data-mono text-[10px] mb-1">
                      <span className="text-on-surface">Robbery</span>
                      <span className="text-error font-semibold">92%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-error rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>

                  {/* House Breaking */}
                  <div>
                    <div className="flex justify-between font-data-mono text-[10px] mb-1">
                      <span className="text-on-surface">House Breaking</span>
                      <span className="text-secondary font-semibold">81%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: '81%' }} />
                    </div>
                  </div>

                  {/* Assault */}
                  <div>
                    <div className="flex justify-between font-data-mono text-[10px] mb-1">
                      <span className="text-on-surface">Assault</span>
                      <span className="text-yellow-500 font-semibold">40%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '40%' }} />
                    </div>
                  </div>

                  {/* Homicide */}
                  <div>
                    <div className="flex justify-between font-data-mono text-[10px] mb-1">
                      <span className="text-on-surface">Homicide</span>
                      <span className="text-green-500 font-semibold">25%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '25%' }} />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center">
                  <span className="font-body-md text-[10px] text-outline-variant">AI Confidence Score:</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-data-mono bg-green-500/10 text-green-400 border border-green-500/20 font-semibold">
                    High (82%)
                  </span>
                </div>
              </div>

              {/* Row 1, Col 2: Investigation Roadmap */}
              <div className="col-span-12 md:col-span-4 glass-panel rounded-xl p-4 flex flex-col">
                <div className="flex justify-between items-center mb-3 pb-1 border-b border-white/5">
                  <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
                    Investigation Roadmap
                  </span>
                  <span className="material-symbols-outlined text-outline text-sm">route</span>
                </div>
                
                <div className="flex-1 space-y-2 overflow-y-auto max-h-56 pr-1">
                  {[
                    'Secure the crime scene',
                    'Collect and preserve evidence',
                    'Record witness statements',
                    'Verify CCTV footage',
                    'Forensic analysis & FSL',
                    'Identify & interrogate suspects',
                    'Arrest & further investigation',
                  ].map((step, idx) => {
                    const isDone = roadmapCompleted[idx];
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleRoadmap(idx)}
                        className={`flex items-start gap-2.5 p-2 rounded cursor-pointer transition-colors ${
                          isDone ? 'bg-secondary/5 text-on-surface' : 'hover:bg-white/5 text-outline-variant'
                        }`}
                      >
                        <span className={`material-symbols-outlined text-sm mt-0.5 select-none ${
                          isDone ? 'text-secondary font-bold' : 'text-outline-variant/60'
                        }`}>
                          {isDone ? 'check_circle' : 'radio_button_unchecked'}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-body-md leading-tight">
                            <span className="font-data-mono mr-1">Step {idx + 1}:</span> {step}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Row 1, Col 3: Evidence Analysis */}
              <div className="col-span-12 md:col-span-4 glass-panel rounded-xl p-4 flex flex-col">
                <div className="flex justify-between items-center mb-3 pb-1 border-b border-white/5">
                  <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
                    Evidence Analysis
                  </span>
                  <span className="material-symbols-outlined text-outline text-sm">biotech</span>
                </div>
                
                <div className="flex-1 overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="font-data-mono text-[9px] text-outline pb-1.5 uppercase font-medium">Evidence</th>
                        <th className="font-data-mono text-[9px] text-outline pb-1.5 uppercase font-medium">AI Suggestion</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-body-md text-[10px]">
                      <tr>
                        <td className="py-2 text-on-surface font-medium">Blood Sample</td>
                        <td className="py-2 text-outline-variant">Send for DNA profiling</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-on-surface font-medium">Fingerprints</td>
                        <td className="py-2 text-outline-variant">Run through AFIS database</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-on-surface font-medium">CCTV Footage</td>
                        <td className="py-2 text-outline-variant">Enhance and identify movements</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-on-surface font-medium">Iron Rod (Weapon)</td>
                        <td className="py-2 text-outline-variant">Check for fingerprints & blood</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-on-surface font-medium">Mobile Phone</td>
                        <td className="py-2 text-outline-variant">Recover call history, GPS, data</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-2 pt-2 border-t border-white/5">
                  <a
                    href="#detailed-analysis"
                    onClick={(e) => { e.preventDefault(); alert('Opening Detailed Evidence Log'); }}
                    className="font-data-mono text-[9px] text-secondary hover:underline flex items-center justify-end gap-1"
                  >
                    <span>View Detailed Analysis</span>
                    <span className="material-symbols-outlined text-[10px]">arrow_right_alt</span>
                  </a>
                </div>
              </div>

              {/* Row 2, Col 1: Suspect Analysis */}
              <div className="col-span-12 md:col-span-6 glass-panel rounded-xl p-4 flex flex-col">
                <div className="flex justify-between items-center mb-3 pb-1 border-b border-white/5">
                  <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
                    Suspect Analysis <span className="text-[10px] text-outline-variant lowercase">(persons of interest)</span>
                  </span>
                  <span className="material-symbols-outlined text-outline text-sm">groups</span>
                </div>

                <div className="flex-1 space-y-2.5">
                  {/* Primary Lead */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-error/15 border border-error/30 flex items-center justify-center text-error">
                        <span className="material-symbols-outlined text-sm">person</span>
                      </div>
                      <div>
                        <h5 className="text-[11px] font-bold text-on-surface">Primary Lead</h5>
                        <p className="text-[9px] text-outline">Known Associate</p>
                        <p className="text-[9px] text-outline-variant mt-0.5 leading-relaxed">
                          Reason: Financial dispute with victim last week. Seen in CCTV near location.
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-error font-data-mono text-xs font-bold">78%</span>
                      <p className="text-[8px] text-outline-variant">Confidence</p>
                    </div>
                  </div>

                  {/* Secondary Lead */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center text-yellow-500">
                        <span className="material-symbols-outlined text-sm">person</span>
                      </div>
                      <div>
                        <h5 className="text-[11px] font-bold text-on-surface">Secondary Lead</h5>
                        <p className="text-[9px] text-outline">Neighbour</p>
                        <p className="text-[9px] text-outline-variant mt-0.5 leading-relaxed">
                          Reason: Heard shouting at 11 PM. Was seen near the house.
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-yellow-500 font-data-mono text-xs font-bold">65%</span>
                      <p className="text-[8px] text-outline-variant">Confidence</p>
                    </div>
                  </div>

                  {/* Repeat Offender */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center text-yellow-500">
                        <span className="material-symbols-outlined text-sm">person</span>
                      </div>
                      <div>
                        <h5 className="text-[11px] font-bold text-on-surface">Repeat Offender</h5>
                        <p className="text-[9px] text-outline">History Match</p>
                        <p className="text-[9px] text-outline-variant mt-0.5 leading-relaxed">
                          Reason: Similar modus operandi in previous 3 robbery cases nearby.
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-yellow-500 font-data-mono text-xs font-bold">61%</span>
                      <p className="text-[8px] text-outline-variant">Confidence</p>
                    </div>
                  </div>

                  {/* Unknown Person */}
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-500">
                        <span className="material-symbols-outlined text-sm">person_search</span>
                      </div>
                      <div>
                        <h5 className="text-[11px] font-bold text-on-surface">Unknown Person</h5>
                        <p className="text-[9px] text-outline">External Intruder</p>
                        <p className="text-[9px] text-outline-variant mt-0.5 leading-relaxed">
                          Reason: Forced entry from window. Unidentified fingerprints found.
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-green-500 font-data-mono text-xs font-bold">54%</span>
                      <p className="text-[8px] text-outline-variant">Confidence</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5">
                  <a
                    href="#all-persons"
                    onClick={(e) => { e.preventDefault(); alert('Opening Persons of Interest Map'); }}
                    className="font-data-mono text-[9px] text-secondary hover:underline flex items-center justify-end gap-1"
                  >
                    <span>View All Persons of Interest</span>
                    <span className="material-symbols-outlined text-[10px]">arrow_right_alt</span>
                  </a>
                </div>
              </div>

              {/* Row 2, Col 2: Similar Cases */}
              <div className="col-span-12 md:col-span-6 glass-panel rounded-xl p-4 flex flex-col">
                <div className="flex justify-between items-center mb-3 pb-1 border-b border-white/5">
                  <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
                    Similar Cases <span className="text-[10px] text-outline-variant lowercase">(from database)</span>
                  </span>
                  <span className="material-symbols-outlined text-outline text-sm">history</span>
                </div>

                <div className="flex-1 space-y-3">
                  {/* Case 1 */}
                  <div className="p-3 bg-white/5 border border-white/5 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-secondary/15 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-sm">folder_open</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h6 className="text-[11px] font-bold text-on-surface">FIR No: 2024/245</h6>
                          <span className="px-1.5 py-0.5 rounded text-[8px] bg-red-500/10 text-red-400 font-data-mono font-medium">Robbery</span>
                          <span className="px-1.5 py-0.5 rounded text-[8px] bg-secondary/10 text-secondary font-data-mono font-medium">House Breaking</span>
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-[9px] text-outline-variant">
                          <span>Similarity: <strong className="text-secondary font-bold">92%</strong></span>
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          <span className="text-green-400">Solved</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => alert('Loading Case 2024/245 Details')}
                      className="px-2.5 py-1 text-[9px] bg-secondary text-on-secondary rounded hover:bg-secondary/90 transition-colors font-data-mono cursor-pointer"
                    >
                      View Case
                    </button>
                  </div>

                  {/* Case 2 */}
                  <div className="p-3 bg-white/5 border border-white/5 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-secondary/15 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-sm">folder_open</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h6 className="text-[11px] font-bold text-on-surface">FIR No: 2024/118</h6>
                          <span className="px-1.5 py-0.5 rounded text-[8px] bg-red-500/10 text-red-400 font-data-mono font-medium">Robbery</span>
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-[9px] text-outline-variant">
                          <span>Similarity: <strong className="text-secondary font-bold">89%</strong></span>
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          <span className="text-green-400">Solved</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => alert('Loading Case 2024/118 Details')}
                      className="px-2.5 py-1 text-[9px] bg-secondary text-on-secondary rounded hover:bg-secondary/90 transition-colors font-data-mono cursor-pointer"
                    >
                      View Case
                    </button>
                  </div>

                  {/* Case 3 */}
                  <div className="p-3 bg-white/5 border border-white/5 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-secondary/15 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-sm">folder_open</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h6 className="text-[11px] font-bold text-on-surface">FIR No: 2024/401</h6>
                          <span className="px-1.5 py-0.5 rounded text-[8px] bg-secondary/10 text-secondary font-data-mono font-medium">House Breaking</span>
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-[9px] text-outline-variant">
                          <span>Similarity: <strong className="text-secondary font-bold">85%</strong></span>
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          <span className="text-green-400">Solved</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => alert('Loading Case 2024/401 Details')}
                      className="px-2.5 py-1 text-[9px] bg-secondary text-on-secondary rounded hover:bg-secondary/90 transition-colors font-data-mono cursor-pointer"
                    >
                      View Case
                    </button>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5">
                  <a
                    href="#more-similar"
                    onClick={(e) => { e.preventDefault(); alert('Opening Similar Case Query Archive'); }}
                    className="font-data-mono text-[9px] text-secondary hover:underline flex items-center justify-end gap-1"
                  >
                    <span>View More Similar Cases</span>
                    <span className="material-symbols-outlined text-[10px]">arrow_right_alt</span>
                  </a>
                </div>
              </div>

              {/* Row 3, Col 1: Applicable Laws */}
              <div className="col-span-12 md:col-span-4 glass-panel rounded-xl p-4 flex flex-col">
                <div className="flex justify-between items-center mb-3 pb-1 border-b border-white/5">
                  <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
                    Applicable Laws <span className="text-[10px] text-outline-variant lowercase">(AI retrieved)</span>
                  </span>
                  <span className="material-symbols-outlined text-outline text-sm">menu_book</span>
                </div>

                <div className="flex-1 space-y-3">
                  {/* BNS Section 395 */}
                  <div className="p-2.5 rounded bg-white/5 border border-white/5 flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold text-on-surface">BNS Section 395</span>
                      <button
                        onClick={() => alert('Retrieved BNS Section 395 full details')}
                        className="px-2 py-0.5 rounded text-[8px] bg-surface border border-white/10 hover:bg-white/5 font-data-mono cursor-pointer"
                      >
                        Read More
                      </button>
                    </div>
                    <p className="text-[8px] font-data-mono text-secondary">Dacoity</p>
                    <p className="text-[9px] text-outline-variant leading-relaxed line-clamp-2">
                      Whoever commits dacoity shall be punished with imprisonment for life, and shall also be liable to fine.
                    </p>
                  </div>

                  {/* BNS Section 454 */}
                  <div className="p-2.5 rounded bg-white/5 border border-white/5 flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold text-on-surface">BNS Section 454</span>
                      <button
                        onClick={() => alert('Retrieved BNS Section 454 full details')}
                        className="px-2 py-0.5 rounded text-[8px] bg-surface border border-white/10 hover:bg-white/5 font-data-mono cursor-pointer"
                      >
                        Read More
                      </button>
                    </div>
                    <p className="text-[8px] font-data-mono text-secondary">House-trespass</p>
                    <p className="text-[9px] text-outline-variant leading-relaxed line-clamp-2">
                      Lurking house-trespass or house-breaking in order to commit offence punishable with imprisonment.
                    </p>
                  </div>

                  {/* Evidence Act Section 27 */}
                  <div className="p-2.5 rounded bg-white/5 border border-white/5 flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold text-on-surface">Evidence Act Section 27</span>
                      <button
                        onClick={() => alert('Retrieved Evidence Act Section 27 full details')}
                        className="px-2 py-0.5 rounded text-[8px] bg-surface border border-white/10 hover:bg-white/5 font-data-mono cursor-pointer"
                      >
                        Read More
                      </button>
                    </div>
                    <p className="text-[8px] font-data-mono text-secondary font-medium">Fact Discovery</p>
                    <p className="text-[9px] text-outline-variant leading-relaxed line-clamp-2">
                      Information received from accused leading to discovery of fact may be proved.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 3, Col 2: Recommended Next Actions */}
              <div className="col-span-12 md:col-span-4 glass-panel rounded-xl p-4 flex flex-col">
                <div className="flex justify-between items-center mb-3 pb-1 border-b border-white/5">
                  <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
                    Recommended Next Actions
                  </span>
                  <span className="material-symbols-outlined text-outline text-sm">checklist</span>
                </div>

                <div className="flex-1 space-y-2 overflow-y-auto max-h-64 pr-1">
                  {[
                    'Seal and guard the crime scene',
                    'Photograph and document everything',
                    'Collect biological and physical evidence',
                    'Send exhibits to Forensic Science Lab',
                    'Recover and analyse CCTV footage',
                    'Obtain Call Detail Records (CDR)',
                    'Identify and interrogate suspects',
                    'Prepare seizure mahazar and case diary',
                  ].map((action, idx) => {
                    const isDone = nextActionsCompleted[idx];
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleNextAction(idx)}
                        className={`flex items-start gap-2 p-1.5 rounded cursor-pointer transition-colors ${
                          isDone ? 'bg-white/5 text-on-surface' : 'hover:bg-white/5 text-outline-variant'
                        }`}
                      >
                        <span className={`material-symbols-outlined text-[15px] mt-0.5 select-none ${
                          isDone ? 'text-secondary' : 'text-outline-variant/60'
                        }`}>
                          {isDone ? 'check_box' : 'check_box_outline_blank'}
                        </span>
                        <span className="text-[10px] font-body-md leading-tight">
                          {action}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Row 3, Col 3: Investigation Summary */}
              <div className="col-span-12 md:col-span-4 glass-panel rounded-xl p-4 flex flex-col">
                <div className="flex justify-between items-center mb-3 pb-1 border-b border-white/5">
                  <span className="font-label-caps text-xs text-outline font-semibold tracking-wider uppercase">
                    Investigation Summary
                  </span>
                  <span className="material-symbols-outlined text-outline text-sm">assignment</span>
                </div>

                <div className="flex-1 flex flex-col gap-3 font-body-md text-[10px]">
                  <div className="flex items-start gap-2 border-b border-white/5 pb-2">
                    <span className="material-symbols-outlined text-outline-variant text-[14px] mt-0.5">warning</span>
                    <div>
                      <p className="text-outline-variant text-[9px] uppercase font-data-mono">Crime Type</p>
                      <p className="text-on-surface font-semibold">Robbery (High Probability)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 border-b border-white/5 pb-2">
                    <span className="material-symbols-outlined text-outline-variant text-[14px] mt-0.5">location_on</span>
                    <div>
                      <p className="text-outline-variant text-[9px] uppercase font-data-mono">Location</p>
                      <p className="text-on-surface font-semibold">Mysuru City, Vijayanagar 2nd Stage</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 border-b border-white/5 pb-2">
                    <span className="material-symbols-outlined text-outline-variant text-[14px] mt-0.5">schedule</span>
                    <div>
                      <p className="text-outline-variant text-[9px] uppercase font-data-mono">Date & Time</p>
                      <p className="text-on-surface font-semibold">23 May 2025, Around 11:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 border-b border-white/5 pb-2">
                    <span className="material-symbols-outlined text-outline-variant text-[14px] mt-0.5">medical_services</span>
                    <div>
                      <p className="text-outline-variant text-[9px] uppercase font-data-mono">Victim Condition</p>
                      <p className="text-on-surface font-semibold">Unconscious (Hospitalized)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 border-b border-white/5 pb-2">
                    <span className="material-symbols-outlined text-outline-variant text-[14px] mt-0.5">shield</span>
                    <div className="flex-1 flex justify-between items-center">
                      <div>
                        <p className="text-outline-variant text-[9px] uppercase font-data-mono">Evidence Strength</p>
                        <p className="text-on-surface font-semibold">Strong</p>
                      </div>
                      <span className="px-1.5 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-[9px] font-data-mono font-bold">
                        STRONG
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-outline-variant text-[14px] mt-0.5">neurology</span>
                    <div className="flex-1 flex justify-between items-center">
                      <div>
                        <p className="text-outline-variant text-[9px] uppercase font-data-mono">AI Report Confidence</p>
                        <p className="text-on-surface font-semibold">82%</p>
                      </div>
                      <span className="px-1.5 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-[9px] font-data-mono font-bold">
                        82%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </main>

      {/* Floating Export PDF FAB Button */}
      {analyzed && !loading && (
        <button
          onClick={handleExportPDF}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-secondary text-on-secondary hover:bg-secondary-container hover:scale-105 transition-all shadow-[0_4px_20px_rgba(76,215,246,0.4)] hover:shadow-[0_4px_25px_rgba(76,215,246,0.6)] font-label-caps text-xs font-bold cursor-pointer no-print animate-fade-in"
        >
          <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
          <span>EXPORT PDF</span>
        </button>
      )}
    </div>
  );
};
