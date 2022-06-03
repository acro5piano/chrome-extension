import { forEachElementContains } from '../../util/dom'

/**
 * Autocheck "Ccで自分にコピーを送信する"
 */
const timer = setInterval(() => {
  forEachElementContains('label', 'Ccで自分にコピーを送信する', (label) => {
    label.click()
    clearInterval(timer)
  })
}, 1000)
