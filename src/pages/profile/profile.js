import render from '../../utils/render'
import Inputs from '../../components/Inputs/Inputs.tmpl'
import Buttons from '../../components/Buttons/Buttons.tmpl'
import ProfilePage from '../../components/Form/Form.tmpl'
import profileData, { inputsData } from './dataFormUser'
import passwordData from './dataFormPassword'

export default function Profile() {
  const goback = () => {
    document.querySelector('.empty.blue.goback')?.addEventListener('click', () => {
      document.location.href = '/profile'
    })
  }

  const cb = () => {
    document.querySelector('.empty.blue.data')?.addEventListener('click', () => {
      // разблокируем форму смены данных пользователя
      profileData.inputs = Inputs(inputsData(false))
      // меняем кнопки
      profileData.buttons = Buttons([
        { text: 'Go back', className: '.empty.blue.goback', type: 'button' },
        { text: 'Сhange data', type: 'submit' },
      ])

      render({ content: ProfilePage(profileData), cb: goback })
    })

    document.querySelector('.empty.blue.password')?.addEventListener('click', () => {
      render({ content: ProfilePage(passwordData), cb: goback })
    })
  }

  return { content: ProfilePage(profileData), cb }
}
