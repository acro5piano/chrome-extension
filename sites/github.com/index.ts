/**
 * Move rows with j/k
 */
let fileTreeIndex = 0
window.addEventListener('popstate', () => {
  fileTreeIndex = 0
})
function draw(givenRows?: Element[]) {
  const rows =
    givenRows || document.querySelectorAll('.js-navigation-item[role="row"]')
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i] as HTMLDivElement
    if (i === fileTreeIndex) {
      row.style.backgroundColor = '#4f4f4f'
      row.querySelector('a')?.focus()
    } else {
      row.style.backgroundColor = 'unset'
    }
  }
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    fileTreeIndex = 0
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
