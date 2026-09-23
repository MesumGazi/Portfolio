export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

// Module-level constant → stable identity, safe to use as a hook dependency.
export const SECTION_IDS = NAV_ITEMS.map((item) => item.id)