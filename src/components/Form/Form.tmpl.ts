import './Form.scss'

export default ({
  form,
  inputs = '',
  buttons = '',
  link = '',
  avatar = '',
}) => `
.form
  form#${form.id}
    .form__header
      ${avatar}
      h1.form__title ${form.title}
    ${inputs}
    ${buttons}
    ${link}
`
