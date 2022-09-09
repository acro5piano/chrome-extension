import { forEachElementContains } from '../../util/dom'

const timer = setInterval(() => {
  forEachElementContains(
    'button',
    'I understand and wish to proceed',
    (element) => {
      element.click()
      clearInterval(timer)
    },
  )
}, 500)
