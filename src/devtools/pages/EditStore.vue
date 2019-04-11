// const {mapActions, mapGetters} = Vuex


// const EditStore = Vue.component('EditStore', {
//   data() {
//     return {
//       cursor: '{}',
//       oldCursor: '{}'
//     }
//   },
//   computed: {
//     ...mapGetters({
//       status: 'getStoreUpdatedStatus'
//     })
//   },
//   methods: {
//     ...mapActions({
//       fetch: 'fetchUpdateStore'
//     }),
//     handleUpdate() {
//       const { database, store, version } = this.$route.params

//       try {
//         const cursor = JSON.parse(this.cursor)
//         const oldCursor = JSON.parse(this.oldCursor)

//         this.fetch({
//           name: database,
//           version,
//           store,
//           oldValue: oldCursor,
//           newValue: cursor
//         })
//       } catch(err) {
//         console.error(err)
//       }
//     }
//   },
//   mounted() {
//     const { cursor = {} } = this.$route.query
//     const cursorString = JSON.stringify(cursor)
//     const cursorFormatted = window.jsonStringFormatter(cursorString, '  ')

//     this.cursor = cursorFormatted
//     this.oldCursor = cursorString
//   },
//   render(create) {
//     const self = this
//     const rows = this.cursor.match(/\n/g) ? (this.cursor.match(/\n/g).length + 2) : 1;

//     return create('div', [
//       create('h1', 'Edit'),
//       create('h3', `Status: ${this.status}`),
//       create('form', [
//         create('button', {
//           attrs: {
//             type: 'button'
//           },
//           on: {
//             click: this.handleUpdate
//           }
//         }, 'Update'),
//         create('hr'),
//         create('textarea', {
//           attrs: {
//             rows,
//             autofocus: true,
//             autocorrect: 'off',
//             spellcheck: false
//           },
//           domProps: {
//             value: self.cursor
//           },
//           on: {
//             input: function (event) {
//               self.cursor = event.target.value
//             }
//           },
//           style: {
//             width: '100%'
//           }
//         })
//       ])
//     ])
//   }
// })


// export default EditStore

<template>
  <div>
    EditStore
  </div>
</template>
