import React from "react";

const Inventory: React.FC = () => {
  const whatsappBase = "https://wa.me/61430099873";

  const demoCars = [
    {
      model: "Toyota Camry 2019 (ASV70)",
      note: "Front & rear bars, panels, doors, lights",
      status: "Currently Wrecking",
    },
    {
      model: "Hyundai i30 2017 (GD)",
      note: "Engine, gearbox, suspension, interior",
      status: "Popular Model",
    },
    {
      model: "Mazda 3 2016 (BM)",
      note: "Panels, wheels, interior trims",
      status: "Low Stock",
    },
  ];

  const demoParts = [
    "Engines & gearboxes (compression-tested where noted)",
    "Front & rear bars, bonnets, guards, doors",
    "Lights, mirrors, glass, interior trims",
    "Wheels, suspension, hubs, arms & knuckles",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050816] to-[#0b1020] text-white">
      {/* TOP BAR / BREADCRUMB */}
      <header className="border-b border-white/10 bg-[#050816]/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
              BABA JI PARTS · INVENTORY (DEMO)
            </p>
            <h1 className="text-xl sm:text-2xl font-semibold">
              Live & recent stock (preview)
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            <a
              href="/"
              className="inline-flex items-center rounded-full border border-slate-600 px-3 py-1 text-slate-200 hover:border-white hover:text-white"
            >
              ← Back to main site
            </a>
            <a
              href={whatsappBase + "?text=" + encodeURIComponent("Hi, I need a quote for a car part.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-green-500 text-black px-3 py-1 font-semibold hover:bg-green-400"
            >
              💬 WhatsApp a part request
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* INFO BANNER */}
        <section className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-4 sm:p-5 text-sm text-yellow-100">
          <p className="font-medium">How we actually run inventory</p>
          <p className="mt-1 text-xs sm:text-sm text-yellow-100/80">
            This page is a preview only. Real-time stock is managed via{" "}
            <span className="font-semibold">Facebook Marketplace</span>,{" "}
            <span className="font-semibold">WhatsApp</span> and direct calls.
            Use this page to get an idea of what we wreck and how to request
            parts properly.
          </p>
        </section>

        {/* CURRENTLY WRECKING */}
        <section className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Vehicles we regularly wreck
            </h2>
            <p className="mt-1 text-sm text-slate-300 max-w-2xl">
              These are common models that pass through our yard. Actual
              availability changes daily — always confirm before you drive down.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {demoCars.map((car) => (
              <div
                key={car.model}
                className="rounded-2xl border border-white/10 bg-[#050816]/80 p-4 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-100">
                    {car.model}
                  </p>
                  <p className="mt-2 text-xs text-slate-300">{car.note}</p>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                      car.status === "Currently Wrecking"
                        ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                        : car.status === "Low Stock"
                        ? "bg-amber-500/10 text-amber-300 border border-amber-500/40"
                        : "bg-sky-500/10 text-sky-300 border border-sky-500/40"
                    }`}
                  >
                    {car.status}
                  </span>
                  <a
                    href={
                      whatsappBase +
                      "?text=" +
                      encodeURIComponent(
                        `Hi, I'm asking about parts for: ${car.model}`
                      )
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] rounded-full border border-slate-500 px-3 py-1 text-slate-200 hover:border-white hover:text-white"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PART TYPES */}
        <section className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Typical parts we sell
            </h2>
            <p className="mt-1 text-sm text-slate-300 max-w-2xl">
              From nose cuts to interior trims — if it bolts on or plugs in,
              there&apos;s a good chance we stock it or can source it through
              our network.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-soft">
            <ul className="space-y-2 text-sm text-slate-200">
              {demoParts.map((part) => (
                <li key={part} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
                  <span>{part}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* HOW TO REQUEST PARTS */}
        <section className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Best way to request a part
            </h2>
            <p className="mt-1 text-sm text-slate-300 max-w-2xl">
              Help us help you fast. If you send the right info in one go,
              we can usually quote same day.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Send car details",
                body: "Rego or VIN, make, model, year. Send a photo of the car if possible.",
              },
              {
                step: "2",
                title: "Send part details",
                body: "Which part, which side (LH/RH), any sensors, colours, trims, etc.",
              },
              {
                step: "3",
                title: "We confirm & quote",
                body: "We’ll confirm condition, send photos where possible and give price & options.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="relative rounded-2xl border border-white/10 bg-[#050816]/80 p-5 shadow-soft"
              >
                <div className="absolute -top-3 left-4 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-black shadow-soft">
                  {s.step}
                </div>
                <h3 className="mt-2 text-sm font-semibold text-slate-100">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm">
            <a
              href={whatsappBase}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-green-500 text-black px-5 py-2 font-semibold hover:bg-green-400"
            >
              💬 Start WhatsApp chat
            </a>
            <a
              href="https://www.facebook.com/marketplace"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-5 py-2 text-slate-200 hover:border-white hover:text-white"
            >
              View live stock on Facebook
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Inventory;
