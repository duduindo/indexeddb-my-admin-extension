import { get, writable } from 'svelte/store'

const modals = writable([])

function registerModal(name) {
  modals.update(modal => [...modal, { name, isActive: false }])
}

function openModal(name) {
  const value = get(modals);
  const newValue = value.map(modal => modal.name === name ? {...modal, isActive: true} : modal)

  modals.set(newValue)
}

function closeAllModals() {
  const value = get(modals);
  const newValue = value.map(modal => ({...modal, isActive: false}))

  modals.set(newValue)
}


export {
  closeAllModals,
  modals,
  openModal,
  registerModal,
}
