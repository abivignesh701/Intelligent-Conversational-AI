import React, { useState } from 'react';
import { ViewMode } from './types';
import { BackgroundShader } from './components/BackgroundShader';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { LoginScreen } from './components/LoginScreen';
import { CommandCenterView } from './components/CommandCenterView';
import { AIAssistantView } from './components/AIAssistantView';
import { CaseCenterView } from './components/CaseCenterView';
import { NetworkGraphView } from './components/NetworkGraphView';
import { CrimeSearchView } from './components/CrimeSearchView';

export function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('login');
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleNavigate = (view: ViewMode) => {
    setCurrentView(view);
    setIsOpenMobile(false);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim() && currentView !== 'crime-search') {
      setCurrentView('crime-search');
    }
  };

  if (currentView === 'login') {
    return (
      <LoginScreen
        onLoginSuccess={() => setCurrentView('command-center')}
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-[#111417] text-[#e1e2e7] font-body-md overflow-x-hidden selection:bg-secondary/30 selection:text-secondary">
      {/* Universal Background WebGL Shader */}
      <BackgroundShader mode="dots" className="fixed inset-0 w-full h-full z-0 opacity-30 pointer-events-none" />

      {/* Persistent App Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onOpenMobileMenu={() => setIsOpenMobile(true)}
      />

      {/* Persistent Left Sidebar Navigation */}
      <Sidebar
        currentView={currentView}
        onNavigate={handleNavigate}
        isOpenMobile={isOpenMobile}
        onCloseMobile={() => setIsOpenMobile(false)}
      />

      {/* Main Active Route View Container */}
      <main className="relative z-10 md:pl-64 min-h-screen flex flex-col">
        {currentView === 'command-center' && (
          <CommandCenterView
            onOpenCase={(_caseId) => handleNavigate('crime-search')}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'ai-assistant' && <AIAssistantView />}

        {currentView === 'case-center' && <CaseCenterView />}

        {currentView === 'network-graph' && <NetworkGraphView />}

        {(currentView === 'crime-search' || currentView === 'evidence') && (
          <CrimeSearchView />
        )}

        {currentView === 'settings' && (
          <div className="w-full h-[calc(100vh-64px)] mt-16 p-6 max-w-4xl mx-auto space-y-6">
            <h1 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface">
              System Settings & Security Protocols
            </h1>
            <div className="glass-panel p-6 rounded-xl border border-white/10 space-y-4 font-data-mono text-xs">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span>Node Designation</span>
                <span className="text-secondary font-bold">KSP-UNIT-01-BLR</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span>Encryption Standard</span>
                <span className="text-secondary font-bold">AES-256-GCM / Quantum Ready</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span>Gemini Cyber AI Model</span>
                <span className="text-primary font-bold">gemini-3.6-flash</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span>Database Sync Status</span>
                <span className="text-secondary font-bold">ONLINE (0ms latency)</span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Notifications Drawer */}
      {isNotificationsOpen && (
        <div className="fixed right-4 top-20 z-50 w-80 glass-panel rounded-xl p-4 border border-white/10 shadow-2xl space-y-3 font-body-md text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-white/10">
            <span className="font-label-caps text-xs text-on-surface font-bold uppercase">
              System Alerts
            </span>
            <button
              onClick={() => setIsNotificationsOpen(false)}
              className="text-outline hover:text-white"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
          <div className="space-y-2">
            <div className="p-2.5 bg-error/10 border border-error/20 rounded font-data-mono text-[11px]">
              <span className="text-error font-bold block">[HIGH RISK]</span>
              <span>INC-8892 Armed Robbery flagged in Sector 1.</span>
            </div>
            <div className="p-2.5 bg-secondary/10 border border-secondary/20 rounded font-data-mono text-[11px]">
              <span className="text-secondary font-bold block">[FACIAL RECOG MATCH]</span>
              <span>Camera BLR-92 detected suspect Viper.</span>
            </div>
            <div className="p-2.5 bg-black/40 border border-white/5 rounded font-data-mono text-[11px]">
              <span className="text-outline font-bold block">[SYS UPDATE]</span>
              <span>Intake protocol updated to v4.1.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
