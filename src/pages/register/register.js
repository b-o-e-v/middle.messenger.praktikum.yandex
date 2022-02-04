import { render } from 'pug'
import { template as RegisterPage } from '../../components/Form/Form.tmpl'
import { data as registerData } from './data'

export default function Register() {
  return render(RegisterPage(registerData))
}
