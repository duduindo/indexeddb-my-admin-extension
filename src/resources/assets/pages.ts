// @ts-ignore
import StorageTree from './svelte/components/StorageTree/Index'
// @ts-ignore
import DomainsList from './svelte/components/DomainsList/Index'
// @ts-ignore
import StoragesList from './svelte/components/StoragesList/Index'
// @ts-ignore
import StoresList from './svelte/components/StoresList/Index'


document.querySelectorAll('[data-storage-tree]').forEach(target => new StorageTree({ target }))

document.querySelectorAll('[data-domains-list]').forEach(target => new DomainsList({ target }))

document.querySelectorAll('[data-storages-list]').forEach(target => new StoragesList({ target }))

document.querySelectorAll('[data-stores-list]').forEach(target => new StoresList({ target }))
