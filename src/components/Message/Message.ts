import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'
import getInputValue from '../../utils/getInputValue'
import { getFieldsContent } from '../../utils/getFields'

import Block from '../Block'
import Button from '../Button'
import Form from '../Form'

import template from './Message.tmpl'

import './Message.scss'

export default class Message extends Block implements IComponentProps {
  constructor (props?: IComponentProps) {
    super('div', {
      ...props,
      attributes: {
        ...props?.attributes,
        class: 'form-message'
      },
      children: {
        form: new Form({
          template,
          fields: ['message'],
          disabled: false,
          attributes: {
            name: 'message-form',
            class: 'message-form'
          },
          children: {
            button: new Button({
              attributes: {
                type: 'submit'
              }
            })
          }
        })
      }
    })
  }

  componentDidMount () {
    this.props.children.form.setProps({
      events: {
        submit: async (e: Event) => {
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
    return render('!=form', getFieldsContent(this.props.children))
  }
}
