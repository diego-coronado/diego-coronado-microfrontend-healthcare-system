import { LabResult } from "@/types";

export const labResults: LabResult[] = [
  {
    id: "L001",
    patientId: "P001",
    patientName: "John Doe",
    testType: "Blood Test",
    date: "2024-01-15",
    status: "completed",
    result: "Normal",
    referenceRange: "4.0-11.0 x10^9/L",
    notes: "All values within normal range",
  },
  {
    id: "L002",
    patientId: "P002",
    patientName: "Jane Smith",
    testType: "X-Ray",
    date: "2024-01-18",
    status: "completed",
    result: "Normal",
    notes: "No abnormalities detected",
  },
  {
    id: "L003",
    patientId: "P003",
    patientName: "Bob Wilson",
    testType: "Blood Sugar",
    date: "2024-01-21",
    status: "pending",
    referenceRange: "70-99 mg/dL",
  },
];
