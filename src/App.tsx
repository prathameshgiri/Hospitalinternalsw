import { useMemo, useState } from "react";
import { modules } from "./data/modules";
import type { ModuleItem } from "./data/modules";
import { Icon } from "./components/Icon";
import { Dashboard } from "./pages/Dashboard";
import { ModulePage } from "./pages/ModulePage";
import "./styles.css";

function App() {
  const [activeModule, setActiveModule] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const active = modules.find((item) => item.label === activeModule) ?? modules[0];
  const groups = useMemo(() => [...new Set(modules.map((item) => item.group))], []);
  const results = modules.filter((item) => item.label.toLowerCase().includes(search.toLowerCase())).slice(0, 5);

  const navigate = (item: ModuleItem) => {
    setActiveModule(item.label);
    setSidebarOpen(false);
    setSearchOpen(false);
    setSearch("");
  };

  return (
    <div className="app-shell">
      {sidebarOpen && <button className="mobile-overlay" aria-label="Close navigation" onClick={() => setSidebarOpen(false)} />}
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="brand-lockup">
          <div className="brand-mark"><Icon name="pulse" size={23} /></div>
          <div><strong>care<span>flow</span></strong><small>HOSPITAL OPERATIONS</small></div>
          <button className="icon-button sidebar-close" aria-label="Close navigation" onClick={() => setSidebarOpen(false)}><Icon name="close" /></button>
        </div>
        <div className="hospital-switcher">
          <div className="hospital-avatar">H</div>
          <div className="hospital-copy"><strong>Hospital workspace</strong><span>Organization overview</span></div>
          <Icon name="chevron" size={15} className="switch-chevron" />
        </div>
        <nav className="side-nav" aria-label="Main navigation">
          {groups.map((group) => (
            <div className="nav-group" key={group}>
              <div className="nav-group-label">{group}</div>
              {modules.filter((item) => item.group === group).map((item) => (
                <button className={`nav-item ${activeModule === item.label ? "nav-item-active" : ""}`} key={item.label} onClick={() => navigate(item)} aria-current={activeModule === item.label ? "page" : undefined}>
                  <Icon name={item.icon} size={17} /><span>{item.label}</span>
                </button>
              ))}
            </div>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="support-card"><div className="support-icon"><Icon name="spark" size={17} /></div><strong>Need a hand?</strong><p>Explore the workspace guide to get started.</p><button onClick={() => navigate(modules.find((item) => item.label === "Settings")!)}>Workspace settings <Icon name="arrow" size={13} /></button></div>
          <div className="user-profile"><div className="user-avatar">U</div><div className="user-meta"><strong>Signed-in user</strong><span>Workspace access</span></div><button className="icon-button profile-more" aria-label="Profile options"><Icon name="more" /></button></div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <button className="icon-button mobile-menu" aria-label="Open navigation" onClick={() => setSidebarOpen(true)}><Icon name="menu" /></button>
          <div className="breadcrumbs"><span>Workspace</span><Icon name="chevron" size={14} /><strong>{active.label}</strong></div>
          <div className="topbar-actions">
            <div className="global-search-wrap">
              <Icon name="search" size={17} />
              <input aria-label="Search modules" placeholder="Search modules..." value={search} onFocus={() => setSearchOpen(true)} onChange={(event) => { setSearch(event.target.value); setSearchOpen(true); }} onKeyDown={(event) => { if (event.key === "Escape") setSearchOpen(false); if (event.key === "Enter" && results[0]) navigate(results[0]); }} />
              <kbd>⌘ K</kbd>
              {searchOpen && search && <div className="search-popover">{results.length ? results.map((item) => <button key={item.label} onClick={() => navigate(item)}><Icon name={item.icon} size={16} /><span>{item.label}</span><small>{item.group}</small></button>) : <p>No modules found</p>}</div>}
            </div>
            <span className="preview-pill"><span /> UI preview</span>
            <button className="icon-button notification-button" aria-label="Notifications" onClick={() => navigate(modules.find((item) => item.label === "Notifications")!)}><Icon name="bell" size={19} /></button>
            <div className="topbar-divider" />
            <button className="top-user" aria-label="Current user"><span className="user-avatar top-avatar">U</span><span><strong>Signed-in user</strong><small>Workspace</small></span><Icon name="chevron" size={14} /></button>
          </div>
        </header>
        <div className="page-content" onClick={() => searchOpen && setSearchOpen(false)}>
          {activeModule === "Dashboard" ? <Dashboard onNavigate={navigate} /> : <ModulePage key={active.label} module={active} />}
          <footer className="page-footer"><span>Careflow · Hospital operations workspace</span><span>UI preview · Live data is not connected</span></footer>
        </div>
      </main>
      <nav className="mobile-bottom-nav" aria-label="Quick navigation">
        {["Dashboard", "Patients", "Appointments", "Tasks"].map((label) => { const item = modules.find((entry) => entry.label === label)!; return <button className={activeModule === label ? "bottom-active" : ""} key={label} onClick={() => navigate(item)}><Icon name={item.icon} size={19} /><span>{label === "Appointments" ? "Schedule" : label}</span></button>; })}
        <button onClick={() => setSidebarOpen(true)}><Icon name="menu" size={19} /><span>More</span></button>
      </nav>
    </div>
  );
}

export default App;
