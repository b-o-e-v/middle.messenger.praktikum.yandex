import { template as ErrorPage } from '../../components/Error/Error.tmpl'
import { data as errorData } from './data'

export default function NotFound() {
  return { content: ErrorPage(errorData) }
}
