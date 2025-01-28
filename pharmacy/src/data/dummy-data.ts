import { Medicine } from "@/types";

export const medicines: Medicine[] = [
  {
    id: "M001",
    name: "Amoxicillin",
    category: "Antibiotics",
    stock: 500,
    unit: "tablets",
    price: 15.99,
    manufacturer: "PharmaCorp",
    expiryDate: "2025-12-31",
    reorderLevel: 100,
  },
  {
    id: "M002",
    name: "Ibuprofen",
    category: "Pain Relief",
    stock: 750,
    unit: "tablets",
    price: 8.99,
    manufacturer: "MediCo",
    expiryDate: "2025-06-30",
    reorderLevel: 150,
  },
  {
    id: "M003",
    name: "Insulin",
    category: "Diabetes",
    stock: 50,
    unit: "vials",
    price: 125.99,
    manufacturer: "BioTech",
    expiryDate: "2024-12-31",
    reorderLevel: 20,
  },
];
