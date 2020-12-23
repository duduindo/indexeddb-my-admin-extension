import fetchContent from '@/models/FetchContent/fetchContent'


document.addEventListener('click', () => {
  fetchContent('http://localhost:8082/test/4/structure/')
    .then(e => console.log(e))
    .catch(err => console.log(err))
})
