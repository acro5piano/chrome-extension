import { isInputting } from '../../util/dom'

/**
 * Move rows with j/k
 */
let fileTreeIndex = 0
let currentUrl = window.location.href

function draw(givenRows?: Element[]) {
  const rows =
    givenRows || document.querySelectorAll('.js-navigation-item[role="row"]')
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i] as HTMLDivElement
    if (i === fileTreeIndex) {
      row.style.backgroundColor = '#1e293b'
      row.querySelector('a')?.focus()
    } else {
      row.style.backgroundColor = 'unset'
    }
  }
}

document.addEventListener('keydown', (event) => {
  if (isInputting) {
    return
  }
  if (event.key === 'j') {
    const rows = document.querySelectorAll('.js-navigation-item[role="row"]')
    if (fileTreeIndex < rows.length - 1) {
      fileTreeIndex++
    }
    draw(rows as any)
  }
  if (event.key === 'k') {
    if (0 < fileTreeIndex) {
      fileTreeIndex--
    }
    draw()
  }
})

setInterval(() => {
  if (currentUrl !== window.location.href) {
    fileTreeIndex = 0
    draw()
    currentUrl = window.location.href
  }
}, 500)
