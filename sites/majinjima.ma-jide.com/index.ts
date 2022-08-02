import { click, fill } from '../../util/dom'

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && event.ctrlKey) {
    click('input[value="計算する！！"]')
  }
})

window.addEventListener('load', () => {
  fill('[name="att_level"]', '100')
  fill('[name="def_level"]', '100')

  // Not working. why?
  // const hypno = document.createElement('option')
  // hypno.value = '097'
  // hypno.innerText = 'Hypno'
  // document.querySelector('[name="pokelist"]')!.appendChild(hypno)
  // document.querySelector('[name="pokelist2"]')!.appendChild(hypno)
})
