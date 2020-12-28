<script>
  import { optionsTabs } from '../../stores/tabs'
  import { allDatabasesStructured } from '../../stores/database'
  import Form from './Form'
  import Tree from './Tree'

  allDatabasesStructured.subscribe(value => {
    console.log(value)
  })

</script>

<Form options={$optionsTabs} />
<!-- <Tree databases={$databases} /> -->
