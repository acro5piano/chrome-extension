import delay from 'delay'

export async function click(selector: string) {
  await delay(100)
  const elm = document.querySelector(selector) as HTMLButtonElement
  elm?.click()
  await delay(100)
}

export function forEachElementContains(
  selector: string,
  text: string,
  callback: (elm: HTMLElement) => void,
) {
  const elements = document.querySelectorAll(
    selector,
  ) as NodeListOf<HTMLElement>
  for (const element of elements) {
    if (element.innerHTML.includes(text)) {
      callback(element)
    }
  }
}

export let isInputting = false

document.addEventListener('focusin', (e) => {
  if (e.target && 'tagName' in e.target) {
    if ((e.target as HTMLInputElement).tagName === 'INPUT') {
      isInputting = true
    }
  }
})

document.addEventListener('focusout', () => {
  isInputting = false
})
