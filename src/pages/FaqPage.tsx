import React from "react";

const FAQs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <section className="border-b border-gray-200 bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Customer Support
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/70">
            Answers to the most common questions our customers ask about
            parts, shipping, warranty and dismantling stock.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">

        {/* FAQ ITEM */}
        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Do you offer same-day delivery?
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Yes. Melbourne metro customers receive <span className="font-semibold">FREE same-day delivery</span> 
            on most items, depending on stock and timing. Interstate orders are shipped daily through our 
            freight partners.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Are the parts tested?
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Every engine, transmission, hybrid battery and major mechanical item 
            is fully tested before dismantling. Body panels are visually inspected 
            and graded.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Do you provide installation?
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Yes — we partner with local workshops for professional installation. 
            Ask our team and we’ll organise the fitting for you.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Are your parts genuine?
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            100%. All parts we sell are genuine OEM components removed from 
            dismantled vehicles, unless clearly stated as aftermarket.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Can I return a part?
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Yes — returns depend on the item type and condition. Check our full 
            Return Policy for details, or call us for immediate help.
          </p>
        </div>

      </section>
    </div>
  );
};

export default FAQs;
