import { render } from './utils/render'
import { signIn } from './pages/signIn'
import { signUp } from './pages/signUp'
import { notFound } from './pages/404'
import { serverError } from './pages/500'

import './styles/index.scss'

function init() {
  const { pathname } = window.location
  const SignIn = signIn()
  const SignUp = signUp()
  const NotFound = notFound()
  const ServerError = serverError()

  switch (pathname) {
    case '/':
    case '/signin':
      render(SignIn)
      return
    case '/signup':
      render(SignUp)
      return
    case '/chats':
      render('<div>chats</div>')
      return
    case '/profile':
      render('<div>profile</div>')
      return
    case '/500':
      render(ServerError)
      return  
    default:
      render(NotFound)
      return
  }
}

init()
