import ChatPage from '../../components/ChatPage'

import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'
import { getFieldsContent } from '../../utils/getFields'

import Block from '../../components/Block'
export default class ErrorPage extends Block {
  constructor (props?: IComponentProps) {
    super('div', {
      ...props,
      children: {
        page: new ChatPage({})
      },
      attributes: {
        ...props?.attributes
      }
    })
  }

  render () {
    return render('!=page', getFieldsContent(this.props.children))
  }
}
