<template>
  <nav class="c-object-store-actions">
    <form action="#">
      <button class="pure-button" type="button">reload</button>
      <button class="pure-button" type="button">prev</button>
      <button class="pure-button" type="button">next</button>
      <input type="search">
      <button class="pure-button" type="button">clear object store</button>
      <button class="pure-button" type="button">Delete selected</button>
      <button class="pure-button" type="button">Copy selected</button>
      <button class="pure-button" type="button">Clone selected</button>
      <button class="pure-button" type="button">Edit selected</button>
      <button class="pure-button" type="button">Add object</button>
    </form>
  </nav>
</template>

<script>
  export default {
    name: 'object-store-actions'
  }
</script>
