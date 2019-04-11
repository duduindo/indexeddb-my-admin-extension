<!--
const {mapActions, mapGetters} = Vuex


const Table = Vue.component('list', {
  props: {
    database: {
      type: String,
      required: true
    },
    version: {
      type: [String, Number],
      required: true
    },
    store: {
      type: String,
      required: true
    },
    objectStore: {
      type: Object,
      required: true,
      default: { keyPath: null, keys: [], values: [] }
    },
  },
  render(create) {
    const { values = [], keys = [], keyPath = '' } = this.objectStore
    const { database, version, store } = this

    return create('table', [
      // <thead>
      create('thead', [
        create('tr', [
          create('th', {
            attrs: {
              colspan: 4
            }
          }, 'Actions'),
          create('th', '#'),
          create('th', `Key (key path: "${keyPath}")`),
          create('th', 'Value')
        ])
      ]),

      // <tbody>
      create('tbody', values.map((cursor, index) => {
        return create('tr', [
          // Checkbox
          create('td', [
            create('input', {
              attrs: {
                type: 'checkbox'
              }
            })
          ]),
          // Edit
          create('td', [
            create('router-link', {
              props: {
                to: {
                  path: `/edit/store/${database}/${version}/${store}/`,
                  query: {
                    cursor
                  }
                },
              }
            }, 'Edit')
          ]),
          // Copy
          create('td', [
            create('a', {
              attrs: {
                href: '#Copy'
              }
            }, 'Copy')
          ]),
          // Delete
          create('td', [
            create('a', {
              attrs: {
                href: '#Delete'
              }
            }, 'Delete')
          ]),
          create('td', index),
          create('td', keys[index]),
          create('vue-json-pretty', {
            props: {
              path: 'opa',
              data: cursor
            }
          })
        ])
      }))
    ])
  }
})


const Store = Vue.component('Store', {
  components: {Table},
  computed: {
    ...mapGetters({
      objectStore: 'getStore',
    })
  },
  methods: {
    ...mapActions({
      fetch: 'fetchStore'
    })
  },
  mounted() {
    const { database: name, version, store } = this.$route.params

    this.fetch({
      name,
      version,
      store
    })
  },
  render(create) {
    return create(Table, {
      props: {
        database: this.$route.params.database,
        version: this.$route.params.version,
        store: this.$route.params.store,
        objectStore: this.objectStore
      }
    })
  }
})


export default Store
 -->

<template>
  <h1>
    Store here
  </h1>
</template>
