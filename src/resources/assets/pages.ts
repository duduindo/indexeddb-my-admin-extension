import fetchContent from '@/models/FetchContent/fetchContent'


document.addEventListener('click', () => {
  fetchContent('http://localhost:8082/database/indexeddb/test/3/structure/')
    .then(e => console.log(3, e))
    .catch(err => console.log(err))

})
