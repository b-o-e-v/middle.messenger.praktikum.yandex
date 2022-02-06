// КОМПОНЕНТЫ
import { template as Input } from '../Input/Input.tmpl'
import { template as Button } from '../Button/Button.tmpl'
import { template as Link } from '../Link/Link.tmpl'

import './Form.scss'

export const template = ({ form, inputs, buttons, link, avatar }) => (`
.form
  form#${form.id}
    .form__header
      ${avatar ? `.form__avatar
        img.form__img(src='${avatar.src}')
        label.form__load-label-avatar(for='${avatar.id}') Сhange avatar
        input.form__load(type='file' id='${avatar.id}' name='${avatar.name}')` : ''}
      h1.form__title ${form.title}
    .inputs
      ${inputs.map((input) => Input(input)).join(' ')}
    .buttons
      ${buttons.map((button) => Button(button)).join(' ')}
    ${link ? Link(link) : ''}
`)
