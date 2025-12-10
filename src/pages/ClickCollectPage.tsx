import React from "react";

const ClickAndCollect: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Click &amp; Collect
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Reserve your part. Collect from Campbellfield.
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/80">
            Lock in the exact part you need, then swing past our yard to pick it
            up. Fast turnaround, tested parts, and no time wasted walking rows
            of cars.
          </p>
        </div>
      </section>

      {/* 3-Step process */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold tracking-tight text-gray-900">
            How Click &amp; Collect works
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Use Vehicle Stock or speak to our team. Once we confirm the part,
            we pull it, test it and put it aside under your name.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-bold text-black">
                  1
                </span>
                <h3 className="text-sm font-semibold text-gray-900">
                  Enquire &amp; confirm the part
                </h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Call us with your rego / VIN, or send photos. We match your part
                from our stock, including engine code, transmission code and
                colour code where needed.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-bold text-black">
                  2
                </span>
                <h3 className="text-sm font-semibold text-gray-900">
                  We pull &amp; test the part
                </h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Our team removes the part from the vehicle, checks condition and
                operation, and puts it aside with your name and invoice number.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-bold text-black">
                  3
                </span>
                <h3 className="text-sm font-semibold text-gray-900">
                  Collect &amp; get back on the road
                </h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Come to{" "}
                <span className="font-semibold">
                  82 Horne Street, Campbellfield
                </span>{" "}
                during trading hours. Skip the wait, pay, collect and go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pickup details + contact */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
          {/* Pickup info */}
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-gray-900">
              Pickup location &amp; trading hours
            </h2>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Address</p>
                <p>
                  82 Horne Street
                  <br />
                  Campbellfield, VIC 3061
                  <br />
                  Australia
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Trading hours</p>
                <p>Mon – Fri: 7:30am – 5:30pm</p>
                <p>Sat: 7:30am – 3:00pm</p>
                <p>Sun &amp; Public Holidays: Closed</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">When you arrive</p>
                <p>
                  Bring your order details, invoice number or stock number.
                  Check the part before you leave — our team will help where
                  needed.
                </p>
              </div>
            </div>
          </div>

          {/* CTA box */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              Ready to reserve a part?
            </p>
            <h2 className="mt-2 text-lg font-semibold text-gray-900">
              Call now and ask for Click &amp; Collect.
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Quote your rego/VIN and the part you need. If you’ve seen a
              vehicle on our{" "}
              <span className="font-semibold">Vehicle Stock</span> page, mention
              the stock number (e.g. BJ-001 / STK-1001).
            </p>

            <div className="mt-5 space-y-2 text-sm">
              <a
                href="tel:0393592061"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-black hover:bg-[#c39c30] transition"
              >
                Call Office: 03 9359 2061
              </a>
              <div className="text-gray-700">
                Or mobile:{" "}
                <a
                  href="tel:0430099873"
                  className="font-semibold text-[#D4AF37]"
                >
                  0430 099 873
                </a>
              </div>
            </div>

            <ul className="mt-5 list-disc space-y-1 pl-5 text-xs text-gray-600">
              <li>Same-day pickup available on most parts.</li>
              <li>
                If a part can&apos;t be supplied, we&apos;ll let you know before
                you come.
              </li>
              <li>
                For freight / courier shipping, see our{" "}
                <span className="font-semibold">Delivery</span> page.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClickAndCollect;
