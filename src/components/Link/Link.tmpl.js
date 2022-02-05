import './Link.scss'

export const template = ({ url = '#', text }) => {
  return `a.link(href='${url}') ${text}`
}
