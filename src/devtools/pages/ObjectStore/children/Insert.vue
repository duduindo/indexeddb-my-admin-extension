<template>
  <article>
    <div class="container-fluid mt-2">
      <div class="row">
        <div class="col">
          <Alert text="Lorem Ipsum" type="success"/>
          <Alert text="Error!!!" type="error"/>
          <button class="pure-button btn btn-secundary" type="button" @click="copy">{{labelCopied}}</button>
          <button class="pure-button btn btn-primary" type="button" v-if="isPageAdd || isPageClone">Add</button>
          <button class="pure-button btn btn-primary" type="button" v-if="isPageUpdate">Update</button>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col">
          <textarea :value="value" ref="textarea" cols="80" rows="10" spellcheck="false"></textarea>
        </div>
      </div>
    </div>
  </article>
</template>


<script lang="ts">
  import { Vue, Component, Watch } from 'vue-property-decorator'
  import { format } from 'json-string-formatter'
  import Alert from '@/devtools/components/Alert.vue'

  @Component({
    name: 'object-store-insert',
    components: { Alert }
  })
  export default class ObjectStoreInsert extends Vue {
    json: string = '[]'
    page: string = ''
    isPageAdd: boolean = false
    isPageClone: boolean = false
    isPageUpdate: boolean = false
    labelCopied: string = 'Copy to clipboard'

    get value(): string {
      return format(this.json)
    }

    @Watch('page')
    handlePage(value: string) {
      this.isPageAdd = value === 'add'
      this.isPageClone = value === 'clone'
      this.isPageUpdate = value === 'update'
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

    copy() {
      const textarea: any = this.$refs.textarea

      textarea.select()
      document.execCommand('copy')
      this.labelCopied = 'Copied to clipboard'
    }
  }
</script>
