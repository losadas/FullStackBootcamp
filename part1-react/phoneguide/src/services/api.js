import axios from "axios";
const baseUrl = "http://localhost:3001/api/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const erase = (id) => {
  return axios.delete(`http://localhost:3001/api/persons/${id}`);
};

const api = {
  getAll,
  create,
  erase,
};

export default api;
