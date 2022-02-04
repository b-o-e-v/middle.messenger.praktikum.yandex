import { render } from 'pug';
import { template } from './register.tmpl'

import './register.scss'

export default function registerPage() {
  return render(template)
}