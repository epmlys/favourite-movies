// OMDb Client API methods

import axios from 'axios';

export const baseUrl = 'https://www.omdbapi.com/?apikey=68eae8f6&s=sopranos';

export async function getTopMovies() {
  return axios.get(baseUrl);
}
