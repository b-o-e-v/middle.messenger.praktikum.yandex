import Inputs from '../../components/Inputs/Inputs.tmpl'
import Buttons from '../../components/Buttons/Buttons.tmpl'
import Link from '../../components/Link/Link.tmpl'

// Данные инпутов
export const inputsData = [
  {
    title: 'login',
    name: 'login',
    type: 'text',
    required: true,
  },
  {
    title: 'password',
    name: 'password',
    type: 'password',
    required: true,
  },
]

// Данные кнопок
const buttonsData = [
  {
    text: 'SIGN IN',
    type: 'submit',
  },
]

// Данные ссылки
const linkData = {
  text: 'SIGN UP',
  url: '/signup',
}

// данные формы авторизации
export default {
  form: {
    id: 'signin',
    title: 'SIGN IN',
  },
  inputs: Inputs(inputsData),
  buttons: Buttons(buttonsData),
  link: Link(linkData),
}
