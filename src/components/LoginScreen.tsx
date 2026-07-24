import React, { useState } from 'react';
import { BackgroundShader } from './BackgroundShader';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [badgeId, setBadgeId] = useState('KSP-7729-BLR');
  const [passcode, setPasscode] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberNode, setRememberNode] = useState(true);
  const [requireOtp, setRequireOtp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-[#111417] text-[#e1e2e7] font-body-md overflow-hidden">
      {/* Background WebGL Shader Grid */}
      <BackgroundShader mode="grid" className="absolute inset-0 w-full h-full z-0 opacity-40 mix-blend-screen pointer-events-none" />

      {/* Glassmorphic Login Container */}
      <div className="relative z-10 w-full max-w-md p-6 md:p-8 glass-panel rounded-xl shadow-2xl flex flex-col items-center border border-white/10">
        {/* Header with Emblem */}
        <div className="flex flex-col items-center mb-6 w-full">
          <div className="w-24 h-24 mb-3 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChpz6LcPtepzhTWpRQ8Fk0UdTGa0UmBSkrXJ94VpZtqzUVAjq3xCJy9Nz9fSje4wLU6Q4LJ1W5BBe1RqJn375HYZidBbC5lVHjgdwGSGS8jJ90V7tR8YnmHObhwyyJPUAyZ4aUTBRw7aB__zxYV4odiPQ6912ie5LJ9z3ZHXHjmVu_wcko9UXeqpGfb5YJS1W4QbWIHnT9seOR3EHG1VyiTeVzheVdk5DumPdg77cTQl-RZ3PP3n1G1w"
              alt="KSP Emblem"
              className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_0_12px_rgba(173,198,255,0.6)]"
            />
          </div>
          <h1 className="font-headline-lg text-2xl md:text-3xl text-on-surface tracking-tight text-center font-bold">
            KSP Intelligence Wing
          </h1>
          <p className="font-data-mono text-xs text-secondary/90 mt-1 uppercase tracking-widest text-center font-medium">
            Secure Gateway
          </p>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4" />
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Badge ID Input */}
          <div>
            <label htmlFor="badge_id" className="font-label-caps text-xs text-on-surface-variant block mb-1.5 font-semibold uppercase tracking-wider">
              Badge ID / Username
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg">
                badge
              </span>
              <input
                id="badge_id"
                type="text"
                value={badgeId}
                onChange={(e) => setBadgeId(e.target.value)}
                placeholder="KSP-####-####"
                className="w-full bg-black/60 border border-white/10 rounded-md focus:border-secondary focus:ring-1 focus:ring-secondary/50 text-on-surface pl-10 pr-4 py-2.5 font-data-mono text-sm transition-all placeholder:text-on-surface-variant/30 outline-none"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="password" className="font-label-caps text-xs text-on-surface-variant font-semibold uppercase tracking-wider">
                Passcode
              </label>
              <button
                type="button"
                className="text-xs text-secondary/80 hover:text-secondary hover:underline transition-colors"
                onClick={() => alert('Security Token recovery protocol initiated. Please contact Node Administrator.')}
              >
                Forgot?
              </button>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg">
                lock
              </span>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-black/60 border border-white/10 rounded-md focus:border-secondary focus:ring-1 focus:ring-secondary/50 text-on-surface pl-10 pr-10 py-2.5 font-data-mono text-sm transition-all placeholder:text-on-surface-variant/30 outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined text-lg">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={rememberNode}
                onChange={(e) => setRememberNode(e.target.checked)}
                className="rounded bg-black/50 border-white/20 text-secondary focus:ring-secondary/50"
              />
              <span className="font-label-caps text-xs text-on-surface-variant group-hover:text-on-surface transition-colors">
                Remember Node
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={requireOtp}
                onChange={(e) => setRequireOtp(e.target.checked)}
                className="rounded bg-black/50 border-white/20 text-secondary focus:ring-secondary/50"
              />
              <span className="font-label-caps text-xs text-secondary group-hover:text-secondary-fixed transition-colors font-medium">
                Require OTP
              </span>
            </label>
          </div>

          {/* Primary Submit Button */}
          <div className="pt-3 border-t border-white/10 w-full flex flex-col gap-2.5">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary font-headline-md font-semibold text-base py-3 rounded-lg transition-all shadow-[0_0_15px_rgba(173,198,255,0.25)] flex items-center justify-center space-x-2 relative overflow-hidden group cursor-pointer"
            >
              {isLoading ? (
                <span className="material-symbols-outlined animate-spin">autorenew</span>
              ) : (
                <>
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                    login
                  </span>
                  <span>Secure Login</span>
                </>
              )}
            </button>

            {/* Quick Biometrics */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    onLoginSuccess();
                  }, 600);
                }}
                className="flex-1 bg-transparent hover:bg-white/5 border border-white/10 text-on-surface-variant font-label-caps text-xs py-2 rounded transition-colors flex items-center justify-center space-x-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">fingerprint</span>
                <span>Biometric</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    onLoginSuccess();
                  }, 600);
                }}
                className="flex-1 bg-transparent hover:bg-white/5 border border-white/10 text-on-surface-variant font-label-caps text-xs py-2 rounded transition-colors flex items-center justify-center space-x-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">face</span>
                <span>Face ID</span>
              </button>
            </div>
          </div>
        </form>

        {/* System Status Footer */}
        <div className="mt-8 w-full flex justify-between items-center text-on-surface-variant/60 font-data-mono text-[10px]">
          <div className="flex items-center space-x-1.5">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span>NODE 01-BLR ACTIVE</span>
          </div>
          <span>v2.4.1 (CYBER)</span>
        </div>
      </div>
    </div>
  );
};
