import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Chats from './pages/chats'
import Profile from './pages/profile'
import Data from './pages/profile/edit/data'
import Password from './pages/profile/edit/password'
import ServerError from './pages/500'
import NotFoundError from './pages/404'

import render from './utils/render'

import './styles/index.scss'

function init () {
  const { pathname } = window.location

  switch (pathname) {
    case '/':
    case '/signin':
      render(SignIn)
      return
    case '/signup':
      render(SignUp)
      return
    case '/chats':
      render(Chats)
      return
    case '/profile':
      render(Profile)
      return
    case '/profile/edit/data':
      render(Data)
      return
    case '/profile/edit/password':
      render(Password)
      return
    case '/500':
      render(ServerError)
      return
    default:
      render(NotFoundError)
  }
}

init()
