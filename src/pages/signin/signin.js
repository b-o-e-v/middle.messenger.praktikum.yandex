import SignInPage from '../../components/Form/Form.tmpl'
import getData from '../../utils/getData'
import signInData, { inputsData } from './data'

export default function SignIn() {
  const cb = () => {
    document.getElementById('signin').onsubmit = (e) => {
      e.preventDefault()
      getData(e.target, inputsData)
    }
  }

  return { content: SignInPage(signInData), cb }
}
