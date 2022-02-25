import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'
import getInputValue from '../../utils/getInputValue'
import { getFieldsContent } from '../../utils/getFields'

import Block from '../Block'

import template from './FormPage.tmpl'

import './FormPage.scss'

export default class Signin extends Block {
  constructor (props?: IComponentProps) {
    super('div', {
      ...props,
      attributes: {
        ...props?.attributes,
        class: `form-page ${props?.attributes.class}`
      }
    })
  }

  componentDidMount () {
    this.props.children.form.setProps({
      events: {
        submit: async (e:Event) => {
          e.preventDefault()
          if (this.props.children.form.isValid()) {
            const form = this.props.children.form.element
            getInputValue(form)
          }
        }
      }
    })
  }

  render () {
    return render(template, getFieldsContent(this.props.children))
  }
}
