import './Buttons.scss'

export default (buttons) => `
    .buttons
      ${buttons.map(({ className = '', type, text }) => `
      button.button${className}(type='${type}') ${text}
      `).join(' ')}
`
