<script>
  import browser from 'webextension-polyfill'

  function goToOrigin({ target }) {
    const { value } = target
    let url = browser.runtime.getURL('/pages/index.html')

    if (value !== '-1') {
      url = browser.runtime.getURL(`/pages/index.html?origin=${target.value}`)
    }

    location.href = url
  }

  export let options
</script>

<form>
  <div class="form-group text-center">
    <label for="current-domain">Current domain:</label>

    <!-- svelte-ignore a11y-no-onchange -->
    <select class="form-control" id="currentDomain" on:change={goToOrigin}>
      <option value="-1">(All domains)</option>

      {#each options as option}
        <option value="{option.value}" selected={option.isSelected}>
          {option.text}
        </option>
      {/each}
    </select>
  </div>
</form>
