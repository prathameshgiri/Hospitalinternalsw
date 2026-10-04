import { useState } from "react";
import { Icon } from "../components/Icon";
import type { ModuleItem } from "../data/modules";

const sectionByModule: Record<string, string[]> = {
  Patients: ["All patients", "Admissions", "Appointments", "Medical history", "Documents"],
  Admissions: ["All admissions", "Active", "Transfers", "Discharge requests"],
  "Beds & Rooms": ["Bed availability", "Wards", "Rooms", "Maintenance"],
  Appointments: ["All appointments", "Today", "Calendar", "Queue"],
  OPD: ["Consultations", "Walk-ins", "Prescriptions", "History"],
  Emergency: ["Emergency queue", "Triage", "Transfers", "Discharge"],
  ICU: ["ICU patients", "Beds", "Monitoring", "Transfer history"],
  Doctors: ["All doctors", "Schedules", "Availability", "Assignments"],
  Nursing: ["Patient rounds", "Nursing notes", "Vitals", "Shift handover"],
  Pharmacy: ["Medicine master", "Stock", "Low stock", "Expiry alerts"],
  Laboratory: ["Lab orders", "Sample tracking", "Results", "Reports"],
  Radiology: ["Requests", "Scheduling", "Reports", "History"],
  "Operation Theatre": ["OT availability", "Bookings", "Surgeries", "History"],
  Billing: ["Invoices", "Payments", "Pending", "Refunds"],
  Inventory: ["Inventory items", "Purchase orders", "Stock movement", "Assets"],
  Ambulance: ["Emergency requests", "Vehicles", "Trips", "Maintenance"],
  Staff: ["Employee list", "Duty roster", "Attendance", "Leave"],
  Tasks: ["All tasks", "Assigned to me", "Overdue", "Completed"],
  Documents: ["Patient documents", "Medical reports", "Staff documents", "Hospital documents"],
  Announcements: ["All announcements", "Department notices", "Important notices", "History"],
  Reports: ["Patient reports", "Admissions", "Bed occupancy", "Billing"],
  Notifications: ["All notifications", "Unread", "Alerts", "Settings"],
  "Audit Logs": ["All activity", "Users", "Patients", "System events"],
  "User Management": ["All users", "Access", "Account status", "Activity"],
  "Roles & Permissions": ["Roles", "Permissions", "Role access", "User access"],
  Settings: ["Hospital profile", "Departments", "Appointments", "Notifications"],
};

const tableFields: Record<string, string[]> = {
  Patients: ["Patient ID", "Patient", "Contact", "Last visit", "Status"],
  Admissions: ["Admission ID", "Patient", "Admitted", "Ward / bed", "Status"],
  Appointments: ["Time", "Patient", "Doctor", "Department", "Status"],
  Pharmacy: ["Medicine", "Category", "Available stock", "Expiry", "Status"],
  Staff: ["Employee ID", "Name", "Department", "Designation", "Status"],
  Tasks: ["Task", "Assigned to", "Department", "Due date", "Priority"],
  default: ["Name / reference", "Department", "Updated", "Owner", "Status"],
};

export function ModulePage({ module }: { module: ModuleItem }) {
  const sections = sectionByModule[module.label] ?? ["Overview", "Records", "History", "Settings"];
  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const columns = tableFields[module.label] ?? tableFields.default;
  return <div className="module-page">
    <div className="module-breadcrumb"><span>{module.group}</span><Icon name="chevron" size={13} /><span>{module.label}</span></div>
    <section className="module-title-row"><div className="module-title-left"><div className="module-title-icon"><Icon name={module.icon} size={22} /></div><div><h1>{module.label}</h1><p>{module.description}</p></div></div><div className="module-title-actions"><button className="button button-quiet" disabled title="Live data is not connected"><Icon name="download" size={15} /> Export</button><button className="button button-primary" disabled title="Connect a data source to create records"><Icon name="plus" size={16} /> Add {module.label === "Patients" ? "patient" : "new"}</button></div></section>
    <div className="data-note"><Icon name="activity" size={16} /><span><strong>Data connection required</strong> This screen is ready for live {module.label.toLowerCase()} data. No sample records are shown in this UI preview.</span></div>
    <section className="module-summary-grid"><article className="summary-card"><span>Total records</span><strong>—</strong><small>Connect data to view</small></article><article className="summary-card"><span>Needs attention</span><strong>—</strong><small>Connect data to view</small></article><article className="summary-card"><span>Recently updated</span><strong>—</strong><small>Connect data to view</small></article><article className="summary-card summary-note"><span className="summary-note-icon"><Icon name="shield" size={17} /></span><div><strong>Access controlled</strong><small>Information visibility depends on your assigned permissions.</small></div></article></section>
    <section className="panel records-panel"><div className="records-top"><div><h2>{module.label} workspace</h2><p>Browse and manage {module.label.toLowerCase()} records</p></div><div className="records-tools"><label className="table-search"><Icon name="search" size={16} /><input placeholder="Search records" disabled aria-label="Search records" /></label><button className="filter-button" disabled><Icon name="filter" size={15} /> Filters</button><button className="icon-button" aria-label="More table options" disabled><Icon name="more" /></button></div></div>
      <div className="module-tabs" role="tablist" aria-label={`${module.label} views`}>{sections.map((section) => <button className={selectedSection === section ? "module-tab active-tab" : "module-tab"} role="tab" aria-selected={selectedSection === section} key={section} onClick={() => setSelectedSection(section)}>{section}{selectedSection === section && <span className="tab-count">—</span>}</button>)}</div>
      <div className="table-scroll"><table className="records-table"><thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}<th aria-label="Actions" /></tr></thead><tbody><tr><td colSpan={columns.length + 1}><div className="records-empty"><span className="records-empty-icon"><Icon name={module.icon} size={21} /></span><h3>No records to display</h3><p>Connect your hospital data source to view and manage {module.label.toLowerCase()} here.</p></div></td></tr></tbody></table></div>
      <div className="table-footer"><span>Showing <strong>0</strong> records</span><div><button disabled aria-label="Previous page">‹</button><span>Page 1 of 1</span><button disabled aria-label="Next page">›</button></div></div>
    </section>
    <section className="module-footer-note"><Icon name="shield" size={15} /><span>Patient and operational information is restricted by role, department, and branch access.</span></section>
  </div>;
}
