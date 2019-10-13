<template>
  <h1>Hello, {{ subject }}</h1>
</template>

<script>
  import { ref, watch } from '@vue/composition-api'

  export default {
    name: 'hello',
    setup(props, context) {
      const subject = ref('World')

      watch(subject, (newValue, oldValue) => {
        console.log(newValue, oldValue)
      })

      setTimeout(() => {
        subject.value = 4444444
      }, 2000)

      return {
        subject
      }
    }
  }
</script>
