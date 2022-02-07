import Avatar from '../../components/Avatar/Avatar.tmpl'
import Inputs from '../../components/Inputs/Inputs.tmpl'
import Buttons from '../../components/Buttons/Buttons.tmpl'

// Данные аватара
const avatarData = {
  name: 'avatar',
  id: 'load_avatar',
}

// Данные инпутов
const inputsData = [
  {
    title: 'old password',
    name: 'oldPassword',
    type: 'password',
    required: true,
  },
  {
    title: 'new password',
    name: 'newPassword',
    type: 'password',
    required: true,
  },
  {
    title: 'repeat new password',
    name: 'repeat_newPassword',
    type: 'password',
    required: true,
  },
]

// Данные кнопок
const buttonsData = [
  {
    text: 'Go back',
    className: '.empty.blue.goback',
    type: 'button',
  },
  {
    text: 'Change password',
    type: 'submit',
  },
]

// Данные формы смены пароля
export default {
  form: {
    id: 'changepassword',
    title: 'Display Name',
  },
  avatar: Avatar(avatarData),
  inputs: Inputs(inputsData),
  buttons: Buttons(buttonsData),
}
