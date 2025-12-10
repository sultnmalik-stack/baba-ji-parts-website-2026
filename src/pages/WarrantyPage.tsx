import React from "react";

const WarrantyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <section className="border-b border-gray-200 bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Warranty
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Warranty Policy
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/70">
            Our warranty terms for engines, transmissions, mechanical parts,
            electrical parts and panels supplied by Baba&nbsp;Ji Parts.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 space-y-8 text-sm text-gray-800">
        {/* 1. General */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            1. General warranty overview
          </h2>
          <p>
            Many of our parts are supplied with a limited warranty period against
            defects in the part itself under normal use. This Warranty Policy
            should be read together with our{" "}
            <span className="font-semibold">Terms &amp; Conditions</span> and
            your rights under Australian consumer law.
          </p>
          <p>
            Warranty covers the part only, unless expressly stated otherwise. It
            does not automatically cover labour, fluids, towing, diagnostics or
            consequential loss.
          </p>
        </section>

        {/* 2. Engines & Long Motors */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            2. Engines &amp; long motors
          </h2>
          <p>
            Used engines are normally supplied with a limited time / kilometre
            warranty (details to be confirmed on each invoice or quote).
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Engines are sold as long bare engines unless otherwise specified
              (ancillaries such as starter, alternator, turbo, etc. may not be
              covered).
            </li>
            <li>
              New oils, filters, coolant and gaskets must be used on
              installation. Timing components should be inspected and replaced
              where recommended.
            </li>
            <li>
              Overheating, oil starvation, incorrect fluids or improper
              installation will void warranty.
            </li>
          </ul>
          <p className="text-xs text-gray-600">
            Proof of installation by a qualified mechanic may be required for
            warranty claims.
          </p>
        </section>

        {/* 3. Transmissions & Drivetrain */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            3. Transmissions &amp; drivetrain
          </h2>
          <p>
            Automatic and manual gearboxes, differentials and transfer cases are
            tested where possible before removal.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Correct fluid type and level must be used on installation.</li>
            <li>
              Transmission coolers should be flushed or replaced and lines
              cleaned to avoid contamination.
            </li>
            <li>
              Warranty does not cover damage caused by faulty external
              components, blocked coolers, incorrect programming or tuning.
            </li>
          </ul>
        </section>

        {/* 4. Mechanical parts (non-engine/gearbox) */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            4. Mechanical parts
          </h2>
          <p>
            Suspension arms, hubs, steering racks, pumps and other mechanical
            components are visually inspected and may be supplied with a limited
            warranty at our discretion.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Wear-and-tear items (bushes, ball joints, rubbers) may have
              reduced coverage depending on age and condition.
            </li>
            <li>
              Items damaged by impact, racing, off-road abuse or incorrect
              installation will not be covered.
            </li>
          </ul>
        </section>

        {/* 5. Electrical & electronic parts */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            5. Electrical &amp; electronic parts
          </h2>
          <p>
            Due to the nature of electrical and electronic components, warranty
            terms may be more limited.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Many electrical parts (ECUs, modules, sensors) are sold on a
              non-returnable basis unless required by law.
            </li>
            <li>
              Incorrect programming, wiring faults, short circuits or external
              vehicle issues are not covered by warranty.
            </li>
            <li>
              We strongly recommend professional diagnosis before purchasing
              electrical parts.
            </li>
          </ul>
        </section>

        {/* 6. Body panels & lights */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            6. Body panels, bumpers &amp; lights
          </h2>
          <p>
            Panels, doors, bumpers and lights are supplied as second-hand items
            and may have minor cosmetic defects consistent with age.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              We describe major damage as accurately as possible. Minor marks,
              scratches or stone chips are not generally covered.
            </li>
            <li>
              Colour match is not guaranteed. Painting or blending may be
              required to achieve full match.
            </li>
          </ul>
        </section>

        {/* 7. What warranty does not cover */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            7. Exclusions
          </h2>
          <p>Warranty does not usually cover:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Incorrect diagnosis or ordering the wrong part.</li>
            <li>
              Damage caused by improper installation, tuning or modification.
            </li>
            <li>Racing, burnout, off-road or competition use.</li>
            <li>
              Consequential loss such as hire car costs, lost income or downtime
              (unless required by law).
            </li>
          </ul>
        </section>

        {/* 8. Making a warranty claim */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            8. Making a warranty claim
          </h2>
          <p>
            If you believe a part has failed under warranty, contact us as soon
            as possible with:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Your invoice number and date of purchase.</li>
            <li>Vehicle details (rego, VIN, odometer, etc.).</li>
            <li>
              A clear description of the fault, including any workshop reports
              or diagnostic codes where available.
            </li>
          </ul>
          <p>
            We may request photos, videos, diagnostic reports or inspection by a
            qualified mechanic. In some cases the part may need to be returned
            for testing.
          </p>
        </section>

        {/* 9. Remedies */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            9. Remedies under this warranty
          </h2>
          <p>
            Where a valid warranty claim is accepted, our options may include:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Repair of the part.</li>
            <li>Replacement with a similar part (where available).</li>
            <li>Refund of the part purchase price.</li>
          </ul>
          <p>
            The specific remedy will depend on the nature of the part, the fault
            and stock availability.
          </p>
        </section>

        {/* 10. Consumer law */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            10. Your rights under Australian consumer law
          </h2>
          <p>
            Nothing in this Warranty Policy is intended to exclude or limit any
            rights you may have under the Australian Consumer Law or other
            applicable legislation.
          </p>
          <p>
            Our goods come with guarantees that cannot be excluded under the
            Australian Consumer Law. You are entitled to a replacement or refund
            for a major failure and for compensation for any other reasonably
            foreseeable loss or damage.
          </p>
        </section>

        {/* 11. Contact */}
        <section className="space-y-2 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            11. Contact for warranty enquiries
          </h2>
          <p>
            For questions about warranty coverage or to lodge a claim, please
            contact:
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

export default WarrantyPolicy;
