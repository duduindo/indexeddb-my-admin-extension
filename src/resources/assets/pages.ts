
import StorageTree from './svelte/components/StorageTree/Index'


document.querySelectorAll('[data-storage-tree]').forEach(target => new StorageTree({ target }))
