import SignInPage from './pages/signin'
import SignUpPage from './pages/signup'
import ChatsPage from './pages/chats'
import ProfilePage from './pages/profile'
import DataPage from './pages/profile/edit/data'
import PasswordPage from './pages/profile/edit/password'
import ErrorPage from './pages/error'

import Router from './modules/router'

import './styles/index.scss'

const router = new Router('#root')

async function init () {
  const currentUser = null

  const checkAuth = true

  router
    .use({
      pathname: '/', block: SignInPage, props: { user: currentUser }
    })
    .use({
      pathname: '/sign-up', block: SignUpPage, props: { user: currentUser }
    })
    .use({
      pathname: '/messenger',
      block: ChatsPage,
      props: {},
      exact: false,
      needAuth: true,
      isAuth: !!currentUser,
      onUnautorized: checkAuth
    })
    .use({
      pathname: '/settings',
      block: ProfilePage,
      exact: false,
      needAuth: true,
      isAuth: !!currentUser,
      onUnautorized: checkAuth
    })
    .use({
      pathname: '/edit-data',
      block: DataPage,
      exact: false,
      needAuth: true,
      isAuth: !!currentUser,
      onUnautorized: checkAuth
    })
    .use({
      pathname: '/edit-pass',
      block: PasswordPage,
      exact: false,
      needAuth: true,
      isAuth: !!currentUser,
      onUnautorized: checkAuth
    })
    .use({
      pathname: '/500',
      block: ErrorPage,
      props: {
        code: 500,
        text: 'Oops! Something went wrong...'
      }
    })
    .use({
      pathname: '/404',
      block: ErrorPage,
      props: {
        code: 404,
        text: 'Page Not Found!'
      }
    })
    .start()
}

init()
