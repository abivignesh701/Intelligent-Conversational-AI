import React, { useState, useMemo } from 'react';

// Structured Criminal Record Definition
export interface CrimeRecord {
  id: string; // Internal Case ID e.g. CS-2024-8891
  firNumber: string; // e.g. FIR-2024-00912
  crimeNumber: string; // e.g. CR-1029/2024
  caseNumber: string; // e.g. CC-4491/2024
  incidentDate: string;
  incidentTime: string;
  registrationDate: string;
  lastUpdated: string;

  // Classifications
  crimeHead: 'Theft' | 'House Breaking' | 'Robbery' | 'Vehicle Theft' | 'Assault' | 'Cyber' | 'Narcotics' | 'Others';
  crimeSubHead: string;
  crimeType: string;
  crimeSeverity: 'Critical' | 'Major' | 'Moderate' | 'Minor';
  gravityOfOffence: 'Heinous' | 'Non-Heinous';

  // Police & Jurisdiction
  district: string;
  policeStation: string;
  investigatingOfficer: string;
  court: string;
  latitude: string;
  longitude: string;

  // Victim Details
  victim: {
    name: string;
    gender: 'Male' | 'Female' | 'Other';
    age: number;
    occupation: string;
  };

  // Accused Details
  accused: {
    name: string;
    gender: 'Male' | 'Female' | 'Other';
    age: number;
    occupation: string;
    arrestStatus: 'Arrested' | 'Absconding' | 'Pending Arrest' | 'Bail Granted' | 'Unknown';
    isRepeatOffender: boolean;
  };

  // Complainant Details
  complainant: {
    name: string;
    gender: 'Male' | 'Female' | 'Other';
    occupation: string;
  };

  // Evidence Flags
  evidence: {
    hasCCTV: boolean;
    hasFingerprints: boolean;
    hasDNA: boolean;
    hasWeapon: boolean;
    hasMobile: boolean;
    hasVehicle: boolean;
    hasDigital: boolean;
    hasFSLReport: boolean;
  };

  // Statuses
  investigationStatus:
    | 'FIR Registered'
    | 'Investigation Ongoing'
    | 'Pending Arrest'
    | 'Chargesheet Pending'
    | 'Chargesheet Filed'
    | 'Closed'
    | 'Disposed';
  chargesheetStatus: 'Filed' | 'Pending' | 'Not Applicable';
  trialStatus: 'In Trial' | 'Pre-Trial' | 'Verdict Delivered' | 'Pending Hearing';
  judgmentStatus: 'Convicted' | 'Acquitted' | 'Under Review' | 'Pending';
  linkedFIRCount: number;
}

