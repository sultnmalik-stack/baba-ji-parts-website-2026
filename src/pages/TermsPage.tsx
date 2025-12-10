import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <section className="border-b border-gray-200 bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Legal
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/70">
            Please read these Terms &amp; Conditions carefully. By purchasing
            from Baba&nbsp;Ji Parts you agree to the following terms.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 space-y-8 text-sm text-gray-800">
        {/* 1. General */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            1. General
          </h2>
          <p>
            These Terms &amp; Conditions (&quot;Terms&quot;) apply to all
            sales of parts and services provided by{" "}
            <span className="font-semibold">Baba Ji Parts</span> from our
            Campbellfield yard or via phone, online or other channels.
          </p>
          <p>
            By placing an order, paying a deposit or accepting delivery of any
            goods from us, you are deemed to have accepted these Terms.
          </p>
        </section>

        {/* 2. Parts Description & Condition */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            2. Parts Description &amp; Condition
          </h2>
          <p>
            All parts sold are second-hand / used components removed from donor
            vehicles unless specifically stated otherwise. We describe parts to
            the best of our ability based on visual inspection and testing.
          </p>
          <p>
            Minor wear, cosmetic marks and age-related defects are expected on
            used parts. It is your responsibility to confirm suitability for
            your vehicle before purchase.
          </p>
        </section>

        {/* 3. Pricing & Payment */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            3. Pricing &amp; Payment
          </h2>
          <p>
            All prices are in Australian dollars (AUD) and may be subject to
            change without notice. Quotes are valid only for the period stated
            or, if no period is stated, at our discretion.
          </p>
          <p>
            Payment must be made in full before goods are released or shipped,
            unless prior written arrangements have been approved.
          </p>
        </section>

        {/* 4. Click & Collect / Delivery */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            4. Click &amp; Collect / Delivery
          </h2>
          <p>
            For Click &amp; Collect orders, parts will be held for a limited
            time only. If not collected within the agreed timeframe, the parts
            may be returned to stock and deposits may be forfeited.
          </p>
          <p>
            For deliveries and freight, we take reasonable care to pack and book
            goods with reputable carriers. Once collected by the carrier,
            transit times and handling are outside our direct control.
          </p>
        </section>

        {/* 5. Warranty (summary – full in Warranty Policy) */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            5. Warranty (summary)
          </h2>
          <p>
            Many mechanical parts are supplied with a limited warranty period.
            Exact coverage, timeframes and conditions are outlined in our full{" "}
            <span className="font-semibold">Warranty Policy</span>.
          </p>
          <p>
            Warranty generally covers defects in the part itself under normal
            use, and does not cover labour, fluids, towing or consequential loss
            unless expressly stated.
          </p>
        </section>

        {/* 6. Returns & Refunds */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            6. Returns &amp; Refunds
          </h2>
          <p>
            Returns are assessed on a case-by-case basis. Parts must usually be
            returned in the same condition supplied, within a reasonable time
            and with proof of purchase.
          </p>
          <p>
            Electrical items, control modules and specifically ordered / special
            order parts may be non-returnable except where required by law. For
            full details see our{" "}
            <span className="font-semibold">Return Policy</span>.
          </p>
        </section>

        {/* 7. Customer Responsibilities */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            7. Customer Responsibilities
          </h2>
          <p>
            You are responsible for providing correct vehicle details (rego,
            VIN, year, make, model, engine/gearbox codes, etc.) and for ensuring
            that the part is fitted by a suitably qualified professional.
          </p>
          <p>
            We do not accept liability for damage caused by incorrect
            installation, incorrect diagnosis or misuse of parts.
          </p>
        </section>

        {/* 8. Limitation of Liability */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            8. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, our liability is limited, at
            our option, to repair, replacement or refund of the part supplied.
          </p>
          <p>
            We are not responsible for loss of income, loss of use, downtime,
            hire car costs or other indirect or consequential loss arising from
            the use of any part supplied.
          </p>
        </section>

        {/* 9. Changes to Terms */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            9. Changes to these Terms
          </h2>
          <p>
            We may update these Terms from time to time. The version in force at
            the time of your purchase will apply to that transaction.
          </p>
        </section>

        {/* 10. Contact */}
        <section className="space-y-2 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            10. Contact
          </h2>
          <p>
            If you have any questions about these Terms &amp; Conditions,
            please contact us:
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

export default TermsAndConditions;
