import { render } from 'pug'

export default function renderDOM({ content, cb, query = '#root' }) {
  const root = document.querySelector(query)
  if (root) {
    root.innerHTML = render(content)
    if (cb) cb()
  }
}
