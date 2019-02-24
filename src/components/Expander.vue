<template>
  <div>
    <ul>
      <li>
        <button>+</button> <span>Database 1</span>

        <ul>
          <li>
            <button>+</button> <span>Store 1</span>

            <ul>
              <li>
                <button>+</button> <span>Index 1</span>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    name: 'Expander',
    props: {}
  }
</script>


<style scoped lang="sass"></style>
