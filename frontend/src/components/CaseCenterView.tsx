import React, { useState } from 'react';

// Type definitions for Registration Center
type RegisterType =
  // Master Data
  | 'station'
  | 'officer'
  | 'court'
  | 'case-category'
  | 'gravity-offence'
  | 'act'
  | 'section'
  // Transaction Data
  | 'fir'
  | 'complainant'
  | 'victim'
  | 'accused'
  | 'arrest'
  | 'chargesheet';

export const CaseCenterView: React.FC = () => {
  // Active Navigation & View Modes
  const [activeRegister, setActiveRegister] = useState<RegisterType>('station');
  const [activeTab, setActiveTab] = useState<'add' | 'search'>('add');
  const [globalSearch, setGlobalSearch] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modal States
  const [deleteModalId, setDeleteModalId] = useState<string | null>(null);
  const [viewRecordData, setViewRecordData] = useState<any | null>(null);

  // Pagination State
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // --------------------------------------------------
  // FORM STATES FOR ALL 13 REGISTERS
  // --------------------------------------------------

  // 1. Police Station Form State
  const [stationForm, setStationForm] = useState({
    code: 'PS-2025-1567',
    type: 'Police Station',
    head: 'Ramesh Kumar',
    name: 'Mysuru South Police Station',
    estDate: '1987-06-15',
    headMobile: '9481234567',
    district: 'Mysuru',
    jurisdiction: 'Mysuru South Taluk',
    status: 'Active',
    address: 'Lashkar Mohalla, Mysuru, Karnataka 570001',
    lat: '12.2958',
    lng: '76.6394',
    phone: '0821-2412345',
    email: 'mysurusouthps@ksp.gov.in',
  });

  // 2. Police Officer Form State
  const [officerForm, setOfficerForm] = useState({
    badgeNo: 'KGID-84920',
    name: 'Suresh Patil',
    rank: 'Inspector of Police (PI)',
    station: 'Mysuru South PS',
    mobile: '9845123456',
    email: 'suresh.patil@ksp.gov.in',
    gender: 'Male',
    joiningDate: '2012-04-10',
    status: 'Active',
  });

  // 3. Court Form State
  const [courtForm, setCourtForm] = useState({
    courtCode: 'CRT-MYS-01',
    courtName: 'Principal District & Sessions Court',
    courtType: 'District Court',
    judgeName: 'Justice H. R. Venkatesh',
    district: 'Mysuru',
    jurisdiction: 'Mysuru District Judicial Division',
    address: 'Courts Complex, Krishnaraja Circle, Mysuru 570001',
    phone: '0821-2423322',
  });

  // 4. Case Category Form State
  const [categoryForm, setCategoryForm] = useState({
    categoryCode: 'CAT-CR-04',
    categoryName: 'Cyber Crime & Online Fraud',
    severity: 'High',
    description: 'Offences involving digital fraud, phishing, identity theft, and IT Act violations.',
    actRef: 'Information Technology Act 2000',
    status: 'Active',
  });

  // 5. Gravity Offence Form State
  const [gravityForm, setGravityForm] = useState({
    offenceCode: 'OFF-GRV-102',
    offenceName: 'Armed Robbery & Dacoity',
    classification: 'Heinous Offence',
    maxPunishment: '10 Years Rigorous Imprisonment to Life',
    bailable: 'Non-Bailable',
    cognizable: 'Cognizable',
  });

  // 6. Act Form State
  const [actForm, setActForm] = useState({
    actCode: 'ACT-BNS-2023',
    shortName: 'BNS 2023',
    fullName: 'Bharatiya Nyaya Sanhita, 2023',
    enactmentYear: '2023',
    ministry: 'Ministry of Home Affairs',
    description: 'Primary criminal code of the Republic of India replacing the Indian Penal Code.',
    status: 'Active',
  });

  // 7. Section Form State
  const [sectionForm, setSectionForm] = useState({
    sectionCode: 'SEC-BNS-103',
    sectionNo: 'Section 103 (BNS)',
    actName: 'Bharatiya Nyaya Sanhita, 2023',
    offenceSummary: 'Punishment for Murder',
    punishment: 'Death or Imprisonment for Life and Fine',
    bailable: 'Non-Bailable',
    cognizable: 'Cognizable',
  });

  // 8. FIR Registration Form State
  const [firForm, setFirForm] = useState({
    firNo: 'FIR-2025-10492',
    station: 'Mysuru South PS',
    incidentDateTime: '2025-05-22T14:30',
    reportedDateTime: '2025-05-22T16:00',
    crimeHead: 'Robbery',
    location: 'Near JP Nagar Ring Road, Mysuru',
    complainantName: 'Vikram Sharma',
    accusedName: 'Unknown Gang (3 Persons)',
    status: 'Under Investigation',
  });

  // 9. Complainant Form State
  const [complainantForm, setComplainantForm] = useState({
    complainantId: 'CMP-2025-8812',
    name: 'Anand V',
    age: '42',
    gender: 'Male',
    mobile: '9448123999',
    idProof: 'Aadhaar 8832-1928-3341',
    address: 'House #45, Kuvempunagar, Mysuru 570023',
    occupation: 'Software Engineer',
  });

  // 10. Victim Form State
  const [victimForm, setVictimForm] = useState({
    victimId: 'VIC-2025-0412',
    firNo: 'FIR-2025-10492',
    name: 'Priya N',
    age: '29',
    gender: 'Female',
    mobile: '9900112233',
    address: 'Bogadi 2nd Stage, Mysuru',
    injuryDetails: 'Minor blunt force physical injuries treated at KR Hospital',
    protectionRequired: 'Yes',
  });

  // 11. Accused Form State
  const [accusedForm, setAccusedForm] = useState({
    accusedId: 'ACC-2025-5021',
    firNo: 'FIR-2025-10492',
    name: 'Rajesh @ Cobra',
    alias: 'Cobra',
    age: '34',
    gender: 'Male',
    fatherName: 'Manjunath',
    knownAddress: 'Mandya Outer Layout, Karnataka',
    custodyStatus: 'In Custody',
  });

  // 12. Arrest / Surrender Form State
  const [arrestForm, setArrestForm] = useState({
    arrestMemoNo: 'ARR-2025-9901',
    firNo: 'FIR-2025-10492',
    accusedName: 'Rajesh @ Cobra',
    arrestDateTime: '2025-05-23T06:15',
    arrestingOfficer: 'Suresh Patil (PI)',
    location: 'Mysuru Central Railway Station',
    intimatedPerson: 'Wife (Deepa) - 9844001122',
    medicalDone: 'Yes',
  });

  // 13. Chargesheet Form State
  const [chargesheetForm, setChargesheetForm] = useState({
    chargesheetNo: 'CS-2025-0144',
    firNo: 'FIR-2025-10492',
    investigatingOfficer: 'Suresh Patil (PI)',
    filingDate: '2025-05-24',
    courtName: 'Principal District & Sessions Court, Mysuru',
    sectionsCharged: 'Section 103 (BNS), Section 309 (BNS)',
    recommendation: 'Trial Requested with Fast Track Court',
  });

  // Dynamic Records Storage State for active views
  const [datasets, setDatasets] = useState<Record<RegisterType, any[]>>({
    station: [
      { id: '1', code: 'PS-2025-1567', name: 'Mysuru South PS', district: 'Mysuru', type: 'Police Station', head: 'Ramesh Kumar', phone: '0821-2412345', status: 'Active', addedOn: '23 May 2025' },
      { id: '2', code: 'PS-2025-1566', name: 'Nazarbad PS', district: 'Mysuru', type: 'Police Station', head: 'Suresh H', phone: '0821-2415678', status: 'Active', addedOn: '22 May 2025' },
      { id: '3', code: 'PS-2025-1565', name: 'Hebbal PS', district: 'Mysuru', type: 'Police Station', head: 'Mahadeva Prasad', phone: '0821-2419101', status: 'Inactive', addedOn: '21 May 2025' },
    ],
    officer: [
      { id: '1', badgeNo: 'KGID-84920', name: 'Suresh Patil', rank: 'Inspector (PI)', station: 'Mysuru South PS', mobile: '9845123456', status: 'Active', addedOn: '20 May 2025' },
      { id: '2', badgeNo: 'KGID-90123', name: 'Anitha R', rank: 'Sub-Inspector (PSI)', station: 'Nazarbad PS', mobile: '9845199887', status: 'Active', addedOn: '18 May 2025' },
    ],
    court: [
      { id: '1', courtCode: 'CRT-MYS-01', courtName: 'District Sessions Court', courtType: 'District Court', judgeName: 'Justice H. R. Venkatesh', district: 'Mysuru', phone: '0821-2423322', addedOn: '15 May 2025' },
    ],
    'case-category': [
      { id: '1', categoryCode: 'CAT-CR-04', categoryName: 'Cyber Crime & Fraud', severity: 'High', actRef: 'IT Act 2000', status: 'Active', addedOn: '10 May 2025' },
    ],
    'gravity-offence': [
      { id: '1', offenceCode: 'OFF-GRV-102', offenceName: 'Armed Robbery', classification: 'Heinous Offence', maxPunishment: '10 Yrs to Life', bailable: 'Non-Bailable', cognizable: 'Cognizable', addedOn: '12 May 2025' },
    ],
    act: [
      { id: '1', actCode: 'ACT-BNS-2023', shortName: 'BNS 2023', fullName: 'Bharatiya Nyaya Sanhita, 2023', enactmentYear: '2023', status: 'Active', addedOn: '01 May 2025' },
    ],
    section: [
      { id: '1', sectionCode: 'SEC-BNS-103', sectionNo: 'Section 103 (BNS)', actName: 'BNS 2023', offenceSummary: 'Punishment for Murder', bailable: 'Non-Bailable', addedOn: '02 May 2025' },
    ],
    fir: [
      { id: '1', firNo: 'FIR-2025-10492', station: 'Mysuru South PS', incidentDateTime: '2025-05-22', crimeHead: 'Robbery', complainantName: 'Vikram Sharma', status: 'Under Investigation', addedOn: '22 May 2025' },
    ],
    complainant: [
      { id: '1', complainantId: 'CMP-2025-8812', name: 'Anand V', age: '42', gender: 'Male', mobile: '9448123999', occupation: 'Software Engineer', addedOn: '22 May 2025' },
    ],
    victim: [
      { id: '1', victimId: 'VIC-2025-0412', firNo: 'FIR-2025-10492', name: 'Priya N', age: '29', gender: 'Female', mobile: '9900112233', protectionRequired: 'Yes', addedOn: '22 May 2025' },
    ],
    accused: [
      { id: '1', accusedId: 'ACC-2025-5021', firNo: 'FIR-2025-10492', name: 'Rajesh @ Cobra', alias: 'Cobra', age: '34', custodyStatus: 'In Custody', addedOn: '23 May 2025' },
    ],
    arrest: [
      { id: '1', arrestMemoNo: 'ARR-2025-9901', firNo: 'FIR-2025-10492', accusedName: 'Rajesh @ Cobra', arrestDateTime: '2025-05-23', arrestingOfficer: 'Suresh Patil (PI)', medicalDone: 'Yes', addedOn: '23 May 2025' },
    ],
    chargesheet: [
      { id: '1', chargesheetNo: 'CS-2025-0144', firNo: 'FIR-2025-10492', investigatingOfficer: 'Suresh Patil (PI)', filingDate: '2025-05-24', courtName: 'Sessions Court Mysuru', addedOn: '24 May 2025' },
    ],
  });

  // Trigger Toast Notification
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Generic Save Record Handler
  const handleSaveCurrentRecord = (e: React.FormEvent) => {
    e.preventDefault();
    let recordObj: any = { id: Date.now().toString(), addedOn: '25 May 2025' };

    if (activeRegister === 'station') recordObj = { ...recordObj, ...stationForm };
    else if (activeRegister === 'officer') recordObj = { ...recordObj, ...officerForm };
    else if (activeRegister === 'court') recordObj = { ...recordObj, ...courtForm };
    else if (activeRegister === 'case-category') recordObj = { ...recordObj, ...categoryForm };
    else if (activeRegister === 'gravity-offence') recordObj = { ...recordObj, ...gravityForm };
    else if (activeRegister === 'act') recordObj = { ...recordObj, ...actForm };
    else if (activeRegister === 'section') recordObj = { ...recordObj, ...sectionForm };
    else if (activeRegister === 'fir') recordObj = { ...recordObj, ...firForm };
    else if (activeRegister === 'complainant') recordObj = { ...recordObj, ...complainantForm };
    else if (activeRegister === 'victim') recordObj = { ...recordObj, ...victimForm };
    else if (activeRegister === 'accused') recordObj = { ...recordObj, ...accusedForm };
    else if (activeRegister === 'arrest') recordObj = { ...recordObj, ...arrestForm };
    else if (activeRegister === 'chargesheet') recordObj = { ...recordObj, ...chargesheetForm };

    setDatasets((prev) => ({
      ...prev,
      [activeRegister]: [recordObj, ...(prev[activeRegister] || [])],
    }));

    showToast(`New record saved to ${getRegisterTitle(activeRegister)}!`);
  };

  // Delete Record Handler
  const confirmDeleteRecord = () => {
    if (deleteModalId) {
      setDatasets((prev) => ({
        ...prev,
        [activeRegister]: prev[activeRegister].filter((item) => item.id !== deleteModalId),
      }));
      showToast('Record deleted successfully.');
      setDeleteModalId(null);
    }
  };

  // Master Data Navigation Array
  const masterDataMenus: { id: RegisterType; label: string; icon: string }[] = [
    { id: 'station', label: 'Police Station Register', icon: 'local_police' },
    { id: 'officer', label: 'Police Officer Register', icon: 'badge' },
    { id: 'court', label: 'Court Register', icon: 'gavel' },
    { id: 'case-category', label: 'Case Category Register', icon: 'folder' },
    { id: 'gravity-offence', label: 'Gravity Offence Register', icon: 'warning' },
    { id: 'act', label: 'Act Register', icon: 'menu_book' },
    { id: 'section', label: 'Section Register', icon: 'gavel' },
  ];

  // Transaction Data Navigation Array
  const transactionDataMenus: { id: RegisterType; label: string; icon: string }[] = [
    { id: 'fir', label: 'FIR Registration', icon: 'description' },
    { id: 'complainant', label: 'Complainant Register', icon: 'person_add' },
    { id: 'victim', label: 'Victim Register', icon: 'person' },
    { id: 'accused', label: 'Accused Register', icon: 'person_cancel' },
    { id: 'arrest', label: 'Arrest / Surrender Register', icon: 'lock' },
    { id: 'chargesheet', label: 'Chargesheet Register', icon: 'assignment' },
  ];

  const getRegisterTitle = (reg: RegisterType) => {
    const all = [...masterDataMenus, ...transactionDataMenus];
    const match = all.find((m) => m.id === reg);
    return match ? match.label : 'Registration Form';
  };

  // Current Active Records list
  const currentRecords = datasets[activeRegister] || [];

  return (
    <div className="w-full h-[calc(100vh-64px)] overflow-y-auto mt-16 bg-[#090b0e] text-on-surface flex flex-col relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-[100] bg-secondary text-on-secondary font-data-mono text-xs px-4 py-2 rounded-lg shadow-2xl flex items-center gap-2 animate-bounce">
          <span className="material-symbols-outlined text-base">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* PAGE HEADER */}
      <header className="bg-[#111419] border-b border-white/10 px-6 py-3.5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-secondary text-2xl">app_registration</span>
          <div>
            <h1 className="font-headline-md text-xl font-bold text-on-surface tracking-tight">
              Registration Center
            </h1>
            <p className="font-data-mono text-xs text-outline-variant">
              Master & Transaction Data Administration
            </p>
          </div>
        </div>

        {/* Global Search Input Bar */}
        <div className="w-full md:w-96 relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-sm">
            search
          </span>
          <input
            type="text"
            value={globalSearch}
            onChange={(e) => setGlobalSearch(e.target.value)}
            placeholder="Search FIR, Station, Officer, Court, Victim, Accused..."
            className="w-full bg-[#181c22] border border-white/15 rounded-lg pl-9 pr-3 py-1.5 font-data-mono text-xs text-on-surface focus:border-secondary outline-none transition-colors"
          />
        </div>
      </header>

      {/* BODY CONTAINER */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT SIDEBAR NAVIGATION */}
        <aside className="w-full lg:w-64 bg-[#0e1116] border-r border-white/10 p-4 flex flex-col flex-shrink-0 overflow-y-auto max-h-screen lg:max-h-full">
          <div className="space-y-5">
            {/* MASTER DATA */}
            <div>
              <span className="font-label-caps text-[10px] text-outline font-bold tracking-widest uppercase block mb-2 px-2">
                MASTER DATA
              </span>
              <div className="space-y-0.5">
                {masterDataMenus.map((item) => {
                  const isActive = activeRegister === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveRegister(item.id);
                        setActiveTab('add');
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-label-caps transition-all text-left ${
                        isActive
                          ? 'bg-secondary/15 text-secondary font-bold border-l-2 border-secondary shadow-[0_0_12px_rgba(76,215,246,0.15)]'
                          : 'text-outline hover:text-on-surface hover:bg-white/5'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TRANSACTION DATA */}
            <div>
              <span className="font-label-caps text-[10px] text-outline font-bold tracking-widest uppercase block mb-2 px-2">
                TRANSACTION DATA
              </span>
              <div className="space-y-0.5">
                {transactionDataMenus.map((item) => {
                  const isActive = activeRegister === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveRegister(item.id);
                        setActiveTab('add');
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-label-caps transition-all text-left ${
                        isActive
                          ? 'bg-secondary/15 text-secondary font-bold border-l-2 border-secondary shadow-[0_0_12px_rgba(76,215,246,0.15)]'
                          : 'text-outline hover:text-on-surface hover:bg-white/5'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN WORKSPACE */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6">
          {/* Header Title & Tab Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-white/10">
            <div>
              <h2 className="font-headline-md text-xl font-bold text-on-surface">
                {getRegisterTitle(activeRegister)}
              </h2>
              <p className="font-data-mono text-xs text-outline-variant mt-0.5">
                Create a new record or search and manage existing entries in this register
              </p>
            </div>

            <button
              onClick={() => setActiveTab('search')}
              className="px-3 py-1.5 bg-[#181c22] border border-white/15 hover:border-secondary rounded-lg font-data-mono text-xs text-secondary font-bold transition-all cursor-pointer"
            >
              View All Records ({currentRecords.length})
            </button>
          </div>

          {/* Mode Switch Tabs */}
          <div className="flex items-center gap-6 border-b border-white/10 font-data-mono text-xs">
            <button
              onClick={() => setActiveTab('add')}
              className={`pb-2.5 font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'add'
                  ? 'text-secondary border-b-2 border-secondary'
                  : 'text-outline hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">add_circle</span>
              <span>Add New</span>
            </button>

            <button
              onClick={() => setActiveTab('search')}
              className={`pb-2.5 font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'search'
                  ? 'text-secondary border-b-2 border-secondary'
                  : 'text-outline hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-sm">manage_search</span>
              <span>Search / Edit Existing</span>
            </button>
          </div>

          {/* ADD NEW TAB CONTENT */}
          {activeTab === 'add' && (
            <div className="space-y-6">
              <div className="glass-panel p-5 rounded-xl border border-white/10 space-y-4">
                <form onSubmit={handleSaveCurrentRecord} className="space-y-4 font-data-mono text-xs">

                  {/* -------------------------------------------------- */}
                  {/* FORM 1: POLICE STATION REGISTER */}
                  {/* -------------------------------------------------- */}
                  {activeRegister === 'station' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Station Code *</label>
                          <input type="text" value={stationForm.code} onChange={(e) => setStationForm({ ...stationForm, code: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Station Type *</label>
                          <select value={stationForm.type} onChange={(e) => setStationForm({ ...stationForm, type: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none cursor-pointer">
                            <option value="Police Station">Police Station</option>
                            <option value="Outpost">Outpost</option>
                            <option value="Cyber Crime PS">Cyber Crime PS</option>
                            <option value="Women PS">Women PS</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Station Head (SHO) *</label>
                          <input type="text" value={stationForm.head} onChange={(e) => setStationForm({ ...stationForm, head: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Police Station Name *</label>
                          <input type="text" value={stationForm.name} onChange={(e) => setStationForm({ ...stationForm, name: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Established Date</label>
                          <input type="date" value={stationForm.estDate} onChange={(e) => setStationForm({ ...stationForm, estDate: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">SHO Mobile</label>
                          <input type="tel" value={stationForm.headMobile} onChange={(e) => setStationForm({ ...stationForm, headMobile: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">District *</label>
                          <input type="text" value={stationForm.district} onChange={(e) => setStationForm({ ...stationForm, district: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Jurisdiction Area</label>
                          <input type="text" value={stationForm.jurisdiction} onChange={(e) => setStationForm({ ...stationForm, jurisdiction: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Status *</label>
                          <select value={stationForm.status} onChange={(e) => setStationForm({ ...stationForm, status: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none">
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Address *</label>
                        <input type="text" value={stationForm.address} onChange={(e) => setStationForm({ ...stationForm, address: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                      </div>
                    </>
                  )}

                  {/* -------------------------------------------------- */}
                  {/* FORM 2: POLICE OFFICER REGISTER */}
                  {/* -------------------------------------------------- */}
                  {activeRegister === 'officer' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Badge / KGID No *</label>
                          <input type="text" value={officerForm.badgeNo} onChange={(e) => setOfficerForm({ ...officerForm, badgeNo: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Officer Name *</label>
                          <input type="text" value={officerForm.name} onChange={(e) => setOfficerForm({ ...officerForm, name: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Rank *</label>
                          <select value={officerForm.rank} onChange={(e) => setOfficerForm({ ...officerForm, rank: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none">
                            <option value="Constable">Constable</option>
                            <option value="Head Constable">Head Constable</option>
                            <option value="Assistant Sub-Inspector (ASI)">Assistant Sub-Inspector (ASI)</option>
                            <option value="Police Sub-Inspector (PSI)">Police Sub-Inspector (PSI)</option>
                            <option value="Inspector of Police (PI)">Inspector of Police (PI)</option>
                            <option value="ACP / DySP">ACP / DySP</option>
                            <option value="DCP / SP">DCP / SP</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Assigned Station *</label>
                          <input type="text" value={officerForm.station} onChange={(e) => setOfficerForm({ ...officerForm, station: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Mobile Number *</label>
                          <input type="tel" value={officerForm.mobile} onChange={(e) => setOfficerForm({ ...officerForm, mobile: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Email Address</label>
                          <input type="email" value={officerForm.email} onChange={(e) => setOfficerForm({ ...officerForm, email: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                      </div>
                    </>
                  )}

                  {/* -------------------------------------------------- */}
                  {/* FORM 3: COURT REGISTER */}
                  {/* -------------------------------------------------- */}
                  {activeRegister === 'court' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Court Code *</label>
                          <input type="text" value={courtForm.courtCode} onChange={(e) => setCourtForm({ ...courtForm, courtCode: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Court Name *</label>
                          <input type="text" value={courtForm.courtName} onChange={(e) => setCourtForm({ ...courtForm, courtName: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Court Type *</label>
                          <select value={courtForm.courtType} onChange={(e) => setCourtForm({ ...courtForm, courtType: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none">
                            <option value="Magistrate Court">Magistrate Court</option>
                            <option value="District Court">District Court</option>
                            <option value="High Court">High Court</option>
                            <option value="Fast Track Court">Fast Track Court</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Presiding Judge</label>
                          <input type="text" value={courtForm.judgeName} onChange={(e) => setCourtForm({ ...courtForm, judgeName: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">District *</label>
                          <input type="text" value={courtForm.district} onChange={(e) => setCourtForm({ ...courtForm, district: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Contact Phone</label>
                          <input type="tel" value={courtForm.phone} onChange={(e) => setCourtForm({ ...courtForm, phone: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                      </div>
                    </>
                  )}

                  {/* -------------------------------------------------- */}
                  {/* FORM 4: CASE CATEGORY REGISTER */}
                  {/* -------------------------------------------------- */}
                  {activeRegister === 'case-category' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Category Code *</label>
                          <input type="text" value={categoryForm.categoryCode} onChange={(e) => setCategoryForm({ ...categoryForm, categoryCode: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Category Name *</label>
                          <input type="text" value={categoryForm.categoryName} onChange={(e) => setCategoryForm({ ...categoryForm, categoryName: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Severity Level *</label>
                          <select value={categoryForm.severity} onChange={(e) => setCategoryForm({ ...categoryForm, severity: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Description</label>
                        <input type="text" value={categoryForm.description} onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                      </div>
                    </>
                  )}

                  {/* -------------------------------------------------- */}
                  {/* FORM 5: GRAVITY OFFENCE REGISTER */}
                  {/* -------------------------------------------------- */}
                  {activeRegister === 'gravity-offence' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Offence Code *</label>
                          <input type="text" value={gravityForm.offenceCode} onChange={(e) => setGravityForm({ ...gravityForm, offenceCode: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Offence Name *</label>
                          <input type="text" value={gravityForm.offenceName} onChange={(e) => setGravityForm({ ...gravityForm, offenceName: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Classification *</label>
                          <select value={gravityForm.classification} onChange={(e) => setGravityForm({ ...gravityForm, classification: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none">
                            <option value="Heinous Offence">Heinous Offence</option>
                            <option value="Major Offence">Major Offence</option>
                            <option value="Minor Offence">Minor Offence</option>
                            <option value="Cyber Offence">Cyber Offence</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Maximum Punishment</label>
                          <input type="text" value={gravityForm.maxPunishment} onChange={(e) => setGravityForm({ ...gravityForm, maxPunishment: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Bailable Status</label>
                          <select value={gravityForm.bailable} onChange={(e) => setGravityForm({ ...gravityForm, bailable: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none">
                            <option value="Non-Bailable">Non-Bailable</option>
                            <option value="Bailable">Bailable</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Cognizable Status</label>
                          <select value={gravityForm.cognizable} onChange={(e) => setGravityForm({ ...gravityForm, cognizable: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none">
                            <option value="Cognizable">Cognizable</option>
                            <option value="Non-Cognizable">Non-Cognizable</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {/* -------------------------------------------------- */}
                  {/* FORM 6: ACT REGISTER */}
                  {/* -------------------------------------------------- */}
                  {activeRegister === 'act' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Act Code *</label>
                          <input type="text" value={actForm.actCode} onChange={(e) => setActForm({ ...actForm, actCode: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Short Name *</label>
                          <input type="text" value={actForm.shortName} onChange={(e) => setActForm({ ...actForm, shortName: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Enactment Year</label>
                          <input type="text" value={actForm.enactmentYear} onChange={(e) => setActForm({ ...actForm, enactmentYear: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Full Act Title / Legislation *</label>
                        <input type="text" value={actForm.fullName} onChange={(e) => setActForm({ ...actForm, fullName: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                      </div>
                    </>
                  )}

                  {/* -------------------------------------------------- */}
                  {/* FORM 7: SECTION REGISTER */}
                  {/* -------------------------------------------------- */}
                  {activeRegister === 'section' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Section Code *</label>
                          <input type="text" value={sectionForm.sectionCode} onChange={(e) => setSectionForm({ ...sectionForm, sectionCode: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Section Number *</label>
                          <input type="text" value={sectionForm.sectionNo} onChange={(e) => setSectionForm({ ...sectionForm, sectionNo: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Act Name *</label>
                          <input type="text" value={sectionForm.actName} onChange={(e) => setSectionForm({ ...sectionForm, actName: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Offence Summary</label>
                          <input type="text" value={sectionForm.offenceSummary} onChange={(e) => setSectionForm({ ...sectionForm, offenceSummary: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Bailable Status</label>
                          <select value={sectionForm.bailable} onChange={(e) => setSectionForm({ ...sectionForm, bailable: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none">
                            <option value="Non-Bailable">Non-Bailable</option>
                            <option value="Bailable">Bailable</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {/* -------------------------------------------------- */}
                  {/* FORM 8: FIR REGISTRATION */}
                  {/* -------------------------------------------------- */}
                  {activeRegister === 'fir' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">FIR Number *</label>
                          <input type="text" value={firForm.firNo} onChange={(e) => setFirForm({ ...firForm, firNo: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Police Station *</label>
                          <input type="text" value={firForm.station} onChange={(e) => setFirForm({ ...firForm, station: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Crime Head *</label>
                          <input type="text" value={firForm.crimeHead} onChange={(e) => setFirForm({ ...firForm, crimeHead: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Complainant Name *</label>
                          <input type="text" value={firForm.complainantName} onChange={(e) => setFirForm({ ...firForm, complainantName: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Accused Name / Unknown</label>
                          <input type="text" value={firForm.accusedName} onChange={(e) => setFirForm({ ...firForm, accusedName: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">FIR Status *</label>
                          <select value={firForm.status} onChange={(e) => setFirForm({ ...firForm, status: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none">
                            <option value="Under Investigation">Under Investigation</option>
                            <option value="Chargesheeted">Chargesheeted</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {/* -------------------------------------------------- */}
                  {/* FORM 9: COMPLAINANT REGISTER */}
                  {/* -------------------------------------------------- */}
                  {activeRegister === 'complainant' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Complainant ID *</label>
                          <input type="text" value={complainantForm.complainantId} onChange={(e) => setComplainantForm({ ...complainantForm, complainantId: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Full Name *</label>
                          <input type="text" value={complainantForm.name} onChange={(e) => setComplainantForm({ ...complainantForm, name: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Mobile Number *</label>
                          <input type="tel" value={complainantForm.mobile} onChange={(e) => setComplainantForm({ ...complainantForm, mobile: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Age / Gender</label>
                          <div className="flex gap-2">
                            <input type="number" value={complainantForm.age} onChange={(e) => setComplainantForm({ ...complainantForm, age: e.target.value })} className="w-1/2 bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" placeholder="Age" />
                            <select value={complainantForm.gender} onChange={(e) => setComplainantForm({ ...complainantForm, gender: e.target.value })} className="w-1/2 bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none">
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Aadhaar / ID Proof</label>
                          <input type="text" value={complainantForm.idProof} onChange={(e) => setComplainantForm({ ...complainantForm, idProof: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Occupation</label>
                          <input type="text" value={complainantForm.occupation} onChange={(e) => setComplainantForm({ ...complainantForm, occupation: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                      </div>
                    </>
                  )}

                  {/* -------------------------------------------------- */}
                  {/* FORM 10: VICTIM REGISTER */}
                  {/* -------------------------------------------------- */}
                  {activeRegister === 'victim' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Victim ID *</label>
                          <input type="text" value={victimForm.victimId} onChange={(e) => setVictimForm({ ...victimForm, victimId: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">FIR Number *</label>
                          <input type="text" value={victimForm.firNo} onChange={(e) => setVictimForm({ ...victimForm, firNo: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Victim Full Name *</label>
                          <input type="text" value={victimForm.name} onChange={(e) => setVictimForm({ ...victimForm, name: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Injury / Loss Description</label>
                          <input type="text" value={victimForm.injuryDetails} onChange={(e) => setVictimForm({ ...victimForm, injuryDetails: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Protection Required?</label>
                          <select value={victimForm.protectionRequired} onChange={(e) => setVictimForm({ ...victimForm, protectionRequired: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {/* -------------------------------------------------- */}
                  {/* FORM 11: ACCUSED REGISTER */}
                  {/* -------------------------------------------------- */}
                  {activeRegister === 'accused' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Accused ID *</label>
                          <input type="text" value={accusedForm.accusedId} onChange={(e) => setAccusedForm({ ...accusedForm, accusedId: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">FIR Number *</label>
                          <input type="text" value={accusedForm.firNo} onChange={(e) => setAccusedForm({ ...accusedForm, firNo: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Accused Full Name *</label>
                          <input type="text" value={accusedForm.name} onChange={(e) => setAccusedForm({ ...accusedForm, name: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Alias / Nickname</label>
                          <input type="text" value={accusedForm.alias} onChange={(e) => setAccusedForm({ ...accusedForm, alias: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Father's Name</label>
                          <input type="text" value={accusedForm.fatherName} onChange={(e) => setAccusedForm({ ...accusedForm, fatherName: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Custody Status *</label>
                          <select value={accusedForm.custodyStatus} onChange={(e) => setAccusedForm({ ...accusedForm, custodyStatus: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none">
                            <option value="In Custody">In Custody</option>
                            <option value="Absconding">Absconding</option>
                            <option value="On Bail">On Bail</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {/* -------------------------------------------------- */}
                  {/* FORM 12: ARREST REGISTER */}
                  {/* -------------------------------------------------- */}
                  {activeRegister === 'arrest' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Arrest Memo No *</label>
                          <input type="text" value={arrestForm.arrestMemoNo} onChange={(e) => setArrestForm({ ...arrestForm, arrestMemoNo: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">FIR Number *</label>
                          <input type="text" value={arrestForm.firNo} onChange={(e) => setArrestForm({ ...arrestForm, firNo: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Accused Name *</label>
                          <input type="text" value={arrestForm.accusedName} onChange={(e) => setArrestForm({ ...arrestForm, accusedName: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Arresting Officer</label>
                          <input type="text" value={arrestForm.arrestingOfficer} onChange={(e) => setArrestForm({ ...arrestForm, arrestingOfficer: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Location of Arrest</label>
                          <input type="text" value={arrestForm.location} onChange={(e) => setArrestForm({ ...arrestForm, location: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Medical Done?</label>
                          <select value={arrestForm.medicalDone} onChange={(e) => setArrestForm({ ...arrestForm, medicalDone: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {/* -------------------------------------------------- */}
                  {/* FORM 13: CHARGESHEET REGISTER */}
                  {/* -------------------------------------------------- */}
                  {activeRegister === 'chargesheet' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Chargesheet No *</label>
                          <input type="text" value={chargesheetForm.chargesheetNo} onChange={(e) => setChargesheetForm({ ...chargesheetForm, chargesheetNo: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">FIR Number *</label>
                          <input type="text" value={chargesheetForm.firNo} onChange={(e) => setChargesheetForm({ ...chargesheetForm, firNo: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Investigating Officer (IO) *</label>
                          <input type="text" value={chargesheetForm.investigatingOfficer} onChange={(e) => setChargesheetForm({ ...chargesheetForm, investigatingOfficer: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Sections Charged</label>
                          <input type="text" value={chargesheetForm.sectionsCharged} onChange={(e) => setChargesheetForm({ ...chargesheetForm, sectionsCharged: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                        <div>
                          <label className="block text-outline text-[10px] uppercase font-semibold mb-1">Filing Date</label>
                          <input type="date" value={chargesheetForm.filingDate} onChange={(e) => setChargesheetForm({ ...chargesheetForm, filingDate: e.target.value })} className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none" />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Submit Action Bar */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => showToast('Form reset to default.')}
                      className="px-4 py-2 bg-[#181c22] border border-white/15 hover:border-white/30 text-on-surface rounded-lg font-bold transition-all cursor-pointer"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-secondary text-on-secondary hover:bg-secondary/90 font-bold rounded-lg flex items-center gap-1.5 shadow-lg transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">save</span>
                      <span>Save Record</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* RECENTLY ADDED RECORDS TABLE */}
              <div className="glass-panel p-5 rounded-xl border border-white/10 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <h3 className="font-headline-md text-sm font-bold text-on-surface">
                    Recent {getRegisterTitle(activeRegister)} Entries
                  </h3>
                  <span className="font-data-mono text-xs text-outline-variant">
                    Showing {currentRecords.length} records
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-data-mono text-xs">
                    <thead>
                      <tr className="border-b border-white/10 text-outline text-[9px] uppercase">
                        <th className="pb-2">#</th>
                        <th className="pb-2">Primary Ref</th>
                        <th className="pb-2">Title / Name</th>
                        <th className="pb-2">Details</th>
                        <th className="pb-2">Added On</th>
                        <th className="pb-2 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {currentRecords.map((r, idx) => (
                        <tr key={r.id || idx} className="hover:bg-white/5 transition-colors">
                          <td className="py-2.5 text-outline">{idx + 1}</td>
                          <td className="py-2.5 text-secondary font-bold">
                            {r.code || r.badgeNo || r.courtCode || r.categoryCode || r.offenceCode || r.actCode || r.sectionCode || r.firNo || r.complainantId || r.victimId || r.accusedId || r.arrestMemoNo || r.chargesheetNo || 'REF-101'}
                          </td>
                          <td className="py-2.5 text-on-surface font-medium">
                            {r.name || r.shortName || r.sectionNo || r.courtName || r.categoryName || r.offenceName || r.complainantName || r.accusedName || 'Master Record Entry'}
                          </td>
                          <td className="py-2.5 text-outline-variant">
                            {r.type || r.rank || r.crimeHead || r.courtType || r.severity || r.classification || r.jurisdiction || 'System Administrative Entry'}
                          </td>
                          <td className="py-2.5 text-outline-variant">{r.addedOn || '25 May 2025'}</td>
                          <td className="py-2.5 text-right space-x-1">
                            <button
                              onClick={() => setViewRecordData(r)}
                              className="p-1 text-outline hover:text-white rounded transition-colors cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-base">visibility</span>
                            </button>
                            <button
                              onClick={() => setDeleteModalId(r.id)}
                              className="p-1 text-outline hover:text-red-400 rounded transition-colors cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-base">delete</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* SEARCH / EDIT TAB CONTENT */}
          {activeTab === 'search' && (
            <div className="space-y-4">
              <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-3 font-data-mono text-xs">
                <input
                  type="text"
                  placeholder={`Search ${getRegisterTitle(activeRegister)} by reference or keywords...`}
                  value={globalSearch}
                  onChange={(e) => setGlobalSearch(e.target.value)}
                  className="w-full bg-[#181c22] border border-white/15 rounded-lg px-3 py-2 text-on-surface focus:border-secondary outline-none"
                />
              </div>

              <div className="glass-panel p-5 rounded-xl border border-white/10">
                <table className="w-full text-left font-data-mono text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-outline text-[9px] uppercase">
                      <th className="pb-2">Reference</th>
                      <th className="pb-2">Title</th>
                      <th className="pb-2">Details</th>
                      <th className="pb-2 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {currentRecords.map((r, idx) => (
                      <tr key={r.id || idx} className="hover:bg-white/5 transition-colors">
                        <td className="py-2.5 text-secondary font-bold">
                          {r.code || r.badgeNo || r.courtCode || r.categoryCode || r.offenceCode || r.actCode || r.sectionCode || r.firNo || r.complainantId || r.victimId || r.accusedId || r.arrestMemoNo || r.chargesheetNo}
                        </td>
                        <td className="py-2.5 text-on-surface font-medium">
                          {r.name || r.shortName || r.sectionNo || r.courtName || r.categoryName || r.offenceName || r.complainantName || r.accusedName}
                        </td>
                        <td className="py-2.5 text-outline-variant">
                          {r.type || r.rank || r.crimeHead || r.courtType || r.severity || r.classification || r.jurisdiction}
                        </td>
                        <td className="py-2.5 text-right">
                          <button
                            onClick={() => {
                              setActiveTab('add');
                              showToast(`Loaded record into editor.`);
                            }}
                            className="px-3 py-1 bg-secondary/15 text-secondary hover:bg-secondary/25 border border-secondary/30 rounded font-bold transition-all cursor-pointer"
                          >
                            Edit Form
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      {deleteModalId && (
        <div className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-panel p-6 rounded-xl border border-white/10 max-w-sm w-full space-y-4 font-data-mono text-xs">
            <div className="flex items-center gap-3 text-red-400">
              <span className="material-symbols-outlined text-2xl">warning</span>
              <h3 className="font-bold text-sm text-on-surface">Confirm Record Deletion</h3>
            </div>
            <p className="text-outline-variant">
              Are you sure you want to delete this register record? This action cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setDeleteModalId(null)}
                className="px-3 py-1.5 bg-[#181c22] border border-white/15 rounded text-on-surface hover:border-white/30 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteRecord}
                className="px-3 py-1.5 bg-red-500 text-white font-bold rounded hover:bg-red-600 cursor-pointer"
              >
                Delete Record
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW RECORD MODAL */}
      {viewRecordData && (
        <div className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-panel p-6 rounded-xl border border-white/10 max-w-md w-full space-y-4 font-data-mono text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <span className="font-bold text-secondary text-sm">Record Details</span>
              <button onClick={() => setViewRecordData(null)} className="text-outline hover:text-white cursor-pointer">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="space-y-1.5 text-[11px] max-h-60 overflow-y-auto">
              {Object.entries(viewRecordData).map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-white/5 py-1">
                  <span className="text-outline uppercase text-[9px]">{k}</span>
                  <span className="text-on-surface font-semibold">{String(v)}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setViewRecordData(null)}
                className="px-4 py-1.5 bg-secondary text-on-secondary font-bold rounded cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
