<script>
  import { items } from '../../stores/breadcrumb'
</script>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    {#each $items as item}
      <li class="{item.isActive ? 'is-active' : '' }">
        <a class="has-text-white" href="{item.href ? item.href : location.href}" aria-current="{ item.isActive ? 'page' : null }">{item.name}</a>
      </li>
    {/each}
  </ul>
</nav>
