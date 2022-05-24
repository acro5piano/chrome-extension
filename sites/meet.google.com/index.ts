import {click} from '../../util/dom'

/**
 * Maximize presentation with M-z.
 */
document.addEventListener('keydown', (event) => {
  if (event.key === 'z' && event.altKey) {
    document.querySelector('[data-allocation-index="0"]')?.requestFullscreen()
  }
})

/**
 * Autojoin meeting.
 */
const observer = new MutationObserver(async (mutations) => {
  for (const mutation of mutations) {
    if (mutation.target.textContent?.includes('Join now')) {
      await click( '[aria-label="Turn off microphone (ctrl + d)"]')
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
