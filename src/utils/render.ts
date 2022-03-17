import Block from '../components/Block'

function removeAllChildNodes (parent: Element) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

export default function render (query: string, block: Block) {
  const root = document.querySelector(query)
  if (root) {
    removeAllChildNodes(root)
    root.appendChild(block.element)
  }
  return root
}
