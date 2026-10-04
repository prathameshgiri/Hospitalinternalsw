import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpDown,
  BriefcaseBusiness,
  CalendarClock,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  SlidersHorizontal,
  UserPlus,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

type StaffStatus = "On shift" | "Off duty" | "On leave";
type StaffMember = {
  id: string;
  name: string;
  initials: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  shift: string;
  status: StaffStatus;
  color: string;
  location: string;
  joined: string;
};

const initialStaff: StaffMember[] = [
  { id: "EMP-00241", name: "Dr. Amelia Morgan", initials: "AM", role: "Senior Cardiologist", department: "Cardiology", email: "amelia.morgan@northstar.health", phone: "+1 (415) 555-0132", shift: "07:00 AM – 03:00 PM", status: "On shift", color: "lavender", location: "Cardiology · Floor 3", joined: "Mar 12, 2019" },
  { id: "EMP-00189", name: "Ethan Caldwell", initials: "EC", role: "Registered Nurse", department: "Emergency", email: "ethan.caldwell@northstar.health", phone: "+1 (415) 555-0186", shift: "07:00 AM – 07:00 PM", status: "On shift", color: "mint", location: "Emergency · Floor 1", joined: "Aug 04, 2021" },
  { id: "EMP-00307", name: "Priya Nair", initials: "PN", role: "Lab Technician", department: "Laboratory", email: "priya.nair@northstar.health", phone: "+1 (415) 555-0164", shift: "08:00 AM – 04:00 PM", status: "On shift", color: "peach", location: "Central Lab · Floor 2", joined: "Jan 16, 2022" },
  { id: "EMP-00096", name: "Dr. Noah Bennett", initials: "NB", role: "Orthopedic Surgeon", department: "Orthopedics", email: "noah.bennett@northstar.health", phone: "+1 (415) 555-0119", shift: "08:00 AM – 04:00 PM", status: "On shift", color: "sky", location: "Orthopedics · Floor 4", joined: "Oct 21, 2017" },
  { id: "EMP-00274", name: "Sofia Reyes", initials: "SR", role: "Clinical Pharmacist", department: "Pharmacy", email: "sofia.reyes@northstar.health", phone: "+1 (415) 555-0143", shift: "03:00 PM – 11:00 PM", status: "Off duty", color: "rose", location: "Main Pharmacy · Floor 1", joined: "Jun 08, 2020" },
  { id: "EMP-00152", name: "Marcus Thompson", initials: "MT", role: "ICU Nurse", department: "Critical Care", email: "marcus.thompson@northstar.health", phone: "+1 (415) 555-0197", shift: "07:00 PM – 07:00 AM", status: "Off duty", color: "mint", location: "ICU · Floor 5", joined: "Feb 02, 2020" },
  { id: "EMP-00332", name: "Olivia Chen", initials: "OC", role: "Radiology Technician", department: "Radiology", email: "olivia.chen@northstar.health", phone: "+1 (415) 555-0128", shift: "On leave until May 23", status: "On leave", color: "gold", location: "Imaging · Floor 2", joined: "Apr 18, 2023" },
  { id: "EMP-00118", name: "James Whitaker", initials: "JW", role: "Patient Services Lead", department: "Administration", email: "james.whitaker@northstar.health", phone: "+1 (415) 555-0175", shift: "08:30 AM – 04:30 PM", status: "On shift", color: "blue", location: "Front desk · Main lobby", joined: "May 29, 2018" },
];

const departments = ["All departments", "Administration", "Cardiology", "Critical Care", "Emergency", "Laboratory", "Orthopedics", "Pharmacy", "Radiology"];
const roles = ["All roles", "Doctor", "Nurse", "Technician", "Pharmacist", "Administration"];
const statusFilters = ["All staff", "On shift", "Off duty", "On leave"] as const;

const statusClass = (status: StaffStatus) => status.toLowerCase().replace(/ /g, "-");
const roleCategory = (role: string) => {
  if (role.toLowerCase().includes("doctor") || role.toLowerCase().includes("surgeon") || role.toLowerCase().includes("cardiologist")) return "Doctor";
  if (role.toLowerCase().includes("nurse")) return "Nurse";
  if (role.toLowerCase().includes("technician")) return "Technician";
  if (role.toLowerCase().includes("pharmacist")) return "Pharmacist";
  return "Administration";
};

