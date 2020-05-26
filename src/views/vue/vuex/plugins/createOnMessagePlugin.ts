/*
 * Documentation: https://vuex.vuejs.org/guide/plugins.html
 */

import Browser from '@/models/Message/devices/Browser'
import Message from '@/models/Message/Message'

const device = new Browser()
const messenger = new Message(device)


function createOnMessagePlugin(onMessage: any) {
  return (store: any) => {
    // messenger.listener((action: MessagePluginAction) => {
    //   const { type, value } = action;

      // switch (type) {
      //   case 'TEST_HERE':
      //     // alert('opaaa')
      //     break
      // }


    // })

    // messenger.send({
    //   type: 'opapo',
    //   value: 'Valorrr'
    // })
    // onMessage.addListener((request: any, tab: any) => {
    //   const { data, type } = request
    //   const idExtension = store.getters.getID
    //   const idTab = tab.tab.id

    //   if (idExtension !== idTab) {
    //     return
    //   }

    //   switch (type) {
    //     case 'GET_TAB_HOST':
    //       store.commit('SET_HOST', data)
    //       break

    //     case 'GET_DATABASE_TREE':
    //       store.commit('SET_TREE', data)
    //       break

    //     // Object Store
    //     case 'DELETE_DATABASE_OBJECTSTORE_CONTENT':
    //       store.commit('SET_OBJECTSTORE_DELETED_STATUS', data)
    //       break

    //     case 'GET_DATABASE_INDEX_CONTENT':
    //       store.commit('SET_INDEX_CONTENT', data)
    //       break

    //     case 'GET_DATABASE_OBJECTSTORE_CONTENT':
    //       store.commit('SET_OBJECTSTORE_CONTENT', data)
    //       break

    //     case 'GET_DATABASE_OBJECTSTORE_SEARCH':
    //       store.commit('SET_OBJECTSTORE_CONTENT', data)
    //       break

    //     case 'INSERT_DATABASE_OBJECTSTORE_CONTENT':
    //       store.commit('SET_OBJECTSTORE_INSERTED_STATUS', data)
    //       break
    //   }
    // })

    // store.subscribe((mutation: any) => {
    //   // console.log('Plugin. Mutation type: ', mutation.type)
    // })
  }
}

export default createOnMessagePlugin
