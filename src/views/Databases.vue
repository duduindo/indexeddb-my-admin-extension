<template>
  <div>
    <div class="mb-4">
      <h2 class="h6">Add database from IndexedDB:</h2>
      <form action=".">
        <fieldset>
          <input class="small" placeholder="Name" minLength="1" type="text" name="database_name" required/> &nbsp;
          <input class="small" placeholder="Version" minLength="1" min="1" type="number" name="database_version" required/> &nbsp;
          <button class="small">Add</button>
        </fieldset>
      </form>
    </div>

    <table class="table table-sm table-phpmyadmin small">
      <thead>
        <tr>
          <th scope="col"><input type="checkbox" title="Select all"/></th>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Version</th>
          <th scope="col">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><input type="checkbox"/></td>
          <th scope="row">ID</th>
          <td>name</td>
          <td>version</td>
          <td>
            <button class="small">Copy</button> &nbsp;
            <button class="small">Delete</button>
          </td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td></td>
          <td colspan="4"><strong>Total: 100</strong></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped lang="sass">
  thead,
  tfoot
    background: linear-gradient(#fff, #dcdcdc)

    td, th
      border-right: 2px solid #fff
      color: red

    th:first-child
      padding-left: .3rem

  thead
    color: #235a81
    text-shadow: 0 1px 0 #fff

  tbody
    td
      padding: .3rem


</style>
