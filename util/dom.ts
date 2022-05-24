import delay from 'delay'

export async function click(selector: string) {
  await delay(100)
  const elm = document.querySelector(selector) as HTMLButtonElement
  elm?.click()
  await delay(100)
}
