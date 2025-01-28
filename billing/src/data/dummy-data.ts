import { Bill } from "@/types";

export const bills: Bill[] = [
  {
    id: "B001",
    patientId: "P001",
    patientName: "John Doe",
    date: "2024-01-15",
    amount: 150.0,
    status: "pending",
    dueDate: "2024-02-15",
    items: [
      {
        id: "BI001",
        description: "Consultation",
        quantity: 1,
        unitPrice: 100.0,
        total: 100.0,
      },
      {
        id: "BI002",
        description: "Blood Test",
        quantity: 1,
        unitPrice: 50.0,
        total: 50.0,
      },
    ],
  },
  {
    id: "B002",
    patientId: "P002",
    patientName: "Jane Smith",
    date: "2024-01-18",
    amount: 200.0,
    status: "paid",
    dueDate: "2024-02-18",
    items: [
      {
        id: "BI003",
        description: "Consultation",
        quantity: 1,
        unitPrice: 100.0,
        total: 100.0,
      },
      {
        id: "BI004",
        description: "X-Ray",
        quantity: 1,
        unitPrice: 100.0,
        total: 100.0,
      },
    ],
  },
];
