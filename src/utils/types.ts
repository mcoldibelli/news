export type NewsType = {
  id: number;
  title: string;
  summary: string;
  publishedAt: Date;
  link: string;
  images?: string | '';
  url?: string | '';
  type?: string | '';
  tag: string;
};

export type ThumbnailProps = {
  src: string;
  alt: string;
};

export type FetchStateType = {
  status: 'idle' | 'loading' | 'success' | 'error';
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
