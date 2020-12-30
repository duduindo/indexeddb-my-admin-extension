
import StorageTree from './svelte/components/StorageTree/Index'
import StorageListGroup from './svelte/components/StorageListGroup/Index'


document.querySelectorAll('[data-storage-tree]').forEach(target => new StorageTree({ target }))

document.querySelectorAll('[data-storage-list-group]').forEach(target => new StorageListGroup({ target }))


