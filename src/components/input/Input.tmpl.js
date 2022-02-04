import './Input.scss'

export const template = ({
  title,
  name,
  required,
  disabled,
  type = 'text',
  value = ''
}) => {
  return `
    .input.input_name_${name}
      label.input__title(for='${name}') ${title}
      input.input__record(name='${name}' id='${name}' required='${required}' type='${type}' ${disabled ? 'disabled' : ''} value='${value}')`
}
