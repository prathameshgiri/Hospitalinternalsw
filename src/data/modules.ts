import type { IconName } from "../components/Icon";

export type ModuleItem = {
  label: string;
  icon: IconName;
  group: string;
  description: string;
};

export const modules: ModuleItem[] = [
  { label: "Dashboard", icon: "grid", group: "Overview", description: "Operational overview" },
  { label: "Patients", icon: "users", group: "Care & operations", description: "Patient records and care history" },
  { label: "Admissions", icon: "clipboard", group: "Care & operations", description: "Admissions, transfers, and discharge" },
  { label: "Beds & Rooms", icon: "bed", group: "Care & operations", description: "Ward, room, and bed availability" },
  { label: "Appointments", icon: "calendar", group: "Care & operations", description: "Appointments, calendars, and queues" },
  { label: "OPD", icon: "activity", group: "Care & operations", description: "Outpatient consultations" },
  { label: "Emergency", icon: "pulse", group: "Care & operations", description: "Emergency intake and triage" },
  { label: "ICU", icon: "heart", group: "Care & operations", description: "Critical care and monitoring" },
  { label: "Doctors", icon: "stethoscope", group: "Care & operations", description: "Doctor profiles and schedules" },
  { label: "Nursing", icon: "nurse", group: "Care & operations", description: "Nursing stations and patient rounds" },
  { label: "Pharmacy", icon: "pill", group: "Clinical services", description: "Medicine stock and pharmacy activity" },
  { label: "Laboratory", icon: "flask", group: "Clinical services", description: "Lab orders, samples, and results" },
  { label: "Radiology", icon: "scan", group: "Clinical services", description: "Imaging requests and reports" },
  { label: "Operation Theatre", icon: "surgery", group: "Clinical services", description: "Theatre schedules and surgery records" },
  { label: "Billing", icon: "receipt", group: "Administration", description: "Invoices, payments, and refunds" },
  { label: "Inventory", icon: "boxes", group: "Administration", description: "Stock, suppliers, and assets" },
  { label: "Ambulance", icon: "ambulance", group: "Administration", description: "Vehicles, requests, and trips" },
  { label: "Staff", icon: "badge", group: "Administration", description: "Employee records and duty rosters" },
  { label: "Tasks", icon: "checklist", group: "Administration", description: "Assignments, priorities, and due dates" },
  { label: "Documents", icon: "file", group: "Administration", description: "Clinical and hospital documents" },
  { label: "Announcements", icon: "megaphone", group: "Administration", description: "Hospital and department notices" },
  { label: "Reports", icon: "chart", group: "Administration", description: "Operational and financial reporting" },
  { label: "Notifications", icon: "bell", group: "Administration", description: "Alerts and notification history" },
  { label: "Audit Logs", icon: "history", group: "Administration", description: "Activity and change history" },
  { label: "User Management", icon: "user-cog", group: "System", description: "Users, access, and account status" },
  { label: "Roles & Permissions", icon: "shield", group: "System", description: "Role-based access configuration" },
  { label: "Settings", icon: "settings", group: "System", description: "Hospital and system preferences" },
];
