<script>
  import pick from 'lodash/pick'
  import { params } from '../../stores/searchParams'
  import { closeAllModals, openModal } from '../../stores/modal'
  import { deleteDatabases, structures } from '../../stores/database'
  import { setBreadcrumb } from '../../stores/breadcrumb'
  import Modal from '../Modal/Index'

  let checked = []
  let checkboxs = []
  let modalName = 'modal-drop-databases'
  let domain = $params.domain
  let origin = $params.origin
  let messageError = ''

  structures.subscribe(value => {
    console.log(value)
  })

  $: totalDatabases = $structures.length
  $: hasStructures = totalDatabases
  $: shouldDisableDropButton = checked.length ? null : true
  $: structuresSelected = Object.values(pick($structures, checked))
  $: setBreadcrumb(`Domain: ${domain}`)


  function drop() {
    const names = structuresSelected.map(({ name }) => name)

    deleteDatabases(names)
      .then(() => {
        // location.href = location.href
      })
      .catch(err => {
        messageError = err;

        closeAllModals()
        openModal('modal-drop-databases-error')
      })
  }

  function checkAll() {
    checkboxs.forEach(checkbox => {
      checkbox.checked = true
      checkbox.dispatchEvent(new Event('change'))
    })
  }
</script>

<Modal name="modal-drop-databases-error">
  <article class="message">
    <div class="message-header">
      <p>Error</p>
    </div>

    <div class="message-body">
      <code class="is-block mb-2 is-small">
        {messageError}
      </code>

      <div class="is-flex is-justify-content-flex-end">
        <button class="button mr-2" on:click={closeAllModals}>Ok</button>
      </div>
    </div>
  </article>
</Modal>

<Modal name="modal-drop-databases">
  <article class="message">
    <div class="message-header">
      <p>You are about to DESTROY a complete database!</p>
    </div>

    <div class="message-body">
      <p class="mb-2">Do you really want to execute?</p>

      {#each structuresSelected as structure}
        <code class="is-block mb-2 is-small">
          <i>
            indexedDB.deleteDatabase("{ structure.name }")
          </i>
        </code>
      {/each}

      <div class="is-flex is-justify-content-flex-end">
        <button class="button mr-2" on:click={closeAllModals}>Cancel</button>
        <button class="button is-danger" on:click={drop}>Yes, drop!</button>
      </div>
    </div>
  </article>
</Modal>


{#if !hasStructures}
  <article class="message is-warning">
    <div class="message-body">
      <p class="subtitle">No databases found at <code>{domain}</code></p>
    </div>
  </article>
{/if}


{#if hasStructures}
  <form>
    <table class="table is-fullwidth is-striped is-hoverable">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Database</th>
          <th scope="col">Version</th>
          <th scope="col">Stores</th>
        </tr>
      </thead>

      <tbody>
        {#each $structures as structure, i}
          <tr>
            <th scope="row" width="60">
              <label class="checkbox is-large is-block has-text-centered p-1" aria-label="Select the database {structure.name}">
                <input type="checkbox" bind:this={checkboxs[i]} bind:group={checked} value={i}>
              </label>
            </th>
            <td>
              <a href="/pages/database/index.html?origin={origin}&name={structure.name}&version={structure.version}">
                {structure.name}
              </a>
            </td>
            <td>
              {structure.version}
            </td>
            <td>
              {structure.tables.length}
            </td>
          </tr>
        {/each}
      </tbody>

      <tfoot>
        <tr>
          <td colspan="4">
            <div  class="is-flex is-align-items-center">
              <strong>Total: {totalDatabases}</strong>
              <button type="button" class="button is-ghost mx-2" on:click={checkAll}>Check all</button>
              <button type="button" class="button is-ghost mx-2 has-text-danger" disabled={shouldDisableDropButton} on:click={() => openModal('modal-drop-databases')}>Drop</button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </form>
{/if}
