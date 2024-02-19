export type NewsType = {
  id: number;
  title: string;
  summary: string;
  publishedAt: Date;
  link: string;
  images?: string | '';
  url?: string | '';
  type?: string | '';
};

export type ThumbnailProps = {
  src: string;
  alt: string;
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
  setSearchText: (text: string) => void;
};

export type NewsItemProps = {
  newsItem: NewsType;
};
