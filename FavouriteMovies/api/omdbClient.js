// OMDb Client API methods

import axios from 'axios';

export const baseUrl = 'https://www.omdbapi.com/?apikey=68eae8f6&';

export async function getTopMovies() {
  return axios.get(baseUrl);
}

export async function searchMovies(query) {
  let url = `${baseUrl}s=${query}`;

  return axios.get(url);
}
