import { render } from 'pug'

import IComponentProps from '../../interfaces/IComponentProps'

import Block from '../Block'

export default class Label extends Block implements IComponentProps {
  constructor (props: IComponentProps) {
    super('label', { ...props })
  }

  render () {
    return render('!=text', { ...this.props })
  }
}
