import React from "react";

const makes = ["Toyota", "Honda", "Mazda", "Hyundai", "Kia", "Ford", "Holden"];
const models = ["Camry", "Corolla", "Civic", "Accord", "i30", "Ranger"];
const years = [
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
];

const Home: React.FC = () => {
  return (
    <div className="bg-white text-black">
      {/* HERO SECTION */}
      <section className="relative min-h-[600px] w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3806264/pexels-photo-3806264.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-xl rounded-2xl bg-black/80 p-6 shadow-xl sm:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Find your parts in seconds.
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/80">
              Genuine and quality recycled parts, sourced, checked and delivered
              across Melbourne and beyond.
            </p>

            <div className="mt-6 space-y-3">
              {/* Make */}
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex-1">
                  <label className="text-xs uppercase tracking-wide text-white/70">
                    Make
                  </label>
                  <select className="mt-1 w-full rounded-md bg-white px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
                    <option value="">Select Make</option>
                    {makes.map((make) => (
                      <option key={make} value={make}>
                        {make}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Model */}
                <div className="flex-1">
                  <label className="text-xs uppercase tracking-wide text-white/70">
                    Model
                  </label>
                  <select className="mt-1 w-full rounded-md bg-white px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
                    <option value="">Select Model</option>
                    {models.map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Year + Search */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
                <div className="flex-1">
                  <label className="text-xs uppercase tracking-wide text-white/70">
                    Year
                  </label>
                  <select className="mt-1 w-full rounded-md bg-white px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
                    <option value="">Select Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="mt-2 inline-flex items-center justify-center rounded-md bg-[#D4AF37] px-6 py-2.5 text-sm font-semibold text-black shadow hover:bg-[#c39c30] transition sm:mt-0">
                  {/* Search icon */}
                  <svg
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="16.5" y1="16.5" x2="21" y2="21" />
                  </svg>
                  Search Parts
                </button>
              </div>
            </div>

            <p className="mt-3 text-xs text-white/60">
              Prefer to talk? Call us on{" "}
              <span className="font-semibold text-[#D4AF37]">
                03 9359 2061
              </span>{" "}
              and our team will find the right part for you.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">
            Baba Ji Parts are Melbourne&apos;s top-tier supplier of quality
            recycled and aftermarket parts.
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-black/80">
            Our goal is to provide you with the best parts for your vehicle at
            the best possible price, without sacrificing quality or service. We
            specialise in supplying panels, lights, mechanical and suspension
            components for a wide range of makes and models.
            <br />
            <br />
            For many Melbourne metro areas, we offer{" "}
            <span className="font-semibold">same day FREE delivery</span> on
            stocked parts, helping your job move faster and keeping your car off
            the road for less time. Need more than just supply? We also offer{" "}
            <span className="font-semibold">installation and painting</span>{" "}
            services through our workshop network, so you can handle everything
            from sourcing to fitting in one place.
            <br />
            <br />
            Whether you&apos;re a panel shop, mechanic or a private customer,
            Baba Ji Parts is built to make finding the right part simple, fast
            and reliable.
          </p>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-black py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Visit Our Yard
              </h3>
              <p className="text-sm text-white/70">
                82 Horne Street, Campbellfield, VIC, 3061
              </p>
            </div>
            <div className="text-xs sm:text-sm text-white/60">
              On-site pickup, parts inspection and workshop access available.
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
            <iframe
              title="Baba Ji Parts Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.915931197951!2d144.95858977634178!3d-37.673560871987095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d6b7e0b7f7b%3A0x0000000000000000!2s82%20Horne%20St%2C%20Campbellfield%20VIC%203061%2C%20Australia!5e0!3m2!1sen!2sau!4v1700000000000"
              className="h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;