// @ts-ignore
import Breadcrumb from './svelte/components/Breadcrumb/Index'
// @ts-ignore
import StorageTree from './svelte/components/StorageTree/Index'
// @ts-ignore
import DomainsList from './svelte/components/DomainsList/Index'
// @ts-ignore
import DatabaseCreate from './svelte/components/DatabaseCreate/Index'
// @ts-ignore
import DatabasesList from './svelte/components/DatabasesList/Index'
// @ts-ignore
import TablesList from './svelte/components/TablesList/Index'
// @ts-ignore
import TableBrowser from './svelte/components/TableBrowser/Index'


document.querySelectorAll('[data-breadcrumb-main]').forEach(target => new Breadcrumb({ target }))

document.querySelectorAll('[data-storage-tree]').forEach(target => new StorageTree({ target }))

document.querySelectorAll('[data-domains-list]').forEach(target => new DomainsList({ target }))

document.querySelectorAll('[data-database-create]').forEach(target => new DatabaseCreate({ target }))

document.querySelectorAll('[data-databases-list]').forEach(target => new DatabasesList({ target }))

document.querySelectorAll('[data-tables-list]').forEach(target => new TablesList({ target }))

document.querySelectorAll('[data-table-browser]').forEach(target => new TableBrowser({ target }))
