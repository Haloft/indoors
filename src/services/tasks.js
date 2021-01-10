import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/v1/tasks'

/* let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}
console.log(token)
 */

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(response)
  return response.data
}

const createNew = async (task) => {
  const object = { task }
  /* const config = {
    headers: { Authorization: token },
  } */
  const response = await axios.post(baseUrl, object.task)
  console.log(response)

  return response.data}

const delTask = async (id) => {
  const request = await axios.delete(`${baseUrl}/${id}`)
  console.log(request)
}

const updateTask = async (id, newObject) => {
  const request = await axios.put(`${baseUrl}/${id}`, newObject)
  return request.data.data
}

export default {
  //setToken,
  getAll,
  createNew,
  delTask,
  updateTask,
}