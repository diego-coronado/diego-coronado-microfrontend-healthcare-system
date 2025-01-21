import { Patient } from "@/types";

export const patients: Patient[] = [
  {
    id: "P001",
    name: "John Doe",
    dateOfBirth: "1990-05-15",
    lastVisit: "2024-01-15",
    status: "active",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Anytown, ST 12345",
  },
  {
    id: "P002",
    name: "Jane Smith",
    dateOfBirth: "1985-08-22",
    lastVisit: "2024-01-18",
    status: "active",
    email: "jane.smith@example.com",
    phone: "(555) 234-5678",
    address: "456 Oak Ave, Somewhere, ST 12345",
  },
  {
    id: "P003",
    name: "Bob Wilson",
    dateOfBirth: "1978-03-10",
    lastVisit: "2024-01-10",
    status: "inactive",
    email: "bob.wilson@example.com",
    phone: "(555) 345-6789",
    address: "789 Pine Rd, Elsewhere, ST 12345",
  },
];
