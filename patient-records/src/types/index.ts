export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  lastVisit: string;
  status: "active" | "inactive" | "pending";
  email: string;
  phone: string;
  address: string;
}
