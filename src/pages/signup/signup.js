import { template as SignUpPage } from '../../components/Form/Form.tmpl'
import { getData } from '../../utils/getData'
import { data as signUpData } from './data'

export default function SignUp() {
  const cb = () => {
    document.getElementById('signup').onsubmit = (e) => {
      e.preventDefault()
      getData(e.target, signUpData.inputs)
    }
  }

  return { content: SignUpPage(signUpData), cb }
}
