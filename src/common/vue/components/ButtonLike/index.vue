<template>
  <button :class="`c-button-like c-button-like--${type}`">
    <slot />
  </button>
</template>

<script lang="ts">
  export default {
    name: 'ButtonLike',
    props: {
      type: {
        required: false,
        default: () => 'secondary',
        type: String
      }
    }
  }
</script>
