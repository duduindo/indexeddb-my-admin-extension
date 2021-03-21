<script>
  import { onMount } from 'svelte'
  import { closeAllModals, modals, registerModal } from '../../stores/modal'

  let isActive = false

  onMount(() => {
    registerModal(name)
  })

  modals.subscribe((modals = []) => {
    const hasModal = modals.find(modal => modal.name === name)

    if (hasModal) {
      isActive = hasModal.isActive
    }
  })

  function handleKeydown({ keyCode }) {
    const isKeyESC = keyCode === 27;

    if (isActive && isKeyESC) {
      closeAllModals()
    }
  }

  export let name
</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="modal {isActive ? 'is-active' : ''}" role="dialog" on:keydown={handleKeydown}>
  <div class="modal-background" on:click={closeAllModals}></div>
  <div class="modal-content">
    <slot/>
  </div>

  <button class="modal-close is-large" aria-label="close" on:click={closeAllModals}></button>
</div>
