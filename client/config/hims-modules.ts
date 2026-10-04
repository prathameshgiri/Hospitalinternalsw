export type HimsPage = {
  slug: string;
  label: string;
};

export type HimsModule = {
  slug: string;
  label: string;
  icon: string;
  section: string;
  pages: HimsPage[];
};

export const HIMS_MODULES: HimsModule[] = [
  {
    slug: "dashboard", label: "Dashboard", icon: "dashboard", section: "WORKSPACE",
    pages: [
      { slug: "super-admin-dashboard", label: "Super admin" }, { slug: "admin-dashboard", label: "Hospital admin" },
      { slug: "doctor-dashboard", label: "Doctor" }, { slug: "nurse-dashboard", label: "Nurse" },
      { slug: "pharmacy-dashboard", label: "Pharmacy" }, { slug: "laboratory-dashboard", label: "Laboratory" },
      { slug: "department-dashboard", label: "Department" },
    ],
  },
  {
    slug: "patients", label: "Patients", icon: "patients", section: "PATIENT CARE",
    pages: [
      { slug: "patient-list", label: "Patient list" }, { slug: "patient-registration", label: "Registration" },
      { slug: "patient-profile", label: "Patient profile" }, { slug: "patient-medical-history", label: "Medical history" },
      { slug: "patient-allergies", label: "Allergies" }, { slug: "patient-documents", label: "Patient documents" },
      { slug: "patient-timeline", label: "Patient timeline" }, { slug: "patient-visits", label: "Visits" },
      { slug: "patient-admission-history", label: "Admission history" }, { slug: "patient-discharge-history", label: "Discharge history" },
    ],
  },
  {
    slug: "admissions", label: "Admissions", icon: "admissions", section: "PATIENT CARE",
    pages: [
      { slug: "admission-list", label: "Admission list" }, { slug: "new-admission", label: "New admission" },
      { slug: "admission-details", label: "Admission details" }, { slug: "doctor-assignment", label: "Doctor assignment" },
      { slug: "ward-assignment", label: "Ward assignment" }, { slug: "room-assignment", label: "Room assignment" },
      { slug: "bed-assignment", label: "Bed assignment" }, { slug: "patient-transfer", label: "Patient transfer" },
      { slug: "transfer-history", label: "Transfer history" }, { slug: "discharge-request", label: "Discharge request" },
      { slug: "discharge-approval", label: "Discharge approval" }, { slug: "discharge-summary", label: "Discharge summary" },
    ],
  },
  {
    slug: "beds-rooms", label: "Beds & rooms", icon: "beds", section: "PATIENT CARE",
    pages: [
      { slug: "buildings", label: "Buildings" }, { slug: "floors", label: "Floors" }, { slug: "wards", label: "Wards" },
      { slug: "rooms", label: "Rooms" }, { slug: "beds", label: "Beds" }, { slug: "bed-availability", label: "Bed availability" },
      { slug: "bed-transfer", label: "Bed transfer" }, { slug: "bed-maintenance", label: "Bed maintenance" },
      { slug: "occupancy-dashboard", label: "Occupancy dashboard" },
    ],
  },
  {
    slug: "doctors", label: "Doctors", icon: "doctors", section: "CLINICAL",
    pages: [
      { slug: "doctor-list", label: "Doctor list" }, { slug: "doctor-profile", label: "Doctor profile" },
      { slug: "specialization", label: "Specializations" }, { slug: "departments", label: "Departments" },
      { slug: "schedules", label: "Schedules" }, { slug: "opd-schedule", label: "OPD schedule" },
      { slug: "duty-schedule", label: "Duty schedule" }, { slug: "patient-assignment", label: "Patient assignment" },
      { slug: "doctor-availability", label: "Doctor availability" },
    ],
  },
  {
    slug: "nursing", label: "Nursing", icon: "nursing", section: "CLINICAL",
    pages: [
      { slug: "nurse-list", label: "Nurse list" }, { slug: "nurse-profile", label: "Nurse profile" },
      { slug: "nursing-station", label: "Nursing station" }, { slug: "patient-assignment", label: "Patient assignment" },
      { slug: "patient-rounds", label: "Patient rounds" }, { slug: "nursing-notes", label: "Nursing notes" },
      { slug: "vitals", label: "Vitals" }, { slug: "medication-administration", label: "Medication administration" },
      { slug: "nursing-tasks", label: "Nursing tasks" }, { slug: "shift-handover", label: "Shift handover" },
    ],
  },
  {
    slug: "appointments", label: "Appointments", icon: "appointments", section: "CLINICAL",
    pages: [
      { slug: "appointment-list", label: "Appointment list" }, { slug: "appointment-calendar", label: "Calendar" },
      { slug: "new-appointment", label: "New appointment" }, { slug: "doctor-appointments", label: "Doctor appointments" },
      { slug: "queue-management", label: "Queue management" }, { slug: "token-management", label: "Token management" },
      { slug: "reschedule", label: "Reschedule" }, { slug: "cancellation", label: "Cancellation" }, { slug: "follow-up", label: "Follow-up" },
    ],
  },
  {
    slug: "opd", label: "OPD", icon: "opd", section: "CLINICAL",
    pages: [
      { slug: "opd-registration", label: "OPD registration" }, { slug: "opd-queue", label: "OPD queue" },
      { slug: "consultation", label: "Consultation" }, { slug: "diagnosis", label: "Diagnosis" },
      { slug: "prescription", label: "Prescription" }, { slug: "consultation-history", label: "Consultation history" },
    ],
  },
  {
    slug: "emergency", label: "Emergency", icon: "emergency", section: "CLINICAL",
    pages: [
      { slug: "emergency-registration", label: "Emergency registration" }, { slug: "emergency-queue", label: "Emergency queue" },
      { slug: "triage", label: "Triage" }, { slug: "emergency-doctor", label: "Emergency doctor" },
      { slug: "emergency-nurse", label: "Emergency nurse" }, { slug: "emergency-bed", label: "Emergency bed" },
      { slug: "emergency-vitals", label: "Emergency vitals" }, { slug: "emergency-medication", label: "Emergency medication" },
      { slug: "emergency-investigation", label: "Emergency investigation" }, { slug: "emergency-transfer", label: "Emergency transfer" },
      { slug: "emergency-discharge", label: "Emergency discharge" },
    ],
  },
  {
    slug: "icu", label: "ICU", icon: "icu", section: "CLINICAL",
    pages: [
      { slug: "icu-beds", label: "ICU beds" }, { slug: "icu-patients", label: "ICU patients" },
      { slug: "patient-monitoring", label: "Patient monitoring" }, { slug: "vitals", label: "Vitals" },
      { slug: "ventilator", label: "Ventilator" }, { slug: "icu-notes", label: "ICU notes" },
      { slug: "icu-medications", label: "ICU medications" }, { slug: "doctor-assignment", label: "Doctor assignment" },
      { slug: "nurse-assignment", label: "Nurse assignment" }, { slug: "icu-transfer-history", label: "Transfer history" },
    ],
  },
  {
    slug: "pharmacy", label: "Pharmacy", icon: "pharmacy", section: "DIAGNOSTICS & SERVICES",
    pages: [
      { slug: "medicine-master", label: "Medicine master" }, { slug: "medicine-categories", label: "Categories" },
      { slug: "medicine-batches", label: "Batches" }, { slug: "suppliers", label: "Suppliers" },
      { slug: "stock-in", label: "Stock in" }, { slug: "stock-out", label: "Stock out" },
      { slug: "stock-adjustment", label: "Stock adjustment" }, { slug: "medicine-issue", label: "Medicine issue" },
      { slug: "medicine-return", label: "Medicine return" }, { slug: "low-stock-alerts", label: "Low stock alerts" },
      { slug: "expiry-alerts", label: "Expiry alerts" }, { slug: "pharmacy-history", label: "Pharmacy history" },
    ],
  },
  {
    slug: "laboratory", label: "Laboratory", icon: "laboratory", section: "DIAGNOSTICS & SERVICES",
    pages: [
      { slug: "test-master", label: "Test master" }, { slug: "test-categories", label: "Test categories" },
      { slug: "lab-orders", label: "Lab orders" }, { slug: "sample-collection", label: "Sample collection" },
      { slug: "sample-tracking", label: "Sample tracking" }, { slug: "technician-assignment", label: "Technician assignment" },
      { slug: "result-entry", label: "Result entry" }, { slug: "result-verification", label: "Result verification" },
      { slug: "doctor-approval", label: "Doctor approval" }, { slug: "lab-reports", label: "Lab reports" },
    ],
  },
  {
    slug: "radiology", label: "Radiology", icon: "radiology", section: "DIAGNOSTICS & SERVICES",
    pages: [
      { slug: "test-master", label: "Test master" }, { slug: "xray", label: "X-ray" }, { slug: "ct-scan", label: "CT scan" },
      { slug: "mri", label: "MRI" }, { slug: "ultrasound", label: "Ultrasound" }, { slug: "scan-scheduling", label: "Scan scheduling" },
      { slug: "technician-assignment", label: "Technician assignment" }, { slug: "radiologist-assignment", label: "Radiologist assignment" },
      { slug: "report-entry", label: "Report entry" }, { slug: "radiology-history", label: "Radiology history" },
    ],
  },
  {
    slug: "operation-theatre", label: "Operation theatre", icon: "theatre", section: "DIAGNOSTICS & SERVICES",
    pages: [
      { slug: "ot-master", label: "OT master" }, { slug: "ot-availability", label: "OT availability" },
      { slug: "ot-booking", label: "OT booking" }, { slug: "surgery-scheduling", label: "Surgery scheduling" },
      { slug: "surgeon-assignment", label: "Surgeon assignment" }, { slug: "anesthesia", label: "Anesthesia" },
      { slug: "ot-staff", label: "OT staff" }, { slug: "pre-operative", label: "Pre-operative" },
      { slug: "post-operative", label: "Post-operative" }, { slug: "ot-consumables", label: "OT consumables" },
      { slug: "ot-equipment", label: "OT equipment" }, { slug: "surgery-history", label: "Surgery history" },
    ],
  },
  {
    slug: "billing", label: "Billing", icon: "billing", section: "OPERATIONS",
    pages: [
      { slug: "invoices", label: "Invoices" }, { slug: "invoice-items", label: "Invoice items" },
      { slug: "admission-charges", label: "Admission charges" }, { slug: "room-charges", label: "Room charges" },
      { slug: "doctor-charges", label: "Doctor charges" }, { slug: "lab-charges", label: "Lab charges" },
      { slug: "radiology-charges", label: "Radiology charges" }, { slug: "pharmacy-charges", label: "Pharmacy charges" },
      { slug: "ot-charges", label: "OT charges" }, { slug: "payments", label: "Payments" },
      { slug: "pending-payments", label: "Pending payments" }, { slug: "refunds", label: "Refunds" },
      { slug: "receipts", label: "Receipts" }, { slug: "billing-reports", label: "Billing reports" },
    ],
  },
  {
    slug: "inventory", label: "Inventory", icon: "inventory", section: "OPERATIONS",
    pages: [
      { slug: "inventory-master", label: "Inventory master" }, { slug: "categories", label: "Categories" },
      { slug: "suppliers", label: "Suppliers" }, { slug: "purchase-orders", label: "Purchase orders" },
      { slug: "goods-received", label: "Goods received" }, { slug: "stock-movement", label: "Stock movement" },
      { slug: "stock-issue", label: "Stock issue" }, { slug: "stock-return", label: "Stock return" },
      { slug: "reorder-alerts", label: "Reorder alerts" }, { slug: "expiry-tracking", label: "Expiry tracking" },
      { slug: "assets", label: "Assets" }, { slug: "asset-maintenance", label: "Asset maintenance" },
    ],
  },
  {
    slug: "ambulance", label: "Ambulance", icon: "ambulance", section: "OPERATIONS",
    pages: [
      { slug: "ambulance-master", label: "Ambulance master" }, { slug: "vehicle-number", label: "Vehicle numbers" },
      { slug: "driver-assignment", label: "Driver assignment" }, { slug: "ambulance-availability", label: "Availability" },
      { slug: "emergency-request", label: "Emergency requests" }, { slug: "trip-management", label: "Trip management" },
      { slug: "pickup-location", label: "Pickup locations" }, { slug: "destination", label: "Destinations" },
      { slug: "trip-history", label: "Trip history" }, { slug: "fuel-records", label: "Fuel records" },
      { slug: "vehicle-maintenance", label: "Vehicle maintenance" },
    ],
  },
  {
    slug: "staff", label: "Staff", icon: "staff", section: "PEOPLE & ACCESS",
    pages: [
      { slug: "employee-list", label: "Employee list" }, { slug: "employee-profile", label: "Employee profile" },
      { slug: "departments", label: "Departments" }, { slug: "designations", label: "Designations" },
      { slug: "shifts", label: "Shifts" }, { slug: "attendance", label: "Attendance" },
      { slug: "leave-management", label: "Leave management" }, { slug: "duty-roster", label: "Duty roster" },
      { slug: "staff-documents", label: "Staff documents" }, { slug: "staff-activity", label: "Staff activity" },
    ],
  },
  {
    slug: "tasks", label: "Tasks", icon: "tasks", section: "PEOPLE & ACCESS",
    pages: [
      { slug: "task-list", label: "Task list" }, { slug: "create-task", label: "Create task" },
      { slug: "assigned-tasks", label: "Assigned tasks" }, { slug: "department-tasks", label: "Department tasks" },
      { slug: "task-comments", label: "Task comments" }, { slug: "task-attachments", label: "Task attachments" },
      { slug: "overdue-tasks", label: "Overdue tasks" }, { slug: "task-history", label: "Task history" },
    ],
  },
  {
    slug: "documents", label: "Documents", icon: "documents", section: "PEOPLE & ACCESS",
    pages: [
      { slug: "patient-documents", label: "Patient documents" }, { slug: "medical-reports", label: "Medical reports" },
      { slug: "lab-reports", label: "Lab reports" }, { slug: "radiology-reports", label: "Radiology reports" },
      { slug: "discharge-summaries", label: "Discharge summaries" }, { slug: "staff-documents", label: "Staff documents" },
      { slug: "hospital-documents", label: "Hospital documents" },
    ],
  },
  {
    slug: "notifications", label: "Notifications", icon: "notifications", section: "PEOPLE & ACCESS",
    pages: [
      { slug: "all-notifications", label: "All notifications" }, { slug: "unread", label: "Unread" },
      { slug: "alerts", label: "Alerts" }, { slug: "notification-settings", label: "Notification settings" },
    ],
  },
  {
    slug: "announcements", label: "Announcements", icon: "announcements", section: "PEOPLE & ACCESS",
    pages: [
      { slug: "announcements", label: "Announcements" }, { slug: "department-announcements", label: "Department announcements" },
      { slug: "important-notices", label: "Important notices" }, { slug: "announcement-history", label: "Announcement history" },
    ],
  },
  {
    slug: "reports", label: "Reports", icon: "reports", section: "INSIGHTS & ADMIN",
    pages: [
      { slug: "patient-reports", label: "Patient reports" }, { slug: "admission-reports", label: "Admission reports" },
      { slug: "discharge-reports", label: "Discharge reports" }, { slug: "bed-reports", label: "Bed reports" },
      { slug: "opd-reports", label: "OPD reports" }, { slug: "emergency-reports", label: "Emergency reports" },
      { slug: "pharmacy-reports", label: "Pharmacy reports" }, { slug: "laboratory-reports", label: "Laboratory reports" },
      { slug: "radiology-reports", label: "Radiology reports" }, { slug: "ot-reports", label: "OT reports" },
      { slug: "billing-reports", label: "Billing reports" }, { slug: "inventory-reports", label: "Inventory reports" },
      { slug: "staff-reports", label: "Staff reports" }, { slug: "audit-reports", label: "Audit reports" },
    ],
  },
  {
    slug: "users", label: "User management", icon: "users", section: "INSIGHTS & ADMIN",
    pages: [
      { slug: "user-list", label: "User list" }, { slug: "user-profile", label: "User profile" },
      { slug: "create-user", label: "Create user" }, { slug: "user-access", label: "User access" },
      { slug: "account-status", label: "Account status" }, { slug: "user-activity", label: "User activity" },
    ],
  },
  {
    slug: "roles-permissions", label: "Roles & permissions", icon: "permissions", section: "INSIGHTS & ADMIN",
    pages: [
      { slug: "roles", label: "Roles" }, { slug: "permissions", label: "Permissions" },
      { slug: "role-permissions", label: "Role permissions" }, { slug: "user-permissions", label: "User permissions" },
      { slug: "access-control", label: "Access control" },
    ],
  },
  {
    slug: "audit-logs", label: "Audit logs", icon: "audit", section: "INSIGHTS & ADMIN",
    pages: [
      { slug: "activity-logs", label: "Activity logs" }, { slug: "user-activity", label: "User activity" },
      { slug: "patient-activity", label: "Patient activity" }, { slug: "system-activity", label: "System activity" },
      { slug: "security-logs", label: "Security logs" },
    ],
  },
  {
    slug: "settings", label: "Settings", icon: "settings", section: "INSIGHTS & ADMIN",
    pages: [
      { slug: "hospital-settings", label: "Hospital settings" }, { slug: "branch-settings", label: "Branch settings" },
      { slug: "department-settings", label: "Department settings" }, { slug: "billing-settings", label: "Billing settings" },
      { slug: "appointment-settings", label: "Appointment settings" }, { slug: "notification-settings", label: "Notification settings" },
      { slug: "system-settings", label: "System settings" }, { slug: "backup-settings", label: "Backup settings" },
    ],
  },
];

