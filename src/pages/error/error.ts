import Button from '../../components/Button'

import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'
import { getFieldsContent } from '../../utils/getFields'

import Router from '../../modules/router'

import Block from '../../components/Block'
import Error from '../../components/Error'

export default class ErrorPage extends Block {
  constructor (props?: IComponentProps) {
    super('div', {
      ...props,
      children: {
        page: new Error({
          children: {
            code: `${props?.code}`,
            text: props?.text,
            button: new Button({
              text: 'GO TO CHATS',
              link: true,
              events: {
                click: () => {
                  Router.getInstance().go('/messenger')
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
