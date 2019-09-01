<template>
  <nav class="c-object-store-actions">
    <form action="#" class="pure-form" @submit.prevent>
      <button @click="handleReload" class="pure-button" type="button" title="Reload"><font-awesome-icon icon="redo" /></button>
      <hr class="c-diviser-vertical">
      <button @click="handlePrev" class="pure-button" type="button" title="Prev"><font-awesome-icon icon="caret-left" /></button>
      <button @click="handleNext" class="pure-button" type="button" title="Next"><font-awesome-icon icon="caret-right" /></button>
      <input class="pure-field" @input="handleSearch" type="search" placeholder="Quick search">
      <hr class="c-diviser-vertical">
      <button @click="handleClear" class="pure-button" type="button" title="Clear object store"><font-awesome-icon icon="broom" /></button>
      <button @click="handleDelete" class="pure-button" type="button" title="Delete selected"><font-awesome-icon icon="trash-alt" /></button>
      <button @click="handleCopy" class="pure-button" type="button" title="Copy selected to clipboard"><font-awesome-icon icon="copy" /></button>

      <!-- <button @click="handleClone" class="pure-button" type="button" title="Clone selected"><font-awesome-icon icon="clone" /></button> -->
      <router-link :to="`/object-store/library/1/books/insert`" class="pure-button" title="Clone selected">
        <font-awesome-icon icon="clone" />
      </router-link>

      <button @click="handleEdit" class="pure-button" type="button" title="Edit selected"><font-awesome-icon icon="edit" /></button>
      <button @click="handleInsert" class="pure-button" type="button" title="Insert objects"><font-awesome-icon icon="plus" /></button>
      <button @click="handleExport" class="pure-button" type="button" title="Export selected to Javascript"><font-awesome-icon :icon="['fab', 'js']" /></button>
    </form>
  </nav>
</template>

<script>
  export default {
    name: 'object-store-actions',
    methods: {
      handleReload(e) {
        this.$emit('reload', e)
      },
      handlePrev(e) {
        this.$emit('prev', e)
      },
      handleNext(e) {
        this.$emit('next', e)
      },
      handleSearch(e) {
        this.$emit('search', e)
      },
      handleClear(e) {
        this.$emit('clear', e)
      },
      handleDelete(e) {
        this.$emit('delete', e)
      },
      handleCopy(e) {
        this.$emit('copy', e)
      },
      handleClone(e) {
        this.$emit('clone', e)
      },
      handleEdit(e) {
        this.$emit('edit', e)
      },
      handleInsert(e) {
        this.$emit('insert', e)
      },
      handleExport(e) {
        this.$emit('export', e)
      }
    }
  }
</script>
