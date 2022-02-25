import renderDom from '../../../../utils/render'

import FormPage from '../../../../components/FormPage'
import Form from '../../../../components/Form'
import Button from '../../../../components/Button'

import Profile from '../../profile'

export default new FormPage({
  attributes: {
    class: 'profile'
  },
  children: {
    title: 'Display Name',
    form: new Form({
      fields: ['avatar', 'oldPassword', 'newPassword', 'repeatNewPassword'],
      disabled: false,
      attributes: {
        name: 'password-change-form',
        class: 'form password-change'
      },
      children: {
        goBack: new Button({
          text: 'go back',
          link: true,
          events: {
            click: () => {
              history.pushState({}, '', '/profile')
              renderDom('#root', Profile)
            }
          }
        }),
        button: new Button({
          text: 'Сhange password',
          attributes: {
            type: 'submit'
          }
        })
      }
    })
  }
})
