import './Button.scss'

export default ({ className = '', text, type = 'button' }) => `
      button.button${className}(type='${type}') ${text}`
