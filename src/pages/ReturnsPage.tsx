import React from "react";

const ReturnPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <section className="border-b border-gray-200 bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Returns &amp; Exchanges
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Return Policy
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/70">
            How returns, exchanges and credits work for parts purchased from
            Baba&nbsp;Ji Parts.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 space-y-8 text-sm text-gray-800">
        {/* 1. General principles */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            1. General principles
          </h2>
          <p>
            We want you to receive the correct parts and have a smooth
            experience. Because most items we sell are used, and removed from
            specific vehicles, our returns process is structured to protect both
            the customer and the yard.
          </p>
          <p>
            This Return Policy operates alongside our{" "}
            <span className="font-semibold">Terms &amp; Conditions</span> and
            your rights under the Australian Consumer Law.
          </p>
        </section>

        {/* 2. Change of mind / wrong part ordered by customer */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            2. Change of mind / wrong part ordered
          </h2>
          <p>
            Because we are dealing with used, model-specific parts,{" "}
            <span className="font-semibold">
              change of mind returns are very limited
            </span>
            .
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              If you ordered the wrong part due to incorrect details (e.g. wrong
              engine code, wrong series), we may at our discretion offer an
              exchange or partial credit if the part is still in{" "}
              <span className="font-semibold">original supplied condition</span>{" "}
              and returned promptly.
            </li>
            <li>
              Handling, freight and packaging costs are{" "}
              <span className="font-semibold">non-refundable</span> in
              change-of-mind situations.
            </li>
            <li>
              Special order or specifically requested parts may be{" "}
              <span className="font-semibold">non-returnable</span> except where
              required by law.
            </li>
          </ul>
        </section>

        {/* 3. Wrong part supplied by us */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            3. Wrong part supplied by us
          </h2>
          <p>
            If we supply a part that does not match what was clearly agreed
            (wrong side, wrong engine/gearbox code, wrong series etc.), contact
            us as soon as possible.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              We will verify the details and, where confirmed, arrange an{" "}
              <span className="font-semibold">exchange, replacement</span> or{" "}
              <span className="font-semibold">refund</span> of the part price.
            </li>
            <li>
              In many cases we will work with you on freight costs if the error
              is ours.
            </li>
          </ul>
        </section>

        {/* 4. Faulty or defective parts */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            4. Faulty or defective parts
          </h2>
          <p>
            If you believe a part is faulty or has failed prematurely under
            normal use, this may be treated as a{" "}
            <span className="font-semibold">warranty</span> matter.
          </p>
          <p>
            Please refer to our{" "}
            <span className="font-semibold">Warranty Policy</span> for detail on
            coverage, time limits, exclusions and the claim process.
          </p>
        </section>

        {/* 5. Return conditions */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            5. Conditions for accepted returns
          </h2>
          <p>
            Where a return is accepted (for example, wrong part sent or agreed
            change-of-mind), the following conditions usually apply:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Parts must be returned in the{" "}
              <span className="font-semibold">
                same condition as supplied
              </span>{" "}
              — not stripped, disassembled or modified.
            </li>
            <li>
              All accessories supplied with the part (sensors, looms, brackets,
              etc.) must be returned unless otherwise agreed.
            </li>
            <li>
              A copy of the{" "}
              <span className="font-semibold">invoice or proof of purchase</span>{" "}
              must be provided.
            </li>
            <li>
              Returns must be{" "}
              <span className="font-semibold">
                within a reasonable timeframe
              </span>{" "}
              from purchase — timeframes may vary based on the part and will be
              confirmed when you contact us.
            </li>
          </ul>
        </section>

        {/* 6. Items that are generally non-returnable */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            6. Non-returnable items (except where required by law)
          </h2>
          <p>
            For practical and testing reasons, some categories are usually
            non-returnable except where required by consumer law:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Electrical and electronic parts (ECUs, modules, sensors).</li>
            <li>Control units that may have been programmed or coded.</li>
            <li>
              Special order items or parts cut to order (e.g. body cuts, chassis
              sections).
            </li>
          </ul>
          <p className="text-xs text-gray-600">
            We may still work with you on a solution if the issue is clearly due
            to mis-supply or a genuine part defect.
          </p>
        </section>

        {/* 7. Freight and return shipping */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            7. Freight and return shipping
          </h2>
          <p>
            Freight costs are a significant part of moving heavy and bulky
            automotive parts.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Where we are at fault (wrong part supplied, confirmed warranty
              issue), we may assist with or cover reasonable return freight,
              subject to prior approval.
            </li>
            <li>
              Where the error is not ours (change of mind, wrong details
              supplied), return freight is generally{" "}
              <span className="font-semibold">your responsibility</span>.
            </li>
          </ul>
        </section>

        {/* 8. Refunds, credits and exchanges */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            8. Refunds, credits &amp; exchanges
          </h2>
          <p>
            Depending on the situation, the outcome of an approved return may
            be:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Exchange for the correct or similar part.</li>
            <li>Store credit towards future purchases.</li>
            <li>Refund of the part purchase price.</li>
          </ul>
          <p>
            The exact remedy will depend on stock availability, the nature of
            the part and whether the issue falls under warranty or general
            returns.
          </p>
        </section>

        {/* 9. How to request a return */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            9. How to request a return
          </h2>
          <p>
            To discuss a return or exchange, contact us as soon as possible
            after receiving the part with:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Invoice number and date of purchase.</li>
            <li>Vehicle details (rego, VIN, make, model, year).</li>
            <li>
              Clear explanation of the issue (wrong part, change of mind,
              suspected fault, etc.).
            </li>
            <li>
              Photos or workshop reports where relevant (damage, mis-match,
              etc.).
            </li>
          </ul>
        </section>

        {/* 10. Consumer law */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            10. Your rights under Australian consumer law
          </h2>
          <p>
            Our goods come with guarantees that cannot be excluded under the
            Australian Consumer Law. You are entitled to a replacement or refund
            for a major failure and for compensation for any other reasonably
            foreseeable loss or damage.
          </p>
          <p>
            You are also entitled to have the goods repaired or replaced if they
            fail to be of acceptable quality and the failure does not amount to
            a major failure.
          </p>
        </section>

        {/* 11. Contact */}
        <section className="space-y-2 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            11. Contact for returns
          </h2>
          <p>
            For all return enquiries, please contact:
          </p>
          <p>
            <span className="font-semibold">Baba Ji Parts</span>
            <br />
            82 Horne Street, Campbellfield, VIC 3061
            <br />
            Office: 03 9359 2061 &nbsp;|&nbsp; Mobile: 0430 099 873
          </p>
        </section>
      </section>
    </div>
  );
};

export default ReturnPolicy;
