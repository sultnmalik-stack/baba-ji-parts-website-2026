import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ChevronDownIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Category → items
  const menus: Record<string, string[]> = {
    "Body Parts": [
      "Doors",
      "Bonnets",
      "Bootlids",
      "Tailgates",
      "Windows",
      "Guards",
      "Guard liners",
      "Mirrors",
      "Bumper Bars",
      "Other",
    ],
    Lights: ["Headlights", "Tail lights", "Fog lights", "Other"],
    "Mechanical Parts": [
      "Engines",
      "Transmissions",
      "Alternators",
      "AC Pumps",
      "Cooling Pumps",
      "Other",
    ],
    Suspensions: [
      "Lower Control Arms",
      "Wheel hubs",
      "Power Steering Racks",
      "Power Steering pumps",
      "Struts",
      "Sway Bar Links",
      "Stabilizers",
      "Other",
    ],
    Wheels: ["Wheels", "Wheel covers", "Other"],
    Electrical: ["Head units", "Window regulators", "Window switches", "Other"],
  };

  // 🔍 submit search from header
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    const trimmed = searchTerm.trim();

    if (trimmed) {
      params.set("q", trimmed);
    }

    const query = params.toString();
    navigate(`/vehicle-stock${query ? `?${query}` : ""}`);
  };

  const isVehicleStock = location.pathname === "/vehicle-stock";

  return (
    <header className="w-full bg-black text-white">
      {/* ---------- ROW 1: TOP LINKS ---------- */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/70">
          <button
            onClick={() => navigate("/click-and-collect")}
            className="hover:text-[#D4AF37] transition"
          >
            Click &amp; Collect
          </button>
          <button
            onClick={() => navigate("/delivery")}
            className="hover:text-[#D4AF37] transition"
          >
            Delivery
          </button>
          <button
            onClick={() => navigate("/parts-decipher")}
            className="hover:text-[#D4AF37] transition"
          >
            Parts Decipher
          </button>
          <button
            onClick={() => navigate("/account")}
            className="hover:text-[#D4AF37] transition"
          >
            Account
          </button>
        </div>
      </div>

      {/* ---------- ROW 2: LOGO + SEARCH + PHONES ---------- */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
          {/* Left: Logo + Brand */}
          <div
            className="flex cursor-pointer items-center gap-3"
            onClick={() => navigate("/")}
          >
            <img
              src="/BABA_JI_PARTS_LOGO_MONO.png"
              alt="Baba Ji Parts Logo"
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-[0.25em]">
                BABA JI PARTS
              </span>
            </div>
          </div>

          {/* Centre: Search bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-1 max-w-xl items-center"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by part, make, model or keyword..."
              className="h-10 flex-1 rounded-l-full bg-white px-4 text-sm text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
            <button
              type="submit"
              className="h-10 rounded-r-full bg-[#D4AF37] px-5 text-sm font-semibold text-black hover:bg-[#c39c30] transition"
            >
              Search
            </button>
          </form>

          {/* Right: phone badges + cart */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end gap-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/70 bg-black px-4 py-1 text-xs font-semibold tracking-[0.16em] text-[#D4AF37]">
                <span className="uppercase">Office</span>
                <span className="text-sm font-bold">03 9359 2061</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/70 bg-black px-4 py-1 text-xs font-semibold tracking-[0.16em] text-[#D4AF37]">
                <span className="uppercase">Mobile</span>
                <span className="text-sm font-bold">0430 099 873</span>
              </div>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/70 bg-black hover:bg-[#D4AF37] hover:text-black transition"
            >
              <ShoppingCartIcon className="h-5 w-5 text-[#D4AF37] hover:text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* ---------- ROW 3: CATEGORY NAV + VEHICLE STOCK ---------- */}
      <nav className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 py-3 text-sm font-semibold">
          {/* Vehicle Stock tab – solid gold pill */}
          <button
            onClick={() => navigate("/vehicle-stock")}
            className={`uppercase tracking-[0.16em] px-4 py-1 rounded-full text-xs font-semibold transition 
              ${
                isVehicleStock
                  ? "bg-[#D4AF37] text-black shadow-md"
                  : "bg-[#D4AF37] text-black/90 hover:bg-[#c39c30]"
              }`}
          >
            Vehicle Stock
          </button>

          {/* Category dropdowns */}
          {Object.keys(menus).map((label) => (
            <div
              key={label}
              className="relative"
              onMouseEnter={() => setOpenMenu(label)}
              onMouseLeave={() =>
                setOpenMenu((prev) => (prev === label ? null : prev))
              }
            >
              <button className="flex items-center gap-1 text-white/90 hover:text-[#D4AF37] transition">
                {label}
                <ChevronDownIcon className="h-4 w-4" />
              </button>

              {openMenu === label && (
                <div className="absolute left-0 top-full z-40 mt-2 w-64 rounded-lg bg-white p-4 text-sm text-black shadow-2xl">
                  <ul className="space-y-1.5">
                    {menus[label].map((item) => (
                      <li
                        key={item}
                        className="cursor-pointer rounded px-2 py-1 hover:bg-gray-100 hover:text-[#D4AF37] transition"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
