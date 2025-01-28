export interface LabResult {
  id: string;
  patientId: string;
  patientName: string;
  testType: string;
  date: string;
  status: "pending" | "completed" | "cancelled";
  result?: string;
  referenceRange?: string;
  notes?: string;
}
