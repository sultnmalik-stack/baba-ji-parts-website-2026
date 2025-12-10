import React from "react";

const Delivery: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Delivery &amp; Freight
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Parts delivered across Melbourne, Victoria &amp; interstate.
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/80">
            From a single headlight to half-cuts and pallets of engines — we can
            organise delivery or freight from our Campbellfield yard to your
            door, workshop or depot.
          </p>
        </div>
      </section>

      {/* DELIVERY TYPES */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold tracking-tight text-gray-900">
            Delivery options
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Exact cost depends on size, weight and location. We&apos;ll confirm
            pricing before you pay.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* Metro van / courier */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                Melbourne Metro Courier
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Ideal for bumpers, doors, lights, suspension, interior parts and
                smaller mechanical items. Delivered to your workshop or address
                within Melbourne metro.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-gray-600">
                <li>Same-day / next-day on most orders.</li>
                <li>Signature on delivery available.</li>
                <li>Tracking or ETA provided where possible.</li>
              </ul>
            </div>

            {/* Pallet / freight */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                Pallet &amp; Depot Freight
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                For engines, transmissions, half-cuts, rear cuts, diffs and
                palletised loads. Shipped to business addresses or major depots
                across Victoria and interstate.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-gray-600">
                <li>Forklift or unloading access required.</li>
                <li>We can strap &amp; wrap pallets in-house.</li>
                <li>Depot collection available to reduce cost.</li>
              </ul>
            </div>

            {/* Interstate parcels */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                Interstate Parcels
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Smaller items can be sent Australia-wide via major couriers
                (where size and dangerous-goods rules allow).
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-gray-600">
                <li>Insurance / extra cover available on request.</li>
                <li>We pack carefully to protect fragile parts.</li>
                <li>
                  Remote / regional areas may incur additional surcharges from
                  the carrier.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGING / LEAD TIME */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
          {/* Packaging & handling */}
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-gray-900">
              Handling, packaging &amp; dispatch times
            </h2>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Standard handling</p>
                <p>
                  Once payment clears, most parts are picked, tested and packed
                  within{" "}
                  <span className="font-semibold">24–48 business hours</span>.
                  Engine/gearbox removal and pallet jobs may take a little
                  longer depending on workshop load.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Packaging</p>
                <p>
                  Panels and lights are wrapped and boxed where possible. Heavy
                  items are drained, capped, strapped and palletised to minimise
                  damage and meet freight requirements.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Tracking</p>
                <p>
                  We&apos;ll send you consignment or tracking details once your
                  order has been booked with the carrier.
                </p>
              </div>
            </div>
          </div>

          {/* Important notes */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              Important delivery notes
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
              <li>
                Freight times can vary based on location, carrier and public
                holidays — once it&apos;s on the truck, we both rely on the
                transport company.
              </li>
              <li>
                Please inspect goods on arrival. If packaging is damaged, note
                it with the driver and photograph it before opening.
              </li>
              <li>
                For warranty and returns conditions, see our{" "}
                <span className="font-semibold">Warranty Policy</span> and{" "}
                <span className="font-semibold">Return Policy</span> pages.
              </li>
              <li>
                Dangerous goods (airbags, seatbelt pretensioners etc.) may be
                restricted or shipped via specific carriers only.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-[2fr,1.2fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Need a freight quote?
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Call us with your postcode and part details.
              </h2>
              <p className="mt-3 text-sm text-white/80">
                Have your{" "}
                <span className="font-semibold">
                  stock number, rego or VIN
                </span>{" "}
                ready. Tell us if you&apos;re a workshop, wrecker, panel shop or
                private address so we can quote the right option.
              </p>
            </div>

            <div className="rounded-2xl border border-[#D4AF37]/50 bg-black px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
                Talk to the team
              </p>
              <div className="mt-3 space-y-2 text-sm">
                <a
                  href="tel:0393592061"
                  className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-black hover:bg-[#c39c30] transition"
                >
                  Call Office: 03 9359 2061
                </a>
                <p>
                  Mobile:{" "}
                  <a
                    href="tel:0430099873"
                    className="font-semibold text-[#D4AF37]"
                  >
                    0430 099 873
                  </a>
                </p>
                <p className="text-xs text-white/70">
                  Or mention delivery when you visit{" "}
                  <span className="font-semibold">
                    82 Horne Street, Campbellfield
                  </span>{" "}
                  and we&apos;ll organise freight while you&apos;re here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;
