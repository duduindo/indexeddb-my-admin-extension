<template>
  <b v-html="label"></b>
</template>

<script>
  export default {
    name: 'object-store-insert',
    data() {
      return {
        label: 'empty'
      }
    },
    mounted() {
      const path = this.$route.path
      const isAdd = path.match(/\/insert\/add\/$/i)
      const isClone = path.match(/\/insert\/clone\/$/i)

      if (isAdd) {
        this.label = 'Add'
      }

      if (isClone) {
        this.label = 'Clone'
      }

      console.log(isAdd, isClone)
    }
  }
</script>
