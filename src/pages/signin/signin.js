import { render } from 'pug'
import { template as SignInPage } from '../../components/Form/Form.tmpl'
import { data as signInData } from './data'

export default function SignIn() {
  return render(SignInPage(signInData))
}
