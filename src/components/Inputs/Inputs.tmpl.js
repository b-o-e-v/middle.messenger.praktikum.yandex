import './Inputs.scss'

export default (inputs) => `
    .inputs
  ${inputs.map(({
    name,
    title,
    required,
    type,
    disabled,
    value = '',
  }) => `
      .input.input_name_${name}
        label.input__title(
          for='${name}'
        ) ${title}:
        input.input__record(
          name='${name}' 
          id='${name}' 
          required='${required}' 
          type='${type}' 
          ${disabled ? 'disabled' : ''} 
          value='${value}'
        )
      `).join(' ')}
`
