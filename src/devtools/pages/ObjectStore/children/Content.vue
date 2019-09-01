<template>
  <section>
    <DialogCopy :open="dialogToClipboard" :json="jsonToClipboard" @closed="dialogToClipboard = false" />

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
  import DialogCopy from '../components/DialogCopy'
  import Table from '../components/Table'

  export default {
    name: 'object-store-content',
    components: { Actions, DialogCopy, Table },
    data() {
      return {
        jsonToClipboard: '[]',
        dialogToClipboard: false,
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
      handleCopy() {
        const json = JSON.stringify(this.objectsSelected)

        this.jsonToClipboard = json
        this.dialogToClipboard = true
      }
    }
  }
</script>
