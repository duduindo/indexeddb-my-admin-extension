import { readable } from 'svelte/store'
import fetchContent from '@/models/FetchContent/fetchContent'


const params = new URLSearchParams(location.search)
const origin = params.get('origin')

// Readable
const databases = readable([], set => {
  fetchContent(`${origin}/database/indexeddb/databases/`)
    .then(list => set(list))
    .catch(err => {
      console.log('ERRO databases: ', err.message)
      set([])
    })
})

// Readable
const allDatabasesStructured = readable([], set => {
  // databases.subscribe(value => {
  //   value.forEach(({name, version}) => {
  //     fetchContent(`${origin}/database/indexeddb/${name}/${version}/structure/`)
  //       .then(list => set(list))
  //       .catch(err => {
  //         console.log('ERRO allDatabasesStructured: ', err.message)
  //         set([])
  //       })
  //   })
  // })

  set([1])
})


export {
  databases,
  allDatabasesStructured
}
