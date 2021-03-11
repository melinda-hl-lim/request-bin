import axios from 'axios'

const get = (slug) => {
  const request = axios.get(`/data/${slug}`)
  return request.then(response => response.data)
}

const create = () => {
  const request = axios.post('/bins')
  return request.then(response => response.data.uri)
}

const bins = {
  get,
  create
}

export default bins