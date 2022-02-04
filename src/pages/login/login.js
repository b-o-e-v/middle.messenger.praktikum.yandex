import { render } from 'pug';
import { template } from './login.tmpl'

import './login.scss'

export default function LoginPage() {
  return render(template)
}