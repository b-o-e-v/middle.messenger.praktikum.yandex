import Error from '../../components/Error'
import Button from '../../components/Button'

export default new Error({
  children: {
    number: '500',
    text: 'Oops! Something went wrong...',
    button: new Button({
      text: 'GO TO CHATS',
      link: true,
      attributes: {
        href: '/chats'
      }
    })
  }
})
