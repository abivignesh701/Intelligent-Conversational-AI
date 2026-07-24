import React from 'react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenMobileMenu: () => void;
  onNotificationClick?: () => void;
  unreadCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onOpenMobileMenu,
  onNotificationClick,
  unreadCount = 3,
}) => {
  return (
    <header className="fixed top-0 left-0 md:left-64 right-0 z-50 flex items-center justify-between px-4 md:px-6 h-16 bg-[#191c1f]/40 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(173,198,255,0.1)]">
      {/* Mobile Menu Button + Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="p-2 text-on-surface-variant hover:text-white rounded-lg md:hidden"
          aria-label="Open navigation menu"
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
        <div className="font-headline-md text-lg md:text-xl font-bold text-on-surface tracking-tighter">
          KSP Intelligence Wing
        </div>
      </div>

      {/* Global Search Bar */}
      <div className="hidden lg:flex items-center bg-black/50 border border-outline/30 rounded-full px-4 py-1.5 ml-6 focus-within:border-secondary focus-within:shadow-[0_0_10px_rgba(76,215,246,0.5)] transition-all">
        <span className="material-symbols-outlined text-outline text-sm mr-2">search</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search Intel DB (Entity ID, Phone, FIR)..."
          className="bg-transparent border-none text-data-mono font-data-mono text-xs text-on-surface focus:ring-0 w-64 placeholder:text-outline-variant outline-none"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={onNotificationClick}
          className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-full transition-colors relative active:scale-95 duration-200"
          title="Notifications"
        >
          <span className="material-symbols-outlined">notifications</span>
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full pulse-dot-critical" />
          )}
        </button>

        <button
          className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-full transition-colors active:scale-95 duration-200"
          title="Security Clearance Level 4"
        >
          <span className="material-symbols-outlined">security</span>
        </button>

        <button
          className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-white/5 rounded-full transition-colors active:scale-95 duration-200"
          title="Account Profile"
        >
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </header>
  );
};
