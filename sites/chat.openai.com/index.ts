/**
 * Maximize presentation with M-z.
 */
document.addEventListener('keyup', (event) => {
  if (event.key === 'o' && event.altKey) {
    for (const elm of document.querySelectorAll('a')) {
      if (elm.textContent?.includes('New chat')) {
        elm.click()
        break
      }
    }
  }
})
