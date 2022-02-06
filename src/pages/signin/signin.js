import SignInPage from '../../components/Form/Form.tmpl'
import getData from '../../utils/getData'
import { data as signInData } from './data'

export default function SignIn() {
  const cb = () => {
    document.getElementById('signin').onsubmit = (e) => {
      e.preventDefault()
      getData(e.target, signInData.inputs)
    }
  }

  return { content: SignInPage(signInData), cb }
}
