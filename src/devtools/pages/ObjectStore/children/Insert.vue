<template>
  <div class="container-fluid mt-3">
    <div class="row" v-if="isPageClone">
      <div class="col">
        <textarea :value="value" name="" cols="80" :rows="textareaRows"></textarea>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'


  @Component
  export default class ObjectStoreInsert extends Vue {
    value: string = '[]'
    textareaRows: number = 10
    isPageAdd: boolean = false
    isPageClone: boolean = false

    handlePages() {
      const path: string = this.$route.path

      this.isPageAdd = !!path.match(/\/insert\/add\/$/i)
      this.isPageClone = !!path.match(/\/insert\/clone\/$/i)
    }

    mounted() {
      this.handlePages()

      console.log(this.$route)
    }
  }
</script>
