<script>
  import { onMount } from 'svelte'
  import Dialog from '../Dialog/Index'

  let navs = []
  let items = []

  function selectNav(index) {
    navs.forEach(nav => {
      nav.ariaSelected = false
      nav.classList.remove('active')
    })

    navs[index].ariaSelected = true
    navs[index].classList.add('active')
  }

  function selectItem(index) {
    items.forEach(item => {
      item.classList.remove('show', 'active')
    })

    items[index].classList.add('show', 'active')
  }

  function select(index) {
    selectNav(index)
    selectItem(index)
  }
</script>


<Dialog title="Titulooo">
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="text-tab" data-toggle="tab" role="tab" aria-controls="text" aria-selected="true" bind:this={navs[0]} on:click={() => select(0)}>Text</button>
    </li>

    <li class="nav-item" role="presentation">
      <button class="nav-link" id="file-tab" data-toggle="tab" role="tab" aria-controls="file" aria-selected="false" bind:this={navs[1]} on:click={() => select(1)}>File</button>
    </li>
  </ul>

  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="text" role="tabpanel" aria-labelledby="text-tab" bind:this={items[0]}>Text</div>
    <div class="tab-pane fade" id="file" role="tabpanel" aria-labelledby="file-tab" bind:this={items[1]}><p>File</p></div>
  </div>

  <div slot="footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button class="btn btn-primary">Next</button>
  </div>
</Dialog>
