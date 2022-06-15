import { click } from '../../util/dom'

/**
 * Maximize presentation with M-z.
 */
document.addEventListener('keydown', (event) => {
  if (event.key === 'z' && event.altKey) {
    document.querySelector('[data-resolution-cap="0"]')?.requestFullscreen()
  }
})

/**
 * Autojoin meeting.
 */
const observer = new MutationObserver(async (mutations) => {
  for (const mutation of mutations) {
    if (mutation.target.textContent?.includes('Join now')) {
      // All mute.
      await click('[aria-label="Turn off microphone (ctrl + d)"]')
      await click('[aria-label="Turn off camera (ctrl + e)"]')
      ;(mutation.target as HTMLButtonElement)?.click()
      setTimeout(() => {
        observer.disconnect()
      }, 3000)
    }
  }
})
observer.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true,
})
