// @ts-ignore
import StorageTree from './svelte/components/StorageTree/Index'
// @ts-ignore
import DomainsListGroup from './svelte/components/DomainsListGroup/Index'
// @ts-ignore
import StoragesListGroup from './svelte/components/StoragesListGroup/Index'


document.querySelectorAll('[data-storage-tree]').forEach(target => new StorageTree({ target }))

document.querySelectorAll('[data-domains-list-group]').forEach(target => new DomainsListGroup({ target }))

document.querySelectorAll('[data-storages-list-group]').forEach(target => new StoragesListGroup({ target }))


