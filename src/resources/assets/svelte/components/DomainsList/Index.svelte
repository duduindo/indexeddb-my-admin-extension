<script>
  import { optionsTabs } from '../../stores/tabs'
</script>

{#each $optionsTabs as option}
  <tr>
    <td>
      <a href="/pages/database/list.html?origin={option.value}" class="is-size-4">
        {option.text}
      </a>
    </td>
  </tr>
{/each}

