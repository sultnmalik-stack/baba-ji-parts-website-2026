import React from "react";

const Shipping: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <section className="border-b border-gray-200 bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Shipping &amp; Delivery
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Shipping Policy
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/70">
            How we pack, ship and deliver parts from our Campbellfield yard to
            Melbourne, Victoria and interstate customers.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 space-y-8 text-sm text-gray-800">
        {/* 1. Areas we service */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            1. Areas we service
          </h2>
          <p>
            Baba Ji Parts ships from our yard at 82 Horne Street,
            Campbellfield, VIC. We can arrange:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Melbourne metro courier delivery for panels, lights and smaller
              mechanical items.
            </li>
            <li>
              Pallet and depot freight across Victoria and interstate for
              engines, gearboxes, half-cuts and larger consignments.
            </li>
            <li>
              Parcel freight for selected smaller items where carriers allow.
            </li>
          </ul>
        </section>

        {/* 2. Handling & dispatch times */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            2. Handling &amp; dispatch times
          </h2>
          <p>
            Handling time is the period from when payment clears to when goods
            are ready for collection by you or the transport company.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Most standard parts are picked, tested and packed within{" "}
              <span className="font-semibold">24–48 business hours</span>.
            </li>
            <li>
              Engines, transmissions and large mechanical assemblies may require
              extra time for removal, draining and palletising.
            </li>
            <li>
              If there is any delay (e.g. workshop load, weather, public
              holidays), we will let you know as early as possible.
            </li>
          </ul>
        </section>

        {/* 3. Shipping methods */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            3. Shipping methods
          </h2>
          <p>Depending on the item and destination, we may use:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Local couriers</span> for
              Melbourne metro deliveries.
            </li>
            <li>
              <span className="font-semibold">Freight companies</span> for
              pallets and bulky loads to depots or commercial addresses.
            </li>
            <li>
              <span className="font-semibold">Parcel carriers</span> for
              smaller, shippable items where size/weight rules allow.
            </li>
          </ul>
          <p>
            Where practical, we&apos;ll discuss options with you so you can
            choose the most suitable and cost-effective method.
          </p>
        </section>

        {/* 4. Shipping costs */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            4. Shipping costs
          </h2>
          <p>
            Shipping and freight charges depend on size, weight, destination and
            service type. Quotes are usually provided at the time of order.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Metro delivery may be free or discounted on selected orders at our
              discretion.
            </li>
            <li>
              Interstate and regional freight is charged at the rate set by the
              carrier, plus any packing/palletising fees.
            </li>
            <li>
              Any re-delivery, tail-lift, hand unload, or waiting time fees
              imposed by carriers may be passed on to you.
            </li>
          </ul>
        </section>

        {/* 5. Packaging & risk in transit */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            5. Packaging &amp; risk in transit
          </h2>
          <p>
            We take care to package goods securely using wrapping, boxes and
            pallets as appropriate for the item.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Panels and lights are wrapped and, where possible, boxed or
              framed.
            </li>
            <li>
              Engines, gearboxes and heavy components are drained, capped and
              strapped to pallets.
            </li>
            <li>
              Once goods are collected by a courier or freight company, risk in
              transit is generally with the carrier and/or the customer, subject
              to your rights under Australian consumer law.
            </li>
          </ul>
        </section>

        {/* 6. Delivery times & tracking */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            6. Delivery times &amp; tracking
          </h2>
          <p>
            Any delivery timeframes provided are estimates only and may vary
            based on carrier performance, distance, traffic and public
            holidays.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Where available, we will provide consignment or tracking numbers
              so you can follow the shipment.
            </li>
            <li>
              Delays caused by the carrier or circumstances outside our control
              are not grounds for automatic cancellation, but we will assist in
              following up with the carrier.
            </li>
          </ul>
        </section>

        {/* 7. Receiving your shipment */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            7. Receiving your shipment
          </h2>
          <p>When your order arrives, please:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Inspect the packaging and goods before signing for delivery.</li>
            <li>
              Note any visible damage with the driver and take photos of the
              packaging and item.
            </li>
            <li>
              Notify us as soon as possible if there is transit damage, wrong
              items or missing pieces so we can help resolve it.
            </li>
          </ul>
        </section>

        {/* 8. Click & Collect */}
        <section className="space-y-2 border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            8. Click &amp; Collect
          </h2>
          <p>
            For Click &amp; Collect orders, we will notify you when your parts
            are ready for pickup from our yard at 82 Horne Street,
            Campbellfield.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Please bring your order confirmation, ID and any vehicle details
              we may need.
            </li>
            <li>
              Goods not collected within a reasonable period may be returned to
              stock and deposits may be forfeited.
            </li>
          </ul>
        </section>

        {/* 9. Questions about shipping */}
        <section className="space-y-2 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            9. Questions about shipping
          </h2>
          <p>
            If you have any questions about shipping options, costs or delivery
            times, please contact us before placing your order:
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

export default Shipping;
