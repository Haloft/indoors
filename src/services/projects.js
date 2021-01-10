import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/v1/projects'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(response)
  return response.data.data
}

const createNew = async (project) => {
  const object = { project }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const delProject = async (id) => {
  await axios.delete(`${baseUrl}/${id}`)
}

const updateProject = async (id, newObject) => {
  const request = await axios.put(`${baseUrl}/${id}`, newObject)
  return request.data.data
}

export default  {
  getAll,
  createNew,
  delProject,
  updateProject,
}