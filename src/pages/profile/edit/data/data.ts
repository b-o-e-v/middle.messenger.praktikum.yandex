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
      fields: [
        'avatar', 'firstName', 'secondName', 'displayName', 'login', 'email', 'phone'
      ],
      disabled: false,
      attributes: {
        name: 'data-change-form',
        class: 'form profile-change'
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
          text: 'Сhange data',
          attributes: {
            type: 'submit'
          }
        })
      }
    })
  }
})
