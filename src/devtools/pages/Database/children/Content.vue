<template>
  <article>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <form class="pure-form" name="object-stores-list">
            <fieldset>
              <table class="pure-table">
                <thead>
                  <tr>
                    <td><input title="Check all" type="checkbox"></td>
                    <td>Object stores</td>
                    <td>Indexes</td>
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

              <div class="mt-3">
                <i>With selected:</i>
                <select class="select" name="stores-actions">
                  <option value="">Delete</option>
                  <option value="">Clone</option>
                  <option value="">Join</option>
                </select>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    <hr>

    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h3>Create stores</h3>
          <form class="pure-form" action="#" name="object-stores-create">
            <button type="button" class="pure-button btn btn-secondary mb-2" @click="removeField">Remove last field</button>
            <button type="button" class="pure-button btn btn-primary mb-2" @click="addField">Add field</button>
            <a href="#/" class="pure-button btn btn-success mb-2">Go</a>

            <fieldset :key="field" v-for="field in fieldsToCreate">
              <div class="pure-control-group">
                <label :for="`name${field}`">Name:</label>
                <input :id="`name${field}`" type="text" class="ml-2">

              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'database-content',
    data() {
      return {
        title: 'saaas',
        fieldsToCreate: 2
      }
    },
    methods: {
      addField() {
        this.fieldsToCreate++
      },
      removeField() {
        if (this.fieldsToCreate > 1) {
          this.fieldsToCreate--
        }
      }
    },
    mounted() {
      const { database } = this.$route.params

      this.title = database
    }
  }
</script>
