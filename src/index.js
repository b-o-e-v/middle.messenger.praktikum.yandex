import { render } from './utils/render'
import { login } from './pages/login'
import { register } from './pages/register'

import './styles/index.scss'

function init() {
  const { pathname } = window.location;
  const Login = login()
  const Register = register()

  switch (pathname) {
    case '/':
    case '/login':
      render(Login)
      return
    case '/register':
      render(Register)
      return
    case '/chats':
      render(Login)
      return
    case '/profile':
      render(Login)
      return
    default:
      render('<div>404</div>')
      return
  }
}

init()
