<template>
  <nav class="c-object-store-actions">
    <form action="#">
      <button class="pure-button" type="button" title="reload"><font-awesome-icon icon="redo" /></button>
      <button class="pure-button" type="button" title="prev"><font-awesome-icon icon="caret-left" /></button>
      <button class="pure-button" type="button" title="next"><font-awesome-icon icon="caret-right" /></button>
      <input type="search">
      <button class="pure-button" type="button" title="clear object store"><font-awesome-icon icon="broom" /></button>
      <button class="pure-button" type="button" title="Delete selected"><font-awesome-icon icon="trash-alt" /></button>
      <button class="pure-button" type="button" title="Copy selected"><font-awesome-icon icon="copy" /></button>
      <button class="pure-button" type="button" title="Clone selected"><font-awesome-icon icon="clone" /></button>
      <button class="pure-button" type="button" title="Edit selected"><font-awesome-icon icon="edit" /></button>
      <button class="pure-button" type="button" title="Add object"><font-awesome-icon icon="plus" /></button>
    </form>
  </nav>
</template>

<script>
  export default {
    name: 'object-store-actions'
  }
</script>
