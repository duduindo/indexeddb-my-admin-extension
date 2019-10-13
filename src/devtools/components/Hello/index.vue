<template>
  <h1>Hello</h1>
</template>

<script lang="ts">
  import { ref } from '@vue/composition-api'

  export default {
    name: 'hello',
    setup(props: any, context: any) {
      const subject = ref('World')

      return {
        subject
      }
    }
  }
</script>
