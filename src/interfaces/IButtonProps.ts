import IComponentProps from './IComponentProps'

export interface IButtonProps extends IComponentProps {
  type?: string;
  link?: boolean;
  href?: string;
}
