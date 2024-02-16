import { IBGE_ENDPOINT } from '../utils/constants';

const fetchApi = async () => {
  const response = await fetch(IBGE_ENDPOINT);
  const data = await response.json();
  return data.items;
};

export default fetchApi;
