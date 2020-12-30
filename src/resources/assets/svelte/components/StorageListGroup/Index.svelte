<script>
  import { optionsTabs } from '../../stores/tabs'
</script>

<div class="list-group">
  {#each $optionsTabs as option}
    <a href="{option.url}" class="list-group-item">
      {option.text}
    </a>
  {/each}
</div>

