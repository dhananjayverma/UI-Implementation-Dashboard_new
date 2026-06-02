const paths = {
  pie: '<path d="M11 3a9 9 0 1 0 9 9h-9V3Z"/><path d="M13 3v7h7a7 7 0 0 0-7-7Z"/>',
  bar: '<path d="M4 20V9"/><path d="M12 20V4"/><path d="M20 20v-7"/>',
  cart: '<path d="M5 6h17l-2 9H8L5 2H2"/><path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path d="M18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>',
  bag: '<path d="M6 8h16l-2 14H8L6 8Z"/><path d="M10 8a4 4 0 0 1 8 0"/>',
  trend: '<path d="M3 19h18"/><path d="M5 15l4-4 4 3 6-8"/>',
  message: '<path d="M4 5h18v12H8l-4 4V5Z"/><path d="M8 9h8"/><path d="M8 13h12"/>',
  settings: '<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.04.04a2 2 0 1 1-2.83 2.83l-.04-.04a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.08a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.04.04a2 2 0 1 1-2.83-2.83l.04-.04A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.08a1.7 1.7 0 0 0 1.55-1 1.7 1.7 0 0 0-.34-1.88l-.04-.04a2 2 0 1 1 2.83-2.83l.04.04A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.08a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.88-.34l.04-.04a2 2 0 1 1 2.83 2.83l-.04.04A1.7 1.7 0 0 0 19.4 9c.13.38.33.72.6 1h.08a2 2 0 1 1 0 4H20a1.7 1.7 0 0 0-1.6 1Z"/>',
  logout: '<path d="M10 17l5-5-5-5"/><path d="M15 12H3"/><path d="M14 3h5v18h-5"/>',
  search: '<path d="m21 21-4.2-4.2"/><circle cx="11" cy="11" r="7"/>',
  bell: '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"/><path d="M10 21h4"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  chart: '<path d="M7 17V9"/><path d="M12 17V5"/><path d="M17 17v-3"/><path d="M4 20h16"/>',
  doc: '<path d="M8 3h8l4 4v14H8V3Z"/><path d="M15 3v5h5"/><path d="M11 13h6"/><path d="M11 17h4"/>',
  tag: '<path d="M20 13 13 20 4 11V4h7l9 9Z"/><path d="M8 8h.01"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  export: '<path d="M12 3v12"/><path d="m7 8 5-5 5 5"/><path d="M5 21h14"/>',
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
}

export const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] ?? ''}</svg>`
