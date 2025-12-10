import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <section className="border-b border-gray-200 bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            About Baba Ji Parts
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Who We Are
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/70">
            Baba&nbsp;Ji Parts is Melbourne&apos;s top-tier supplier of genuine
            used parts — specialising in late-model vehicles, fast turnaround
            and straight-up service.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 space-y-10 text-sm text-gray-800">
        {/* SECTION 1: ORIGIN STORY */}
        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Built for serious buyers, not time-wasters
            </h2>
            <p className="mt-3 text-sm text-gray-700">
              Baba&nbsp;Ji Parts was built from the ground up in
              Campbellfield, Victoria — in the heart of Melbourne&apos;s
              automotive district — with one focus:{" "}
              <span className="font-semibold">
                real stock, real knowledge, real service.
              </span>
            </p>
            <p className="mt-3 text-sm text-gray-700">
              We specialise in late-model Toyota, Hyundai, Kia, Mazda and other
              popular makes, with complete vehicles purchased for dismantling
              and inspected on-site. Every engine, transmission and hybrid
              system is tested before it&apos;s offered for sale.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
              Our yard
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              <span className="font-semibold">Address:</span> 82 Horne Street,
              Campbellfield, VIC 3061
            </p>
            <p className="mt-1 text-sm text-gray-700">
              <span className="font-semibold">Trading hours:</span>
            </p>
            <ul className="mt-1 list-none space-y-1 pl-0 text-sm text-gray-700">
              <li>Mon – Fri: 7:30am to 5:30pm</li>
              <li>Sat: 7:30am – 3pm</li>
              <li>Sun / Public Holidays: Closed</li>
            </ul>
            <p className="mt-3 text-sm text-gray-700">
              <span className="font-semibold">Phone:</span> 03 9359 2061
              <br />
              <span className="font-semibold">Mobile:</span> 0430 099 873
            </p>
          </div>
        </section>

        {/* SECTION 2: WHAT MAKES US DIFFERENT */}
        <section className="space-y-4 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold text-gray-900">
            What makes Baba Ji Parts different?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                Genuine tested parts
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                Engines, transmissions, hybrid systems and major mechanical
                components are tested before sale. We know exactly what vehicle
                they came out of — and the kilometres they&apos;ve done.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                Same-day solutions
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                For Melbourne metro, we aim for{" "}
                <span className="font-semibold">same-day or next-day</span>{" "}
                solutions — parts picked, tested and delivered or ready for
                collection fast, so your jobs don&apos;t sit on hoists for
                weeks.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                Straight-up communication
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                We speak workshop language. Clear photos, clear descriptions,
                damage notes and honest condition reporting — so you know what
                you&apos;re getting before it even leaves the yard.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: SERVICES */}
        <section className="space-y-4 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold text-gray-900">
            More than just selling parts
          </h2>
          <p className="text-sm text-gray-700">
            Baba&nbsp;Ji Parts is building a whole ecosystem around parts and
            vehicles — not just a wrecking yard.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                Dismantling &amp; yard stock
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                We carry a rotating stocklist of complete vehicles for
                dismantling. From late-model Camry and Corolla to Kluger, i30,
                Cerato and more — with live yard stock published on the{" "}
                <span className="font-semibold">Vehicle Stock</span> page.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                Installation &amp; painting support
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                Need the part fitted, painted or blended? We work with trusted
                workshops and panel shops to organise installation and colour
                matching — so you get a bumper-to-bumper solution, not just a
                box of parts.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: TRADE & EXPORT VISION */}
        <section className="space-y-4 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Trade customers &amp; exporters
          </h2>
          <p className="text-sm text-gray-700">
            We actively work with mechanics, panel shops, used car dealers and
            exporters who need{" "}
            <span className="font-semibold">consistent supply</span> and{" "}
            <span className="font-semibold">reliable communication</span>.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
            <li>Regular buyers for engines, gearboxes and body cuts.</li>
            <li>Bulk orders and palletised shipments arranged on request.</li>
            <li>
              Future online trade portal with saved vehicles, pricing and
              invoicing.
            </li>
          </ul>
        </section>

        {/* SECTION 5: CALL TO ACTION */}
        <section className="space-y-3 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Ready to find your parts?
          </h2>
          <p className="text-sm text-gray-700">
            Use the{" "}
            <span className="font-semibold">Vehicle Stock</span> page to see
            current dismantling vehicles, or contact us directly with your
            rego/VIN and what you&apos;re chasing.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/vehicle-stock"
              className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black hover:bg-[#c39c30] transition"
            >
              View vehicle stock
            </a>
            <p className="text-xs text-gray-600">
              Or call{" "}
              <span className="font-semibold text-gray-900">
                03 9359 2061
              </span>{" "}
              /{" "}
              <span className="font-semibold text-gray-900">
                0430 099 873
              </span>{" "}
              and we&apos;ll match the parts for you.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutUs;