export type HimsRoute = {
  module: HimsModule;
  page: HimsPage | null;
  path: string;
};

export const HIMS_ROUTES: HimsRoute[] = HIMS_MODULES.flatMap((module) => module.pages.map((page) => ({
  module,
  page,
  path: `/${module.slug}/${page.slug}`,
})));

export const HIMS_MODULE_ROUTES: HimsRoute[] = HIMS_MODULES.map((module) => {
  const defaultPage = module.slug === "dashboard" ? "admin-dashboard" : module.pages[0].slug;
  const route = HIMS_ROUTES.find((item) => item.module.slug === module.slug && item.page?.slug === defaultPage)!;
  return { ...route, path: `/${module.slug}` };
});

export function resolveHimsRoute(pathname: string): HimsRoute | undefined {
  const normalized = pathname.replace(/\/$/, "") || "/";
  if (normalized === "/") return HIMS_MODULE_ROUTES.find((route) => route.module.slug === "dashboard");
  return HIMS_ROUTES.find((route) => route.path === normalized)
    ?? HIMS_MODULE_ROUTES.find((route) => route.path === normalized);
}

export function routeForModule(module: HimsModule): string {
  return HIMS_MODULE_ROUTES.find((route) => route.module.slug === module.slug)?.path ?? "/";
}
