<template>
  <section>
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
        console.log(this.objectsSelected)
      }
    }
  }
</script>
