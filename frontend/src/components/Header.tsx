import React, { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onOpenMobileMenu,
}) => {
  // Profile Card Popup & Edit States
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const profileRef = useRef<HTMLDivElement>(null);

  // Full Officer Profile State (Matching Reference Image)
  const [profile, setProfile] = useState({
    name: 'Inspector Raj Kumar',
    designation: 'Police Inspector',
    employeeId: 'EMP10245',
    forceNumber: 'FOR45872',
    badgeNumber: 'BDG78521',
    station: 'Mysuru South PS',
    district: 'Mysuru',
    branchUnit: 'Crime Branch',
    joiningDate: '14 May 2012',
    phone: '94481 23456',
    email: 'rajkumar.ksp@gov.in',
  });

  // Temporary Form State for editing fields
  const [editForm, setEditForm] = useState({ ...profile });

  // Close popup on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
        setIsEditing(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile({ ...editForm });
    setIsEditing(false);
    showToast('Profile updated successfully!');
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  return (
    <header className="fixed top-0 left-0 md:left-64 right-0 z-50 flex items-center justify-between px-4 md:px-6 h-16 bg-[#111419] border-b border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      {/* Toast Notice */}
      {toastMsg && (
        <div className="fixed top-20 right-6 z-[100] bg-secondary text-on-secondary font-data-mono text-xs px-4 py-2 rounded-lg shadow-2xl flex items-center gap-2 animate-bounce">
          <span className="material-symbols-outlined text-base">check_circle</span>
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Mobile Menu Button + Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="p-2 text-on-surface-variant hover:text-white rounded-lg md:hidden cursor-pointer"
          aria-label="Open navigation menu"
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
        <div className="font-headline-md text-lg md:text-xl font-bold text-on-surface tracking-tighter">
          KSP Intelligence Wing
        </div>
      </div>

      {/* Top Right Action Area */}
      <div className="flex items-center gap-2 relative" ref={profileRef}>
        {/* Profile Avatar Button */}
        <button
          onClick={() => {
            setIsProfileOpen(!isProfileOpen);
            setEditForm({ ...profile });
            setIsEditing(false);
          }}
          className={`p-1 text-on-surface-variant hover:text-on-surface rounded-full transition-all active:scale-95 duration-200 cursor-pointer border ${
            isProfileOpen ? 'border-secondary shadow-[0_0_12px_rgba(76,215,246,0.4)]' : 'border-transparent'
          }`}
          title="Officer Profile"
        >
          <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary border border-secondary/40 flex items-center justify-center font-bold font-data-mono text-xs">
            RK
          </div>
        </button>

        {/* TOP RIGHT PROFILE POPUP CARD (SOLID OPAQUE BACKGROUND) */}
        {isProfileOpen && (
          <div className="absolute top-14 right-0 z-[100] w-80 sm:w-96 bg-[#111419] border border-white/20 p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.9)] font-data-mono text-xs text-on-surface space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            
            {/* Header Title */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-bold text-xs uppercase tracking-wider text-outline-variant">
                OFFICER IDENTITY
              </span>
              <button
                onClick={() => setIsProfileOpen(false)}
                className="text-outline-variant hover:text-white transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            </div>

            {/* Officer Portrait & Status */}
            <div className="flex flex-col items-center text-center space-y-1.5 pt-1">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-[#1c222b] border-2 border-white/20 overflow-hidden flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-5xl text-outline-variant">person</span>
                </div>
                {/* On Duty Status Badge */}
                <div className="absolute bottom-0 right-0 bg-[#0d1f18] text-emerald-400 border border-emerald-500/50 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>On Duty</span>
                </div>
              </div>

              <div>
                <h3 className="font-headline-md text-base font-bold text-on-surface flex items-center justify-center gap-1">
                  <span>{profile.name}</span>
                  <span className="material-symbols-outlined text-secondary text-base">verified_user</span>
                </h3>
                <p className="text-[11px] text-outline-variant">{profile.designation}</p>
              </div>
            </div>

            {/* Officer Details List OR Edit Form */}
            {!isEditing ? (
              <div className="space-y-4 pt-1">
                <div className="space-y-2 bg-[#161a21] p-3.5 rounded-xl border border-white/10 text-[11px]">
                  
                  {/* Read-Only Fields */}
                  <div className="grid grid-cols-[110px_1fr] items-center py-0.5">
                    <span className="text-outline flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-outline-variant">badge</span>
                      <span>Employee ID</span>
                    </span>
                    <span className="text-on-surface font-semibold">: {profile.employeeId}</span>
                  </div>

                  <div className="grid grid-cols-[110px_1fr] items-center py-0.5">
                    <span className="text-outline flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-outline-variant">local_police</span>
                      <span>Force Number</span>
                    </span>
                    <span className="text-on-surface font-semibold">: {profile.forceNumber}</span>
                  </div>

                  <div className="grid grid-cols-[110px_1fr] items-center py-0.5">
                    <span className="text-outline flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-outline-variant">shield</span>
                      <span>Badge Number</span>
                    </span>
                    <span className="text-on-surface font-semibold">: {profile.badgeNumber}</span>
                  </div>

                  {/* Editable Field 1: Police Station */}
                  <div className="grid grid-cols-[110px_1fr] items-center py-0.5">
                    <span className="text-outline flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-secondary">apartment</span>
                      <span>Police Station</span>
                    </span>
                    <span className="text-secondary font-bold">: {profile.station}</span>
                  </div>

                  {/* Editable Field 2: District */}
                  <div className="grid grid-cols-[110px_1fr] items-center py-0.5">
                    <span className="text-outline flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-secondary">location_on</span>
                      <span>District</span>
                    </span>
                    <span className="text-on-surface font-semibold">: {profile.district}</span>
                  </div>

                  {/* Read-Only Field */}
                  <div className="grid grid-cols-[110px_1fr] items-center py-0.5">
                    <span className="text-outline flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-outline-variant">hub</span>
                      <span>Branch / Unit</span>
                    </span>
                    <span className="text-on-surface font-semibold">: {profile.branchUnit}</span>
                  </div>

                  {/* Read-Only Field */}
                  <div className="grid grid-cols-[110px_1fr] items-center py-0.5">
                    <span className="text-outline flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-outline-variant">calendar_month</span>
                      <span>Joining Date</span>
                    </span>
                    <span className="text-on-surface font-semibold">: {profile.joiningDate}</span>
                  </div>

                  {/* Editable Field 3: Mobile Number */}
                  <div className="grid grid-cols-[110px_1fr] items-center py-0.5">
                    <span className="text-outline flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-secondary">call</span>
                      <span>Mobile Number</span>
                    </span>
                    <span className="text-on-surface font-semibold">: {profile.phone}</span>
                  </div>

                  {/* Editable Field 4: Official Email */}
                  <div className="grid grid-cols-[110px_1fr] items-center py-0.5">
                    <span className="text-outline flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-secondary">mail</span>
                      <span>Official Email</span>
                    </span>
                    <span className="text-on-surface font-semibold truncate">: {profile.email}</span>
                  </div>

                </div>

                {/* Edit Profile Action Button */}
                <button
                  onClick={() => {
                    setEditForm({ ...profile });
                    setIsEditing(true);
                  }}
                  className="w-full py-2.5 bg-[#181c22] border border-secondary/40 text-secondary hover:bg-secondary/10 font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">edit</span>
                  <span>Edit Profile</span>
                </button>
              </div>
            ) : (
              /* Editable Form Mode */
              <form onSubmit={handleSaveProfile} className="space-y-3 pt-1">
                <div>
                  <label className="block text-outline text-[9px] uppercase font-bold mb-1">
                    Police Station *
                  </label>
                  <input
                    type="text"
                    value={editForm.station}
                    onChange={(e) => setEditForm({ ...editForm, station: e.target.value })}
                    className="w-full bg-[#161a21] border border-white/15 rounded-lg px-3 py-1.5 text-xs text-on-surface focus:border-secondary outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-outline text-[9px] uppercase font-bold mb-1">
                    District *
                  </label>
                  <input
                    type="text"
                    value={editForm.district}
                    onChange={(e) => setEditForm({ ...editForm, district: e.target.value })}
                    className="w-full bg-[#161a21] border border-white/15 rounded-lg px-3 py-1.5 text-xs text-on-surface focus:border-secondary outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-outline text-[9px] uppercase font-bold mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={editForm.phone}
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    className="w-full bg-[#161a21] border border-white/15 rounded-lg px-3 py-1.5 text-xs text-on-surface focus:border-secondary outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-outline text-[9px] uppercase font-bold mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    className="w-full bg-[#161a21] border border-white/15 rounded-lg px-3 py-1.5 text-xs text-on-surface focus:border-secondary outline-none"
                    required
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-3 py-1.5 bg-[#161a21] border border-white/15 text-outline hover:text-white rounded-lg transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-secondary text-on-secondary font-bold rounded-lg hover:bg-secondary/90 shadow-md transition-all cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}

          </div>
        )}
      </div>
    </header>
  );
};
