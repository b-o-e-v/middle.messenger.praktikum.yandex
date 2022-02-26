import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'
import { getFieldsContent } from '../../utils/getFields'

import Block from '../Block'
import Button from '../Button'

import template from './ChatHeader.tmpl'

import './ChatHeader.scss'

export default class ChatHeader extends Block {
  constructor (props?: IComponentProps) {
    super('div', {
      ...props,
      children: {
        ...props?.children,
        button: new Button({
          text: 'my profile...',
          link: true,
          attributes: {
            class: 'chat-header__link',
            href: '/profile'
          }
        })
      }
    })
  }

  render () {
    return render(template, getFieldsContent(this.props.children))
  }
}
