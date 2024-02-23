import { IBGE_ENDPOINT } from '../utils/constants';
import { parseDate } from '../utils/helpers';

const fetchApi = async (page = 1, pageSize = 9) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(`${IBGE_ENDPOINT}/?qtd=${pageSize}&page=${page}`);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();

    const formattedNewsData = data.items.map((item:any) => ({
      id: item.id,
      title: item.titulo,
      summary: item.introducao,
      publishedAt: parseDate(item.data_publicacao),
      link: item.link,
      images: item.imagens,
      type: item.tipo,
      tag: item.editorias,
    }));

    return formattedNewsData;
  } catch (err: any) {
    if (err.name === 'AbortError') {
      throw new Error('Fetch request timed out');
    } else {
      throw new Error('Failed to fetch news');
    }
  } finally {
    clearTimeout(timeoutId);
  }
};

export default fetchApi;
