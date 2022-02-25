import renderDom from '../../utils/render'

import Error from '../../components/Error'
import Button from '../../components/Button'

import Chats from '../chats'

export default new Error({
  children: {
    number: '500',
    text: 'Oops! Something went wrong...',
    button: new Button({
      text: 'GO TO CHATS',
      link: true,
      events: {
        click: () => {
          history.pushState({}, '', '/chats')
          renderDom(Chats)
        }
      }
    })
  }
})
