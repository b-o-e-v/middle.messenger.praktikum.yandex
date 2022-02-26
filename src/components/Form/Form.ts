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
    // HTMLSelectElement.checkValidity()
    // Метод проверяет, имеет ли элемент какие-либо ограничения и удовлетворяет ли он им.
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity
    return this.element.checkValidity()
  }

  render () {
    return render(this.props.template || template, getFieldsContent(this.props.children))
  }
}
