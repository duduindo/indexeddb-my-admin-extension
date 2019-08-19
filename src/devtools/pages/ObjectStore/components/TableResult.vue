<template>
  <article>
    <form class="pure-form c-object-store-result" name="object-stores-list">
      <fieldset>
        <table class="pure-table">
          <thead>
            <tr>
              <td>#</td>
              <td>Key (Key path: "<span>isbn</span>")</td>
              <td>Value</td>
            </tr>
          </thead>

          <tbody>
            <tr :key="index" v-for="(field, index) in Array(20).fill('')" @click="handleSelected">
              <td>{{index}}</td>
              <td>{{Math.floor(Math.random() * 1e8)}}</td>
              <td>{title: "Quarry Memories", author: "Fred", isbn: {{Math.floor(Math.random() * 1e8)}}}</td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </form>
  </article>
</template>

<script>
  export default {
    name: 'object-store-result',
    methods: {
      handleSelected(e) {
        const tr = e.target.closest('tr')

        // e.ctrlKey  = control
        // e.shiftKey = shift

        tr.classList.toggle('active')
      }
    }
  }
</script>
