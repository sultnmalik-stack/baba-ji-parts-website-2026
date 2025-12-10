import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050816] to-[#0b1020] text-white flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 mb-2">
          BABA JI PARTS
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Page not found.
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          The page you&apos;re looking for doesn&apos;t exist. It might have
          been moved, or the URL is wrong.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold shadow-soft hover:bg-slate-100"
          >
            ← Back to home
          </a>
          <a
            href="/quote"
            className="inline-flex items-center justify-center rounded-full border border-slate-500 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-white hover:text-white"
          >
            Request a part quote
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Or call / SMS / WhatsApp: <span className="font-semibold">0430 099 873</span>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
