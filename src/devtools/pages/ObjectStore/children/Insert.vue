<template>
  <div class="container-fluid mt-3">
    <div class="row" v-if="isPageClone">
      <div class="col">
        <textarea :value="value" cols="80" rows="10" spellcheck="false"></textarea>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
  import { Vue, Component, Watch } from 'vue-property-decorator'
  import { format } from 'json-string-formatter'

  @Component({
    name: 'object-store-insert'
  })
  export default class ObjectStoreInsert extends Vue {
    jsonString: string = '[]'
    isPageClone: boolean = true

    get value(): string {
      return format(this.jsonString)
    }

    @Watch('$route', { immediate: true })
    handleRoute(value: any) {
      const path: string = value.path
      // const isPageAdd = !!path.match(/\/insert\/add\/$/i)
      // const isPageClone = !!path.match(/\/insert\/clone\/$/i)
      const regex = /\/insert(?<add>\/add)|(?<clone>\/clone)/i
      const match = path.match(regex) || { groups: { add: undefined, clone: undefined } }


      console.log(match.groups)
    }

    handleJson() {
      const data = this.$route.query.data
      const json = JSON.stringify(data)

      this.jsonString = json
    }

    mounted() {
      this.handleJson()
    }
  }
</script>
