### Types (prop)

- primary
- secondary


```vue
<template>
  <div class="platform-linux">
    <ButtonLike>Open modal</ButtonLike>
    <ButtonLike type="primary">Open modal</ButtonLike>
  </div>
</template>

<script>
  import ButtonLike from '@/common/vue/components/ButtonLike'

  export default {
    name: 'doc-example',
    components: { ButtonLike }
  }
</script>
```
