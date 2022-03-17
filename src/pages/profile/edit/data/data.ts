import FormPage from '../../../../components/FormPage'
import Form from '../../../../components/Form'
import Button from '../../../../components/Button'

import { render } from 'pug'

import IComponentProps from '../../../../interfaces/IComponentProps'
import { getFieldsContent } from '../../../../utils/getFields'

import Router from '../../../../modules/router'

import Block from '../../../../components/Block'

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

export default class DataPage extends Block {
  constructor (props?: IComponentProps) {
    super('div', {
      ...props,
      children: {
        page: new FormPage({
          attributes: {
            class: 'profile edit_data'
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
              disabled: false,
              attributes: {
                name: 'data-change-form',
                class: 'form profile-change'
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
                  text: 'Сhange data',
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
