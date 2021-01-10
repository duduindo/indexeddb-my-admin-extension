<script>
  export let title = ''
</script>

<dialog class="bg-transparent" open>
  <div class="modal fade show d-block" id="exampleModal" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{ title }</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">x</span>
          </button>
        </div>

        <div class="modal-body">
          <slot />
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button class="btn btn-primary">OK</button>
          </slot>
        </div>
      </div>
    </div>
  </div>

  <div class="modal-backdrop fade show"></div>
</dialog>
