import './Error.scss'

export const template = ({
  error,
  link = '',
}) => `
.error
  h1.error__number ${error.number}
  p.error__text ${error.text}
  ${link}
`