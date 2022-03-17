import FormPage from '../../components/FormPage'
import Form from '../../components/Form'
import Button from '../../components/Button'

import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'
import { getFieldsContent } from '../../utils/getFields'

import Block from '../../components/Block'

import Router from '../../modules/router'

const template = `
!=login
!=password
.form__buttons
  !=goBack
  !=button
`

export default class SignInPage extends Block {
  constructor (props?: IComponentProps) {
    super('div', {
      ...props,
      children: {
        page: new FormPage({
          attributes: {
            class: 'signin'
          },
          children: {
            title: 'SIGN IN',
            form: new Form({
              template,
              fields: ['login', 'password'],
              disabled: false,
              attributes: {
                name: 'signin-form',
                class: 'form'
              },
              children: {
                button: new Button({
                  text: 'SIGN IN',
                  attributes: {
                    type: 'submit'
                  }
                })
              }
            }),
            button: new Button({
              text: 'SIGN UP',
              link: true,
              events: {
                click: () => {
                  Router.getInstance().go('/sign-up')
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
