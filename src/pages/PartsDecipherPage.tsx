import React from "react";

const PartsDecipher: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Parts Decipher Service
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Don&apos;t know the exact part? We&apos;ll decipher it for you.
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/80">
            Unsure which headlight, sensor, control arm or module you need?
            Send us your details and our team will match the correct part from
            your VIN, rego and photos — before you buy.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold tracking-tight text-gray-900">
            How Parts Decipher works
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            The more information you give us, the faster we can find the exact
            part that fits.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Step 1
              </p>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                Send us your vehicle details
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Provide your rego, VIN (if you have it), year, make and model.
                This lets us pull the right series/engine/trim information.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Step 2
              </p>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                Attach photos of the part / damage
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Clear photos of the area, old part, tags and plugs help us
                confirm exact shape, sensor type, mounting points and colour.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Step 3
              </p>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                We match &amp; quote the correct part
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Our team checks stock, interchange data and colour codes, then
                comes back to you with availability, price and delivery options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + WHATSAPP STYLE CTA */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-[1.6fr,1.2fr]">
          {/* Basic enquiry form (non-functional placeholder for now) */}
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-gray-900">
              Send a Parts Decipher request
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              This is a simple enquiry form for now. When the backend is ready
              we&apos;ll wire it so it emails or logs into your system.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-black focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  placeholder="Your name"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 mb-1">
                    Mobile / Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-black focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                    placeholder="04xx xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-black focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 mb-1">
                    Rego (or VIN)
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-black focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                    placeholder="Rego / VIN"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 mb-1">
                    Year / Make / Model
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-black focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                    placeholder="e.g. 2020 Toyota Camry"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 mb-1">
                  What part do you need?
                </label>
                <textarea
                  className="min-h-[90px] w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-black focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  placeholder="Describe the part, side (left/right), colour code, any plugs/sensors or notes…"
                />
              </div>

              <p className="text-xs text-gray-500">
                Photo upload and WhatsApp integration will be added when the
                backend is ready. For now, send photos directly to the mobile
                number below after you submit this form.
              </p>

              <button
                type="button"
                className="mt-1 inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black hover:bg-[#c39c30] transition"
              >
                Submit Parts Decipher Request
              </button>
            </form>
          </div>

          {/* Contact / WhatsApp style block */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              Fastest response?
            </p>
            <h3 className="mt-2 text-sm font-semibold text-gray-900">
              Call or message us with photos
            </h3>
            <p className="mt-3 text-sm text-gray-700">
              If you&apos;re at the car now, call or text and send photos of the
              area and the compliance / build plate.
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <p>
                Mobile:{" "}
                <a
                  href="tel:0430099873"
                  className="font-semibold text-[#D4AF37]"
                >
                  0430 099 873
                </a>
              </p>
              <p>
                Office:{" "}
                <a
                  href="tel:0393592061"
                  className="font-semibold text-[#D4AF37]"
                >
                  03 9359 2061
                </a>
              </p>
            </div>

            <div className="mt-5 rounded-xl border border-dashed border-[#D4AF37]/60 bg-black text-white px-4 py-4 text-xs">
              <p className="font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                Pro tip
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-white/80">
                <li>Photo of the whole front / rear of the car.</li>
                <li>Close-up of the damaged area / old part.</li>
                <li>Photo of any stickers, part numbers or colour code label.</li>
                <li>Let us know if the car has been modified or repaired.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Still unsure?
            </p>
            <p className="mt-2 text-sm text-white/80">
              Tell us the story of the car and what you&apos;re trying to fix.
              We&apos;ll help you work it out.
            </p>
          </div>
          <a
            href="tel:0430099873"
            className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black hover:bg-[#c39c30] transition"
          >
            Call now for Parts Decipher
          </a>
        </div>
      </section>
    </div>
  );
};

export default PartsDecipher;
