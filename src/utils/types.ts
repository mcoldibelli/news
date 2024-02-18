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
  news: NewsType[];
  filterType: string;
  filteredNews: NewsType[];
  favoriteNewsIds: number[];
  isLoading: boolean;
  error: any;
  setFilterType: (type: string) => void;
  setFilteredNews: (filtered: NewsType[]) => void;
  setFavoriteNewsIds: (ids: number[]) => void;
  fetchNextPage: () => void;
  searchText: string;
  setSearchText: (text: string) => void;
};

export type NewsItemProps = {
  newsItem: NewsType;
};
