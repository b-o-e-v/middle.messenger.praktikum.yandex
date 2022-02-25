export type Message = {
  content: string,
  time: string | number,
  my?: boolean
}

export default interface IChatsItem {
  id: number | string,
  title: string,
  message: Message,
  count: string | number,
  messages: Message[],
  avatar?: string,
}
