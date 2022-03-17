import FormPage from '../../components/FormPage'
import Form from '../../components/Form'
import Button from '../../components/Button'

import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'
import { getFieldsContent } from '../../utils/getFields'

import Router from '../../modules/router'

import Block from '../../components/Block'

const template = `
!=avatar
!=firstName
!=secondName
!=displayName
!=login
!=email
!=phone
.form__buttons
  !=goBack
  !=button
`

export default class ProfilePage extends Block {
  constructor (props?: IComponentProps) {
    super('div', {
      ...props,
      children: {
        page: new FormPage({
          attributes: {
            class: 'profile'
          },
          children: {
            title: 'Display Name',
            form: new Form({
              template,
              fields: [
                'avatar',
                'firstName',
                'secondName',
                'displayName',
                'login',
                'email',
                'phone'
              ],
              disabled: true,
              attributes: {
                name: 'data-form',
                class: 'form profile-change'
              }
            }),
            changeData: new Button({
              text: 'change data',
              link: true,
              events: {
                click: () => {
                  Router.getInstance().go('/edit-data')
                }
              }
            }),
            changePassword: new Button({
              text: 'change password',
              link: true,
              events: {
                click: () => {
                  Router.getInstance().go('/edit-pass')
                }
              }
            }),
            button: new Button({
              text: 'Sign out',
              link: true,
              attributes: {
                class: 'red'
              },
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
