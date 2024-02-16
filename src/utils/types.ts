export type NewsType = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
};

export type NewsContextType = {
  news: any[];
  isLoading: boolean;
  error: any;
  fetchNews: () => void;
};
