import Error from '../../components/Error'
import Button from '../../components/Button'

export default new Error({
  children: {
    number: '404',
    text: 'Page Not Found!',
    button: new Button({
      text: 'GO TO CHATS',
      link: true,
      attributes: {
        href: '/chats'
      }
    })
  }
})
