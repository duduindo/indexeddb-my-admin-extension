// // Bootstrap
// import 'bootstrap/js/src/modal'
// import 'bootstrap/js/src/tab'

// // Components
// import Breadcrumb from './svelte/components/Breadcrumb/Index.svelte'
// import StorageTree from './svelte/components/StorageTree/Index.svelte'
// import DomainsCards from './svelte/components/DomainsCards/Index.svelte'
// import DomainsList from './svelte/components/DomainsList/Index.svelte'
// import DatabaseCreate from './svelte/components/DatabaseCreate/Index.svelte'
// import DatabaseCreateSimple from './svelte/components/DatabaseCreateSimple/Index.svelte'
// import DatabaseImport from './svelte/components/DatabaseCreate/Import.svelte'
// import DatabasesList from './svelte/components/DatabasesList/Index.svelte'
// import TablesList from './svelte/components/TablesList/Index.svelte'
// import TableBrowser from './svelte/components/TableBrowser/Index.svelte'


// document.querySelectorAll('[data-breadcrumb-main]').forEach(target => new Breadcrumb({ target }))
// document.querySelectorAll('[data-storage-tree]').forEach(target => new StorageTree({ target }))
// document.querySelectorAll('[data-domains-cards]').forEach(target => new DomainsCards({ target }))
// document.querySelectorAll('[data-domains-list]').forEach(target => new DomainsList({ target }))
// document.querySelectorAll('[data-database-create]').forEach(target => new DatabaseCreate({ target }))
// document.querySelectorAll('[data-database-create-simple]').forEach(target => new DatabaseCreateSimple({ target }))
// document.querySelectorAll('[data-database-import]').forEach(target => new DatabaseImport({ target }))
// document.querySelectorAll('[data-databases-list]').forEach(target => new DatabasesList({ target }))
// document.querySelectorAll('[data-tables-list]').forEach(target => new TablesList({ target }))
// document.querySelectorAll('[data-table-browser]').forEach(target => new TableBrowser({ target }))

// import IndexedDBBuilder from '@/models/Storage/IndexedDBBuilder'


// const builder = new IndexedDBBuilder()
//   .open('test 2', '1')
//   .table('books1')
//   .getColumnNames()
//   .execute()


// builder
//   // .then(e => console.log(`%c ${e}`, 'color: white; font-size: 1.3em; margin:10px;'))
//   // .catch(err => console.log(`%c ${err}`, 'color: red; font-size: 1.3em; margin:10px;'))
//   .then(e => console.log(e))
//   .catch(err => console.log(`%c ${err}`, 'color: red; font-size: 1.3em; margin:10px;'))

class Builder {
  private queue = new Map

  first() {
    this.queue.set('first', Promise.resolve(1))

    return this
  }

  second() {
    this.queue.set('second', Promise.resolve(2))

    return this
  }

  async build() {
    return NaN
  }
}


const builder = new Builder()
  .first()
  .second()
  .build()
    .then(e => console.log(e))
    .catch(err => console.log('Error: ', err))
