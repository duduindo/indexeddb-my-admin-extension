<template>
  <dialog ref="dialog" @click="handleClickOut">
    <section>
      <article>
        <slot />
      </article>
      <footer>
        <button @click="opened = false" type="button">Close</button>
      </footer>
    </section>
  </dialog>
</template>

<script>
  export default {
    name: 'dialog-native',
    props: {
      open: {
        required: false,
        default: () => false,
        type: Boolean
      }
    },
    data() {
      return {
        opened: false
      }
    },
    watch: {
      open(value) {
        this.opened = value
      },
      opened(value) {
        if (value) {
          this.$refs.dialog.showModal()
          this.$emit('opened')
        } else {
          this.$refs.dialog.close()
          this.$emit('closed')
        }
      }
    },
    methods: {
      handleClickOut(e) {
        e.preventDefault()

        if (e.target === this.$refs.dialog) {
          this.opened = false
        }
      }
    }
  }
</script>
