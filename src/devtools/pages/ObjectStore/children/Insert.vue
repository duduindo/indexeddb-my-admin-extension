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
    json: string = '[]'
    page: string = ''
    isPageClone: boolean = false
    isPageAdd: boolean = false

    get value(): string {
      return format(this.json)
    }

    @Watch('page')
    handlePage(value: string) {
      this.isPageClone = value === 'clone'
      this.isPageAdd = value === 'add'
    }

    @Watch('$route', { immediate: true })
    handleRoute(route: any) {
      const { pathMatch = 'any' } = route.params

      this.page = pathMatch
    }

    @Watch('$route', { immediate: true })
    handleJson(route: any) {
      const { data = [] } = route.query

      this.json = JSON.stringify(data)
    }
  }
</script>
