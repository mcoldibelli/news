export type NewsType = {
  id: number;
  tipo?: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produtos?: string;
  editorias: string;
  imagens: string;
  produtos_relacionados?: string;
  destaque?: boolean;
  link: string;
};

export type PaginationType = {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
};

export type FetchStateType = {
  status: 'idle' | 'loading' | 'success' | 'error';
  pagination: PaginationType;
  data: NewsType[];
  error: any;
};

export type NewsContextType = {
  fetchState: FetchStateType;
  filterType: string;
  filteredNews: NewsType[];
  favoriteNewsIds: number[];
  searchText: string;
  setFetchState: (state: FetchStateType) => void;
  setFilterType: (type: string) => void;
  setSearchText: (text: string) => void;
  setFilteredNews: (news: NewsType[]) => void;
  setFavoriteNewsIds: (ids: number[]) => void;
};