// Initial Mock Dataset of realistic Karnataka Police Crime Records
const INITIAL_DATABASE: CrimeRecord[] = [
  {
    id: 'CS-2024-0192',
    firNumber: 'FIR-2024-00192',
    crimeNumber: 'CR-882/2024',
    caseNumber: 'CC-9012/2024',
    incidentDate: '2024-11-12',
    incidentTime: '22:30',
    registrationDate: '2024-11-13',
    lastUpdated: '2024-11-20',
    crimeHead: 'Robbery',
    crimeSubHead: 'Highway Dacoity & Mugging',
    crimeType: 'Armed Mugging with Blunt Weapon',
    crimeSeverity: 'Critical',
    gravityOfOffence: 'Heinous',
    district: 'Bengaluru Urban',
    policeStation: 'Koramangala PS',
    investigatingOfficer: 'Insp. R. Venkatesh',
    court: '1st Addl. CMM Court BLR',
    latitude: '12.9352° N',
    longitude: '77.6245° E',
    victim: { name: 'Siddharth Rao', gender: 'Male', age: 34, occupation: 'Software Engineer' },
    accused: { name: 'Kiran alias "Viper"', gender: 'Male', age: 29, occupation: 'Unemployed', arrestStatus: 'Absconding', isRepeatOffender: true },
    complainant: { name: 'Siddharth Rao', gender: 'Male', occupation: 'Software Engineer' },
    evidence: { hasCCTV: true, hasFingerprints: true, hasDNA: false, hasWeapon: true, hasMobile: true, hasVehicle: true, hasDigital: true, hasFSLReport: false },
    investigationStatus: 'Investigation Ongoing',
    chargesheetStatus: 'Pending',
    trialStatus: 'Pre-Trial',
    judgmentStatus: 'Pending',
    linkedFIRCount: 3,
  },
  {
    id: 'CS-2024-0412',
    firNumber: 'FIR-2024-00412',
    crimeNumber: 'CR-104/2024',
    caseNumber: 'CC-3312/2024',
    incidentDate: '2024-10-04',
    incidentTime: '02:15',
    registrationDate: '2024-10-04',
    lastUpdated: '2024-11-18',
    crimeHead: 'House Breaking',
    crimeSubHead: 'Night House Breaking & Larceny',
    crimeType: 'Forced Window Entry & Jewellery Theft',
    crimeSeverity: 'Major',
    gravityOfOffence: 'Non-Heinous',
    district: 'Mysuru Division',
    policeStation: 'Vijayanagar PS MYS',
    investigatingOfficer: 'Insp. M. Nanjunda',
    court: 'JMFC II Court Mysuru',
    latitude: '12.3168° N',
    longitude: '76.6122° E',
    victim: { name: 'Dr. Sharada Devi', gender: 'Female', age: 58, occupation: 'Physician' },
    accused: { name: 'Prakash M.', gender: 'Male', age: 41, occupation: 'Mechanic', arrestStatus: 'Arrested', isRepeatOffender: true },
    complainant: { name: 'Mahesh Kumar', gender: 'Male', occupation: 'Business Owner' },
    evidence: { hasCCTV: true, hasFingerprints: true, hasDNA: true, hasWeapon: false, hasMobile: true, hasVehicle: false, hasDigital: false, hasFSLReport: true },
    investigationStatus: 'Chargesheet Filed',
    chargesheetStatus: 'Filed',
    trialStatus: 'In Trial',
    judgmentStatus: 'Under Review',
    linkedFIRCount: 2,
  },
  {
    id: 'CS-2024-0881',
    firNumber: 'FIR-2024-00881',
    crimeNumber: 'CR-441/2024',
    caseNumber: 'CC-1102/2024',
    incidentDate: '2024-09-19',
    incidentTime: '18:45',
    registrationDate: '2024-09-20',
    lastUpdated: '2024-11-01',
    crimeHead: 'Theft',
    crimeSubHead: 'Chain Snatching',
    crimeType: 'Two-Wheeler Chain Snatching',
    crimeSeverity: 'Moderate',
    gravityOfOffence: 'Non-Heinous',
    district: 'Hubballi-Dharwad',
    policeStation: 'Vidyanagar PS HUB',
    investigatingOfficer: 'SI S. Patil',
    court: 'Prl. Civil Judge Court Hubballi',
    latitude: '15.3647° N',
    longitude: '75.1240° E',
    victim: { name: 'Anitha Kulkarni', gender: 'Female', age: 46, occupation: 'Teacher' },
    accused: { name: 'Unknown Rider', gender: 'Male', age: 24, occupation: 'Unknown', arrestStatus: 'Pending Arrest', isRepeatOffender: false },
    complainant: { name: 'Anitha Kulkarni', gender: 'Female', occupation: 'Teacher' },
    evidence: { hasCCTV: true, hasFingerprints: false, hasDNA: false, hasWeapon: false, hasMobile: false, hasVehicle: true, hasDigital: false, hasFSLReport: false },
    investigationStatus: 'Pending Arrest',
    chargesheetStatus: 'Pending',
    trialStatus: 'Pre-Trial',
    judgmentStatus: 'Pending',
    linkedFIRCount: 1,
  },
  {
    id: 'CS-2024-1044',
    firNumber: 'FIR-2024-01044',
    crimeNumber: 'CR-902/2024',
    caseNumber: 'CC-7781/2024',
    incidentDate: '2024-08-11',
    incidentTime: '14:20',
    registrationDate: '2024-08-11',
    lastUpdated: '2024-10-15',
    crimeHead: 'Vehicle Theft',
    crimeSubHead: 'Four-Wheeler Theft',
    crimeType: 'SUV Theft using OBD Device',
    crimeSeverity: 'Major',
    gravityOfOffence: 'Non-Heinous',
    district: 'Bengaluru Urban',
    policeStation: 'Indiranagar PS',
    investigatingOfficer: 'Insp. Anand Kumar',
    court: '4th Addl. CMM Court BLR',
    latitude: '12.9784° N',
    longitude: '77.6408° E',
    victim: { name: 'Rajesh Hegde', gender: 'Male', age: 42, occupation: 'IT Director' },
    accused: { name: 'Syndicate Auto Gang', gender: 'Male', age: 35, occupation: 'Auto Scrapper', arrestStatus: 'Arrested', isRepeatOffender: true },
    complainant: { name: 'Rajesh Hegde', gender: 'Male', occupation: 'IT Director' },
    evidence: { hasCCTV: true, hasFingerprints: true, hasDNA: false, hasWeapon: false, hasMobile: true, hasVehicle: true, hasDigital: true, hasFSLReport: true },
    investigationStatus: 'Closed',
    chargesheetStatus: 'Filed',
    trialStatus: 'Verdict Delivered',
    judgmentStatus: 'Convicted',
    linkedFIRCount: 5,
  },
  {
    id: 'CS-2024-0033',
    firNumber: 'FIR-2024-00033',
    crimeNumber: 'CR-033/2024',
    caseNumber: 'CC-0419/2024',
    incidentDate: '2024-11-20',
    incidentTime: '11:00',
    registrationDate: '2024-11-20',
    lastUpdated: '2024-11-24',
    crimeHead: 'Cyber',
    crimeSubHead: 'Financial Phishing & OTP Fraud',
    crimeType: 'Bank Account Hijack via Malware App',
    crimeSeverity: 'Critical',
    gravityOfOffence: 'Heinous',
    district: 'Bengaluru Urban',
    policeStation: 'CEN Crime PS BLR',
    investigatingOfficer: 'Insp. P. Archana',
    court: 'Cyber Special Court BLR',
    latitude: '12.9716° N',
    longitude: '77.5946° E',
    victim: { name: 'Lt. Col. K. S. Murthy (Retd)', gender: 'Male', age: 71, occupation: 'Pensioner' },
    accused: { name: 'Mewat Cyber Module', gender: 'Male', age: 26, occupation: 'Hacker', arrestStatus: 'Pending Arrest', isRepeatOffender: true },
    complainant: { name: 'Lt. Col. K. S. Murthy (Retd)', gender: 'Male', occupation: 'Pensioner' },
    evidence: { hasCCTV: false, hasFingerprints: false, hasDNA: false, hasWeapon: false, hasMobile: true, hasVehicle: false, hasDigital: true, hasFSLReport: true },
    investigationStatus: 'Investigation Ongoing',
    chargesheetStatus: 'Pending',
    trialStatus: 'Pre-Trial',
    judgmentStatus: 'Pending',
    linkedFIRCount: 12,
  },
  {
    id: 'CS-2024-0559',
    firNumber: 'FIR-2024-00559',
    crimeNumber: 'CR-302/2024',
    caseNumber: 'CC-5520/2024',
    incidentDate: '2024-07-28',
    incidentTime: '23:50',
    registrationDate: '2024-07-29',
    lastUpdated: '2024-09-10',
    crimeHead: 'Assault',
    crimeSubHead: 'Grievous Hurt with Weapon',
    crimeType: 'Street Brawl with Iron Rod',
    crimeSeverity: 'Critical',
    gravityOfOffence: 'Heinous',
    district: 'Mangaluru Coastal',
    policeStation: 'Pandeshwar PS MNG',
    investigatingOfficer: 'Insp. D. D’Souza',
    court: 'Dist & Sessions Court MNG',
    latitude: '12.8654° N',
    longitude: '74.8431° E',
    victim: { name: 'Ibrahim Khalil', gender: 'Male', age: 31, occupation: 'Dock Worker' },
    accused: { name: 'Suresh Shetty', gender: 'Male', age: 38, occupation: 'Contractor', arrestStatus: 'Bail Granted', isRepeatOffender: false },
    complainant: { name: 'Farooq Ahmed', gender: 'Male', occupation: 'Trader' },
    evidence: { hasCCTV: true, hasFingerprints: true, hasDNA: true, hasWeapon: true, hasMobile: true, hasVehicle: false, hasDigital: false, hasFSLReport: true },
    investigationStatus: 'Chargesheet Filed',
    chargesheetStatus: 'Filed',
    trialStatus: 'In Trial',
    judgmentStatus: 'Under Review',
    linkedFIRCount: 1,
  },
  {
    id: 'CS-2024-0721',
    firNumber: 'FIR-2024-00721',
    crimeNumber: 'CR-511/2024',
    caseNumber: 'CC-8821/2024',
    incidentDate: '2024-06-15',
    incidentTime: '16:10',
    registrationDate: '2024-06-15',
    lastUpdated: '2024-08-01',
    crimeHead: 'Narcotics',
    crimeSubHead: 'NDPS Possession & Smuggling',
    crimeType: 'Commercial Quantity Synthetic Drug Seizure',
    crimeSeverity: 'Critical',
    gravityOfOffence: 'Heinous',
    district: 'Bengaluru Urban',
    policeStation: 'Whitefield PS',
    investigatingOfficer: 'Insp. K. Ramesh',
    court: 'NDPS Special Court BLR',
    latitude: '12.9698° N',
    longitude: '77.7499° E',
    victim: { name: 'State of Karnataka', gender: 'Other', age: 0, occupation: 'State Enforcement' },
    accused: { name: 'David O. (Foreign National)', gender: 'Male', age: 32, occupation: 'Tourist', arrestStatus: 'Arrested', isRepeatOffender: true },
    complainant: { name: 'Insp. K. Ramesh', gender: 'Male', occupation: 'Police Officer' },
    evidence: { hasCCTV: false, hasFingerprints: true, hasDNA: true, hasWeapon: false, hasMobile: true, hasVehicle: true, hasDigital: true, hasFSLReport: true },
    investigationStatus: 'Chargesheet Filed',
    chargesheetStatus: 'Filed',
    trialStatus: 'In Trial',
    judgmentStatus: 'Pending',
    linkedFIRCount: 4,
  },
];