export default function StaffModule() {
  const [staff, setStaff] = useState(initialStaff);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All departments");
  const [role, setRole] = useState("All roles");
  const [status, setStatus] = useState<(typeof statusFilters)[number]>("All staff");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [sortAscending, setSortAscending] = useState(true);
  const [details, setDetails] = useState<StaffMember | null>(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const filteredStaff = useMemo(() => staff.filter((member) => {
    const matchesSearch = `${member.name} ${member.id} ${member.role} ${member.department} ${member.email}`.toLowerCase().includes(search.trim().toLowerCase());
    const matchesDepartment = department === "All departments" || member.department === department;
    const matchesRole = role === "All roles" || roleCategory(member.role) === role;
    const matchesStatus = status === "All staff" || member.status === status;
    return matchesSearch && matchesDepartment && matchesRole && matchesStatus;
  }).sort((first, second) => first.name.localeCompare(second.name) * (sortAscending ? 1 : -1)), [department, role, search, sortAscending, staff, status]);

  const toggleSelected = (id: string) => setSelectedIds((current) => current.includes(id) ? current.filter((selected) => selected !== id) : [...current, id]);
  const toggleAll = () => {
    const allVisibleSelected = filteredStaff.length > 0 && filteredStaff.every((member) => selectedIds.includes(member.id));
    setSelectedIds((current) => allVisibleSelected
      ? current.filter((id) => !filteredStaff.some((member) => member.id === id))
      : [...new Set([...current, ...filteredStaff.map((member) => member.id)])]);
  };

  const exportCsv = (members: StaffMember[]) => {
    const columns: (keyof StaffMember)[] = ["id", "name", "role", "department", "email", "phone", "shift", "status"];
    const escapeCsv = (value: string) => `"${value.replace(/"/g, '""')}"`;
    const csv = [columns.join(","), ...members.map((member) => columns.map((column) => escapeCsv(member[column])).join(","))].join("\n");
    const file = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "northstar-staff-roster.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const createStaff = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name")).trim();
    const email = String(form.get("email")).trim();
    const departmentName = String(form.get("department"));
    const staffRole = String(form.get("role"));
    const initials = name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
    const newMember: StaffMember = {
      id: `EMP-${String(Date.now()).slice(-5)}`,
      name,
      initials,
      role: staffRole,
      department: departmentName,
      email,
      phone: String(form.get("phone") || "Not provided"),
      shift: "Shift to be assigned",
      status: "Off duty",
      color: "blue",
      location: `${departmentName} · To be assigned`,
      joined: new Intl.DateTimeFormat("en", { month: "short", day: "2-digit", year: "numeric" }).format(new Date()),
    };
    setStaff((current) => [newMember, ...current]);
    setCreateOpen(false);
    setSearch("");
    setDepartment("All departments");
    setRole("All roles");
    setStatus("All staff");
    setNotice(`${name} was added to this roster.`);
    window.setTimeout(() => setNotice(""), 3800);
  };

  return (
    <section className="staff-page">
      <div className="staff-breadcrumb"><span>People &amp; teams</span><ArrowRight size={13} /><span className="staff-crumb-current">Staff directory</span></div>
      <header className="staff-page-header"><div><div className="staff-heading-kicker"><span className="staff-live-dot" />PEOPLE OPERATIONS <span className="staff-preview-label">SAMPLE DATA</span></div><h1>Staff directory</h1><p>Manage your people, schedules, and team availability.</p></div><div className="staff-header-actions"><button className="staff-export-button" onClick={() => exportCsv(filteredStaff)}><ArrowDownToLine size={15} /><span>Export</span></button><button className="staff-add-button" onClick={() => setCreateOpen(true)}><Plus size={16} /><span>Add staff member</span></button></div></header>

      {notice && <div className="staff-toast" role="status"><span><Check size={14} /></span>{notice}<button onClick={() => setNotice("")} aria-label="Dismiss notification"><X size={14} /></button></div>}

      <div className="staff-metrics" aria-label="Staff summary">
        <article className="soft-card staff-metric"><span className="staff-metric-icon metric-indigo"><UsersRound size={18} /></span><div><span>Total staff</span><strong>{staff.length.toString().padStart(2, "0")}</strong></div><small><span>Roster</span> overview</small></article>
        <article className="soft-card staff-metric"><span className="staff-metric-icon metric-mint"><Clock3 size={18} /></span><div><span>On shift today</span><strong>{staff.filter((member) => member.status === "On shift").length.toString().padStart(2, "0")}</strong></div><small><span className="metric-neutral">Across 8 departments</span></small></article>
        <article className="soft-card staff-metric"><span className="staff-metric-icon metric-gold"><CalendarClock size={18} /></span><div><span>On leave</span><strong>{staff.filter((member) => member.status === "On leave").length.toString().padStart(2, "0")}</strong></div><small><span className="metric-neutral">Today</span></small></article>
        <article className="soft-card staff-metric"><span className="staff-metric-icon metric-blue"><BriefcaseBusiness size={18} /></span><div><span>Departments</span><strong>08</strong></div><small><span className="metric-neutral">Care &amp; operations</span></small></article>
      </div>

      <div className="soft-card staff-roster-card">
        <div className="staff-roster-heading"><div><h2>All staff</h2><p>A central view of your hospital team.</p></div><button className="staff-roster-menu" aria-label="Roster options"><MoreHorizontal size={19} /></button></div>
        <div className="staff-toolbar"><label className="staff-search"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search name, role, or ID..." aria-label="Search staff" /><kbd>⌘ K</kbd></label><div className="staff-filters"><label className="staff-select-wrap"><span className="sr-only">Filter by department</span><select value={department} onChange={(event) => setDepartment(event.target.value)}>{departments.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={14} /></label><label className="staff-select-wrap"><span className="sr-only">Filter by role</span><select value={role} onChange={(event) => setRole(event.target.value)}>{roles.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={14} /></label><button className="staff-filter-button" onClick={() => { setDepartment("All departments"); setRole("All roles"); setStatus("All staff"); setSearch(""); }} aria-label="Clear filters"><SlidersHorizontal size={15} /><span>Reset</span></button></div></div>
        <div className="staff-status-tabs" role="tablist" aria-label="Filter staff by status">{statusFilters.map((filter) => <button key={filter} role="tab" aria-selected={status === filter} className={status === filter ? "staff-status-tab active" : "staff-status-tab"} onClick={() => setStatus(filter)}>{filter}<span>{filter === "All staff" ? staff.length : staff.filter((member) => member.status === filter).length}</span></button>)}</div>

        {selectedIds.length > 0 && <div className="staff-selection-bar"><span>{selectedIds.length} selected</span><button onClick={() => { const selected = staff.filter((member) => selectedIds.includes(member.id)); exportCsv(selected); setSelectedIds([]); }}><ArrowDownToLine size={14} />Export selected</button><button onClick={() => setSelectedIds([])}>Clear selection</button></div>}

        <div className="staff-table-scroll"><table className="staff-table"><thead><tr><th className="staff-check-cell"><input type="checkbox" checked={filteredStaff.length > 0 && selectedIds.length === filteredStaff.length} onChange={toggleAll} aria-label="Select all visible staff" /></th><th><button className="staff-sort" onClick={() => setSortAscending((ascending) => !ascending)}>TEAM MEMBER <ArrowUpDown size={12} /></button></th><th>DEPARTMENT</th><th>CONTACT</th><th>SHIFT</th><th>STATUS</th><th><span className="sr-only">Actions</span></th></tr></thead><tbody>{filteredStaff.map((member) => <tr key={member.id}><td className="staff-check-cell"><input type="checkbox" checked={selectedIds.includes(member.id)} onChange={() => toggleSelected(member.id)} aria-label={`Select ${member.name}`} /></td><td><button className="staff-person-cell" onClick={() => setDetails(member)}><span className={`staff-avatar staff-avatar-${member.color}`}>{member.initials}</span><span className="staff-person-copy"><strong>{member.name}</strong><span>{member.role}</span><small>{member.id}</small></span></button></td><td><span className="staff-department-cell"><i />{member.department}</span></td><td><span className="staff-contact">{member.email}</span><span className="staff-contact-sub">{member.phone}</span></td><td><span className="staff-shift"><Clock3 size={13} />{member.shift}</span></td><td><span className={`staff-status-pill status-${statusClass(member.status)}`}><i />{member.status}</span></td><td><button className="staff-row-action" aria-label={`View ${member.name}`} onClick={() => setDetails(member)}><MoreHorizontal size={17} /></button></td></tr>)}</tbody></table></div>

        <div className="staff-mobile-list">{filteredStaff.map((member) => <article className="staff-mobile-card" key={member.id}><div className="staff-mobile-card-top"><button className="staff-person-cell" onClick={() => setDetails(member)}><span className={`staff-avatar staff-avatar-${member.color}`}>{member.initials}</span><span className="staff-person-copy"><strong>{member.name}</strong><span>{member.role}</span><small>{member.id}</small></span></button><span className={`staff-status-pill status-${statusClass(member.status)}`}><i />{member.status}</span></div><div className="staff-mobile-meta"><span><BriefcaseBusiness size={13} />{member.department}</span><span><Clock3 size={13} />{member.shift}</span></div><button className="staff-mobile-details" onClick={() => setDetails(member)}>View profile <ArrowRight size={14} /></button></article>)}</div>

        {filteredStaff.length === 0 && <div className="staff-empty-state"><span><Search size={20} /></span><strong>No team members found</strong><p>Try changing your search or filters.</p><button onClick={() => { setDepartment("All departments"); setRole("All roles"); setStatus("All staff"); setSearch(""); }}>Clear all filters</button></div>}
        <footer className="staff-table-footer"><span>Showing <strong>{filteredStaff.length ? 1 : 0}–{filteredStaff.length}</strong> of <strong>{staff.length}</strong> team members</span><div className="staff-pagination"><button disabled aria-label="Previous page"><ArrowRight size={14} className="pagination-back" /></button><span>1</span><button disabled aria-label="Next page"><ArrowRight size={14} /></button></div></footer>
      </div>
      <div className="staff-page-footnote"><span><span className="staff-live-dot" />Sample roster data</span><span>Northstar Medical Center <i>·</i> Staff &amp; permissions</span></div>

      {createOpen && <div className="staff-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setCreateOpen(false); }}><section className="staff-modal" role="dialog" aria-modal="true" aria-labelledby="staff-create-title"><header><span className="staff-modal-icon"><UserPlus size={19} /></span><button className="icon-button" aria-label="Close" onClick={() => setCreateOpen(false)}><X size={18} /></button></header><h2 id="staff-create-title">Add a team member</h2><p>Start a staff profile for Northstar Medical Center.</p><form onSubmit={createStaff}><label className="staff-form-field">Full name<input name="name" placeholder="e.g. Alex Morgan" required autoFocus /></label><label className="staff-form-field">Work email<input name="email" type="email" placeholder="alex.morgan@northstar.health" required /></label><div className="staff-form-row"><label className="staff-form-field">Role<select name="role" required defaultValue=""><option value="" disabled>Select role</option><option>Doctor</option><option>Registered Nurse</option><option>Lab Technician</option><option>Clinical Pharmacist</option><option>Administration</option></select></label><label className="staff-form-field">Department<select name="department" required defaultValue=""><option value="" disabled>Select department</option>{departments.slice(1).map((item) => <option key={item}>{item}</option>)}</select></label></div><label className="staff-form-field">Phone number <span>Optional</span><input name="phone" type="tel" placeholder="+1 (415) 555-0100" /></label><div className="staff-modal-actions"><button type="button" className="staff-cancel-button" onClick={() => setCreateOpen(false)}>Cancel</button><button type="submit" className="staff-add-button"><Plus size={15} />Add to roster</button></div></form></section></div>}

      {details && <div className="staff-detail-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setDetails(null); }}><aside className="staff-detail-drawer" role="dialog" aria-modal="true" aria-labelledby="staff-detail-name"><header><div><span className="staff-drawer-eyebrow">TEAM MEMBER PROFILE</span><span className="staff-drawer-id">{details.id}</span></div><button className="icon-button" onClick={() => setDetails(null)} aria-label="Close profile"><X size={19} /></button></header><div className="staff-detail-profile"><span className={`staff-avatar staff-avatar-large staff-avatar-${details.color}`}>{details.initials}</span><h2 id="staff-detail-name">{details.name}</h2><p>{details.role}</p><span className={`staff-status-pill status-${statusClass(details.status)}`}><i />{details.status}</span></div><div className="staff-detail-section"><h3>Work information</h3><div><BriefcaseBusiness size={16} /><span><small>Department</small><strong>{details.department}</strong></span></div><div><MapPin size={16} /><span><small>Work location</small><strong>{details.location}</strong></span></div><div><Clock3 size={16} /><span><small>Shift schedule</small><strong>{details.shift}</strong></span></div><div><CalendarClock size={16} /><span><small>Joined Northstar</small><strong>{details.joined}</strong></span></div></div><div className="staff-detail-section"><h3>Contact</h3><div><Mail size={16} /><span><small>Work email</small><strong>{details.email}</strong></span></div><div><Phone size={16} /><span><small>Phone</small><strong>{details.phone}</strong></span></div></div><button className="staff-detail-close" onClick={() => setDetails(null)}>Close profile</button></aside></div>}
    </section>
  );
}
