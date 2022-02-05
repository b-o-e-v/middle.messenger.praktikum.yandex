import { render } from 'pug'
import { template as SigninPage } from '../../components/Form/Form.tmpl'
import { data as signinData } from './data'

export default function Signin() {
  return render(SigninPage(signinData))
}
