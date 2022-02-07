import Inputs from '../../components/Inputs/Inputs.tmpl'
import Buttons from '../../components/Buttons/Buttons.tmpl'
import Link from '../../components/Link/Link.tmpl'

// Данные инпутов
export const inputsData = [
  {
    title: 'first name',
    name: 'first_name',
    type: 'text',
    required: true,
  },
  {
    title: 'second name',
    name: 'second_name',
    type: 'text',
    required: true,
  },
  {
    title: 'email',
    name: 'email',
    type: 'text',
    required: true,
  },
  {
    title: 'phone',
    name: 'phone',
    type: 'tel',
    required: true,
  },
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
    text: 'SIGN UP',
    type: 'submit',
  },
]

// Данные ссылки
const linkData = {
  text: 'SIGN IN',
  url: '/signin',
}

// Данные формы регистрации
export default {
  form: {
    id: 'signup',
    title: 'SIGN UP',
  },
  inputs: Inputs(inputsData),
  buttons: Buttons(buttonsData),
  link: Link(linkData),
}
