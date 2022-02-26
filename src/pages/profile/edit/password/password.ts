import FormPage from '../../../../components/FormPage'
import Form from '../../../../components/Form'
import Button from '../../../../components/Button'

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
          attributes: {
            href: '/profile'
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
