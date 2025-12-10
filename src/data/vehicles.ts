// src/data/vehicles.ts

export type VehicleStatus = "In Stock" | "Dismantling" | "Sold";

export type Vehicle = {
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
  imageUrl: string;
  notes?: string;
  location?: string;
};

// 🔥 Add your REAL vehicles here.
// For each car, just add an object like the ones below.
export const VEHICLES: Vehicle[] = [
  {
    id: "BJ-001",
    year: 2016,
    make: "Toyota",
    model: "Hilux",
    variant: "SR5 Dual Cab 4x4",
    engine: "2.8L 1GD-FTV Turbo Diesel",
    transmission: "Automatic",
    odometer: "145,000 km",
    stockNumber: "STK-1001",
    status: "In Stock",
    imageUrl: "/vehicle-stock/hilux-2016.jpg",
    notes: "Front hit, good running gear, perfect for parts or export.",
    location: "Campbellfield Yard",
  },
  {
    id: "BJ-002",
    year: 2015,
    make: "Holden",
    model: "Commodore",
    variant: "VF SV6 Sedan",
    engine: "3.6L V6",
    transmission: "Automatic",
    odometer: "182,000 km",
    stockNumber: "STK-1002",
    status: "Dismantling",
    imageUrl: "/vehicle-stock/vf-commodore-2015.jpg",
    notes: "Complete car, many panels and interior parts available.",
    location: "Campbellfield Yard",
  },
  {
    id: "BJ-003",
    year: 2012,
    make: "Volkswagen",
    model: "Golf",
    variant: "TSI",
    engine: "1.4L TSI Petrol",
    transmission: "Automatic",
    odometer: "128,000 km",
    stockNumber: "STK-1003",
    status: "In Stock",
    imageUrl: "/vehicle-stock/golf-2012.jpg",
    notes: "Light rear damage, clean front end & mechanical.",
    location: "Campbellfield Yard",
  },
  // 👉 Continue adding your cars here...
];
