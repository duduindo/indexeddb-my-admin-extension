<script>
  import { items, select } from '../../stores/navTabs'
</script>

<div>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    {#each $items as item, i}
      <li class="nav-item" role="presentation">
        <button
          class="nav-link {item.isActive ? 'active' : ''}"
          id="{item.id}-tab"
          aria-controls="{item.id}-pane"
          aria-selected="{item.isActive ? 'true' : 'false'}"
          on:click={() => select(i)}
          data-toggle="tab"
          role="tab">
          {item.title}
        </button>
      </li>
    {/each}
  </ul>

  <div class="tab-content" id="myTabContent">
    <slot />
  </div>
</div>
