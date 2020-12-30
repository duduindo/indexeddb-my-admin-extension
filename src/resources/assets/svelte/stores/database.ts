import { readable } from 'svelte/store'
import fetchContent from '@/models/FetchContent/fetchContent'


const params = new URLSearchParams(location.search)
const origin = params.get('origin')

// Readable
const databases = readable([], set => {
  fetchContent(`${origin}/databases/`)
    .then(list => set(list))
    .catch(err => {
      console.log('ERRO databases: ', err.message)
      set([])
    })
})

// Readable
const structures = readable([], set => {
  fetchContent(`${origin}/structure-databases/`)
    .then(list => set(list))
    .catch(err => {
      console.log('ERRO structure-databases: ', err.message)
      set([])
    })
})


export {
  databases,
  structures
}
