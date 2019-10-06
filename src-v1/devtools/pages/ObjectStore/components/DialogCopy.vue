<template>
  <DialogNative :open="isOpen" @closed="handleClosed">
    <button @click="copyJson" type="button">{{labelCopied}}</button>
    <button @click="minify" type="button">minify</button>
    <button @click="unminify" type="button">unminify</button>
    <button @click="isOpen = false" type="button">close</button>
    <br><br>
    <textarea ref="textarea" spellcheck="false" cols="60" rows="10" :value="data"></textarea>
  </DialogNative>
</template>

<script>
  import { format } from 'json-string-formatter'
  import DialogNative from '@/devtools/components/DialogNative'

  export default {
    name: 'object-store-dialog-copy',
    components: { DialogNative },
    data() {
      return {
        isOpen: false,
        data: '[]',
        labelCopied: 'copy'
      }
    },
    props: {
      json: {
        required: false,
        default: () => '[]',
        type: String
      },
      open: {
        required: false,
        default: () => false,
        type: Boolean
      }
    },
    watch: {
      open(value) {
        this.isOpen = value

        if (!value) {
          this.labelCopied = 'copy'
        }
      },
      json(value) {
        this.data = format(value)
      }
    },
    methods: {
      handleCopy() {
        const json = JSON.stringify(this.data)

        this.json = format(json)
        this.dialogToClipboard = true
        this.$refs.textarea.select()
      },
      handleClosed() {
        this.isOpen = false
        this.$emit('closed')
      },
      copyJson() {
        this.$refs.textarea.select()
        document.execCommand('copy')

        this.labelCopied = 'copied'
      },
      minify() {
        this.data = this.json
      },
      unminify() {
        this.data = format(this.data)
      }
    }
  }
</script>
