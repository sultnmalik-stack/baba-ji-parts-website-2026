import React from "react";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050816] to-[#0b1020] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#050816]/90 p-6 shadow-soft">
        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
          Internal access
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">
          Staff Login
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-300">
          This area is for BABA JI PARTS staff only. Customers do not need an
          account — just call, SMS, WhatsApp or use the main site.
        </p>

        <form className="mt-5 space-y-3">
          <div>
            <label className="block text-xs text-slate-400 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-600 bg-black/40 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-white focus:outline-none"
              placeholder="staff@babajiparts.com.au"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-slate-600 bg-black/40 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-white focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="button"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white text-black px-4 py-2.5 text-sm font-semibold shadow-soft hover:bg-slate-100"
          >
            (Demo) Login disabled
          </button>

          <p className="mt-2 text-[11px] text-slate-500">
            Login will be connected later to our internal inventory system
            (BlackCrow).
          </p>
        </form>

        <div className="mt-6 flex justify-between items-center text-[11px] text-slate-500">
          <a
            href="/"
            className="hover:text-slate-200 underline-offset-2 hover:underline"
          >
            ← Back to main site
          </a>
          <span>© {new Date().getFullYear()} BABA JI PARTS</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
