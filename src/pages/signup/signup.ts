import renderDom from '../../utils/render'

import FormPage from '../../components/FormPage'
import Form from '../../components/Form'
import Button from '../../components/Button'

import SignIn from '../signin'

export default new FormPage({
  attributes: {
    class: 'signup'
  },
  children: {
    title: 'SIGN UP',
    form: new Form({
      fields: ['firstName', 'secondName', 'email', 'phone', 'login', 'password'],
      disabled: false,
      attributes: {
        name: 'signup-form',
        class: 'form'
      },
      children: {
        button: new Button({
          text: 'SIGN UP',
          attributes: {
            type: 'submit'
          }
        })
      }
    }),
    button: new Button({
      text: 'SIGN IN',
      link: true,
      events: {
        click: () => {
          history.pushState({}, '', '/signin')
          renderDom('#root', SignIn)
        }
      }
    })
  }
})
