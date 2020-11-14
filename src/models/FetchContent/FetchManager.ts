import uniqueId from 'lodash/uniqueId'
import MessageFactory from '@/models/Message/MessageFactory'


class FetchManager {
  private id = uniqueId('fetch_manager_')

  constructor(idTab, url): Promise<any> {
    const message = MessageFactory()

    message.send()

    return new Promise((resolve) => {
      message.listener(data => resolve(data))
    })
  }
}


export default FetchManager
