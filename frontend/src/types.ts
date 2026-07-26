export type ViewMode =
  | 'login'
  | 'command-center'
  | 'ai-assistant'
  | 'case-center'
  | 'network-graph'
  | 'crime-search'
  | 'evidence'
  | 'settings';

export interface CriticalIncident {
  id: string;
  title: string;
  location: string;
  timeAgo: string;
  unitStatus: string;
  severity: 'HIGH' | 'MED' | 'LOW';
}

export interface DistrictInfo {
  id: string;
  name: string;
  code: string;
  zone: string;
  totalCrime: number;
  threatLevel: 'HIGH' | 'MED' | 'LOW';
  pendingFIR: number;
  solved30d: number;
  coords: { x: number; y: number };
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  timestamp: string;
  content: string;
  isStreaming?: boolean;
  metadata?: {
    confidence?: string;
    refTags?: string[];
    keyFindings?: string[];
    isConfidential?: boolean;
    title?: string;
  };
}

export interface NetworkNode {
  id: string;
  label: string;
  type: 'suspect' | 'device' | 'vehicle' | 'address' | 'financial';
  confidence: number;
  alias?: string;
  realName?: string;
  status: string;
  connectionsCount: number;
  details?: {
    lastActivity?: string;
    recentAction?: string;
  };
  pos: [number, number, number];
}

export interface SearchResultCase {
  id: string;
  subject: string;
  alias?: string;
  category: 'Cyber' | 'Narcotics' | 'Organized' | 'Theft' | 'Fraud';
  date: string;
  status: 'Active' | 'Critical' | 'Closed';
  district: string;
  summary: string;
  custodyChain: { step: number; title: string; logger: string; time: string }[];
  evidenceImages: { id: string; label: string; url: string; isClassified?: boolean }[];
}
