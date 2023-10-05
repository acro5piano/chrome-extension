/**
 * Maximize presentation with M-z.
 */
document.addEventListener('keyup', (event) => {
  if (event.key === '.' && event.altKey) {
    const text = document.title.replace(' ', ': ')
    navigator.clipboard.writeText(text)
  }
})
