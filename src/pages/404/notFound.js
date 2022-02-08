import { template as ErrorPage } from '../../components/Error/Error.tmpl'
import errorData from './data'

export default function NotFound() {
  return { content: ErrorPage(errorData) }
}
