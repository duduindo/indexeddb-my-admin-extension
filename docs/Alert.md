### Types (prop)

- primary
- success
- error
- warning
- secondary (default)


```vue
<template>
  <div>
    <Alert text="type='secondary'" title="Title Here!" type="secondary" />
    <Alert text="type='primary'" type="primary" />
    <Alert text="type='success'" type="success" />
    <Alert text="type='error'" type="error" />
    <Alert text="type='warning'" type="warning" />
  </div>
</template>

<script>
  import Alert from '@/devtools/components/Alert'

  export default {
    name: 'doc-alert',
    components: { Alert }
  }
</script>
```
