import { parse } from 'date-fns';
import { IBGE_HOME } from './constants';

export const parseThumbnail = (thumbnail: string): string => {
  const placeholder = 'https://via.placeholder.com/300x200';

  if (thumbnail) {
    let parsedThumbnail;
    try {
      // successfully parsed thumbnail
      parsedThumbnail = JSON.parse(thumbnail);
      return `${IBGE_HOME}${parsedThumbnail.image_intro}`;
    } catch (error) {
      // failed to parse thumbnail
      console.error('Error parsing thumbnail', error);
      return placeholder;
    }
  }
  // no thumbnail
  return placeholder;
};

export const daysSincePublished = (date: Date): number => {
  const now = new Date();

  const differenceInMs = Math.abs(now.getTime() - date.getTime());
  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

  if (Number.isNaN(differenceInDays)) {
    return 0;
  }

  return differenceInDays;
};

export const dateToString = (date: Date):string => {
  if (daysSincePublished(date) === 0) {
    return 'Publicado Hoje';
  }

  if (daysSincePublished(date) === 1) {
    return 'Publicado Ontem';
  }
  return `${daysSincePublished(date)} dias atrás`;
};

export const parseDate = (date: string): Date => {
  const dateString = date;
  const dateFormat = 'dd/MM/yyyy HH:mm:ss';
  const dateObject = parse(dateString, dateFormat, new Date());

  return dateObject;
};
