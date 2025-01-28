import { Appointment } from "@/types";

export const appointments: Appointment[] = [
  {
    id: "A001",
    patientId: "P001",
    patientName: "John Doe",
    doctorId: "D001",
    doctorName: "Dr. Sarah Johnson",
    date: "2024-01-22",
    time: "09:00",
    status: "scheduled",
    type: "Check-up",
  },
  {
    id: "A002",
    patientId: "P002",
    patientName: "Jane Smith",
    doctorId: "D002",
    doctorName: "Dr. Michael Brown",
    date: "2024-01-22",
    time: "10:30",
    status: "scheduled",
    type: "Follow-up",
  },
  {
    id: "A003",
    patientId: "P003",
    patientName: "Bob Wilson",
    doctorId: "D001",
    doctorName: "Dr. Sarah Johnson",
    date: "2024-01-21",
    time: "14:00",
    status: "completed",
    type: "Consultation",
  },
];
