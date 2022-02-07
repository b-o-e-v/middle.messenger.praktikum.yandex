import Link from '../../components/Link/Link.tmpl'

// Данные ссылки
const linkData = {
  text: 'Go to chats',
  url: '/chats',
}

// Данные страницы ошибки 500
export default {
  error: {
    number: '500',
    text: 'Oops! Something went wrong...',
  },
  link: Link(linkData),
}
