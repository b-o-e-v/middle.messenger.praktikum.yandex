import { render } from 'pug'
import { template as LoginPage } from '../../components/Form/Form.tmpl'
import { data as loginData } from './data'

export default function Login() {
  return render(LoginPage(loginData))
}
