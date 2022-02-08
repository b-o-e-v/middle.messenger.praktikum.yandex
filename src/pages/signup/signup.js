import SignUpPage from '../../components/Form/Form.tmpl'
import getData from '../../utils/getData'
import signUpData, { inputsData } from './data'

export default function SignUp() {
  const cb = () => {
    document.getElementById('signup').onsubmit = (e) => {
      e.preventDefault()
      getData(e.target, inputsData)
    }
  }

  return { content: SignUpPage(signUpData), cb }
}
