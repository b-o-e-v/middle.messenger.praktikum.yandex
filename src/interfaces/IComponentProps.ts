export default interface IComponentProps {
  attributes?: any
  text?: string
  events?: Record<string, (...args: any) => void>
  [key: string]: any
}
