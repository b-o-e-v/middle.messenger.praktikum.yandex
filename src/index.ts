import render from './utils/render'
import { signIn } from './pages/signin'
import { signUp } from './pages/signup'
import { profile } from './pages/profile'
import { chats } from './pages/chats'
import { notFound } from './pages/404'
import { serverError } from './pages/500'

import './styles/index.scss'

function init() {
  const { pathname } = window.location

  switch (pathname) {
    case '/':
    case '/signin':
      render(signIn())
      return
    case '/signup':
      render(signUp())
      return
    case '/chats':
      render(chats())
      return
    case '/profile':
      render(profile())
      return
    case '/500':
      render(serverError())
      return
    default:
      render(notFound())
  }
}

init()
