import React, { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

type VehicleStatus = "In Stock" | "Dismantling" | "Sold";

type Vehicle = {
  id: string;
  year: number;
  make: string;
  model: string;
  variant?: string;
  engine?: string;
  transmission?: string;
  odometer?: string;
  stockNumber?: string;
  status: VehicleStatus;
  imageUrls: string[];
  notes?: string;
  location?: string;
};

// TODO: your BJ-001 to BJ-015 objects here (unchanged from your current code)
const VEHICLES: Vehicle[] = [
  {
    id: "BJ-001",
    year: 2020,
    make: "Toyota",
    model: "Camry",
    variant: "Altise ASV70R Sedan",
    engine: "2.4L 2AR-FE",
    transmission: "U760E Automatic",
    odometer: "61,000 km",
    stockNumber: "STK-1001",
    status: "Dismantling",
    location: "Campbellfield Yard",
    notes:
      "Slight front hit, amazing condition parts, very low km, tested engine and transmission. 089 colour code.",
    imageUrls: [
      "/vehicle-stock/BJ-001-1.jpg",
      "/vehicle-stock/BJ-001-2.jpg",
      "/vehicle-stock/BJ-001-3.jpg",
    ],
  },
  // ... keep the rest of your BJ-002 to BJ-015 exactly as you have them ...
];

const ITEMS_PER_PAGE = 15;

const VehicleStock: React.FC = () => {
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMake, setSelectedMake] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<VehicleStatus | "All">(
    "All"
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [modalVehicle, setModalVehicle] = useState<Vehicle | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);

  // sync header search (?q=) into this page
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || "";
    setSearchTerm(q);
  }, [location.search]);

  // Dropdown options
  const { makes, years } = useMemo(() => {
    const makeSet = new Set<string>();
    const yearSet = new Set<number>();

    VEHICLES.forEach((v) => {
      makeSet.add(v.make);
      yearSet.add(v.year);
    });

    return {
      makes: Array.from(makeSet).sort(),
      years: Array.from(yearSet).sort((a, b) => b - a),
    };
  }, []);

  // Filter vehicles
  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter((v) => {
      if (selectedMake !== "All" && v.make !== selectedMake) return false;
      if (selectedYear !== "All" && v.year.toString() !== selectedYear)
        return false;
      if (selectedStatus !== "All" && v.status !== selectedStatus) return false;

      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const haystack = [
          v.year,
          v.make,
          v.model,
          v.variant,
          v.engine,
          v.transmission,
          v.stockNumber,
          v.notes,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        if (!haystack.includes(term)) return false;
      }

      return true;
    });
  }, [searchTerm, selectedMake, selectedYear, selectedStatus]);

  // Reset to first page when filters/search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedMake, selectedYear, selectedStatus]);

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE)
  );

  const paginatedVehicles = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredVehicles.slice(startIndex, endIndex);
  }, [filteredVehicles, currentPage]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedMake("All");
    setSelectedYear("All");
    setSelectedStatus("All");
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const openModal = (vehicle: Vehicle) => {
    setModalVehicle(vehicle);
    setModalImageIndex(0);
  };

  const closeModal = () => {
    setModalVehicle(null);
    setModalImageIndex(0);
  };

  const nextImage = () => {
    if (!modalVehicle) return;
    setModalImageIndex((prev) =>
      prev + 1 >= modalVehicle.imageUrls.length ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!modalVehicle) return;
    setModalImageIndex((prev) =>
      prev - 1 < 0 ? modalVehicle.imageUrls.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <section className="border-b border-gray-200 bg-black text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Vehicle Stock
            </h1>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-white/80">
              Complete vehicles for dismantling, parts and export — refreshed
              daily from our Campbellfield yard.
            </p>
          </div>
          <div className="text-xs sm:text-sm text-white/70">
            <p className="font-semibold text-[#D4AF37]">
              Need today&apos;s full list?
            </p>
            <p>Office: 03 9359 2061</p>
            <p>Mobile: 0430 099 873</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            {/* Left side: search + dropdowns */}
            <div className="flex flex-1 flex-col gap-4">
              <div className="w-full">
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-600">
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by make, model, engine, stock #, etc."
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    🔍
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {/* Make filter */}
                <div>
                  <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-600">
                    Make
                  </label>
                  <select
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-black focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  >
                    <option value="All">All makes</option>
                    {makes.map((make) => (
                      <option key={make} value={make}>
                        {make}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Year filter */}
                <div>
                  <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-600">
                    Year
                  </label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-black focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  >
                    <option value="All">All years</option>
                    {years.map((year) => (
                      <option key={year} value={year.toString()}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status filter */}
                <div>
                  <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-600">
                    Status
                  </label>
                  <select
                    value={selectedStatus}
                    onChange={(e) =>
                      setSelectedStatus(e.target.value as VehicleStatus | "All")
                    }
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-black focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                  >
                    <option value="All">All</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Dismantling">Dismantling</option>
                    <option value="Sold">Sold</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right: reset + count */}
            <div className="mt-2 flex flex-col items-start gap-2 md:mt-0 md:items-end">
              <button
                onClick={resetFilters}
                className="rounded-full border border-gray-300 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-700 hover:border-[#D4AF37] hover:text-black hover:shadow-sm"
              >
                Clear filters
              </button>
              <p className="text-xs sm:text-sm text-gray-600">
                Showing{" "}
                <span className="font-semibold text-black">
                  {paginatedVehicles.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-black">
                  {filteredVehicles.length}
                </span>{" "}
                filtered vehicles (
                <span className="font-semibold text-black">
                  {VEHICLES.length}
                </span>{" "}
                total)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {filteredVehicles.length === 0 ? (
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-10 text-center">
            <h2 className="mb-2 text-lg font-semibold">No vehicles found</h2>
            <p className="mb-4 text-sm text-gray-700">
              Try clearing filters or searching with a different keyword.
            </p>
            <p className="text-sm text-gray-600">
              Or call <span className="font-semibold">03 9359 2061</span> /{" "}
              <span className="font-semibold">0430 099 873</span> and our team
              will check yard stock for you.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2">
              {paginatedVehicles.map((v) => (
                <article
                  key={v.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-black sm:h-56">
                    <img
                      src={v.imageUrls[0]}
                      alt={`${v.year} ${v.make} ${v.model}`}
                      className="h-full w-full object-cover opacity-90 transition group-hover:scale-[1.03] group-hover:opacity-100"
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                      {v.status === "In Stock" && (
                        <span className="text-[#D4AF37]">In Stock</span>
                      )}
                      {v.status === "Dismantling" && (
                        <span className="text-[#D4AF37]">Dismantling</span>
                      )}
                      {v.status === "Sold" && (
                        <span className="text-red-400">Sold</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                      {v.year} {v.make} {v.model}
                    </h2>
                    {v.variant && (
                      <p className="mt-1 text-xs text-gray-600">{v.variant}</p>
                    )}

                    <dl className="mt-3 space-y-1 text-xs text-gray-700">
                      {v.engine && (
                        <div className="flex justify-between gap-2">
                          <dt className="text-gray-500">Engine</dt>
                          <dd className="text-right">{v.engine}</dd>
                        </div>
                      )}
                      {v.transmission && (
                        <div className="flex justify-between gap-2">
                          <dt className="text-gray-500">Transmission</dt>
                          <dd className="text-right">{v.transmission}</dd>
                        </div>
                      )}
                      {v.odometer && (
                        <div className="flex justify-between gap-2">
                          <dt className="text-gray-500">Odometer</dt>
                          <dd className="text-right">{v.odometer}</dd>
                        </div>
                      )}
                      {v.stockNumber && (
                        <div className="flex justify-between gap-2">
                          <dt className="text-gray-500">Stock #</dt>
                          <dd className="text-right">{v.stockNumber}</dd>
                        </div>
                      )}
                      {v.location && (
                        <div className="flex justify-between gap-2">
                          <dt className="text-gray-500">Location</dt>
                          <dd className="text-right">{v.location}</dd>
                        </div>
                      )}
                    </dl>

                    {v.notes && (
                      <p className="mt-3 line-clamp-3 text-xs text-gray-600">
                        {v.notes}
                      </p>
                    )}

                    <div className="mt-4 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => openModal(v)}
                        className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-700 hover:text-black"
                      >
                        More details
                      </button>
                      <a
                        href="tel:0430099873"
                        className="rounded-full bg-[#D4AF37] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#c39c30]"
                      >
                        Enquire
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-full border border-gray-300 bg.white px-3 py-1 text-xs font-semibold text-gray-700 hover:border-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                const isActive = page === currentPage;
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`h-8 w-8 rounded-full text-xs font-semibold ${
                      isActive
                        ? "bg-[#D4AF37] text-black"
                        : "border border-gray-300 bg-white text-gray-700 hover:border-[#D4AF37]"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-full border border-gray-300 bg.white px-3 py-1 text-xs font-semibold text-gray-700 hover:border-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </>
        )}
      </section>

      {/* Modal for gallery */}
      {modalVehicle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-3 sm:px-4">
          <div className="relative w-full max-w-4xl rounded-2xl bg-white p-3 sm:p-5 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 rounded-full bg-black/5 px-2 py-1 text-xs font-semibold text-gray-600 hover:bg-black/10"
            >
              ✕
            </button>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Left: big image + arrows */}
              <div className="flex flex-col">
                <div className="relative w-full overflow-hidden rounded-xl bg-black">
                  <img
                    src={
                      modalVehicle.imageUrls[modalImageIndex] ||
                      modalVehicle.imageUrls[0]
                    }
                    alt={`${modalVehicle.year} ${modalVehicle.make} ${modalVehicle.model}`}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  {modalVehicle.imageUrls.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-2 py-1 text-xs text-white hover:bg-black/80"
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-2 py-1 text-xs text-white hover:bg-black/80"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {modalVehicle.imageUrls.length > 1 && (
                  <div className="mt-3 flex gap-2 overflow-x-auto">
                    {modalVehicle.imageUrls.map((url, idx) => (
                      <button
                        key={url + idx}
                        onClick={() => setModalImageIndex(idx)}
                        className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border ${
                          idx === modalImageIndex
                            ? "border-[#D4AF37]"
                            : "border-gray-300"
                        }`}
                      >
                        <img
                          src={url}
                          alt={`thumb ${idx + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: details */}
              <div className="flex flex-col gap-3">
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                    {modalVehicle.year} {modalVehicle.make}{" "}
                    {modalVehicle.model}
                  </h2>
                  {modalVehicle.variant && (
                    <p className="text-xs sm:text-sm text-gray-600">
                      {modalVehicle.variant}
                    </p>
                  )}
                  <div className="mt-2 inline-flex items-center rounded-full bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                    {modalVehicle.status === "In Stock" && (
                      <span className="text-[#D4AF37]">In Stock</span>
                    )}
                    {modalVehicle.status === "Dismantling" && (
                      <span className="text-[#D4AF37]">Dismantling</span>
                    )}
                    {modalVehicle.status === "Sold" && (
                      <span className="text-red-500">Sold</span>
                    )}
                  </div>
                </div>

                <dl className="mt-2 space-y-1 text-xs sm:text-sm text-gray-800">
                  {modalVehicle.engine && (
                    <div className="flex justify-between gap-2">
                      <dt className="text-gray-500">Engine</dt>
                      <dd className="text-right">{modalVehicle.engine}</dd>
                    </div>
                  )}
                  {modalVehicle.transmission && (
                    <div className="flex justify-between gap-2">
                      <dt className="text-gray-500">Transmission</dt>
                      <dd className="text-right">
                        {modalVehicle.transmission}
                      </dd>
                    </div>
                  )}
                  {modalVehicle.odometer && (
                    <div className="flex justify-between gap-2">
                      <dt className="text-gray-500">Odometer</dt>
                      <dd className="text-right">
                        {modalVehicle.odometer}
                      </dd>
                    </div>
                  )}
                  {modalVehicle.stockNumber && (
                    <div className="flex justify-between gap-2">
                      <dt className="text-gray-500">Stock #</dt>
                      <dd className="text-right">
                        {modalVehicle.stockNumber}
                      </dd>
                    </div>
                  )}
                  {modalVehicle.location && (
                    <div className="flex justify-between gap-2">
                      <dt className="text-gray-500">Location</dt>
                      <dd className="text-right">
                        {modalVehicle.location}
                      </dd>
                    </div>
                  )}
                </dl>

                {modalVehicle.notes && (
                  <p className="mt-2 text-xs sm:text-sm text-gray-700">
                    {modalVehicle.notes}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="tel:0430099873"
                    className="rounded-full bg-[#D4AF37] px-5 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#c39c30]"
                  >
                    Call about this vehicle
                  </a>
                  <p className="text-[11px] sm:text-xs text-gray-600">
                    Quote stock number:{" "}
                    <span className="font-semibold">
                      {modalVehicle.stockNumber || modalVehicle.id}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleStock;

