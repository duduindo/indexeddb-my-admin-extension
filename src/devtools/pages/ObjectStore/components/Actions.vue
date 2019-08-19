<template>
  <nav class="c-object-store-actions">
    <form action="#" class="pure-form">
      <button class="pure-button" type="button" title="Reload"><font-awesome-icon icon="redo" /></button>
      <hr class="c-diviser-vertical">
      <button class="pure-button" type="button" title="Prev"><font-awesome-icon icon="caret-left" /></button>
      <button class="pure-button" type="button" title="Next"><font-awesome-icon icon="caret-right" /></button>
      <input class="pure-field" type="search" placeholder="Quick search">
      <hr class="c-diviser-vertical">
      <button class="pure-button" type="button" title="Clear object store"><font-awesome-icon icon="broom" /></button>
      <button class="pure-button" type="button" title="Delete selected"><font-awesome-icon icon="trash-alt" /></button>
      <button class="pure-button" type="button" title="Copy selected to clipboard"><font-awesome-icon icon="copy" /></button>
      <button class="pure-button" type="button" title="Clone selected"><font-awesome-icon icon="clone" /></button>
      <button class="pure-button" type="button" title="Edit selected"><font-awesome-icon icon="edit" /></button>
      <button class="pure-button" type="button" title="Add objects"><font-awesome-icon icon="plus" /></button>
      <button class="pure-button" type="button" title="Export selected to Javascript"><font-awesome-icon :icon="['fab', 'js']" /></button>
    </form>
  </nav>
</template>

<script>
  export default {
    name: 'object-store-actions'
  }
</script>
