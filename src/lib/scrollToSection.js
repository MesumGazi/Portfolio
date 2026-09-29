/**
 * Scrolls to a section by id, respecting the user's motion preference.
 */
export function scrollToSection(id) {
  const element = document.getElementById(id)
  if (!element) return
  const target = element.querySelector('.section__title') ?? element

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  target.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
  })
}