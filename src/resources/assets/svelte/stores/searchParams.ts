import { readable } from 'svelte/store'

const searchParams = new URLSearchParams(location.search)

const params = readable({}, set => {
  set({
    origin: searchParams.get('origin'),
    name: searchParams.get('name'),
    version: searchParams.get('version')
  })
})

export {
  params,
}
