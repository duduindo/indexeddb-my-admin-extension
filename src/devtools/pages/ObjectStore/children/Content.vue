<template>
  <section>
    <v-dialog />
    <v-dialog />
    <Actions
      @copy="handleCopy"
    />
    <Table
      @change="handleChange"
    />
  </section>
</template>

<script>
  import Actions from '../components/Actions'
  import Table from '../components/Table'

  export default {
    name: 'object-store-content',
    components: { Actions, Table },
    data() {
      return {
        objectsSelected: [],
        data: [
          [ 0, 'John', '{title: "Quarry Memories", author: "Fred", isbn: 123456}' ],
          [ 1, 'Jane', '{title: "Quarry Memories", author: "Fred", isbn: 123456}' ]
        ]
      }
    },
    methods: {
      handleChange(value) {
        this.objectsSelected = value
      },
      handleCopy(event) {
        this.$modal.show('dialog', {
          title: 'Alert!',
          text: 'You are too awesome',
          buttons: [
            {
              title: 'Deal with it',
              handler: () => { alert('Woot!') }
            },
            {
              title: '', // Button title
              default: true, // Will be triggered by default if 'Enter' pressed.
              handler: () => {} // Button click handler
            },
            {
              title: 'Close'
            }
          ]
        })
      }
    }
  }
</script>
