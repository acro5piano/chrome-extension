import { forEachElementContains } from '../../util/dom'

/* beta: I want to hide "Unchanged files with check annotations" */
forEachElementContains(
  '.js-diff-progressive-container',
  'Unchanged files with check annotations',
  (el) => {
    el.remove()
  },
)

setTimeout(() => {
  const button = document.createElement('button')
  button.textContent = 'Toggle All'
  button.onclick = () => {
    document.querySelectorAll('.PRIVATE_TreeView-item-toggle').forEach((e) => {
      if (e instanceof HTMLDivElement) {
        e.click()
      }
    })
  }
  const filter = document.querySelector('#diff-file-tree-filter')
  if (!filter) {
    console.log('[chrome-extension] #diff-file-tree-filter not found')

    return
  }
  filter.appendChild(button)
}, 3000)

// import { isInputting } from '../../util/dom'
//
// /**
//  * Move rows with j/k
//  */
// let fileTreeIndex = 0
// let currentUrl = window.location.href
//
// function draw(givenRows?: Element[]) {
//   const rows =
//     givenRows || document.querySelectorAll('.js-navigation-item[role="row"]')
//   for (let i = 0; i < rows.length; i++) {
//     const row = rows[i] as HTMLDivElement
//     if (i === fileTreeIndex) {
//       row.style.backgroundColor = '#1e293b'
//       row.querySelector('a')?.focus()
//     } else {
//       row.style.backgroundColor = 'unset'
//     }
//   }
// }
//
// document.addEventListener('keydown', (event) => {
//   if (isInputting) {
//     return
//   }
//   if (event.key === 'j') {
//     const rows = document.querySelectorAll('.js-navigation-item[role="row"]')
//     if (fileTreeIndex < rows.length - 1) {
//       fileTreeIndex++
//     }
//     draw(rows as any)
//   }
//   if (event.key === 'k') {
//     if (0 < fileTreeIndex) {
//       fileTreeIndex--
//     }
//     draw()
//   }
// })
//
// setInterval(() => {
//   if (currentUrl !== window.location.href) {
//     fileTreeIndex = 0
//     draw()
//     currentUrl = window.location.href
//   }
// }, 500)
