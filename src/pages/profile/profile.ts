import FormPage from '../../components/FormPage'
import Form from '../../components/Form'
import Button from '../../components/Button'

export default new FormPage({
  attributes: {
    class: 'profile'
  },
  children: {
    title: 'Display Name',
    form: new Form({
      fields: ['avatar', 'firstName', 'secondName', 'displayName', 'login', 'email', 'phone'],
      disabled: true,
      attributes: {
        name: 'data-form',
        class: 'form profile-change'
      }
    }),
    changeData: new Button({
      text: 'change data',
      link: true,
      attributes: {
        href: '/profile/edit/data'
      }
    }),
    changePassword: new Button({
      text: 'change password',
      link: true,
      attributes: {
        href: '/profile/edit/password'
      }
    }),
    button: new Button({
      text: 'Sign out',
      link: true,
      attributes: {
        class: 'red',
        href: 'signin'
      }
    })
  }
})
