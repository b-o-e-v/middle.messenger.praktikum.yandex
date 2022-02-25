import { compile } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'

import Block from '../Block'

import template from './ChatMessage.tmpl'

import './ChatMessage.scss'

export default class ChatMessage extends Block {
  constructor (props?: IComponentProps) {
    super('li', {
      ...props
    })
  }

  render () {
    return compile(template)({
      text: this.props.text,
      time: this.props.time
    })
  }
}
