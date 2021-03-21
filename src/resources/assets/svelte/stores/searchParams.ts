import { readable } from 'svelte/store'

const searchParams = new URLSearchParams(location.search)

const params = readable({}, set => {
  const { host: domain } = new URL(searchParams.get('origin'))

  set({
    origin: searchParams.get('origin'),
    name: searchParams.get('name'),
    version: searchParams.get('version'),
    domain,
  })
})

export {
  params,
}
