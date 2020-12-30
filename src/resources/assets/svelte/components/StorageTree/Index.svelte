<script>
  import { optionsTabs } from '../../stores/tabs'
  import { structures } from '../../stores/database'
  import Form from './Form'
  import Tree from './Tree'
</script>

<Form options={$optionsTabs} />
<Tree structures={$structures} />
