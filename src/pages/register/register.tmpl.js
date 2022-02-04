import { registerInputsData, registerButtonData } from './data'
// КОМПОНЕНТЫ
import { template as Input } from '../../components/Input/Input.tmpl'
import { template as Button } from '../../components/Button/Button.tmpl'

export const template = `
.register
  h1.register__title SIGN UP
  form#register__form
    ${registerInputsData.map((data) => Input(data)).join(' ')}
    ${Button(registerButtonData)}
  a.register__link(href='/login') SIGN IN
`
