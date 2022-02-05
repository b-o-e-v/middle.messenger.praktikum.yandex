import { render } from 'pug'
import { template as ErrorPage } from '../../components/Error/Error.tmpl'
import { data as errorData } from './data'

export default function NotFound() {
  return render(ErrorPage(errorData))
}
