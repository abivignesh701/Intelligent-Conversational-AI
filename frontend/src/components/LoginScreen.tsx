import React, { useState } from 'react';
import { BackgroundShader } from './BackgroundShader';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

type ForgotStep = 'enter_mobile' | 'enter_otp' | 'reset_password' | 'success';

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Forgot Password Modal States
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotStep, setForgotStep] = useState<ForgotStep>('enter_mobile');
  const [forgotEmployeeId, setForgotEmployeeId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [forgotError, setForgotError] = useState<string | null>(null);
  const [forgotLoading, setForgotLoading] = useState(false);
  const [simulatedSmsBanner, setSimulatedSmsBanner] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const cleanId = employeeId.trim().toUpperCase();
    const allowedIds = ['EMP12345', 'FOR12345', 'BDG12345'];

    if (!cleanId) {
      setErrorMessage('Please enter your Police Identity/Employee ID');
      return;
    }

    if (!password) {
      setErrorMessage('Please enter your password');
      return;
    }

    if (allowedIds.includes(cleanId)) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        onLoginSuccess();
      }, 800);
    } else {
      setErrorMessage('Enter a Valid Employee ID/Force Number/Badge Number (e.g. EMP12345)');
    }
  };

  const handleOpenForgotPassword = () => {
    setShowForgotPassword(true);
    setForgotStep('enter_mobile');
    setForgotEmployeeId(employeeId.trim().toUpperCase() || 'EMP12345');
    setMobileNumber('9876543210');
    setOtpCode('');
    setForgotError(null);
    setSimulatedSmsBanner(null);
  };

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotError(null);
    if (!mobileNumber.trim() || mobileNumber.trim().length < 10) {
      setForgotError('Please enter a valid 10-digit mobile number');
      return;
    }
    setForgotLoading(true);

    setTimeout(() => {
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(code);
      setForgotLoading(false);
      setForgotStep('enter_otp');
      setSimulatedSmsBanner(`[SIMULATED SMS] OTP sent to +91 ${mobileNumber}: ${code}`);
    }, 800);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotError(null);
    if (!otpCode.trim()) {
      setForgotError('Please enter the 6-digit OTP code');
      return;
    }

    setForgotLoading(true);
    setTimeout(() => {
      setForgotLoading(false);
      if (otpCode.trim() === generatedOtp || otpCode.trim() === '123456') {
        setForgotStep('reset_password');
        setForgotError(null);
      } else {
        setForgotError(`Invalid OTP code. Use simulated OTP: ${generatedOtp}`);
      }
    }, 600);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotError(null);
    if (!newPassword) {
      setForgotError('Please enter a new password');
      return;
    }
    if (newPassword.length < 6) {
      setForgotError('Password must be at least 6 characters long');
      return;
    }
    if (newPassword !== confirmPassword) {
      setForgotError('Passwords do not match');
      return;
    }

    setForgotLoading(true);
    setTimeout(() => {
      setForgotLoading(false);
      setForgotStep('success');
      setPassword(newPassword);
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-[#090b0e] text-on-surface font-data-mono overflow-hidden">
      {/* Background WebGL Shader Grid */}
      <BackgroundShader mode="grid" className="absolute inset-0 w-full h-full z-0 opacity-30 mix-blend-screen pointer-events-none" />

      {/* Glassmorphic Login Container */}
      <div className="relative z-10 w-full max-w-md p-6 sm:p-8 glass-panel rounded-2xl shadow-2xl flex flex-col items-center border border-white/10 bg-[#0e1218]/90 backdrop-blur-md">
        
        {/* HEADER SECTION */}
        <div className="w-full flex flex-col items-center text-center space-y-1 mb-5">
          <h1 className="font-headline-lg text-xl sm:text-2xl text-on-surface tracking-wide font-extrabold uppercase">
            KARNATAKA STATE POLICE
          </h1>
          <p className="font-label-caps text-xs text-outline-variant tracking-wider font-semibold">
            Crime Intelligence Platform
          </p>

          {/* Decorative Divider line with Shield badge */}
          <div className="w-full flex items-center justify-center gap-3 pt-3">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-white/30" />
            <div className="w-7 h-7 rounded-full bg-[#18202c] border border-secondary/40 flex items-center justify-center shadow-[0_0_10px_rgba(76,215,246,0.2)]">
              <span className="material-symbols-outlined text-secondary text-sm">security</span>
            </div>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-white/15 to-white/30" />
          </div>
        </div>

        {/* ERROR ALERT BOX */}
        {errorMessage && (
          <div className="w-full mb-4 p-3 bg-red-950/40 border border-red-500/50 rounded-xl flex items-start gap-2.5 text-xs text-red-300 animate-in fade-in duration-200">
            <span className="material-symbols-outlined text-red-400 text-base flex-shrink-0 mt-0.5">
              error
            </span>
            <span className="leading-snug">{errorMessage}</span>
          </div>
        )}

        {/* LOGIN FORM */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          
          {/* POLICE IDENTITY INPUT */}
          <div>
            <label className="flex items-center gap-1.5 text-xs text-on-surface font-bold uppercase tracking-wider mb-1.5">
              <span className="material-symbols-outlined text-secondary text-base">person</span>
              <span>POLICE IDENTITY</span>
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-base">
                badge
              </span>
              <input
                type="text"
                value={employeeId}
                onChange={(e) => {
                  setEmployeeId(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="Employee ID/Force Number/Badge Number"
                className="w-full bg-[#141820] border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-xs text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary/50 outline-none transition-all placeholder:text-outline-variant/60"
                required
              />
            </div>
            <p className="text-[11px] text-outline-variant mt-1 pl-0.5">
              Authorized Prototype IDs: <span className="text-secondary font-bold">EMP12345</span>, <span className="text-secondary font-bold">FOR12345</span>, or <span className="text-secondary font-bold">BDG12345</span>
            </p>
          </div>

          {/* PASSWORD INPUT */}
          <div>
            <label className="flex items-center gap-1.5 text-xs text-on-surface font-bold uppercase tracking-wider mb-1.5">
              <span className="material-symbols-outlined text-secondary text-base">lock</span>
              <span>PASSWORD</span>
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-base">
                key
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="Enter Secure Password"
                className="w-full bg-[#141820] border border-white/15 rounded-xl pl-9 pr-10 py-2.5 text-xs text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary/50 outline-none transition-all placeholder:text-outline-variant/60"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-white transition-colors cursor-pointer"
                title={showPassword ? "Hide Password" : "Show Password"}
              >
                <span className="material-symbols-outlined text-base">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          {/* REMEMBER DEVICE & FORGOT PASSWORD */}
          <div className="flex items-center justify-between pt-1 gap-2 text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-outline font-medium">
              <input
                type="checkbox"
                checked={rememberDevice}
                onChange={(e) => setRememberDevice(e.target.checked)}
                className="w-4 h-4 rounded bg-[#141820] border-white/20 text-secondary focus:ring-secondary/50 cursor-pointer"
              />
              <span>Remember Device</span>
            </label>

            <button
              type="button"
              onClick={handleOpenForgotPassword}
              className="text-secondary hover:underline font-semibold transition-colors cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">lock_reset</span>
              <span>Forgot Password?</span>
            </button>
          </div>

          {/* SECURE LOGIN BUTTON */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-[#0c2035] hover:bg-[#112d4a] border border-secondary/50 text-secondary font-bold text-xs flex items-center justify-center gap-2 tracking-widest shadow-[0_0_15px_rgba(76,215,246,0.15)] uppercase transition-all cursor-pointer group"
            >
              {isLoading ? (
                <span className="material-symbols-outlined animate-spin text-lg">autorenew</span>
              ) : (
                <>
                  <span className="material-symbols-outlined text-base group-hover:scale-110 transition-transform">
                    verified_user
                  </span>
                  <span>SECURE LOGIN</span>
                </>
              )}
            </button>
          </div>

        </form>

        {/* NEED ACCESS DIVIDER & CONTACT INFO CARD */}
        <div className="w-full mt-6 space-y-3">
          
          {/* Centered Divider Text */}
          <div className="relative flex items-center justify-center">
            <div className="w-full h-[1px] bg-white/10" />
            <span className="absolute bg-[#0e1218] px-3 text-[11px] text-outline-variant font-medium">
              Need Access?
            </span>
          </div>

          {/* Contact Administrator Box */}
          <div className="bg-[#141922] border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0 text-secondary">
              <span className="material-symbols-outlined text-lg">headset_mic</span>
            </div>
            <div className="text-[11px]">
              <p className="font-semibold text-on-surface">Contact System Administrator</p>
              <p className="text-outline-variant">or your District IT Officer for login access.</p>
            </div>
          </div>

          {/* Authorized Personnel Warning Card */}
          <div className="bg-[#141922] border border-white/10 rounded-xl p-3.5 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0 text-blue-400 mt-0.5">
              <span className="material-symbols-outlined text-lg">shield</span>
            </div>
            <div className="text-[11px]">
              <p className="font-bold text-on-surface uppercase tracking-wide">
                AUTHORIZED KARNATAKA STATE POLICE PERSONNEL ONLY
              </p>
              <p className="text-outline-variant mt-0.5 leading-relaxed">
                Unauthorized access is prohibited and may be subject to legal action.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* FORGOT PASSWORD & OTP VERIFICATION MODAL */}
      {showForgotPassword && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md p-6 glass-panel bg-[#0e1218]/95 border border-secondary/30 rounded-2xl shadow-2xl flex flex-col space-y-4 font-data-mono">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-lg">phonelink_lock</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-on-surface uppercase tracking-wider">
                    Password Reset & Verification
                  </h3>
                  <p className="text-[11px] text-outline-variant">
                    {forgotStep === 'enter_mobile' && "Step 1: Mobile Verification"}
                    {forgotStep === 'enter_otp' && "Step 2: Enter OTP Code"}
                    {forgotStep === 'reset_password' && "Step 3: Fix New Password"}
                    {forgotStep === 'success' && "Verification Complete"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowForgotPassword(false)}
                className="text-outline-variant hover:text-white transition-colors cursor-pointer p-1"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* SIMULATED SMS BANNER NOTIFICATION */}
            {simulatedSmsBanner && (
              <div className="p-3 bg-secondary/15 border border-secondary/40 rounded-xl flex items-start gap-2.5 text-xs text-secondary animate-in slide-in-from-top-2 duration-300">
                <span className="material-symbols-outlined text-secondary text-base flex-shrink-0 mt-0.5">
                  sms
                </span>
                <div className="space-y-0.5">
                  <p className="font-bold text-[11px] uppercase tracking-wider">Mobile OTP Notification</p>
                  <p className="text-[11px] text-white font-mono leading-relaxed">{simulatedSmsBanner}</p>
                </div>
              </div>
            )}

            {/* FORGOT ERROR ALERT */}
            {forgotError && (
              <div className="p-3 bg-red-950/50 border border-red-500/50 rounded-xl flex items-center gap-2.5 text-xs text-red-300">
                <span className="material-symbols-outlined text-red-400 text-base flex-shrink-0">
                  error
                </span>
                <span className="text-[11px]">{forgotError}</span>
              </div>
            )}

            {/* STEP 1: ENTER MOBILE NUMBER */}
            {forgotStep === 'enter_mobile' && (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-[11px] text-outline-variant font-bold uppercase tracking-wider mb-1">
                    Police Identity / Badge ID
                  </label>
                  <input
                    type="text"
                    value={forgotEmployeeId}
                    onChange={(e) => setForgotEmployeeId(e.target.value)}
                    placeholder="EMP12345"
                    className="w-full bg-[#141820] border border-white/15 rounded-xl px-3 py-2 text-xs text-on-surface focus:border-secondary outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-outline-variant font-bold uppercase tracking-wider mb-1">
                    Registered Mobile Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-outline-variant font-bold">
                      +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                      placeholder="9876543210"
                      className="w-full bg-[#141820] border border-white/15 rounded-xl pl-12 pr-3 py-2 text-xs text-on-surface focus:border-secondary outline-none"
                      required
                    />
                  </div>
                  <p className="text-[10px] text-outline-variant mt-1">
                    An OTP code will be sent via simulated SMS to your registered mobile number.
                  </p>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(false)}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-outline font-semibold transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={forgotLoading}
                    className="px-5 py-2 rounded-xl bg-secondary text-black font-bold text-xs hover:bg-secondary/90 transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_12px_rgba(76,215,246,0.3)]"
                  >
                    {forgotLoading ? (
                      <span className="material-symbols-outlined animate-spin text-sm">autorenew</span>
                    ) : (
                      <>
                        <span>Send OTP</span>
                        <span className="material-symbols-outlined text-sm">send</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: ENTER OTP */}
            {forgotStep === 'enter_otp' && (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <label className="block text-[11px] text-outline-variant font-bold uppercase tracking-wider mb-1">
                    Enter 6-Digit OTP Code
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-base">
                      pin
                    </span>
                    <input
                      type="text"
                      maxLength={6}
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                      placeholder="Enter 6-digit code"
                      className="w-full bg-[#141820] border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-sm tracking-widest font-mono text-secondary focus:border-secondary outline-none font-bold"
                      required
                      autoFocus
                    />
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-outline-variant">
                    <span>Sent to +91 {mobileNumber}</span>
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="text-secondary hover:underline cursor-pointer"
                    >
                      Resend OTP
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setForgotStep('enter_mobile')}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-outline font-semibold transition-all cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={forgotLoading}
                    className="px-5 py-2 rounded-xl bg-secondary text-black font-bold text-xs hover:bg-secondary/90 transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_12px_rgba(76,215,246,0.3)]"
                  >
                    {forgotLoading ? (
                      <span className="material-symbols-outlined animate-spin text-sm">autorenew</span>
                    ) : (
                      <>
                        <span>Verify OTP</span>
                        <span className="material-symbols-outlined text-sm">task_alt</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: RESET PASSWORD */}
            {forgotStep === 'reset_password' && (
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div>
                  <label className="block text-[11px] text-outline-variant font-bold uppercase tracking-wider mb-1">
                    New Password
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-base">
                      lock_reset
                    </span>
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Minimum 6 characters"
                      className="w-full bg-[#141820] border border-white/15 rounded-xl pl-9 pr-10 py-2.5 text-xs text-on-surface focus:border-secondary outline-none"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-white transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-base">
                        {showNewPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-outline-variant font-bold uppercase tracking-wider mb-1">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-base">
                      lock_clock
                    </span>
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter new password"
                      className="w-full bg-[#141820] border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-xs text-on-surface focus:border-secondary outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="submit"
                    disabled={forgotLoading}
                    className="w-full py-2.5 rounded-xl bg-secondary text-black font-bold text-xs hover:bg-secondary/90 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_0_12px_rgba(76,215,246,0.3)]"
                  >
                    {forgotLoading ? (
                      <span className="material-symbols-outlined animate-spin text-sm">autorenew</span>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-sm">verified</span>
                        <span>Fix New Password</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* STEP 4: SUCCESS */}
            {forgotStep === 'success' && (
              <div className="space-y-4 text-center py-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                  <span className="material-symbols-outlined text-2xl">check_circle</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-on-surface">Password Fixed & Updated!</h4>
                  <p className="text-[11px] text-outline-variant leading-relaxed">
                    Your password for Police Identity <span className="text-secondary font-bold">{forgotEmployeeId}</span> has been successfully updated.
                  </p>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(false)}
                    className="w-full py-2.5 rounded-xl bg-secondary text-black font-bold text-xs hover:bg-secondary/90 transition-all cursor-pointer shadow-[0_0_12px_rgba(76,215,246,0.3)] uppercase tracking-wider"
                  >
                    Back to Login
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

