// const {mapActions, mapGetters} = Vuex


// const PaginationStore = Vue.component('pagination-store', {
//   data() {
//     return {
//       timeout: null
//     }
//   },
//   methods: {
//     ...mapActions({
//       search: 'searchStoreValues'
//     })
//   },
//   watch: {

//   },
//   render(create) {
//     return create('form', [
//       create('label', {
//         attrs: {
//           for: 'filter-rows'
//         }
//       }, 'Filter rows: '),
//       create('input', {
//         attrs: {
//           id: 'filter-rows',
//           placeholder: 'Search this store'
//         },
//         on: {
//           keyup: event => {
//             if (this.timeout) {
//               clearTimeout(this.timeout)
//               this.timeout = null
//             }

//             this.timeout = setTimeout(this.search, 80, event.target.value)
//           }
//         }
//       })
//     ])
//   }
// })


// export default PaginationStore
<template>
  <h1>HeaderStore</h1>
</template>
