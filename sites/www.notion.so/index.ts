/**
 * Maximize presentation with M-z.
 */
document.addEventListener('keydown', (event) => {
  if (event.key === ']' && event.ctrlKey) {
    history.forward()
  }
})
