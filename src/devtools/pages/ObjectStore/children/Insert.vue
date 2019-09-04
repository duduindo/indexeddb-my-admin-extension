<template>
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col">
        <MyComponent />
      </div>
    </div>

    <div class="row" v-if="isPageClone">
      <div class="col">
        <table class="pure-table c-table c-table-theme-chrome">
          <tbody>
            <tr :key="index" v-for="(item, index) in [1,2,3,4,5,6,7,8,8,8,8,8,8]">
              <td class="text-left">
                <textarea name="" id="" cols="80" rows="10"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import MyComponent from './MyComponent'

  export default {
    name: 'object-store-insert',
    components: { MyComponent },
    data() {
      return {
        label: 'empty',
        isPageAdd: false,
        isPageClone: false
      }
    },
    mounted() {
      const path = this.$route.path

      this.isPageAdd = path.match(/\/insert\/add\/$/i)
      this.isPageClone = path.match(/\/insert\/clone\/$/i)
    }
  }
</script>
