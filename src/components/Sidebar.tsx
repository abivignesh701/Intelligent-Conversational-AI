import React from 'react';
import { ViewMode } from '../types';

interface SidebarProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onNavigate,
  isOpenMobile = false,
  onCloseMobile,
}) => {
  const navItems: { id: ViewMode; label: string; icon: string }[] = [
    { id: 'command-center', label: 'Command Center', icon: 'dashboard' },
    { id: 'ai-assistant', label: 'AI Assistant', icon: 'smart_toy' },
    { id: 'case-center', label: 'Case Center', icon: 'folder_shared' },
    { id: 'network-graph', label: 'Network Graph', icon: 'hub' },
    { id: 'crime-search', label: 'Crime Search', icon: 'manage_search' },
    { id: 'evidence', label: 'Evidence', icon: 'folder_open' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[55] md:hidden"
        />
      )}

      <nav
        className={`fixed left-0 top-0 h-screen w-64 z-[60] bg-[#0c0e12]/80 backdrop-blur-2xl border-r border-white/10 shadow-2xl flex flex-col py-6 transition-transform duration-300 ease-in-out ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="px-6 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="material-symbols-outlined text-primary text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              local_police
            </span>
            <div>
              <h1 className="font-headline-md text-xl text-primary font-bold tracking-tighter">
                KSP Intel
              </h1>
              <p className="font-data-mono text-xs text-on-surface-variant/70">Unit 01-BLR</p>
            </div>
          </div>
          {isOpenMobile && (
            <button
              onClick={onCloseMobile}
              className="text-on-surface-variant hover:text-white md:hidden"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <div className="flex-1 px-3 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  if (onCloseMobile) onCloseMobile();
                }}
                className={`w-full flex items-center gap-3.5 px-4 py-2.5 rounded-lg text-xs font-label-caps tracking-wider transition-all duration-200 text-left ${
                  isActive
                    ? 'text-secondary border-r-2 border-secondary bg-secondary/10 shadow-[0_0_15px_rgba(76,215,246,0.2)] font-semibold'
                    : 'text-on-surface-variant/70 hover:text-on-surface hover:bg-white/5'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Footer Links */}
        <div className="px-3 space-y-1.5 mt-auto pt-4 border-t border-white/5">
          <button
            onClick={() => onNavigate('settings')}
            className="w-full flex items-center gap-3.5 px-4 py-2 rounded-lg text-xs font-label-caps text-on-surface-variant/70 hover:text-on-surface hover:bg-white/5 transition-all text-left"
          >
            <span className="material-symbols-outlined text-[18px]">help</span>
            <span>Support</span>
          </button>

          <button
            onClick={() => onNavigate('login')}
            className="w-full flex items-center gap-3.5 px-4 py-2 rounded-lg text-xs font-label-caps text-error/80 hover:text-error hover:bg-error/10 transition-all text-left"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            <span>Logout</span>
          </button>

          {/* Officer Profile Badge */}
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-3 px-3">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQAOeFDSTPNQ0tQ70sOj4_1yZcjNY84KEZCEi9IwsY7bT7cYKWOP-e8750XZ7hsg7u9dr61SaPsJDT0MstCZOSNP3XSsNQFwDxYJ_rO-TmLy8WB7ekhN9JFgyhSqY4jML3xFQMslZpHMT_5bv7f9z9ItN46iSOS2MAOmUNG7p07QgR9ZM0Mn4CEbM2TzmcV0fXK6gqnfdYxN-C1NgS75dvoNhFAb0B5-j2PZSi-Yh3cjMhxgB4ANBHuA"
              alt="Officer Profile"
              className="w-8 h-8 rounded-full border border-white/20 object-cover"
            />
            <div className="flex flex-col">
              <span className="font-data-mono text-xs text-on-surface font-medium">OFC-7729</span>
              <span className="font-label-caps text-[9px] text-secondary tracking-widest font-semibold">
                ACTIVE DUTY
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
