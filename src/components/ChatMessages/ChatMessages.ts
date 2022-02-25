import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'
import Block from '../Block'

import ChatMessage from '../ChatMessage'

export default class ChatMessages extends Block {
  constructor (props: IComponentProps) {
    super('ul', {
      attributes: {
        class: 'messages'
      },
      children: props.items.map((item: any) =>
        new ChatMessage({
          attributes: { class: item.my ? 'chat-message my' : 'chat-message' },
          text: item.content,
          time: item?.time
        })
      ),
      ...props
    })
  }

  setItems (items: any[]) {
    this.setProps({
      children: items.map(item =>
        new ChatMessage({
          attributes: { class: item.my ? 'chat-message my' : 'chat-message' },
          text: item.content,
          time: item?.time
        })
      )
    })
  }

  render () {
    return render('', {})
  }
}
