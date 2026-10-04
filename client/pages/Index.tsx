import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import StaffModule from "@/components/StaffModule";
import ModuleWorkspace from "@/components/ModuleWorkspace";
import { HIMS_MODULES, resolveHimsRoute, routeForModule } from "@/config/hims-modules";
import {
  Activity,
  Ambulance,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bell,
  BedDouble,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Clock3,
  FileText,
  FlaskConical,
  HeartPulse,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Pill,
  Plus,
  Search,
  Settings,
  ShieldAlert,
  SlidersHorizontal,
  Sparkles,
  Stethoscope,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

type IconComponent = typeof Activity;

const moduleIcons: Record<string, IconComponent> = {
  dashboard: LayoutDashboard, patients: UsersRound, admissions: ClipboardCheck,
  "beds-rooms": BedDouble, doctors: Stethoscope, nursing: Activity,
  appointments: CalendarDays, opd: Stethoscope, emergency: ShieldAlert, icu: HeartPulse,
  pharmacy: Pill, laboratory: FlaskConical, radiology: Activity, "operation-theatre": HeartPulse,
  billing: FileText, inventory: SlidersHorizontal, ambulance: Ambulance, staff: UsersRound,
  tasks: ClipboardCheck, documents: FileText, notifications: Bell, announcements: Bell,
  reports: Activity, users: UserRound, "roles-permissions": ShieldAlert,
  "audit-logs": ShieldAlert, settings: Settings,
};

const patients = [
  { initials: "AM", color: "lavender", name: "Ava Mitchell", id: "PT-20481", department: "Cardiology", doctor: "Dr. James Wilson", time: "09:42 AM", status: "In consultation", statusColor: "blue" },
  { initials: "JL", color: "peach", name: "James Lee", id: "PT-20480", department: "Orthopedics", doctor: "Dr. Sofia Chen", time: "09:28 AM", status: "Waiting", statusColor: "amber" },
  { initials: "SR", color: "mint", name: "Sofia Ramirez", id: "PT-20479", department: "Neurology", doctor: "Dr. Ethan Brooks", time: "09:16 AM", status: "Admitted", statusColor: "green" },
  { initials: "DW", color: "sky", name: "Daniel Wright", id: "PT-20478", department: "General medicine", doctor: "Dr. Mia Patel", time: "08:54 AM", status: "Waiting", statusColor: "amber" },
];

const activityItems = [
  { initials: "MC", color: "mint", text: "Patient discharged", detail: "Marcus Cole · Ward 04", time: "2 min ago", icon: Check, tone: "green" },
  { initials: "LP", color: "lavender", text: "Lab results ready", detail: "Lena Park · Blood panel", time: "18 min ago", icon: FlaskConical, tone: "blue" },
  { initials: "RJ", color: "peach", text: "New admission", detail: "Robert Johnson · ICU", time: "34 min ago", icon: BedDouble, tone: "amber" },
];

const quickActions = [
  { label: "Register patient", icon: UserRound, color: "action-blue" },
  { label: "New appointment", icon: CalendarDays, color: "action-violet" },
  { label: "Create admission", icon: ClipboardCheck, color: "action-green" },
  { label: "Order lab test", icon: FlaskConical, color: "action-amber" },
];

function Avatar({ initials, color, size = "normal" }: { initials: string; color: string; size?: "normal" | "small" }) {
  return <span className={`avatar avatar-${color} ${size === "small" ? "avatar-small" : ""}`}>{initials}</span>;
}

function StatCard({ icon: Icon, label, value, change, direction, accent, note }: { icon: IconComponent; label: string; value: string; change: string; direction: "up" | "down"; accent: string; note: string }) {
  return (
    <article className="soft-card stat-card">
      <div className="stat-top"><span className={`stat-icon ${accent}`}><Icon size={19} strokeWidth={1.8} /></span><button className="icon-button subtle-icon" aria-label={`More ${label} options`}><MoreHorizontal size={19} /></button></div>
      <p className="stat-label">{label}</p>
      <div className="stat-bottom"><strong>{value}</strong><span className={`trend trend-${direction}`} aria-label={`${direction === "up" ? "Up" : "Down"} ${change}`}>
        {direction === "up" ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}{change}
      </span></div>
      <p className="stat-note">{note}</p>
    </article>
  );
}

export default function Index() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeRoute = resolveHimsRoute(location.pathname) ?? resolveHimsRoute("/")!;
  const activeNav = activeRoute.module.label;
  const [expandedModule, setExpandedModule] = useState<string | null>(activeRoute.module.slug === "dashboard" ? null : activeRoute.module.slug);
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    setExpandedModule(activeRoute.module.slug === "dashboard" ? null : activeRoute.module.slug);
  }, [activeRoute.module.slug, activeRoute.page?.slug]);
  const [modalAction, setModalAction] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filteredPatients = useMemo(() => patients.filter((patient) =>
    `${patient.name} ${patient.id} ${patient.department} ${patient.status}`.toLowerCase().includes(query.toLowerCase()),
  ), [query]);

  const selectNavigation = (label: string) => {
    const module = HIMS_MODULES.find((item) => item.label === label);
    if (!module) return;
    setExpandedModule(module.slug === "dashboard" ? null : module.slug);
    setSidebarOpen(false);
    navigate(routeForModule(module));
  };

  const openAction = (label: string) => {
    setSubmitted(false);
    setModalAction(label);
  };

  return (
    <div className="hims-app">
      {sidebarOpen && <button className="sidebar-scrim" onClick={() => setSidebarOpen(false)} aria-label="Close navigation" />}
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`} aria-label="Main navigation">
        <div className="brand-lockup">
          <span className="brand-mark"><HeartPulse size={21} strokeWidth={2.2} /></span>
          <span className="brand-text">wellnest<span>CARE, CONNECTED.</span></span>
          <button className="icon-button sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close navigation"><X size={19} /></button>
        </div>
        <div className="hospital-switcher">
          <span className="hospital-icon"><Activity size={17} /></span>
          <span className="hospital-name">Northstar Medical<span>Central Hospital</span></span>
          <ChevronDown size={15} className="switcher-chevron" />
        </div>
        <nav className="side-navigation" aria-label="Hospital modules">
          {HIMS_MODULES.map((module, index) => {
            const Icon = moduleIcons[module.icon] ?? Activity;
            const isActive = activeRoute.module.slug === module.slug;
            const isExpanded = expandedModule === module.slug;
            const showSection = index === 0 || HIMS_MODULES[index - 1].section !== module.section;
            return <div className="nav-module" key={module.slug}>
              {showSection && <p className="nav-section">{module.section}</p>}
              <div className="nav-module-row">
                <NavLink to={routeForModule(module)} end className={`nav-item ${isActive ? "nav-item-active" : ""}`} onClick={() => { setExpandedModule(module.slug === "dashboard" ? null : module.slug); setSidebarOpen(false); }} title={module.label}>
                  <Icon size={17} strokeWidth={1.8} /><span>{module.label}</span>
                  {module.slug === "emergency" && <span className="nav-alert-dot" aria-label="Emergency module" />}
                </NavLink>
                <button className={`nav-expand ${isExpanded ? "nav-expand-open" : ""}`} aria-label={`${isExpanded ? "Collapse" : "Expand"} ${module.label} pages`} aria-expanded={isExpanded} onClick={() => setExpandedModule(isExpanded ? null : module.slug)}><ChevronDown size={13} /></button>
              </div>
              <div className={`nav-subnav ${isExpanded ? "nav-subnav-open" : ""}`} aria-hidden={!isExpanded}>
                {module.pages.map((page) => {
                  const pagePath = `/${module.slug}/${page.slug}`;
                  const isCurrentPage = activeRoute.module.slug === module.slug && activeRoute.page?.slug === page.slug;
                  return <NavLink key={page.slug} to={pagePath} tabIndex={isExpanded ? 0 : -1} className={`nav-subitem ${isCurrentPage ? "nav-subitem-active" : ""}`} onClick={() => setSidebarOpen(false)}>{page.label}{isCurrentPage && <span className="nav-subitem-indicator" />}</NavLink>;
                })}
              </div>
            </div>;
          })}
        </nav>
        <div className="sidebar-bottom">
          <div className="support-card"><span className="support-icon"><CircleHelp size={17} /></span><div><strong>Need a hand?</strong><span>Visit our help center</span></div><ArrowRight size={15} /></div>
          <button className="profile-card"><Avatar initials="OC" color="blue" /><span className="profile-copy"><strong>Olivia Carter</strong><span>Hospital administrator</span></span><MoreHorizontal size={18} /></button>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="topbar-left"><button className="icon-button mobile-menu" onClick={() => setSidebarOpen(true)} aria-label="Open navigation"><Menu size={21} /></button><div className="breadcrumb"><span>Workspace</span><ChevronRight size={14} /><strong>{activeRoute.page?.slug === "admin-dashboard" ? "Dashboard" : activeRoute.page?.label ?? activeNav}</strong></div></div>
          <div className="topbar-right">
            <label className="global-search"><Search size={17} /><input aria-label="Search patients, doctors, records" placeholder="Search anything..." /><kbd>⌘ K</kbd></label>
            <button className="icon-button topbar-action" aria-label="Help center"><CircleHelp size={19} /></button>
            <div className="notification-wrap"><button className="icon-button topbar-action notification-button" aria-label="Notifications" onClick={() => setShowNotifications(!showNotifications)}><Bell size={19} /><span /></button>
              {showNotifications && <div className="notification-popover"><div><strong>Notifications</strong><button onClick={() => setShowNotifications(false)} aria-label="Close notifications"><X size={16} /></button></div><p><span className="notification-dot urgent" />2 critical care beds need review<span>5 min ago</span></p><p><span className="notification-dot" />New lab results are ready<span>18 min ago</span></p><p><span className="notification-dot" />Staff shift handover at 10:30<span>32 min ago</span></p></div>}
            </div>
            <span className="topbar-divider" /><button className="topbar-user" aria-label="Olivia Carter profile"><Avatar initials="OC" color="blue" /><ChevronDown size={14} /></button>
          </div>
        </header>

        <div className="dashboard-content">
          {activeRoute.module.slug === "dashboard" && activeRoute.page?.slug === "admin-dashboard" ? <>
          <section className="welcome-row"><div><div className="eyebrow"><span className="live-dot" />MONDAY, MAY 19, 2025 <span className="eyebrow-divider">/</span> DAY SHIFT</div><h1>Good morning, Olivia <span className="wave">✳</span></h1><p className="welcome-subtitle">Here’s what’s happening across your hospital today.</p></div><button className="date-button"><CalendarDays size={16} /><span>May 19, 2025</span><ChevronDown size={14} /></button></section>

          <section className="stats-grid" aria-label="Hospital overview statistics">
            <StatCard icon={UsersRound} label="Total patients" value="1,284" change="12.8%" direction="up" accent="stat-blue" note="vs. last month" />
            <StatCard icon={BedDouble} label="Bed occupancy" value="78.4%" change="4.2%" direction="up" accent="stat-violet" note="of 420 total beds" />
            <StatCard icon={CalendarDays} label="Appointments" value="86" change="8.1%" direction="up" accent="stat-green" note="scheduled for today" />
            <StatCard icon={HeartPulse} label="In critical care" value="12" change="2" direction="down" accent="stat-amber" note="across 3 units" />
          </section>

          <section className="dashboard-grid overview-grid">
            <article className="soft-card chart-card">
              <div className="section-heading"><div><h2>Patient overview</h2><p>Admissions and discharges over time</p></div><button className="select-button">This week <ChevronDown size={14} /></button></div>
              <div className="chart-legend"><span><i className="legend-dot legend-admissions" />Admissions</span><span><i className="legend-dot legend-discharges" />Discharges</span><span className="chart-total">124 <span>total patients</span></span></div>
              <div className="chart-wrap" role="img" aria-label="Weekly patient admissions and discharges chart">
                <div className="chart-axis"><span>40</span><span>30</span><span>20</span><span>10</span><span>0</span></div>
                <svg viewBox="0 0 660 180" preserveAspectRatio="none" className="patient-chart" aria-hidden="true">
                  <defs><linearGradient id="admission-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#7b83e8" stopOpacity=".18" /><stop offset="100%" stopColor="#7b83e8" stopOpacity="0" /></linearGradient><linearGradient id="discharge-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#62bda0" stopOpacity=".13" /><stop offset="100%" stopColor="#62bda0" stopOpacity="0" /></linearGradient></defs>
                  <path className="grid-line" d="M0 10H660M0 50H660M0 90H660M0 130H660M0 170H660" /><path d="M0 109 C40 101 48 75 94 79 S154 110 188 85 S242 59 282 69 S332 102 376 61 S434 48 470 60 S520 91 564 41 S625 59 660 24 L660 170 L0 170Z" fill="url(#admission-fill)" /><path d="M0 109 C40 101 48 75 94 79 S154 110 188 85 S242 59 282 69 S332 102 376 61 S434 48 470 60 S520 91 564 41 S625 59 660 24" className="chart-line admission-line" /><path d="M0 143 C40 149 55 120 94 126 S151 143 188 132 S244 110 282 122 S338 140 376 109 S432 96 470 110 S520 126 564 88 S625 103 660 76 L660 170 L0 170Z" fill="url(#discharge-fill)" /><path d="M0 143 C40 149 55 120 94 126 S151 143 188 132 S244 110 282 122 S338 140 376 109 S432 96 470 110 S520 126 564 88 S625 103 660 76" className="chart-line discharge-line" /><circle cx="564" cy="41" r="4.5" className="chart-point" />
                </svg>
                <div className="chart-days"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
              </div>
            </article>

            <article className="soft-card occupancy-card"><div className="section-heading"><div><h2>Bed occupancy</h2><p>Live capacity across all units</p></div><button className="icon-button subtle-icon" aria-label="Bed occupancy options"><MoreHorizontal size={19} /></button></div>
              <div className="occupancy-main"><div className="occupancy-ring"><div><strong>78<span>%</span></strong><small>occupied</small></div></div><div className="occupancy-key"><div><i className="key-dot key-occupied" /><span>Occupied</span><strong>329</strong></div><div><i className="key-dot key-available" /><span>Available</span><strong>91</strong></div><div><i className="key-dot key-maintenance" /><span>Maintenance</span><strong>12</strong></div></div></div>
              <div className="unit-row"><span>ICU occupancy</span><div className="unit-track"><i style={{ width: "84%" }} /></div><strong>84%</strong></div><div className="unit-row"><span>General ward</span><div className="unit-track unit-track-green"><i style={{ width: "72%" }} /></div><strong>72%</strong></div><button className="text-link" onClick={() => selectNavigation("Beds & rooms")}>View bed availability <ArrowRight size={15} /></button>
            </article>
          </section>

          <section className="quick-section"><div className="section-heading quick-heading"><div><h2>Quick actions</h2><p>Common tasks, right where you need them</p></div><button className="text-link all-actions" onClick={() => openAction("More quick actions")}>All actions <ArrowRight size={15} /></button></div><div className="quick-grid">{quickActions.map(({ label, icon: Icon, color }) => <button className="soft-card quick-action" key={label} onClick={() => openAction(label)}><span className={`quick-icon ${color}`}><Icon size={19} strokeWidth={1.8} /></span><span>{label}</span><Plus size={16} className="quick-plus" /></button>)}</div></section>

          <section className="dashboard-grid lower-grid">
            <article className="soft-card patients-card"><div className="section-heading patient-heading"><div><h2>Recent patients</h2><p>A live view of today’s patient queue</p></div><button className="text-link" onClick={() => selectNavigation("Patients")}>View all <ArrowRight size={15} /></button></div>
              <label className="patient-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search patients..." aria-label="Search recent patients" /><button aria-label="Filter patients"><SlidersHorizontal size={16} /></button></label>
              <div className="patient-table-wrap"><table className="patient-table"><thead><tr><th>Patient</th><th>Department</th><th>Assigned doctor</th><th>Check-in</th><th>Status</th><th><span className="sr-only">More options</span></th></tr></thead><tbody>{filteredPatients.map((patient) => <tr key={patient.id}><td><div className="patient-cell"><Avatar initials={patient.initials} color={patient.color} /><span><strong>{patient.name}</strong><small>{patient.id}</small></span></div></td><td>{patient.department}</td><td>{patient.doctor}</td><td>{patient.time}</td><td><span className={`status-pill status-${patient.statusColor}`}><i />{patient.status}</span></td><td><button className="icon-button table-more" aria-label={`More options for ${patient.name}`}><MoreHorizontal size={18} /></button></td></tr>)}</tbody></table></div>
              {filteredPatients.length === 0 && <div className="patient-empty"><Search size={20} /><strong>No patients found</strong><span>Try another name, ID, or department.</span></div>}
              <button className="mobile-patient-link" onClick={() => selectNavigation("Patients")}>View all patients <ArrowRight size={15} /></button>
            </article>

            <article className="soft-card activity-card"><div className="section-heading"><div><h2>Recent activity</h2><p>What’s happening around you</p></div><button className="icon-button subtle-icon" aria-label="Activity options"><MoreHorizontal size={19} /></button></div>
              <div className="activity-list">{activityItems.map(({ initials, color, text, detail, time, icon: Icon, tone }) => <div className="activity-item" key={text}><Avatar initials={initials} color={color} size="small" /><div className="activity-copy"><strong>{text}</strong><span>{detail}</span><small><Clock3 size={12} />{time}</small></div><span className={`activity-icon activity-${tone}`}><Icon size={15} /></span></div>)}</div>
              <div className="task-preview"><div className="task-preview-top"><span><span className="task-check"><Check size={11} /></span>Daily rounds checklist</span><span>4/6</span></div><div className="task-progress"><i /></div><p>2 tasks remaining for today</p><button className="text-link" onClick={() => selectNavigation("Tasks")}>Go to tasks <ArrowRight size={14} /></button></div>
            </article>
          </section>
          <footer className="dashboard-footer"><span><span className="footer-live" />All systems operational</span><span>Last synced just now <span className="footer-separator">·</span> Northstar Medical Center</span></footer>
          </> : activeRoute.module.slug === "staff" && activeRoute.page?.slug === "employee-list" ? <StaffModule /> : <ModuleWorkspace route={activeRoute} />}
        </div>
      </main>

      <nav className="mobile-bottom-nav" aria-label="Quick navigation"><button className={activeNav === "Dashboard" ? "bottom-active" : ""} onClick={() => selectNavigation("Dashboard")}><LayoutDashboard size={19} /><span>Home</span></button><button className={activeNav === "Patients" ? "bottom-active" : ""} onClick={() => selectNavigation("Patients")}><UsersRound size={19} /><span>Patients</span></button><button className="bottom-add" onClick={() => openAction("Register patient")} aria-label="Register patient"><Plus size={22} /></button><button className={activeNav === "Appointments" ? "bottom-active" : ""} onClick={() => selectNavigation("Appointments")}><CalendarDays size={19} /><span>Schedule</span></button><button onClick={() => setSidebarOpen(true)}><Menu size={19} /><span>Modules</span></button></nav>

      {modalAction && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setModalAction(""); }}><section className="action-modal" role="dialog" aria-modal="true" aria-labelledby="action-modal-title"><div className="modal-heading"><span className="modal-icon"><Sparkles size={19} /></span><button className="icon-button" aria-label="Close" onClick={() => setModalAction("")}><X size={19} /></button></div>{submitted ? <div className="modal-success"><span><Check size={23} /></span><h2>All set</h2><p>{modalAction} has been added to your hospital workspace.</p><button className="primary-button" onClick={() => setModalAction("")}>Done</button></div> : <><h2 id="action-modal-title">{modalAction}</h2><p className="modal-description">Add a few details to get started. You can complete the rest later.</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><label className="form-field">Patient name<input required placeholder="Enter patient name" autoFocus /></label><div className="form-row"><label className="form-field">Department<select defaultValue=""><option value="" disabled>Select department</option><option>General medicine</option><option>Cardiology</option><option>Orthopedics</option><option>Neurology</option><option>Emergency</option></select></label><label className="form-field">Priority<select defaultValue="Routine"><option>Routine</option><option>Urgent</option><option>Critical</option></select></label></div><label className="form-field">Notes <span className="optional-label">Optional</span><textarea placeholder="Add any relevant details..." rows={3} /></label><div className="modal-actions"><button type="button" className="secondary-button" onClick={() => setModalAction("")}>Cancel</button><button type="submit" className="primary-button">Continue <ArrowRight size={15} /></button></div></form></>}</section></div>}
    </div>
  );
}
