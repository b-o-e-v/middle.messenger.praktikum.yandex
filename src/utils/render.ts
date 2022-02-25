export default function renderDOM (block: any): void {
  const root = document.querySelector('#root')
  while (root?.firstChild) root.removeChild(root.firstChild)
  const element = block?.element
  element && root?.appendChild(element)
}
