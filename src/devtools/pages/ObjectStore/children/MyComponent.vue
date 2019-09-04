<template>
  <div>
    <p>msg: {{msg}}</p>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component
  export default class MyComponent extends Vue {
    // initial data
    msg = 123
  }
</script>
