<script>
  import { fade } from 'svelte/transition'
  import zipWith from 'lodash/zipWith'
  import isArrayLike from 'lodash/isArrayLike'
  import { querystring } from 'svelte-spa-router'
  import { data } from 'views/svelte/stores'
  import payloadToPromise from 'views/svelte/utils/payloadToPromise'


  const type = 'GET_CONTENT_FROM_TABLE'
  $: queryUpdated($querystring)
  $: handleData($data)
  $: head = []
  $: body = []


  function queryUpdated(value) {
    const search = new URLSearchParams(value)
    const params = Object.fromEntries(search)

    data.request(type, params)
  }

  function handleData(action) {
    const isThisType = action.type === type

    if (!isThisType) {
      return;
    }

    payloadToPromise(action.payload)
      .then(value => {
          const keys = Object.keys(value)
          const values = Object.values(value)

          head = keys
          body = zipWith(...values, (...params) => {
            return params.map(param => isArrayLike(param) ? param : JSON.stringify(param))
          })
        })
        .catch(err => alert(err))
  }
</script>


<div class="table-container" in:fade="{{ duration: 100 }}">
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th style="width: 3em"><abbr title="Options">%</abbr></th>
        {#each head as content}
          <th>{ content }</th>
        {/each}
      </tr>
    </thead>

    <tbody>
      {#if !body.length}
        <tr>
          <td colspan="{head.length + 1}">
            <p>Empty</p>
          </td>
        </tr>
      {/if}

      {#each body as content}
        <tr>
          <td>
            <label class="checkbox">
              <input type="checkbox">
            </label>
          </td>
          {#each content as value}
            <td>
              {#if typeof value !== 'undefined' }
                { value }
              {:else}
                <i><em>empty</em></i>
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
