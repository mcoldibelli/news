import { IBGE_ENDPOINT, NEWS_PER_PAGE } from '../utils/constants';

export const fetchNewsPage = async (page: number, search = '') => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(
      `${IBGE_ENDPOINT}/?qtd=${NEWS_PER_PAGE}&page=${page}&busca=${search}`,
    );

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
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
