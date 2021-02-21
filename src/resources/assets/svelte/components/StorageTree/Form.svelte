<script>
  import browser from 'webextension-polyfill'

  function goToOrigin({ target }) {
    const { value } = target
    let url = browser.runtime.getURL('/pages/index.html')

    if (value !== '-1') {
      url = browser.runtime.getURL(`/pages/database/list.html?origin=${target.value}`)
    }

    location.href = url
  }

  export let options
</script>

<form class="mb-3">
  <div class="field">
    <label class="label has-text-centered has-text-weight-normal" for="currentDomain">Current domain:</label>

    <div class="control">
      <div class="select">
        <!-- svelte-ignore a11y-no-onchange -->
        <select id="currentDomain" on:change={goToOrigin}>
          <option value="-1">(All domains)</option>

          {#each options as option}
            <option value="{option.value}" selected={option.isSelected}>
              {option.text}
            </option>
          {/each}
        </select>
      </div>
    </div>
  </div>
</form>
