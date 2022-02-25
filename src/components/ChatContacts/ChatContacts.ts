import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'

import Block from '..//Block'
import ChatContact from '../ChatContact'

import './ChatContacts.scss'

type ChatItem = {
    id: number,
    title: string,
    message: {
      content: string,
      time: string
    },
    count: number | string,
    avatar?: string,
}

export default class ChatContacts extends Block {
  private handleSelect: (chatId: (string | number)) => {}
  constructor (props?: IComponentProps) {
    super('ul', {
      ...props,
      children: props?.items.map((item: ChatItem) =>
        new ChatContact({
          children: {
            name: item.title,
            preview: item.message?.content,
            time: item.message?.time,
            count: item.count
          },
          events: {
            click: () => {
              this.handleSelect(item.id)
            }
          }
        })
      ),
      attributes: {
        class: 'chat__contacts'
      }
    })
  }

  onSelect (handler:(chatId: string|number) => {}) {
    this.handleSelect = handler
  }

  setItems (items:[]) {
    this.setProps({
      children: items.map((item: ChatItem) =>
        new ChatContact({
          children: {
            name: item.title,
            preview: item.message?.content,
            time: item.message?.time,
            count: item.count,
            avatar: item.avatar
          },
          events: {
            click: () => {
              this.handleSelect(item.id)
            }
          }
        })
      )
    })
  }

  render () {
    return render('', {})
  }
}
