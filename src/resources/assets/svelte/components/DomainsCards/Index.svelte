<script>
  import { fade } from 'svelte/transition'
  import { optionsTabs } from '../../stores/tabs'
  import { setBreadcrumb } from '../../stores/breadcrumb'

  setBreadcrumb('Domains')
</script>

<div class="columns is-multiline">
  {#each $optionsTabs as option}
    <div class="column is-narrow" transition:fade="{{ duration: 100 }}">
      <div class="card">
        <div class="card-content p-0">
          <div class="content">
            <a href="/pages/database/list.html?origin={option.origin}" class="is-block p-3">
              <img class="image is-32x32 mx-auto mb-2" src="{option.favicon}" alt="" loading="lazy">
              <span>{option.host}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

