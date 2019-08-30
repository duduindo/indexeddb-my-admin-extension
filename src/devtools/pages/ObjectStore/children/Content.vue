<template>
  <section>
    <DialogNative :open="dialogToClipboard" @closed="dialogToClipboard = false">
      <button @click="copyClipboardText" type="button">copy</button>
      <button @click="minify" type="button">minify</button>
      <button @click="unminify" type="button">unminify</button>
      <button @click="dialogToClipboard = false" type="button">close</button>
      <br><br>
      <textarea ref="textarea" spellcheck="false" cols="60" rows="10" :value="jsonToClipboard"></textarea>
    </DialogNative>

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
  import DialogNative from '@/devtools/components/DialogNative'
  import { format } from 'json-string-formatter'


  export default {
    name: 'object-store-content',
    components: { Actions, DialogNative, Table },
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

        this.jsonToClipboard = format(json)
        this.dialogToClipboard = true
        this.$refs.textarea.select()
      },
      copyClipboardText() {
        this.$refs.textarea.select()
        document.execCommand('copy')
      },
      minify() {
        const json = JSON.stringify(this.objectsSelected)

        this.jsonToClipboard = json
      },
      unminify() {
        const json = JSON.stringify(this.objectsSelected)

        this.jsonToClipboard = format(json)
      }
    }
  }
</script>
