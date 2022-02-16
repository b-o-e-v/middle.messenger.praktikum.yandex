import Avatar from '../../components/Avatar/Avatar.tmpl'
import Inputs from '../../components/Inputs/Inputs.tmpl'
import Buttons from '../../components/Buttons/Buttons.tmpl'

// Данные аватара
const avatarData = {
  name: 'avatar',
  id: 'load_avatar',
}

// Данные инпутов (могут быть заблокированные и нет)
export const inputsData = (disabled) => [
  {
    title: 'first name',
    name: 'first_name',
    type: 'text',
    required: true,
    disabled,
  },
  {
    title: 'second name',
    name: 'second_name',
    type: 'text',
    required: true,
    disabled,
  },
  {
    title: 'display name',
    name: 'display_name',
    type: 'text',
    required: true,
    disabled,
  },
  {
    title: 'login',
    name: 'login',
    type: 'text',
    required: true,
    disabled,
  },
  {
    title: 'email',
    name: 'email',
    type: 'text',
    required: true,
    disabled,
  },
  {
    title: 'phone',
    name: 'phone',
    type: 'tel',
    required: true,
    disabled,
  },
]

// Данные кнопок
export const buttonsData = [
  {
    text: 'Сhange data',
    className: '.empty.blue.data',
    type: 'button',
  },
  {
    text: 'Сhange password',
    className: '.empty.blue.password',
    type: 'button',
  },
  {
    text: 'Sign out',
    className: '.empty.red.signout',
    type: 'button',
  },
]

// данные формы смены информации о пользователе
export default {
  form: {
    id: 'changedata',
    title: 'Display Name',
  },
  avatar: Avatar(avatarData),
  inputs: Inputs(inputsData(true)),
  buttons: Buttons(buttonsData),
}
