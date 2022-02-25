export default function renderDOM (query: string, block: any): void {
  const root = document.querySelector(query)
  while (root?.firstChild) root.removeChild(root.firstChild)
  const element = block?.element
  element && root?.appendChild(element)
}
