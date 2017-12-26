import axios from 'axios'

//  sets base URL upon which additional routes are appended
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}
