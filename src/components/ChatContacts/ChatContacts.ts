import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'
import IChatsItem from '../../interfaces/IChatsItem'

import Block from '..//Block'
import ChatContact from '../ChatContact'

import './ChatContacts.scss'

export default class ChatContacts extends Block {
  private handleSelect: (chatId: (string | number)) => {}
  constructor (props?: IComponentProps) {
    super('ul', {
      ...props,
      children: props?.items.map((item: IChatsItem) =>
        new ChatContact({
          attributes: {
            class: 'chat_item'
          },
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
      children: items.map((item: IChatsItem) =>
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
