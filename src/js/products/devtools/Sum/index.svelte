<script type="text/ts">
  import Calc from './calc'
  import HelloWorld from 'common/HelloWorld'

  let sum: number = Calc.sum(1, 1e10)
  let says: string = HelloWorld.says()
</script>


<h1>Hello, World! {sum} | {says}</h1>
