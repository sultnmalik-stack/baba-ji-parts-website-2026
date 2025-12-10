import React from "react";

const Account: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Customer Portal
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Account &amp; Orders
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/80">
            This ia your Baba&nbsp;Ji Parts account area –
            with saved vehicles, order history and invoices. 
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-[1.4fr,1.2fr]">
          {/* LEFT: LOGIN / SIGNUP FORM (DUMMY) */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tight text-gray-900">
              Request a login for Baba Ji Parts
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Fill this form and our team will create an account 
              for you and contact you
              with access details.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 mb-1">
                  Business / Workshop Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-black focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  placeholder="e.g. Melbourne Auto Wrecking"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 mb-1">
                  Contact Name
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
                    Mobile
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

              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-gray-600 mb-1">
                  How will you use the account?
                </label>
                <textarea
                  className="min-h-[90px] w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-black focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  placeholder="e.g. regular buyer of engines / panels, export orders, trade workshop, etc."
                />
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black hover:bg-[#c39c30] transition"
              >
                Submit account request
              </button>

              <p className="mt-2 text-xs text-gray-500">
                This form is a protected by BlackCrow Security Systems – once you submit,
                we&apos;ll get you rolling with your account details.
              </p>
            </form>
          </div>

          {/* RIGHT: QUICK CONTACT + TRADE INFO */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                Existing trade customers
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                Already order from Baba Ji Parts by phone or in person? Ask us
                about priority trade access and custom pricing once the online
                portal launches.
              </p>
              <div className="mt-3 space-y-1 text-sm">
                <p>
                  Office:{" "}
                  <a
                    href="tel:0393592061"
                    className="font-semibold text-[#D4AF37]"
                  >
                    03 9359 2061
                  </a>
                </p>
                <p>
                  Mobile:{" "}
                  <a
                    href="tel:0430099873"
                    className="font-semibold text-[#D4AF37]"
                  >
                    0430 099 873
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-[#D4AF37]/70 bg-black px-6 py-5 text-xs text-white">
              <p className="font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                Coming soon
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-white/80">
                <li>Login with saved delivery addresses.</li>
                <li>Order history and downloadable invoices.</li>
                <li>Saved vehicles / watchlist and quote requests.</li>
                <li>Trade pricing tiers for workshops &amp; exporters.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
