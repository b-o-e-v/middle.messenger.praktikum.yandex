import { render } from 'pug'
import { template as SignUpPage } from '../../components/Form/Form.tmpl'
import { data as signUpData } from './data'

export default function SignUp() {
  return render(SignUpPage(signUpData))
}
