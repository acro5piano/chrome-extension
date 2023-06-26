/**
 * Maximize presentation with M-z.
 */
document.addEventListener('keyup', (event) => {
  if (event.key === 'z' && event.altKey) {
    document.querySelector('[data-resolution-cap="0"]')?.requestFullscreen()
  }
})
