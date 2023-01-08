import axios from 'axios'

const getPopularTags = () => {
  return axios.get('/tags').then((response) => response.data.tags)
}

export default {getPopularTags}
