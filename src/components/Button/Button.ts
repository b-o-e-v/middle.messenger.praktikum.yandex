import { render } from 'pug'
import clsx from 'clsx'

import { IButtonProps } from '../../interfaces/IButtonProps'

import Block from '../Block'

import './Button.scss'

export default class Button extends Block implements IButtonProps {
  constructor ({ link, ...props }: IButtonProps) {
    super('button', {
      ...props,
      attributes: {
        ...props?.attributes,
        class: clsx({ link, button: !link }, props?.attributes?.class)
      }
    })
  }

  render () {
    return render('!=text', { ...this.props })
  }
}
