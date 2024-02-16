const IBGE_ENDPOINT = 'https://servicodados.ibge.gov.br/api/v3/noticias';

const fetchApi = async () => {
  const response = await fetch(IBGE_ENDPOINT);
  const data = await response.json();
  return data.items;
};

export default fetchApi;
