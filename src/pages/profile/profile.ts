import renderDom from '../../utils/render'

import FormPage from '../../components/FormPage'
import Form from '../../components/Form'
import Button from '../../components/Button'

import Data from './edit/data'
import Password from './edit/password'
import SignIn from '../signin'

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
      events: {
        click: () => {
          history.pushState({}, '', '/profile/edit/data')
          renderDom('#root', Data)
        }
      }
    }),
    changePassword: new Button({
      text: 'change password',
      link: true,
      events: {
        click: () => {
          history.pushState({}, '', '/profile/edit/password')
          renderDom('#root', Password)
        }
      }
    }),
    button: new Button({
      text: 'Sign out',
      link: true,
      attributes: {
        class: 'red'
      },
      events: {
        click: () => {
          history.pushState({}, '', '/signin')
          renderDom('#root', SignIn)
        }
      }
    })
  }
})
