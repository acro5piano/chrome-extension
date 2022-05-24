/**
 * Maximize presentation with M-z.
 */
document.addEventListener('keydown', (event) => {
  if (event.key === 'z' && event.altKey) {
    document.querySelector('[data-allocation-index="0"]').requestFullscreen()
  }
})

/**
 * Autojoin meeting.
 */
MutationObserver.observe(document.body, (mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.target.classList.contains('is-loading')) {
      document.querySelector('[data-allocation-index="0"]').click()
    }
  })
})
