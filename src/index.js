import { render } from './utils/render'
import { signin } from './pages/signin'
import { signup } from './pages/signup'

import './styles/index.scss'

function init() {
  const { pathname } = window.location;
  const Signin = signin()
  const Signup = signup()

  switch (pathname) {
    case '/':
    case '/signin':
      render(Signin)
      return
    case '/signup':
      render(Signup)
      return
    case '/chats':
      render(Signin)
      return
    case '/profile':
      render(Signin)
      return
    default:
      render('<div>404</div>')
      return
  }
}

init()
