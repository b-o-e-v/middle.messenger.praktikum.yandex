import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'
import { getFieldsContent } from '../../utils/getFields'

import Block from '..//Block'

import template from './ChatContact.tmpl'

import './ChatContact.scss'

export default class ChatContact extends Block {
  constructor (props?: IComponentProps) {
    super('li', {
      ...props,
      children: {
        ...props?.children
      }
    })
  }

  render () {
    return render(template, getFieldsContent(this.props.children))
  }
}
