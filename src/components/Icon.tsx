import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "grid" | "users" | "clipboard" | "bed" | "calendar" | "activity" | "pulse" | "heart"
  | "stethoscope" | "nurse" | "pill" | "flask" | "scan" | "surgery" | "receipt" | "boxes"
  | "ambulance" | "badge" | "checklist" | "file" | "megaphone" | "chart" | "bell" | "history"
  | "user-cog" | "shield" | "settings" | "search" | "chevron" | "menu" | "close" | "plus"
  | "arrow" | "more" | "calendar-small" | "clock" | "download" | "filter" | "spark" | "refresh";

const paths: Record<IconName, ReactNode> = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  clipboard: <><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5h6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1ZM9 10h6M9 14h6M9 18h3"/></>,
  bed: <><path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7M3 15h18M6 9V6a2 2 0 0 1 2-2h3v5M3 18v2M21 18v2"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
  activity: <><path d="M3 12h4l3-8 4 16 3-8h4"/></>,
  pulse: <><path d="M2 12h4l3-7 5 14 3-7h5"/><path d="M12 22s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 11c0 6.5-8 11-8 11Z"/></>,
  heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></>,
  stethoscope: <><path d="M6 3v5a4 4 0 0 0 8 0V3M4 3h4M12 3h4M10 12v2a5 5 0 0 0 10 0v-1"/><circle cx="20" cy="11" r="2"/></>,
  nurse: <><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2M12 6v4M10 8h4"/></>,
  pill: <><path d="m10.5 20.5 10-10a5.7 5.7 0 0 0-8-8l-10 10a5.7 5.7 0 0 0 8 8Z"/><path d="m8.5 8.5 7 7"/></>,
  flask: <><path d="M9 3h6M10 3v7l-5.5 8.2A2.5 2.5 0 0 0 6.6 22h10.8a2.5 2.5 0 0 0 2.1-3.8L14 10V3M8 16h8"/></>,
  scan: <><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M4 12h16"/></>,
  surgery: <><path d="M4 20 15 9M8 4l12 12M5 7l4-4 4 4-4 4zM14 16l3-3 4 4-3 3z"/></>,
  receipt: <><path d="M4 3h16v18l-3-2-3 2-2-2-3 2-2-2-3 2zM8 8h8M8 12h8M8 16h4"/></>,
  boxes: <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5M12 8v5"/></>,
  ambulance: <><path d="M3 7h11v11H3zM14 11h4l3 3v4h-7zM6 18h.01M18 18h.01"/><circle cx="6.5" cy="18" r="2"/><circle cx="18.5" cy="18" r="2"/><path d="M7 10h3M8.5 8.5v3"/></>,
  badge: <><circle cx="12" cy="8" r="5"/><path d="m8.2 12-1.3 9 5.1-2 5.1 2-1.3-9"/></>,
  checklist: <><path d="M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/></>,
  file: <><path d="M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10zM13 3v7h7M8 15h8M8 18h6"/></>,
  megaphone: <><path d="m3 11 18-5v12l-18-5zM11 15l2 6h-4l-2-7M3 11v2a2 2 0 0 0 2 2"/></>,
  chart: <><path d="M3 3v18h18M8 15l4-4 3 3 6-7"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>,
  history: <><path d="M3 12a9 9 0 1 0 2.6-6.4L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/></>,
  "user-cog": <><circle cx="9" cy="8" r="4"/><path d="M2 21v-2a7 7 0 0 1 10-6.3M17 17l1.3-.8 1.3.8.3 1.5-.9 1.1-1.5-.1-.8-1.3.3-1.2zM18 14v1M18 21v1M14.8 16.5l1 .6M20.2 19.5l1 .6M21 16.5l-1 .6M15 19.5l-1 .6"/></>,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-1.6.9L16 21h-3l-.3-2.1a8 8 0 0 1-1.6-.9l-1.7.6L8 16.2l1.4-1.1a8 8 0 0 1 0-1.9L8 12.1l1.4-2.4 1.7.6a8 8 0 0 1 1.6-.9L13 7h3l.3 2.4a8 8 0 0 1 1.6.9l1.7-.6 1.4 2.4-1.4 1.1a8 8 0 0 1-.2 1.8Z"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  chevron: <path d="m9 18 6-6-6-6"/>, menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>, close: <><path d="m18 6-12 12M6 6l12 12"/></>,
  plus: <><path d="M12 5v14M5 12h14"/></>, arrow: <><path d="M7 17 17 7M7 7h10v10"/></>,
  more: <><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>,
  "calendar-small": <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>, download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></>,
  filter: <><path d="M4 7h16M7 12h10M10 17h4"/><circle cx="8" cy="7" r="1"/><circle cx="15" cy="12" r="1"/></>,
  spark: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 16l1 2.5 2.5 1-2.5 1L19 23l-1-2.5-2.5-1 2.5-1L19 16Z"/></>, refresh: <><path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.5 9a7 7 0 0 1 12-2L20 12M4 12l2.5 5a7 7 0 0 0 12-2"/></>,
};

export function Icon({ name, size = 18, ...props }: SVGProps<SVGSVGElement> & { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
