import { render } from 'pug'
import { template as SignupPage } from '../../components/Form/Form.tmpl'
import { data as signupData } from './data'

export default function Signup() {
  return render(SignupPage(signupData))
}
