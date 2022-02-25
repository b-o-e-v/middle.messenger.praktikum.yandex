import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'
import { getFieldsContent } from '../../utils/getFields'

import Block from '../Block'
import Button from '../Button'
import ChatHeader from '../ChatHeader'
import ChatContacts from '../ChatContacts'
import ChatMessages from '../ChatMessages'
import Message from '../Message'

import template from './ChatPage.tmpl'

import './ChatPage.scss'

// для теста
const contacts: any = [
  {
    id: 0,
    title: 'Display Name',
    message: {
      content: 'content',
      time: '25.02.2022 09:09'
    },
    count: '50',
    messages: [
      {
        my: false,
        content: 'content 1',
        time: '21.02.2022 09:09'
      },
      {
        my: true,
        content: 'content 2',
        time: '22.02.2022 12:09'
      },
      {
        my: false,
        content: 'content 3',
        time: '23.02.2022 23:00'
      },
      {
        my: false,
        content: 'content 4',
        time: '24.02.2022 22:09'
      },
      {
        my: true,
        content: 'content 5',
        time: '25.02.2022 01:09'
      }
    ]
  },
  {
    id: 1,
    title: 'Display Name 2',
    message: {
      content: 'content 2',
      time: '25.02.2022 08:08'
    },
    count: '100',
    messages: [
      {
        my: true,
        content: 'content 1',
        time: '21.02.2022 09:09'
      },
      {
        my: false,
        content: 'content 2',
        time: '22.02.2022 12:09'
      },
      {
        my: true,
        content: 'content 3',
        time: '23.02.2022 23:00'
      },
      {
        my: true,
        content: 'content 4',
        time: '24.02.2022 22:09'
      },
      {
        my: false,
        content: 'content 5',
        time: '25.02.2022 01:09'
      }
    ]
  }
]

export default class ChatPage extends Block {
  constructor (props: IComponentProps) {
    super('div', {
      ...props,
      title: '',
      attributes: {
        class: 'chat'
      },
      chatId: null,
      children: {
        contacts: new ChatContacts({
          items: contacts
        }),
        header: new ChatHeader({
          events: {
            click: () => {
              console.log('click')
            }
          }
        }),
        messages: new ChatMessages({
          items: []
        }),
        message: new Message({}),
        addChat: new Button({
          text: '+',
          attributes: {
            class: 'createChat'
          },
          events: {
            click: () => {
              console.log('click')
            }
          }
        })
      }
    })

    this.props.children.contacts.onSelect((chatId: string | number) => {
      this.setProps({ chatId })
      this.props.children.header.setProps({
        children: {
          title: contacts[chatId].title,
          avatar: 'test'
        }
      })
      this.props.children.messages.setItems(contacts[chatId].messages)
    })
  }

  render () {
    return render(template, getFieldsContent(this.props.children))
  }
}
