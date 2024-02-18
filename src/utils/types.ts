export type NewsType = {
  id: number;
  titulo: string;
  introducao: string;
  url: string;
  data_publicacao: string;
  link: string;
  imagens: string;
};

export type NewsContextType = {
  news: any[];
  isLoading: boolean;
  error: any;
  fetchNews: () => void;
  favoriteNewsIds: number[];
  setFavoriteNewsIds: (ids: number[]) => void;
  filterType: string;
  setFilterType: (type: string) => void;
  filteredNews: any[];
  setFilteredNews: (filtered: any) => void;
};

export type NewsItemProps = {
  id: number;
  title: string;
  intro: string;
  date: Date;
  link: string;
};
