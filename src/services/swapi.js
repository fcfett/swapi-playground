import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://swapi.dev/api'
});

export const getFilms = async (userId) => {
  const route = `/films`;
  return await api.get(route);
};

export default api;