export const CrimeSearchView: React.FC = () => {
  // Global Search Input
  const [globalSearch, setGlobalSearch] = useState('');

  // 11 Accordion Open States (Default: 1st, 2nd, 8th open)
  const [accordions, setAccordions] = useState({
    caseInfo: true,
    crimeInfo: true,
    policeInfo: false,
    location: false,
    victim: false,
    accused: false,
    complainant: false,
    evidence: true,
    dateFilters: false,
    investigationStatus: false,
    courtDetails: false,
  });

  const toggleAccordion = (key: keyof typeof accordions) => {
    setAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Filter States
  const [filters, setFilters] = useState({
    district: 'All',
    policeStation: 'All',
    crimeHead: 'All',
    investigationStatus: 'All',
    gravity: 'All',
    repeatOffenderOnly: false,
    dateRange: 'All',
    // Evidence Checkboxes
    evidenceCCTV: false,
    evidenceFingerprints: false,
    evidenceDNA: false,
    evidenceWeapon: false,
    evidenceMobile: false,
    evidenceVehicle: false,
    evidenceDigital: false,
    evidenceFSL: false,
    // Accused Arrest Status
    accusedStatus: 'All',
  });

  // UI Interactive States
  const [selectedCase, setSelectedCase] = useState<CrimeRecord | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  // Filter Handler Actions
  const handleApplySearch = () => {
    setIsSearching(true);
    setCurrentPage(1);
    setTimeout(() => setIsSearching(false), 400);
  };

  const handleResetFilters = () => {
    setGlobalSearch('');
    setFilters({
      district: 'All',
      policeStation: 'All',
      crimeHead: 'All',
      investigationStatus: 'All',
      gravity: 'All',
      repeatOffenderOnly: false,
      dateRange: 'All',
      evidenceCCTV: false,
      evidenceFingerprints: false,
      evidenceDNA: false,
      evidenceWeapon: false,
      evidenceMobile: false,
      evidenceVehicle: false,
      evidenceDigital: false,
      evidenceFSL: false,
      accusedStatus: 'All',
    });
    setCurrentPage(1);
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 300);
  };

  // Dynamic Filtering Logic
  const filteredRecords = useMemo(() => {
    return INITIAL_DATABASE.filter((rec) => {
      // Global Search string matching
      if (globalSearch.trim()) {
        const q = globalSearch.toLowerCase().trim();
        const matchesGlobal =
          rec.firNumber.toLowerCase().includes(q) ||
          rec.crimeNumber.toLowerCase().includes(q) ||
          rec.caseNumber.toLowerCase().includes(q) ||
          rec.victim.name.toLowerCase().includes(q) ||
          rec.accused.name.toLowerCase().includes(q) ||
          rec.complainant.name.toLowerCase().includes(q) ||
          rec.policeStation.toLowerCase().includes(q) ||
          rec.district.toLowerCase().includes(q);
        if (!matchesGlobal) return false;
      }

      // District
      if (filters.district !== 'All' && rec.district !== filters.district) return false;
      // Police Station
      if (filters.policeStation !== 'All' && rec.policeStation !== filters.policeStation)
        return false;
      // Crime Head
      if (filters.crimeHead !== 'All' && rec.crimeHead !== filters.crimeHead) return false;
      // Investigation Status
      if (
        filters.investigationStatus !== 'All' &&
        rec.investigationStatus !== filters.investigationStatus
      )
        return false;
      // Gravity
      if (filters.gravity !== 'All' && rec.gravityOfOffence !== filters.gravity) return false;
      // Repeat Offender
      if (filters.repeatOffenderOnly && !rec.accused.isRepeatOffender) return false;
      // Accused Status
      if (filters.accusedStatus !== 'All' && rec.accused.arrestStatus !== filters.accusedStatus)
        return false;

      // Evidence checkboxes
      if (filters.evidenceCCTV && !rec.evidence.hasCCTV) return false;
      if (filters.evidenceFingerprints && !rec.evidence.hasFingerprints) return false;
      if (filters.evidenceDNA && !rec.evidence.hasDNA) return false;
      if (filters.evidenceWeapon && !rec.evidence.hasWeapon) return false;
      if (filters.evidenceMobile && !rec.evidence.hasMobile) return false;
      if (filters.evidenceVehicle && !rec.evidence.hasVehicle) return false;
      if (filters.evidenceDigital && !rec.evidence.hasDigital) return false;
      if (filters.evidenceFSL && !rec.evidence.hasFSLReport) return false;

      return true;
    });
  }, [globalSearch, filters]);

  // Pagination Slice
  const totalResults = filteredRecords.length;
  const totalPages = Math.ceil(totalResults / itemsPerPage) || 1;
  const paginatedRecords = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredRecords.slice(start, start + itemsPerPage);
  }, [filteredRecords, currentPage, itemsPerPage]);

  // Calculate Active Filter Chips List
  const activeChips = useMemo(() => {
    const chips: { key: string; label: string; clearAction: () => void }[] = [];

    if (globalSearch.trim()) {
      chips.push({
        key: 'global',
        label: `Query: "${globalSearch}"`,
        clearAction: () => setGlobalSearch(''),
      });
    }
    if (filters.district !== 'All') {
      chips.push({
        key: 'district',
        label: `District: ${filters.district}`,
        clearAction: () => setFilters((f) => ({ ...f, district: 'All' })),
      });
    }
    if (filters.policeStation !== 'All') {
      chips.push({
        key: 'station',
        label: `Station: ${filters.policeStation}`,
        clearAction: () => setFilters((f) => ({ ...f, policeStation: 'All' })),
      });
    }
    if (filters.crimeHead !== 'All') {
      chips.push({
        key: 'crimeHead',
        label: `Crime: ${filters.crimeHead}`,
        clearAction: () => setFilters((f) => ({ ...f, crimeHead: 'All' })),
      });
    }
    if (filters.investigationStatus !== 'All') {
      chips.push({
        key: 'status',
        label: `Status: ${filters.investigationStatus}`,
        clearAction: () => setFilters((f) => ({ ...f, investigationStatus: 'All' })),
      });
    }
    if (filters.accusedStatus !== 'All') {
      chips.push({
        key: 'accusedStatus',
        label: `Accused: ${filters.accusedStatus}`,
        clearAction: () => setFilters((f) => ({ ...f, accusedStatus: 'All' })),
      });
    }
    if (filters.repeatOffenderOnly) {
      chips.push({
        key: 'repeatOffender',
        label: `Repeat Offender Only`,
        clearAction: () => setFilters((f) => ({ ...f, repeatOffenderOnly: false })),
      });
    }
    if (filters.evidenceCCTV) {
      chips.push({
        key: 'cctv',
        label: `Evidence: CCTV`,
        clearAction: () => setFilters((f) => ({ ...f, evidenceCCTV: false })),
      });
    }
    if (filters.evidenceFingerprints) {
      chips.push({
        key: 'fingerprints',
        label: `Evidence: Fingerprints`,
        clearAction: () => setFilters((f) => ({ ...f, evidenceFingerprints: false })),
      });
    }
    if (filters.evidenceDNA) {
      chips.push({
        key: 'dna',
        label: `Evidence: DNA`,
        clearAction: () => setFilters((f) => ({ ...f, evidenceDNA: false })),
      });
    }
    if (filters.evidenceWeapon) {
      chips.push({
        key: 'weapon',
        label: `Evidence: Weapon`,
        clearAction: () => setFilters((f) => ({ ...f, evidenceWeapon: false })),
      });
    }
    return chips;
  }, [globalSearch, filters]);

  // Intelligence Metrics Summaries
  const metrics = useMemo(() => {
    const total = filteredRecords.length;
    const pendingCases = filteredRecords.filter(
      (r) => r.investigationStatus === 'Investigation Ongoing' || r.investigationStatus === 'Pending Arrest'
    ).length;
    const chargesheetFiled = filteredRecords.filter((r) => r.chargesheetStatus === 'Filed').length;
    const closedCases = filteredRecords.filter((r) => r.investigationStatus === 'Closed' || r.investigationStatus === 'Disposed').length;
    const repeatOffendersCount = filteredRecords.filter((r) => r.accused.isRepeatOffender).length;
    const withCCTVCount = filteredRecords.filter((r) => r.evidence.hasCCTV).length;
    const withDNACount = filteredRecords.filter((r) => r.evidence.hasDNA).length;
    const pendingArrestCount = filteredRecords.filter((r) => r.accused.arrestStatus === 'Pending Arrest' || r.accused.arrestStatus === 'Absconding').length;
    const digitalCount = filteredRecords.filter((r) => r.evidence.hasDigital).length;

    // Crime Head Distribution breakdown
    const distribution: Record<string, number> = {};
    filteredRecords.forEach((r) => {
      distribution[r.crimeHead] = (distribution[r.crimeHead] || 0) + 1;
    });

    // Top Stations
    const stations: Record<string, number> = {};
    filteredRecords.forEach((r) => {
      stations[r.policeStation] = (stations[r.policeStation] || 0) + 1;
    });
    const topStations = Object.entries(stations)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 4);

    return {
      total,
      pendingCases,
      chargesheetFiled,
      closedCases,
      repeatOffendersCount,
      withCCTVCount,
      withDNACount,
      pendingArrestCount,
      digitalCount,
      distribution,
      topStations,
    };
  }, [filteredRecords]);

  return (
    <div className="w-full h-[calc(100vh-64px)] overflow-y-auto mt-16 bg-[#0c0e12] text-on-surface p-4 lg:p-6 space-y-6">
      {/* ---------------------------------------- */}
      {/* PAGE HEADER */}
      {/* ---------------------------------------- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#14171c] border border-white/10 p-4 rounded-xl shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-2xl">manage_search</span>
          </div>
          <div>
            <h1 className="font-headline-md text-xl md:text-2xl font-bold text-on-surface flex items-center gap-2">
              <span>Search Crime Database</span>
              <span className="bg-primary/20 text-primary border border-primary/30 text-[10px] font-data-mono px-2 py-0.5 rounded font-semibold uppercase">
                SQL ENGINE
              </span>
            </h1>
            <p className="font-data-mono text-xs text-outline-variant">
              Advanced Structured Queries & Investigation Filters • KSP Central Records
            </p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="w-full md:w-96 flex items-center bg-[#090b0e] border border-white/15 rounded-lg px-3 py-2 focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary/30 transition-all">
          <span className="material-symbols-outlined text-outline text-lg mr-2">search</span>
          <input
            type="text"
            value={globalSearch}
            onChange={(e) => setGlobalSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleApplySearch()}
            placeholder="Search FIR, Crime No, Victim, Accused, Vehicle..."
            className="w-full bg-transparent border-none text-xs font-data-mono text-on-surface focus:outline-none placeholder:text-outline-variant"
          />
          {globalSearch && (
            <button
              onClick={() => setGlobalSearch('')}
              className="text-outline-variant hover:text-white"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}
        </div>
      </div>

      {/* ---------------------------------------- */}
      {/* MAIN CONTENT GRID: 3 COLUMNS */}
      {/* ---------------------------------------- */}
      <div className="grid grid-cols-12 gap-6 items-start">
        {/* ======================================== */}
        {/* LEFT FILTER PANEL (11 ACCORDION GROUPS) */}
        {/* ======================================== */}
        <aside className="col-span-12 lg:col-span-3 bg-[#111418] border border-white/10 rounded-xl p-4 flex flex-col gap-3 max-h-[85vh] overflow-y-auto shadow-xl">
          <div className="flex justify-between items-center pb-2 border-b border-white/10">
            <span className="font-label-caps text-xs text-secondary font-bold tracking-wider uppercase flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">filter_alt</span>
              <span>Filter Parameters</span>
            </span>
            <span className="font-data-mono text-[10px] text-outline-variant">11 Groups</span>
          </div>

          {/* Action Buttons Header */}
          <div className="flex gap-2">
            <button
              onClick={handleApplySearch}
              className="flex-1 py-2 bg-primary text-on-primary font-label-caps text-xs font-bold rounded hover:bg-primary-container transition-colors shadow flex items-center justify-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">search</span>
              <span>SEARCH</span>
            </button>
            <button
              onClick={handleResetFilters}
              className="py-2 px-3 bg-surface border border-white/10 text-outline hover:text-white hover:bg-white/5 font-label-caps text-xs font-semibold rounded transition-colors cursor-pointer"
              title="Reset all filters to default"
            >
              <span className="material-symbols-outlined text-sm">restart_alt</span>
            </button>
          </div>

          {/* 1. Case Information */}
          <div className="border border-white/5 rounded-lg overflow-hidden bg-[#161a20]">
            <button
              onClick={() => toggleAccordion('caseInfo')}
              className="w-full p-2.5 flex justify-between items-center text-xs font-label-caps font-semibold text-on-surface hover:bg-white/5 transition-colors"
            >
              <span>1. Case Information</span>
              <span className="material-symbols-outlined text-sm text-outline-variant">
                {accordions.caseInfo ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {accordions.caseInfo && (
              <div className="p-3 border-t border-white/5 space-y-2.5 text-xs font-body-md">
                <div>
                  <label className="text-[10px] text-outline-variant font-data-mono block mb-1">
                    Gravity of Offence
                  </label>
                  <select
                    value={filters.gravity}
                    onChange={(e) => setFilters({ ...filters, gravity: e.target.value })}
                    className="w-full bg-[#0c0e12] border border-white/10 rounded p-1.5 text-xs text-on-surface focus:border-secondary outline-none font-data-mono"
                  >
                    <option value="All">All Offence Gravities</option>
                    <option value="Heinous">Heinous Offence</option>
                    <option value="Non-Heinous">Non-Heinous Offence</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* 2. Crime Information */}
          <div className="border border-white/5 rounded-lg overflow-hidden bg-[#161a20]">
            <button
              onClick={() => toggleAccordion('crimeInfo')}
              className="w-full p-2.5 flex justify-between items-center text-xs font-label-caps font-semibold text-on-surface hover:bg-white/5 transition-colors"
            >
              <span>2. Crime Information</span>
              <span className="material-symbols-outlined text-sm text-outline-variant">
                {accordions.crimeInfo ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {accordions.crimeInfo && (
              <div className="p-3 border-t border-white/5 space-y-2.5 text-xs font-body-md">
                <div>
                  <label className="text-[10px] text-outline-variant font-data-mono block mb-1">
                    Crime Head
                  </label>
                  <select
                    value={filters.crimeHead}
                    onChange={(e) => setFilters({ ...filters, crimeHead: e.target.value })}
                    className="w-full bg-[#0c0e12] border border-white/10 rounded p-1.5 text-xs text-on-surface focus:border-secondary outline-none font-data-mono"
                  >
                    <option value="All">All Crime Heads</option>
                    <option value="Theft">Theft</option>
                    <option value="House Breaking">House Breaking</option>
                    <option value="Robbery">Robbery</option>
                    <option value="Vehicle Theft">Vehicle Theft</option>
                    <option value="Assault">Assault</option>
                    <option value="Cyber">Cyber Crime</option>
                    <option value="Narcotics">Narcotics (NDPS)</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* 3. Police Information */}
          <div className="border border-white/5 rounded-lg overflow-hidden bg-[#161a20]">
            <button
              onClick={() => toggleAccordion('policeInfo')}
              className="w-full p-2.5 flex justify-between items-center text-xs font-label-caps font-semibold text-on-surface hover:bg-white/5 transition-colors"
            >
              <span>3. Police Information</span>
              <span className="material-symbols-outlined text-sm text-outline-variant">
                {accordions.policeInfo ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {accordions.policeInfo && (
              <div className="p-3 border-t border-white/5 space-y-2.5 text-xs font-body-md">
                <div>
                  <label className="text-[10px] text-outline-variant font-data-mono block mb-1">
                    District
                  </label>
                  <select
                    value={filters.district}
                    onChange={(e) => setFilters({ ...filters, district: e.target.value, policeStation: 'All' })}
                    className="w-full bg-[#0c0e12] border border-white/10 rounded p-1.5 text-xs text-on-surface focus:border-secondary outline-none font-data-mono"
                  >
                    <option value="All">All Districts</option>
                    <option value="Bengaluru Urban">Bengaluru Urban</option>
                    <option value="Mysuru Division">Mysuru Division</option>
                    <option value="Hubballi-Dharwad">Hubballi-Dharwad</option>
                    <option value="Mangaluru Coastal">Mangaluru Coastal</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* 4. Location */}
          <div className="border border-white/5 rounded-lg overflow-hidden bg-[#161a20]">
            <button
              onClick={() => toggleAccordion('location')}
              className="w-full p-2.5 flex justify-between items-center text-xs font-label-caps font-semibold text-on-surface hover:bg-white/5 transition-colors"
            >
              <span>4. Location</span>
              <span className="material-symbols-outlined text-sm text-outline-variant">
                {accordions.location ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {accordions.location && (
              <div className="p-3 border-t border-white/5 text-xs text-outline-variant space-y-1">
                <p className="text-[10px]">Geospatial Bounds: Active</p>
                <div className="flex gap-2">
                  <input placeholder="Lat" className="w-1/2 bg-[#0c0e12] border border-white/10 rounded p-1 text-[10px] font-data-mono outline-none" />
                  <input placeholder="Long" className="w-1/2 bg-[#0c0e12] border border-white/10 rounded p-1 text-[10px] font-data-mono outline-none" />
                </div>
              </div>
            )}
          </div>

          {/* 5. Victim Details */}
          <div className="border border-white/5 rounded-lg overflow-hidden bg-[#161a20]">
            <button
              onClick={() => toggleAccordion('victim')}
              className="w-full p-2.5 flex justify-between items-center text-xs font-label-caps font-semibold text-on-surface hover:bg-white/5 transition-colors"
            >
              <span>5. Victim Details</span>
              <span className="material-symbols-outlined text-sm text-outline-variant">
                {accordions.victim ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {accordions.victim && (
              <div className="p-3 border-t border-white/5 text-xs">
                <input placeholder="Victim Name..." className="w-full bg-[#0c0e12] border border-white/10 rounded p-1.5 text-xs font-data-mono outline-none" />
              </div>
            )}
          </div>

          {/* 6. Accused Details */}
          <div className="border border-white/5 rounded-lg overflow-hidden bg-[#161a20]">
            <button
              onClick={() => toggleAccordion('accused')}
              className="w-full p-2.5 flex justify-between items-center text-xs font-label-caps font-semibold text-on-surface hover:bg-white/5 transition-colors"
            >
              <span>6. Accused Details</span>
              <span className="material-symbols-outlined text-sm text-outline-variant">
                {accordions.accused ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {accordions.accused && (
              <div className="p-3 border-t border-white/5 space-y-2 text-xs">
                <div>
                  <label className="text-[10px] text-outline-variant font-data-mono block mb-1">Arrest Status</label>
                  <select
                    value={filters.accusedStatus}
                    onChange={(e) => setFilters({ ...filters, accusedStatus: e.target.value })}
                    className="w-full bg-[#0c0e12] border border-white/10 rounded p-1.5 text-xs text-on-surface focus:border-secondary outline-none font-data-mono"
                  >
                    <option value="All">All Arrest Statuses</option>
                    <option value="Arrested">Arrested</option>
                    <option value="Absconding">Absconding</option>
                    <option value="Pending Arrest">Pending Arrest</option>
                    <option value="Bail Granted">Bail Granted</option>
                  </select>
                </div>
                <label className="flex items-center gap-2 text-[10px] text-on-surface font-body-md cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={filters.repeatOffenderOnly}
                    onChange={(e) => setFilters({ ...filters, repeatOffenderOnly: e.target.checked })}
                    className="rounded border-white/20 bg-black text-secondary focus:ring-0"
                  />
                  <span>Repeat Offender Only</span>
                </label>
              </div>
            )}
          </div>

          {/* 7. Complainant Details */}
          <div className="border border-white/5 rounded-lg overflow-hidden bg-[#161a20]">
            <button
              onClick={() => toggleAccordion('complainant')}
              className="w-full p-2.5 flex justify-between items-center text-xs font-label-caps font-semibold text-on-surface hover:bg-white/5 transition-colors"
            >
              <span>7. Complainant Details</span>
              <span className="material-symbols-outlined text-sm text-outline-variant">
                {accordions.complainant ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {accordions.complainant && (
              <div className="p-3 border-t border-white/5 text-xs">
                <input placeholder="Complainant Name..." className="w-full bg-[#0c0e12] border border-white/10 rounded p-1.5 text-xs font-data-mono outline-none" />
              </div>
            )}
          </div>

          {/* 8. Evidence Filters */}
          <div className="border border-white/5 rounded-lg overflow-hidden bg-[#161a20]">
            <button
              onClick={() => toggleAccordion('evidence')}
              className="w-full p-2.5 flex justify-between items-center text-xs font-label-caps font-semibold text-on-surface hover:bg-white/5 transition-colors"
            >
              <span>8. Evidence Filters</span>
              <span className="material-symbols-outlined text-sm text-outline-variant">
                {accordions.evidence ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {accordions.evidence && (
              <div className="p-3 border-t border-white/5 grid grid-cols-1 gap-2 text-xs">
                <label className="flex items-center gap-2 text-[11px] text-on-surface cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.evidenceCCTV}
                    onChange={(e) => setFilters({ ...filters, evidenceCCTV: e.target.checked })}
                    className="rounded border-white/20 bg-black text-secondary"
                  />
                  <span>CCTV Available</span>
                </label>
                <label className="flex items-center gap-2 text-[11px] text-on-surface cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.evidenceFingerprints}
                    onChange={(e) => setFilters({ ...filters, evidenceFingerprints: e.target.checked })}
                    className="rounded border-white/20 bg-black text-secondary"
                  />
                  <span>Fingerprints Collected</span>
                </label>
                <label className="flex items-center gap-2 text-[11px] text-on-surface cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.evidenceDNA}
                    onChange={(e) => setFilters({ ...filters, evidenceDNA: e.target.checked })}
                    className="rounded border-white/20 bg-black text-secondary"
                  />
                  <span>DNA Collected</span>
                </label>
                <label className="flex items-center gap-2 text-[11px] text-on-surface cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.evidenceWeapon}
                    onChange={(e) => setFilters({ ...filters, evidenceWeapon: e.target.checked })}
                    className="rounded border-white/20 bg-black text-secondary"
                  />
                  <span>Weapon Recovered</span>
                </label>
              </div>
            )}
          </div>

          {/* 9. Date Filters */}
          <div className="border border-white/5 rounded-lg overflow-hidden bg-[#161a20]">
            <button
              onClick={() => toggleAccordion('dateFilters')}
              className="w-full p-2.5 flex justify-between items-center text-xs font-label-caps font-semibold text-on-surface hover:bg-white/5 transition-colors"
            >
              <span>9. Date Filters</span>
              <span className="material-symbols-outlined text-sm text-outline-variant">
                {accordions.dateFilters ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {accordions.dateFilters && (
              <div className="p-3 border-t border-white/5 space-y-1 text-xs">
                {['All', 'Today', 'Last 7 Days', 'Last Month', 'Last 3 Months', 'Last Year'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFilters({ ...filters, dateRange: opt })}
                    className={`w-full text-left px-2 py-1 rounded text-[10px] font-data-mono transition-colors ${
                      filters.dateRange === opt ? 'bg-secondary/20 text-secondary font-bold' : 'hover:bg-white/5 text-outline-variant'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 10. Investigation Status */}
          <div className="border border-white/5 rounded-lg overflow-hidden bg-[#161a20]">
            <button
              onClick={() => toggleAccordion('investigationStatus')}
              className="w-full p-2.5 flex justify-between items-center text-xs font-label-caps font-semibold text-on-surface hover:bg-white/5 transition-colors"
            >
              <span>10. Investigation Status</span>
              <span className="material-symbols-outlined text-sm text-outline-variant">
                {accordions.investigationStatus ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {accordions.investigationStatus && (
              <div className="p-3 border-t border-white/5 text-xs">
                <select
                  value={filters.investigationStatus}
                  onChange={(e) => setFilters({ ...filters, investigationStatus: e.target.value })}
                  className="w-full bg-[#0c0e12] border border-white/10 rounded p-1.5 text-xs text-on-surface focus:border-secondary outline-none font-data-mono"
                >
                  <option value="All">All Statuses</option>
                  <option value="FIR Registered">FIR Registered</option>
                  <option value="Investigation Ongoing">Investigation Ongoing</option>
                  <option value="Pending Arrest">Pending Arrest</option>
                  <option value="Chargesheet Filed">Chargesheet Filed</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            )}
          </div>

          {/* 11. Court Details */}
          <div className="border border-white/5 rounded-lg overflow-hidden bg-[#161a20]">
            <button
              onClick={() => toggleAccordion('courtDetails')}
              className="w-full p-2.5 flex justify-between items-center text-xs font-label-caps font-semibold text-on-surface hover:bg-white/5 transition-colors"
            >
              <span>11. Court Details</span>
              <span className="material-symbols-outlined text-sm text-outline-variant">
                {accordions.courtDetails ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {accordions.courtDetails && (
              <div className="p-3 border-t border-white/5 text-xs text-outline-variant">
                <p className="text-[10px]">Jurisdiction Courts Filter Active</p>
              </div>
            )}
          </div>
        </aside>

        {/* ======================================== */}
        {/* CENTER COLUMN: RESULTS & CARDS */}
        {/* ======================================== */}
        <main className="col-span-12 lg:col-span-6 flex flex-col gap-4">
          {/* Active Filter Chips Bar */}
          {activeChips.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap bg-[#14171c] border border-white/10 p-3 rounded-xl">
              <span className="font-label-caps text-[10px] text-outline font-bold uppercase mr-1">
                Active Filters:
              </span>
              {activeChips.map((chip) => (
                <span
                  key={chip.key}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary/15 border border-secondary/30 text-secondary font-data-mono text-[10px] font-medium"
                >
                  <span>{chip.label}</span>
                  <button
                    onClick={chip.clearAction}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[12px]">close</span>
                  </button>
                </span>
              ))}
              <button
                onClick={handleResetFilters}
                className="text-[10px] font-data-mono text-error hover:underline ml-auto"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Results Summary Bar */}
          <div className="flex justify-between items-center px-1">
            <span className="font-data-mono text-xs text-outline-variant">
              Showing <strong className="text-on-surface font-bold">{paginatedRecords.length}</strong> of{' '}
              <strong className="text-secondary font-bold">{totalResults}</strong> Matching Crime Records
            </span>
            <div className="flex items-center gap-2">
              <span className="font-data-mono text-[10px] text-outline">Per page:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="bg-[#14171c] border border-white/10 text-xs font-data-mono text-on-surface rounded p-1 outline-none"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>

          {/* Loading Skeletons vs Investigation Cards List */}
          {isSearching ? (
            <div className="space-y-4">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="h-36 bg-[#14171c] border border-white/5 rounded-xl p-4 animate-pulse flex flex-col justify-between"
                >
                  <div className="h-4 bg-white/10 rounded w-1/3" />
                  <div className="h-4 bg-white/5 rounded w-2/3" />
                  <div className="h-4 bg-white/10 rounded w-1/4" />
                </div>
              ))}
            </div>
          ) : paginatedRecords.length === 0 ? (
            <div className="bg-[#14171c] border border-white/10 rounded-xl p-12 text-center my-6 flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl text-outline-variant mb-2">
                folder_off
              </span>
              <h3 className="font-headline-md text-base text-on-surface font-bold mb-1">
                No Matching Crime Records Found
              </h3>
              <p className="font-data-mono text-xs text-outline-variant max-w-sm mb-4">
                Try loosening your filter parameters or search terms to view available SQL database entries.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 bg-secondary text-on-secondary font-label-caps text-xs font-bold rounded hover:bg-secondary/90 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="space-y-3.5">
              {paginatedRecords.map((record) => (
                <div
                  key={record.id}
                  className="glass-panel p-4 rounded-xl border border-white/10 hover:border-secondary/40 transition-all duration-200 shadow-md group relative flex flex-col sm:flex-row justify-between gap-4"
                >
                  {/* LEFT SECTION */}
                  <div className="flex items-start gap-3 sm:w-2/5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-xl">
                        {record.crimeHead === 'Robbery'
                          ? 'gavel'
                          : record.crimeHead === 'Cyber'
                          ? 'phonelink_lock'
                          : record.crimeHead === 'Vehicle Theft'
                          ? 'directions_car'
                          : 'policy'}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-data-mono text-xs font-bold text-secondary">
                          {record.firNumber}
                        </span>
                        <span className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-data-mono text-outline font-semibold">
                          {record.crimeHead}
                        </span>
                      </div>
                      <h4 className="font-headline-md text-sm font-semibold text-on-surface mt-1 group-hover:text-secondary transition-colors">
                        {record.crimeType}
                      </h4>
                      <p className="font-data-mono text-[10px] text-outline-variant mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">schedule</span>
                        <span>{record.incidentDate} • {record.incidentTime}</span>
                      </p>
                      <p className="font-data-mono text-[10px] text-outline mt-0.5">
                        {record.policeStation} ({record.district})
                      </p>
                    </div>
                  </div>

                  {/* CENTER SECTION */}
                  <div className="flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-white/5 pt-3 sm:pt-0 sm:pl-4 sm:w-2/5 font-body-md text-[11px] gap-2">
                    {/* Victim Info */}
                    <div>
                      <span className="font-label-caps text-[9px] text-outline uppercase font-semibold block">
                        Victim:
                      </span>
                      <p className="text-on-surface font-medium truncate">
                        {record.victim.name} ({record.victim.age}y, {record.victim.gender})
                      </p>
                    </div>

                    {/* Accused Info */}
                    <div>
                      <span className="font-label-caps text-[9px] text-outline uppercase font-semibold block">
                        Accused:
                      </span>
                      <div className="flex items-center gap-2">
                        <p className="text-on-surface font-medium truncate">
                          {record.accused.name} ({record.accused.age}y)
                        </p>
                        <span
                          className={`px-1.5 py-0.2 rounded text-[8px] font-data-mono font-bold ${
                            record.accused.arrestStatus === 'Arrested'
                              ? 'bg-green-500/20 text-green-400'
                              : record.accused.arrestStatus === 'Absconding'
                              ? 'bg-error/20 text-error'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}
                        >
                          {record.accused.arrestStatus}
                        </span>
                      </div>
                    </div>

                    {/* Evidence Badges */}
                    <div className="flex items-center gap-1.5 flex-wrap pt-1">
                      {record.evidence.hasCCTV && (
                        <span className="px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-[9px] font-data-mono text-secondary" title="CCTV Evidence Available">
                          CCTV
                        </span>
                      )}
                      {record.evidence.hasFingerprints && (
                        <span className="px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-[9px] font-data-mono text-primary" title="Fingerprints Recovered">
                          FP
                        </span>
                      )}
                      {record.evidence.hasDNA && (
                        <span className="px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-[9px] font-data-mono text-green-400" title="DNA Samples">
                          DNA
                        </span>
                      )}
                      {record.evidence.hasWeapon && (
                        <span className="px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-[9px] font-data-mono text-error" title="Weapon Recovered">
                          WPN
                        </span>
                      )}
                      {record.evidence.hasMobile && (
                        <span className="px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-[9px] font-data-mono text-outline-variant" title="Mobile Seized">
                          MOB
                        </span>
                      )}
                    </div>
                  </div>

                  {/* RIGHT SECTION */}
                  <div className="flex flex-col justify-between items-start sm:items-end border-t sm:border-t-0 sm:border-l border-white/5 pt-3 sm:pt-0 sm:pl-4 sm:w-1/5 flex-shrink-0">
                    <span
                      className={`px-2 py-0.5 rounded text-[9px] font-data-mono font-bold ${
                        record.investigationStatus === 'Chargesheet Filed'
                          ? 'bg-secondary/20 text-secondary'
                          : record.investigationStatus === 'Investigation Ongoing'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : record.investigationStatus === 'Closed'
                          ? 'bg-white/10 text-outline'
                          : 'bg-error/20 text-error'
                      }`}
                    >
                      {record.investigationStatus}
                    </span>

                    <div className="text-left sm:text-right my-2">
                      <span className="font-data-mono text-[9px] text-outline block">
                        Case: {record.caseNumber}
                      </span>
                      <span className="font-data-mono text-[8px] text-outline-variant block">
                        Updated: {record.lastUpdated}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedCase(record)}
                      className="px-3 py-1.5 rounded bg-surface border border-white/10 text-[10px] font-label-caps hover:bg-secondary hover:text-on-secondary transition-all cursor-pointer font-bold"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Bar */}
          <div className="flex justify-between items-center p-3 bg-[#14171c] border border-white/10 rounded-xl mt-2 font-data-mono text-xs">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="px-3 py-1 bg-surface border border-white/10 rounded disabled:opacity-30 hover:bg-white/5 transition-colors cursor-pointer"
            >
              Previous
            </button>

            <span className="text-outline">
              Page <strong className="text-on-surface">{currentPage}</strong> of{' '}
              <strong className="text-on-surface">{totalPages}</strong>
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="px-3 py-1 bg-surface border border-white/10 rounded disabled:opacity-30 hover:bg-white/5 transition-colors cursor-pointer"
            >
              Next
            </button>
          </div>
        </main>

        {/* ======================================== */}
        {/* RIGHT INFORMATION PANEL (LIVE SEARCH INTEL) */}
        {/* ======================================== */}
        <aside className="col-span-12 lg:col-span-3 flex flex-col gap-4">
          {/* Section 1: Search Summary KPIs */}
          <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-3">
            <span className="font-label-caps text-xs text-outline font-bold uppercase tracking-wider block border-b border-white/5 pb-2">
              Live Search Summary
            </span>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#14171c] p-2.5 rounded border border-white/5">
                <span className="font-data-mono text-[9px] text-outline uppercase block">Total Results</span>
                <span className="font-headline-lg text-xl font-bold text-on-surface">{metrics.total}</span>
              </div>
              <div className="bg-[#14171c] p-2.5 rounded border border-white/5">
                <span className="font-data-mono text-[9px] text-yellow-400 uppercase block">Pending Cases</span>
                <span className="font-headline-lg text-xl font-bold text-yellow-400">{metrics.pendingCases}</span>
              </div>
              <div className="bg-[#14171c] p-2.5 rounded border border-white/5">
                <span className="font-data-mono text-[9px] text-secondary uppercase block">Chargesheeted</span>
                <span className="font-headline-lg text-xl font-bold text-secondary">{metrics.chargesheetFiled}</span>
              </div>
              <div className="bg-[#14171c] p-2.5 rounded border border-white/5">
                <span className="font-data-mono text-[9px] text-outline uppercase block">Closed Cases</span>
                <span className="font-headline-lg text-xl font-bold text-outline">{metrics.closedCases}</span>
              </div>
            </div>
          </div>

          {/* Section 2: Crime Head Distribution (Donut Chart SVG) */}
          <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-3">
            <span className="font-label-caps text-xs text-outline font-bold uppercase tracking-wider block border-b border-white/5 pb-2">
              Crime Head Distribution
            </span>
            <div className="flex items-center justify-center py-2 relative">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-surface-container"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-secondary"
                  strokeDasharray="40, 100"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-primary"
                  strokeDasharray="25, 100"
                  strokeDashoffset="-40"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-error"
                  strokeDasharray="15, 100"
                  strokeDashoffset="-65"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-headline-lg text-lg font-bold text-on-surface">{metrics.total}</span>
                <span className="font-data-mono text-[8px] text-outline">RECORDS</span>
              </div>
            </div>
            <div className="space-y-1 text-[10px] font-data-mono">
              {Object.entries(metrics.distribution).map(([head, count]) => (
                <div key={head} className="flex justify-between items-center">
                  <span className="text-outline-variant">{head}</span>
                  <span className="text-on-surface font-bold">{count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Top Police Stations */}
          <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-3">
            <span className="font-label-caps text-xs text-outline font-bold uppercase tracking-wider block border-b border-white/5 pb-2">
              Top Police Stations
            </span>
            <div className="space-y-2 font-data-mono text-xs">
              {metrics.topStations.map((st) => (
                <div key={st.name} className="flex justify-between items-center p-2 rounded bg-[#14171c] border border-white/5">
                  <span className="text-on-surface truncate max-w-[170px]">{st.name}</span>
                  <span className="px-2 py-0.5 rounded bg-secondary/15 text-secondary font-bold text-[10px]">
                    {st.count} FIRs
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Investigation Metrics KPIs */}
          <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-2">
            <span className="font-label-caps text-xs text-outline font-bold uppercase tracking-wider block border-b border-white/5 pb-2">
              Investigation Metrics
            </span>
            <div className="space-y-2 font-data-mono text-[11px]">
              <div className="flex justify-between items-center p-2 bg-[#14171c] rounded">
                <span className="text-outline-variant">Repeat Offenders Found</span>
                <span className="text-error font-bold">{metrics.repeatOffendersCount}</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-[#14171c] rounded">
                <span className="text-outline-variant">Cases with CCTV</span>
                <span className="text-secondary font-bold">{metrics.withCCTVCount}</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-[#14171c] rounded">
                <span className="text-outline-variant">Cases with DNA Evidence</span>
                <span className="text-green-400 font-bold">{metrics.withDNACount}</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-[#14171c] rounded">
                <span className="text-outline-variant">Pending Arrest</span>
                <span className="text-yellow-400 font-bold">{metrics.pendingArrestCount}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* ======================================== */}
      {/* CASE DETAIL DOSSIER MODAL */}
      {/* ======================================== */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#111418] border border-white/15 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl relative">
            {/* Modal Header */}
            <div className="flex justify-between items-start pb-4 border-b border-white/10">
              <div>
                <span className="px-2 py-0.5 bg-secondary/20 text-secondary text-xs font-data-mono rounded font-bold">
                  {selectedCase.firNumber}
                </span>
                <h3 className="font-headline-md text-xl font-bold text-on-surface mt-2">
                  {selectedCase.crimeType}
                </h3>
                <p className="font-data-mono text-xs text-outline mt-0.5">
                  Jurisdiction: {selectedCase.policeStation} ({selectedCase.district})
                </p>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="text-outline hover:text-white p-1 rounded"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Dossier Attributes Grid */}
            <div className="grid grid-cols-2 gap-4 font-data-mono text-xs">
              <div className="bg-[#161a20] p-3 rounded border border-white/5 space-y-1">
                <span className="text-outline text-[10px] block">CRIME NUMBER</span>
                <span className="text-on-surface font-bold">{selectedCase.crimeNumber}</span>
              </div>
              <div className="bg-[#161a20] p-3 rounded border border-white/5 space-y-1">
                <span className="text-outline text-[10px] block">CASE NUMBER</span>
                <span className="text-on-surface font-bold">{selectedCase.caseNumber}</span>
              </div>
              <div className="bg-[#161a20] p-3 rounded border border-white/5 space-y-1">
                <span className="text-outline text-[10px] block">INCIDENT DATE & TIME</span>
                <span className="text-on-surface font-bold">{selectedCase.incidentDate} • {selectedCase.incidentTime}</span>
              </div>
              <div className="bg-[#161a20] p-3 rounded border border-white/5 space-y-1">
                <span className="text-outline text-[10px] block">INVESTIGATING OFFICER</span>
                <span className="text-secondary font-bold">{selectedCase.investigatingOfficer}</span>
              </div>
            </div>

            {/* Parties Involved */}
            <div className="grid grid-cols-2 gap-4 font-body-md text-xs">
              <div className="bg-[#161a20] p-4 rounded border border-white/5 space-y-2">
                <h5 className="font-label-caps text-xs text-primary font-bold uppercase">Victim Information</h5>
                <p><strong className="text-outline">Name:</strong> {selectedCase.victim.name}</p>
                <p><strong className="text-outline">Age/Gender:</strong> {selectedCase.victim.age} yrs / {selectedCase.victim.gender}</p>
                <p><strong className="text-outline">Occupation:</strong> {selectedCase.victim.occupation}</p>
              </div>

              <div className="bg-[#161a20] p-4 rounded border border-white/5 space-y-2">
                <h5 className="font-label-caps text-xs text-error font-bold uppercase">Accused Information</h5>
                <p><strong className="text-outline">Name:</strong> {selectedCase.accused.name}</p>
                <p><strong className="text-outline">Status:</strong> <span className="text-error font-bold">{selectedCase.accused.arrestStatus}</span></p>
                <p><strong className="text-outline">Repeat Offender:</strong> {selectedCase.accused.isRepeatOffender ? 'YES' : 'NO'}</p>
              </div>
            </div>

            {/* Court & Legal Details */}
            <div className="bg-[#161a20] p-4 rounded border border-white/5 space-y-2 font-data-mono text-xs">
              <h5 className="font-label-caps text-xs text-secondary font-bold uppercase">Court & Judicial Proceedings</h5>
              <div className="grid grid-cols-3 gap-2 pt-1 text-[11px]">
                <div>
                  <span className="text-outline text-[9px] block">COURT</span>
                  <span>{selectedCase.court}</span>
                </div>
                <div>
                  <span className="text-outline text-[9px] block">TRIAL STATUS</span>
                  <span>{selectedCase.trialStatus}</span>
                </div>
                <div>
                  <span className="text-outline text-[9px] block">JUDGMENT</span>
                  <span>{selectedCase.judgmentStatus}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedCase(null)}
                className="px-5 py-2 bg-secondary text-on-secondary font-label-caps text-xs font-bold rounded hover:bg-secondary/90 transition-colors"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
