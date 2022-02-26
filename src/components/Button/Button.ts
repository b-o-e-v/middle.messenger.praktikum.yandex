import { render } from 'pug'

import { IButtonProps } from '../../interfaces/IButtonProps'

import Block from '../Block'

import './Button.scss'

export default class Button extends Block implements IButtonProps {
  constructor ({ link, ...props }: IButtonProps) {
    super(`${link ? 'a' : 'button'}`, {
      ...props,
      attributes: {
        ...props?.attributes,
        class: `${link ? 'link' : 'button'} ${props?.attributes?.class}`.trim()
      }
    })
  }

  render () {
    return render('!=text', { ...this.props })
  }
}
