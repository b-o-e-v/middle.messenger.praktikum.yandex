export default function eventListener(selector, cb) {
  document.querySelector(selector).onclick = () => cb()
}