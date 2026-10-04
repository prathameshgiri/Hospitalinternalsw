import { ArrowRight, ArrowUpRight, CircleHelp, Clock3, Layers3, LockKeyhole, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { HIMS_MODULES, routeForModule, type HimsRoute } from "@/config/hims-modules";

export default function ModuleWorkspace({ route }: { route: HimsRoute }) {
  const { module, page } = route;
  const pageLabel = page?.label ?? module.label;
  const routeCount = module.pages.length;

  return (
    <section className="module-workspace">
      <div className="module-crumbs"><span>{module.section.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase())}</span><ArrowRight size={13} /><Link to={routeForModule(module)}>{module.label}</Link>{page && page.slug !== module.pages[0]?.slug && <><ArrowRight size={13} /><strong>{page.label}</strong></>}</div>
      <header className="module-workspace-header"><div><span className="module-workspace-eyebrow">NORTHSTAR MEDICAL CENTER <i>·</i> {module.label.toUpperCase()}</span><h1>{pageLabel}</h1><p>{module.label} workspace · Workflow screen</p></div><div className="module-build-state"><span><Clock3 size={13} />Planned screen</span><small>Workflow not implemented</small></div></header>
      <div className="module-workspace-grid">
        <article className="soft-card module-build-card"><span className="module-build-icon"><Layers3 size={21} /></span><span className="module-build-tag">SCREEN SCAFFOLD</span><h2>This workflow is not connected yet</h2><p>This page has a route and a shared layout, but it does not read or write hospital records. No patient or staff data is being saved from this screen.</p><div className="module-build-note"><LockKeyhole size={15} /><span>Supabase authentication, database policies, and workflow handling must be configured before operational use.</span></div></article>
        <aside className="soft-card module-screen-index"><div className="module-index-heading"><div><span className="module-index-icon"><Sparkles size={16} /></span><div><h2>{module.label} screens</h2><p>{routeCount} planned workflows</p></div></div><span className="module-index-count">{String(routeCount).padStart(2, "0")}</span></div><div className="module-screen-links">{module.pages.map((item) => <Link key={item.slug} className={`module-screen-link ${page?.slug === item.slug ? "module-screen-link-active" : ""}`} to={`/${module.slug}/${item.slug}`}><span>{item.label}</span>{page?.slug === item.slug ? <span className="module-current-indicator">Current</span> : <ArrowUpRight size={14} />}</Link>)}</div></aside>
      </div>
      <section className="module-related"><div className="module-related-heading"><div><span className="module-related-icon"><CircleHelp size={17} /></span><div><h2>Continue exploring</h2><p>Jump into another hospital module.</p></div></div><span>HIMS workspace</span></div><div className="module-related-grid">{HIMS_MODULES.filter((item) => item.slug !== module.slug && item.slug !== "dashboard").slice(0, 4).map((item) => <Link className="soft-card module-related-link" to={routeForModule(item)} key={item.slug}><span>{item.label}</span><ArrowRight size={14} /></Link>)}</div></section>
      <footer className="module-workspace-footer"><span>Northstar Medical Center</span><span>Page scaffold only <i>·</i> No operational records connected</span></footer>
    </section>
  );
}
