import Link from '../../components/Link/Link.tmpl'

// Данные ссылки
const linkData = {
  text: 'Go to chats',
  url: '/chats',
}

// Данные страницы ошибки 404
export default {
  error: {
    number: '404',
    text: 'Page Not Found!',
  },
  link: Link(linkData),
}
