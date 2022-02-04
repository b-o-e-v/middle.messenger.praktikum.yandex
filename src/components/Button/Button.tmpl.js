import './Button.scss'

export const template = ({ text, type = 'button' }) => {
  return `button.button(type='${type}') ${text}`
}
