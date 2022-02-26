import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'
import { getFieldsContent } from '../../utils/getFields'

import Block from '../Block'

import template from './Error.tmpl'

import './Error.scss'

export default class Error extends Block {
  constructor (props?: IComponentProps) {
    super('div', {
      ...props,
      attributes: {
        ...props?.attributes,
        class: 'error'
      }
    })
  }

  render () {
    return render(template, getFieldsContent(this.props.children))
  }
}
