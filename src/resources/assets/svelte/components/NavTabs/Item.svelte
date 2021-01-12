<script>
  import uniqueId from 'lodash/uniqueId'
  import { onMount } from 'svelte'
  import { addItem, items } from '../../stores/navTabs'

  const isActive = false
  const id = uniqueId('nav-tabs-')
  let element = null
  let title = ''

  onMount(() => addItem({ isActive, title, element, id }))

  export { title }
</script>

<div class="tab-pane fade" id="{id}-pane" role="tabpanel" aria-labelledby="{id}-tab" bind:this={element}>
  <slot />
</div>
