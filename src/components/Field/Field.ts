import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'
import checkInputValid from '../../utils/checkInputValid'
import { getFieldsContent } from '../../utils/getFields'

import Block from '../Block'
import Input from '../Input'
import Label from '../Label'

import template from './Field.tmpl'

import './Field.scss'

export default class Field extends Block implements IComponentProps {
  constructor ({
    input,
    error = '',
    isError = false,
    ...props
  }: IComponentProps) {
    super('div', {
      ...props,
      attributes: {
        ...props?.attributes,
        class: `field ${isError ? 'error' : ''} ${props?.attributes?.class}`.trim()
      },
      children: {
        label: new Label({
          text: input.label,
          attributes: {
            class: 'field__label',
            for: input.attributes.name
          }
        }),
        input: new Input({ ...input }),
        error
      }
    })
  }

  componentDidMount () {
    this.props.children.input.setProps({
      events: {
        blur: ({ currentTarget }: { currentTarget: HTMLInputElement }) => {
          const validity = currentTarget.validity

          const valid = validity && this.checkValid(validity, currentTarget.type)
          valid && this.setError(valid)
        }
      }
    })
  }

  setAttributes (attributes = this.props.attributes) {
    this.setProps({ attributes: { ...this.props.attributes, attributes } })
  }

  setError ({ isError, errorText }: { isError: boolean, errorText: string }) {
    this.setProps({
      attributes: {
        ...this.props.attributes,
        class: `${this.props.attributes.class.replace('error', '').trim()} 
        ${isError ? 'error' : ''}`
      },
      children: { ...this.props.children, error: errorText }
    })
  }

  checkValid (validity: ValidityState, type?: string) {
    return checkInputValid(validity, type)
  }

  render () {
    return render(template, getFieldsContent(this.props.children))
  }
}
