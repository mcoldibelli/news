import { IBGE_HOME } from './constants';

export const parseThumbnail = (thumbnail: string): string => {
  if (thumbnail) {
    const parsedThumbnail = JSON.parse(thumbnail);

    return `${IBGE_HOME}${parsedThumbnail.image_intro}`;
  }

  return 'https://via.placeholder.com/300x200';
};
