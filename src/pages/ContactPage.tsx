// src/pages/ContactPage.tsx
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Contact & Yard Details
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/80 max-w-2xl">
            Reach out to Baba Ji Parts for parts enquiries, vehicle buying,
            and export orders. Our Campbellfield team is ready to help.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT: DETAILS */}
          <div className="space-y-8">
            {/* Phone / Contact */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Call the yard</h2>
              <div className="space-y-1 text-sm text-gray-800">
                <p>
                  <span className="font-semibold">Office:</span>{" "}
                  <a href="tel:0393592061" className="text-[#D4AF37]">
                    03 9359 2061
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Mobile:</span>{" "}
                  <a href="tel:0430099873" className="text-[#D4AF37]">
                    0430 099 873
                  </a>
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  Prefer to send photos or VIN? Text or WhatsApp the mobile
                  number above and we&apos;ll match the parts for you.
                </p>
              </div>
            </div>

            {/* Address */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Yard address</h2>
              <p className="text-sm text-gray-800">
                <span className="font-semibold">Baba Ji Parts</span>
                <br />
                82 Horne Street
                <br />
                Campbellfield, VIC 3061
                <br />
                Australia
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Entry via Horne Street. Plenty of parking for utes and tow
                trucks.
              </p>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Opening hours</h2>
              <dl className="text-sm text-gray-800 space-y-1">
                <div className="flex justify-between">
                  <dt>Monday – Friday</dt>
                  <dd>7:30am – 5:30pm</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Saturday</dt>
                  <dd>7:30am – 3:00pm</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sunday / Public Holidays</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </div>

            {/* Email placeholder (can wire later) */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Email</h2>
              <p className="text-sm text-gray-800">
                For invoices, export orders and paperwork, use:
              </p>
              <p className="mt-1 text-sm font-semibold text-[#D4AF37]">
                info@babajiparts.com (placeholder)
              </p>
              <p className="mt-1 text-xs text-gray-500">
                We can wire this to a real inbox later once the domain is fully
                set up.
              </p>
            </div>
          </div>

          {/* RIGHT: QUICK ENQUIRY FORM */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Quick parts enquiry</h2>
            <p className="text-xs text-gray-600 mb-4">
              Send us your details and we&apos;ll get back to you with prices
              and availability. For fastest service, include your VIN and the
              parts you need.
            </p>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Form submitted. In production we will send this to your email / CRM."
                );
              }}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                    placeholder="Mobile number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 mb-1">
                  Email (optional)
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  placeholder="you@example.com"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 mb-1">
                    Vehicle
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                    placeholder="e.g. 2020 Camry ASV70R"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 mb-1">
                    VIN (if known)
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                    placeholder="17-digit VIN"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 mb-1">
                  Parts required
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  placeholder="List the parts you need, or describe the hit (front, rear, side)…"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-[#D4AF37] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-black hover:bg-[#c39c30] transition"
              >
                Submit enquiry
              </button>

              <p className="mt-2 text-[11px] text-gray-500">
                In the full system, this form will push straight into your CRM /
                inventory system so you can track all leads.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="border-t border-gray-200 bg-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold mb-3">Find us on the map</h2>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-gray-200">
            <iframe
              title="Baba Ji Parts Location"
              src="https://www.google.com/maps?q=82+Horne+Street,+Campbellfield,+VIC+3061&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
