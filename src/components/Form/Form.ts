import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'
import getFields, { getFieldsContent } from '../../utils/getFields'

import Block from '../Block'

import template from './Form.tmpl'

import './Form.scss'

export default class Form extends Block implements IComponentProps {
  constructor (props?: IComponentProps) {
    super('form', {
      ...props,
      children: {
        ...props?.children,
        ...getFields(props?.fields, props?.disabled)
      }
    })
  }

  isValid () {
    return this.element.checkValidity()
  }

  render () {
    return render(template, getFieldsContent(this.props.children))
  }
}
