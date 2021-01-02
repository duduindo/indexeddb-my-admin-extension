// @ts-ignore
import StorageTree from './svelte/components/StorageTree/Index'
// @ts-ignore
import DomainsList from './svelte/components/DomainsList/Index'
// @ts-ignore
import DatabasesList from './svelte/components/DatabasesList/Index'
// @ts-ignore
import StoresList from './svelte/components/StoresList/Index'


document.querySelectorAll('[data-storage-tree]').forEach(target => new StorageTree({ target }))

document.querySelectorAll('[data-domains-list]').forEach(target => new DomainsList({ target }))

document.querySelectorAll('[data-databases-list]').forEach(target => new DatabasesList({ target }))

document.querySelectorAll('[data-stores-list]').forEach(target => new StoresList({ target }))
