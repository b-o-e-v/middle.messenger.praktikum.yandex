import { render } from 'pug'

export default function renderDOM({ content, cb }) {
  const root = document.querySelector('#root')
  root.innerHTML = render(content)
  cb?.()
}
