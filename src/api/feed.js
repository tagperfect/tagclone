import axios from 'axios'

const getFeed = (apiUrl) => {
  return axios.get(apiUrl)
}

export default {getFeed}
