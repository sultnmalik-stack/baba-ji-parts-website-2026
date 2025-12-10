// src/pages/Home.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Build a simple search string from the hero filters
    const parts = [year, make, model].filter(Boolean);
    const q = parts.join(" ");

    if (q) {
      navigate(`/vehicle-stock?q=${encodeURIComponent(q)}`);
    } else {
      // If nothing selected, just go to Vehicle Stock
      navigate("/vehicle-stock");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative h-[520px] w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-bg.jpg')", // use your existing hero image path here
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <div className="w-full rounded-2xl bg-black/90 px-6 py-8 sm:px-10 sm:py-10 shadow-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Find your parts in seconds.
            </h1>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-white/80">
              Genuine and quality recycled parts, sourced, checked and
              delivered across Melbourne and beyond.
            </p>

            {/* FORM */}
            <form
              onSubmit={handleHeroSearch}
              className="mt-6 space-y-4 text-sm sm:text-base"
            >
              {/* Make & Model */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    Make
                  </label>
                  <select
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white px-3 py-2 text-sm text-black focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  >
                    <option value="">Select Make</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Holden">Holden</option>
                    <option value="Ford">Ford</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Hyundai">Hyundai</option>
                    {/* add more later if you want */}
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    Model
                  </label>
                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="Select Model"
                    className="w-full rounded-lg border border-white/10 bg-white px-3 py-2 text-sm text-black placeholder-black/50 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  />
                </div>
              </div>

              {/* Year & Button */}
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end">
                <div className="flex-1">
                  <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    Year
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white px-3 py-2 text-sm text-black focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  >
                    <option value="">Select Year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    {/* add more ranges later if you like */}
                  </select>
                </div>

                <div className="sm:ml-3">
                  <button
                    type="submit"
                    className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-[#D4AF37] px-6 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-black hover:bg-[#c39c30] transition"
                  >
                    Search Parts
                  </button>
                </div>
              </div>
            </form>

            <p className="mt-4 text-[11px] sm:text-xs text-white/60">
              Prefer to talk? Call us on{" "}
              <span className="font-semibold text-[#D4AF37]">03 9359 2061</span>{" "}
              and our team will find the right part for you.
            </p>
          </div>
        </div>
      </section>

      {/* BELOW HERO – existing intro text */}
      <section className="bg-white py-10 text-black">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Baba Ji Parts are Melbourne&apos;s top-tier supplier of quality
            recycled and aftermarket parts.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-700">
            Genuine used and new components for panel shops, mechanics, and
            everyday drivers — sourced, tested, and shipped with care.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
