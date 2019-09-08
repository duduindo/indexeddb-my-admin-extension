<template>
  <div v-if="text.length">
    <div :class="`alert alert-${type}`">
      <div>
        <h4 class="alert-heading" v-if="title.length">{{title}}</h4>
        <hr v-if="title.length">
        <p class="alert-body">{{text}}</p>
      </div>

      <button class="pure-button btn btn-icon"><font-awesome-icon icon="times-circle" /></button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'

  @Component({
    name: 'alert'
  })
  export default class Alert extends Vue {
    @Prop({ type: String, default: 'secondary' }) readonly type!: string
    @Prop({ type: String, default: '' }) readonly title!: string
    @Prop({ type: String, default: '' }) readonly text!: string
  }
</script>
