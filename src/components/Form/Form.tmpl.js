// КОМПОНЕНТЫ
import { template as Input } from '../Input/Input.tmpl'
import { template as Button } from '../Button/Button.tmpl'

import './Form.scss'

export const template = ({ form, inputs, button, link }) => (`
.form
  h1.form__title ${form.title}
  form#form__${form.id}
    ${inputs.map((data) => Input(data)).join(' ')}
    ${Button(button)}
  ${link ? `a.form__link(href='${link.url}') ${link.text}` : ''}
`)
