import { template as ChatsPage } from '../../components/Chats/Chats.tmpl'
import { data as chatsData } from './data'

export default function ServerError() {
  return { content: ChatsPage(chatsData) }
}
