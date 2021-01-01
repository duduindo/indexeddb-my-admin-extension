import { readable } from 'svelte/store'
import fetchContent from '@/models/FetchContent/fetchContent'


const params = new URLSearchParams(location.search)
const origin = params.get('origin')
const name = params.get('name')
const version = params.get('version')
const table = params.get('table')


// Readable
const tablenames = readable([], set => {
  fetchContent(`${origin}/${name}/${version}/table-names/`)
    .then(list => set(list))
    .catch(err => {
      console.log('ERRO tablenames: ', err.message)
      set([])
    })
})


export {
  tablenames,
}
