import { useState } from "react";
import { modules, type ModuleItem } from "../data/modules";
import { Icon } from "../components/Icon";

const metricCards = [
  { label: "Total patients", icon: "users", note: "Patient records" },
  { label: "Active admissions", icon: "clipboard", note: "Inpatient care" },
  { label: "Available beds", icon: "bed", note: "Bed capacity" },
  { label: "Appointments", icon: "calendar", note: "Today's schedule" },
] as const;

const quickActions = ["Register a patient", "New admission", "Book appointment", "Create a task"];
const actionModules = ["Patients", "Admissions", "Appointments", "Tasks"];

export function Dashboard({ onNavigate }: { onNavigate: (item: ModuleItem) => void }) {
  const [period, setPeriod] = useState("Today");
  const [showPeriod, setShowPeriod] = useState(false);
  const today = new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric" }).format(new Date());

  return <div className="dashboard-page">
    <section className="welcome-row">
      <div><div className="eyebrow"><span className="eyebrow-dot" /> HOSPITAL OVERVIEW <span className="eyebrow-date">{today}</span></div><h1>Good morning <span className="wave">✳</span></h1><p className="welcome-subtitle">A calm, clear view of your hospital operations.</p></div>
      <div className="welcome-actions"><button className="button button-quiet" onClick={() => onNavigate(modules.find((item) => item.label === "Reports")!)}><Icon name="download" size={16} /> Reports</button><button className="button button-primary" onClick={() => onNavigate(modules.find((item) => item.label === "Patients")!)}><Icon name="plus" size={17} /> Register patient</button></div>
    </section>
    <section className="data-connection"><div className="connection-icon"><Icon name="activity" size={18} /></div><div><strong>Connect your hospital data</strong><p>Live operational metrics will appear here when a data source is connected. This preview does not contain sample records.</p></div><button onClick={() => onNavigate(modules.find((item) => item.label === "Settings")!)}>View settings <Icon name="arrow" size={14} /></button></section>
    <div className="section-heading metrics-heading"><div><h2>At a glance</h2><p>Key operational indicators</p></div><div className="period-wrap"><button className="select-button" onClick={() => setShowPeriod(!showPeriod)}><Icon name="calendar-small" size={15} /> {period}<Icon name="chevron" size={13} /></button>{showPeriod && <div className="period-menu">{["Today", "This week", "This month"].map((option) => <button key={option} onClick={() => { setPeriod(option); setShowPeriod(false); }}>{option}</button>)}</div>}</div></div>
    <section className="metrics-grid" aria-label="Hospital metrics">
      {metricCards.map((card) => <article className="metric-card" key={card.label}><div className="metric-card-top"><div className="metric-icon"><Icon name={card.icon} size={19} /></div><button className="icon-button metric-more" aria-label={`${card.label} options`}><Icon name="more" size={18} /></button></div><div className="metric-value" aria-label="No data available">—</div><div className="metric-label">{card.label}</div><div className="metric-foot"><span>{card.note}</span><span className="unavailable-tag">No data</span></div></article>)}
    </section>
    <div className="content-grid">
      <section className="panel activity-panel"><div className="panel-heading"><div><h2>Operational activity</h2><p>Recent updates across your workspace</p></div><button className="icon-button" aria-label="Refresh activity"><Icon name="refresh" size={17} /></button></div><div className="activity-empty"><div className="empty-illustration"><div className="empty-illustration-inner"><Icon name="activity" size={25} /></div><span className="orbit orbit-one" /><span className="orbit orbit-two" /></div><h3>Your activity will appear here</h3><p>Once connected, important updates and events from across your hospital will be shown in this timeline.</p><button className="text-action" onClick={() => onNavigate(modules.find((item) => item.label === "Audit Logs")!)}>Explore audit logs <Icon name="arrow" size={14} /></button></div></section>
      <section className="panel quick-panel"><div className="panel-heading"><div><h2>Quick actions</h2><p>Shortcuts to common workflows</p></div><span className="quick-count">04</span></div><div className="quick-list">{quickActions.map((action, index) => { const item = modules.find((entry) => entry.label === actionModules[index])!; return <button className="quick-action" key={action} onClick={() => onNavigate(item)}><span className={`quick-action-icon quick-${index}`}><Icon name={item.icon} size={17} /></span><span><strong>{action}</strong><small>{item.description}</small></span><Icon name="chevron" size={15} className="quick-arrow" /></button>; })}</div><div className="quick-footnote"><Icon name="shield" size={14} /> Actions are subject to your assigned access.</div></section>
    </div>
    <section className="lower-grid"><section className="panel chart-panel"><div className="panel-heading"><div><h2>Patient flow</h2><p>Admissions and discharges over time</p></div><button className="chart-period" onClick={() => onNavigate(modules.find((item) => item.label === "Reports")!)}>View reports <Icon name="arrow" size={13} /></button></div><div className="chart-empty"><div className="chart-grid-lines"><span/><span/><span/><span/></div><div className="chart-empty-message"><span className="chart-empty-icon"><Icon name="chart" size={20} /></span><span>Connect a data source to view patient flow</span></div><div className="chart-axis"><span>12 AM</span><span>6 AM</span><span>12 PM</span><span>6 PM</span><span>12 AM</span></div></div></section><section className="panel alerts-panel"><div className="panel-heading"><div><h2>Needs attention</h2><p>Priority items across departments</p></div><span className="soft-badge">Preview</span></div><div className="attention-empty"><div className="attention-check"><Icon name="shield" size={20} /></div><strong>No live alerts available</strong><p>Connect your hospital data to see priority items and operational alerts.</p></div></section></section>
    <section className="module-strip"><div><h2>Explore your workspace</h2><p>Navigate the tools your teams use every day.</p></div><button className="module-strip-link" onClick={() => onNavigate(modules.find((item) => item.label === "Patients")!)}>Browse modules <Icon name="arrow" size={14} /></button></section>
    <section className="module-cards">{modules.filter((item) => item.group !== "Overview").slice(0, 8).map((item) => <button className="module-card" key={item.label} onClick={() => onNavigate(item)}><span className="module-card-icon"><Icon name={item.icon} size={18} /></span><span><strong>{item.label}</strong><small>{item.description}</small></span><Icon name="chevron" size={15} className="module-chevron" /></button>)}</section>
  </div>;
}
