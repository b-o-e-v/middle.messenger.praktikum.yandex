import { loginInputsData, loginButtonData } from './data'
// КОМПОНЕНТЫ
import { template as Input } from '../../components/Input/Input.tmpl'
import { template as Button } from '../../components/Button/Button.tmpl'

export const template = `
.login
  h1.login__title SIGN IN
  form#login__form
    ${loginInputsData.map((data) => Input(data)).join(' ')}
    ${Button(loginButtonData)}
  a.login__link(href='/register') SIGN UP
`
