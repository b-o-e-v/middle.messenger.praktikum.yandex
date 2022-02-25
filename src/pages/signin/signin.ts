import renderDom from '../../utils/render'

import FormPage from '../../components/FormPage'
import Form from '../../components/Form'
import Button from '../../components/Button'

import SignUp from '../signup'

export default new FormPage({
  attributes: {
    class: 'signin'
  },
  children: {
    title: 'SIGN IN',
    form: new Form({
      fields: ['login', 'password'],
      disabled: false,
      attributes: {
        name: 'signin-form',
        class: 'form'
      },
      children: {
        button: new Button({
          text: 'SIGN IN',
          attributes: {
            type: 'submit'
          }
        })
      }
    }),
    button: new Button({
      text: 'SIGN UP',
      link: true,
      events: {
        click: () => {
          history.pushState({}, '', '/signup')
          renderDom('#root', SignUp)
        }
      }
    })
  }
})
