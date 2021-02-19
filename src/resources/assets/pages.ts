// // Bootstrap
// import 'bootstrap/js/src/modal'
// import 'bootstrap/js/src/tab'

// // Components
// import Breadcrumb from './svelte/components/Breadcrumb/Index.svelte'
import StorageTree from './svelte/components/StorageTree/Index.svelte'
import DomainsList from './svelte/components/DomainsList/Index.svelte'
// import DatabaseCreate from './svelte/components/DatabaseCreate/Index.svelte'
// import DatabaseImport from './svelte/components/DatabaseCreate/Import.svelte'
// import DatabasesList from './svelte/components/DatabasesList/Index.svelte'
// import TablesList from './svelte/components/TablesList/Index.svelte'
// import TableBrowser from './svelte/components/TableBrowser/Index.svelte'


// document.querySelectorAll('[data-breadcrumb-main]').forEach(target => new Breadcrumb({ target }))
document.querySelectorAll('[data-storage-tree]').forEach(target => new StorageTree({ target }))
document.querySelectorAll('[data-domains-list]').forEach(target => new DomainsList({ target }))
// document.querySelectorAll('[data-database-create]').forEach(target => new DatabaseCreate({ target }))
// document.querySelectorAll('[data-database-import]').forEach(target => new DatabaseImport({ target }))
// document.querySelectorAll('[data-databases-list]').forEach(target => new DatabasesList({ target }))
// document.querySelectorAll('[data-tables-list]').forEach(target => new TablesList({ target }))
// document.querySelectorAll('[data-table-browser]').forEach(target => new TableBrowser({ target }))

// import $ from 'jquery'
// import { createTree } from 'jquery.fancytree'



// createTree('.tree-json', {
//  // extensions: ['edit', 'filter'],

// });
