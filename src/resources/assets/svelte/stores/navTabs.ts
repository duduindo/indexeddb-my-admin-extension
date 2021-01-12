import { get, writable } from 'svelte/store'

const items = writable([])


function addItem(item) {
  items.update(value => [...value, item])
}

function select(index) {
  const value = get(items)
  const item = value[index]

  console.log(item)
}

export {
  addItem,
  items,
  select
}
