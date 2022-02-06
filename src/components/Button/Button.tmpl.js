import './Button.scss'

export const template = ({ className = '', text, type = 'button' }) => {
  return `
      button.button${className}(type='${type}') ${text}`
}
