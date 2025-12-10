import React, { useState } from "react";

const Quote: React.FC = () => {
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [vin, setVin] = useState("");
  const [parts, setParts] = useState("");

  const whatsappBase = "https://wa.me/61430099873";

  const handleWhatsapp = () => {
    const msg = encodeURIComponent(
      `PART ENQUIRY:\n\n` +
      `Name / Contact: ${name}\n\n` +
      `Vehicle (Make/Model/Year): ${vehicle}\n` +
      `Rego / VIN: ${vin}\n\n` +
      `Parts Needed:\n${parts}\n\n` +
      `Please advise availability, condition & pricing.`
    );
    window.open(`${whatsappBase}?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050816] to-[#0b1020] text-white">
      {/* NAVBAR (simple return to Home) */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#050816]/85 backdrop-blur">
        <div className="max-w-5xl mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/BABA_JI_PARTS_LOGO_MONO.png"
              alt="Baba Ji Parts"
              className="h-12 w-auto object-contain"
            />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase">
              BABA JI PARTS
            </span>
          </a>
          <a
            href="/"
            className="text-xs text-slate-300 hover:text-white underline underline-offset-2"
          >
            ← Back to Home
          </a>
        </div>
      </header>

      {/* QUOTE FORM */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Request a Part Quote
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
          Fill out the form below and we’ll reply with availability, photos,
          condition and price. We usually respond within minutes during business hours.
        </p>

        <div className="mt-10 space-y-4">
          <input
            type="text"
            placeholder="Your Name & Phone Number"
            className="w-full rounded-lg border border-slate-600 bg-black/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-white focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Vehicle (Make / Model / Year)"
            className="w-full rounded-lg border border-slate-600 bg-black/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-white focus:outline-none"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Rego or VIN"
            className="w-full rounded-lg border border-slate-600 bg-black/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-white focus:outline-none"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
          />

          <textarea
            placeholder="Parts Needed (e.g. LH headlight, front bar, bootlid, alloy set)"
            className="min-h-[110px] w-full rounded-lg border border-slate-600 bg-black/40 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-white focus:outline-none"
            value={parts}
            onChange={(e) => setParts(e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={handleWhatsapp}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-green-500 text-black px-6 py-3 text-sm font-semibold shadow-soft hover:bg-green-400 transition-colors"
        >
          💬 Send enquiry via WhatsApp
        </button>

        <p className="mt-3 text-[11px] text-slate-500">
          For fastest response, WhatsApp is recommended. SMS also works.
        </p>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#050816] mt-12">
        <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-slate-400 flex flex-col sm:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} BABA JI PARTS. All rights reserved.</span>
          <span>82 Horne Street, Campbellfield VIC 3061 · Melbourne Auto Wrecking PTY LTD</span>
        </div>
      </footer>
    </div>
  );
};

export default Quote;
