import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'

import Block from '../Block'

export default class Input extends Block implements IComponentProps {
  constructor (props: IComponentProps) {
    super('input', {
      ...props,
      attributes: {
        ...props?.attributes,
        class: `field__input ${props?.attributes.class}`
      }
    })
  }

  render () {
    return render('', {})
  }
}
