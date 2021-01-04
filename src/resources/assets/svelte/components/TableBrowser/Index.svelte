<script>
  import zipWith from 'lodash/zipWith'
  import isArrayLike from 'lodash/isArrayLike'
  import { content } from '../../stores/table'

  let columns = []
  let contents = {}

  content.subscribe(value => {
    const keys = Object.keys(value)
    const values = Object.values(value)

    columns = keys
    contents = zipWith(...values, (...params) => {
      return params.map(param => isArrayLike(param) ? param : JSON.stringify(param))
    })
  })
</script>


<table class="table table-sm table-striped table-bordered">
  <thead>
    <tr>
      {#each columns as column}
        <th scope="col">{column}</th>
      {/each}
    </tr>
  </thead>

  <tbody>
    {#each contents as content}
      <tr>
        {#each content as value}
          <td>
            {#if typeof value !== 'undefined'}
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

