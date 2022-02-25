import SignIn from './pages/signin'
import SignUp from './pages/signup'
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
      render('#root', SignIn)
      return
    case '/signup':
      render('#root', SignUp)
      return
    // case '/chats':
    //   render(chats())
    //   return
    case '/profile':
      render('#root', Profile)
      return
    case '/profile/edit/data':
      render('#root', Data)
      return
    case '/profile/edit/password':
      render('#root', Password)
      return
    case '/500':
      render('#root', ServerError)
      return
    default:
      render('#root', NotFoundError)
  }
}

init()
