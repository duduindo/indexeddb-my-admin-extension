<script>
  import { items } from '../../stores/breadcrumb'
</script>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    {#each $items as item}
      <li class="breadcrumb-item { (item.isActive) ? 'active' : '' }" aria-current="{ item.isActive ? 'page' : null }">
        {#if item.href}
          <a href="{item.href}">{item.name}</a>
        {:else}
          {item.name}
        {/if}
      </li>
    {/each}
  </ol>
</nav>
