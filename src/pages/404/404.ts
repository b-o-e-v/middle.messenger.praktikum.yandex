import renderDom from '../../utils/render'

import Error from '../../components/Error'
import Button from '../../components/Button'

import SignUp from '../signup'

export default new Error({
  children: {
    number: '404',
    text: 'Page Not Found!',
    button: new Button({
      text: 'GO TO CHATS',
      link: true,
      events: {
        click: () => {
          history.pushState({}, '', '/chats')
          renderDom('#root', SignUp)
        }
      }
    })
  }
})
