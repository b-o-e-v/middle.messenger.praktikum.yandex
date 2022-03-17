import FormPage from '../../../../components/FormPage'
import Form from '../../../../components/Form'
import Button from '../../../../components/Button'

import { render } from 'pug'

import IComponentProps from '../../../../interfaces/IComponentProps'
import { getFieldsContent } from '../../../../utils/getFields'

import Router from '../../../../modules/router'

import Block from '../../../../components/Block'

const template = `
!=oldPassword
!=newPassword
!=repeatNewPassword
.form__buttons
  !=goBack
  !=button
`

export default class PasswordPage extends Block {
  constructor (props?: IComponentProps) {
    super('div', {
      ...props,
      children: {
        page: new FormPage({
          attributes: {
            class: 'profile edit_password'
          },
          children: {
            title: 'Display Name',
            form: new Form({
              template,
              fields: ['oldPassword', 'newPassword', 'repeatNewPassword'],
              disabled: false,
              attributes: {
                name: 'password-change-form',
                class: 'form password-change'
              },
              children: {
                goBack: new Button({
                  text: 'go back',
                  link: true,
                  events: {
                    click: () => {
                      Router.getInstance().back()
                    }
                  }
                }),
                button: new Button({
                  text: 'Сhange password',
                  attributes: {
                    type: 'submit'
                  }
                })
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
