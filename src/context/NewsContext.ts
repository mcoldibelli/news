import { createContext } from 'react';
import { NewsContextType } from '../utils/types';

const NewsContext = createContext({} as NewsContextType);

export default NewsContext;
