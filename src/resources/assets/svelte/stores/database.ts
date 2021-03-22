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

async function deleteDatabases(names:string[] = []): Promise<any> {
  try {
    return await names.forEach(async name => await fetchContent(`${origin}/${name}/delete/`))
  } catch (err) {
    return err.message
  }

  // console.log('Store: ', names)



  // return Promise.reject('ERRO delete-databases: dasdasdsasd')
}

export {
  databases,
  deleteDatabases,
  structures,
}
