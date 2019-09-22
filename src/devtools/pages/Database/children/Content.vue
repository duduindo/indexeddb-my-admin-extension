<template>
  <article>
    <h1 class="ml-3">{{ title }}</h1>
    <hr>

    <div class="ml-3">
      <form class="pure-form" name="object-stores-list">
        <fieldset>
          <table class="pure-table">
            <thead>
              <tr>
                <th><input title="Check all" type="checkbox"></th>
                <th>Object stores</th>
                <th>Indexes</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><input value="books" type="checkbox"></td>
                <td><a href="#/">books</a></td>
                <td>2</td>
              </tr>

              <tr>
                <td><input value="e-readers" type="checkbox"></td>
                <td><a href="#/">e-readers</a></td>
                <td>2</td>
              </tr>
            </tbody>
          </table>

          <div class="mt-3 ml-2">
            <img src="images/arrow_ltr.png" alt="">
            <select class="select" name="stores-actions">
              <option value="">With selected:</option>
              <option value="">Delete</option>
              <option value="">Clone</option>
              <option value="">Join</option>
            </select>
          </div>
        </fieldset>
      </form>
    </div>
    <hr>

    <div class="ml-3">
      <h2>Options</h2>
      <a class="pure-button btn btn-outline-primary mt-2 mr-3" href="#">Create object stores</a>
      <button class="pure-button btn btn-outline-error mt-2" type="button">Delete database</button>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'database-content',
    data() {
      return {
        title: 'library'
      }
    },
    mounted() {
      const { database } = this.$route.params

      this.title = database
    }
  }
</script>
