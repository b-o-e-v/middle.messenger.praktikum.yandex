import render from '../../utils/render'
import eventListener from '../../utils/eventListener'
import { template as ProfilePage } from '../../components/Form/Form.tmpl'
import { data as profileData } from './data'
import { data as passwordData } from './password'

export default function Profile() {
  const goback = () => {
    eventListener('.empty.blue.goback', () => {
      document.location.href = '/profile'
    })
  }

  const cb = () => {
    eventListener('.empty.blue.data', () => {
      profileData.inputs.forEach((el) => el.disabled = false)
      profileData.buttons = [
        { text: 'Go back', className: '.empty.blue.goback', type: 'button' },
        { text: 'Сhange data', type: 'submit' }
      ]
      render({ content: ProfilePage(profileData), cb: goback })
    })

    eventListener('.empty.blue.password', () => {
      render({ content: ProfilePage(passwordData), cb: goback })
    })
  }

  return { content: ProfilePage(profileData), cb }
}
