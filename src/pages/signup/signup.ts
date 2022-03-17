import FormPage from '../../components/FormPage'
import Form from '../../components/Form'
import Button from '../../components/Button'

import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'
import { getFieldsContent } from '../../utils/getFields'

import Block from '../../components/Block'

import Router from '../../modules/router'

const template = `
!=firstName
!=secondName
!=login
!=email
!=phone
!=password
.form__buttons
  !=goBack
  !=button
`

export default class SignUpPage extends Block {
  constructor (props?: IComponentProps) {
    super('div', {
      ...props,
      children: {
        page: new FormPage({
          attributes: {
            class: 'signup'
          },
          children: {
            template,
            title: 'SIGN UP',
            form: new Form({
              fields: ['firstName', 'secondName', 'email', 'phone', 'login', 'password'],
              disabled: false,
              attributes: {
                name: 'signup-form',
                class: 'form'
              },
              children: {
                button: new Button({
                  text: 'SIGN UP',
                  attributes: {
                    type: 'submit'
                  }
                })
              }
            }),
            button: new Button({
              text: 'SIGN IN',
              link: true,
              events: {
                click: () => {
                  Router.getInstance().go('/')
                }
              }
            })
          }
        })
      },
      attributes: {
        ...props?.attributes
      }
    })
  }

  render () {
    return render('!=page', getFieldsContent(this.props.children))
  }
}
