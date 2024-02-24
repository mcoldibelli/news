/* eslint-disable react-func/max-lines-per-function */
/* eslint-disable @typescript-eslint/naming-convention */
import { IBGE_HOME } from './constants';
import { dateToString, daysSincePublished, parseDate, parseThumbnail } from './helpers';

describe('helpers', () => {
  describe('parseThumbnail', () => {
    it('should return correct URL for valid thumbnail', () => {
      const thumbnail = '{"image_intro": "/path/to/image.jpg"}';
      const expectUrl = `${IBGE_HOME}/path/to/image.jpg`;

      const result = parseThumbnail(thumbnail);
      expect(result).toBe(expectUrl);
    });

    it('should return placeholder URL for invalid thumbnail', () => {
      const invalidThumbnail = 'not-a-JSON';
      const expectUrl = 'https://via.placeholder.com/300x200';

      const result = parseThumbnail(invalidThumbnail);
      expect(result).toBe(expectUrl);
    });

    it('should return placeholder URL for no thumbnail', () => {
      const noThumbnail = '';
      const expectUrl = 'https://via.placeholder.com/300x200';

      const result = parseThumbnail(noThumbnail);
      expect(result).toBe(expectUrl);
    });
  });

  describe('daysSincePublished', () => {
    it('should return 0 for no date', () => {
      const result = daysSincePublished(new Date('error'));
      expect(result).toBe(0);
    });

    it('should return correct number of days since published', () => {
      const now = new Date();
      const date = new Date(now);
      date.setDate(now.getDate() - 5);

      const result = daysSincePublished(date);
      expect(result).toBe(5);
    });
  });

  describe('dateToString', () => {
    it('should return "Publicado Hoje" for today', () => {
      const today = new Date();
      const result = dateToString(today);
      expect(result).toBe('Publicado Hoje');
    });

    it('should return "Publicado Ontem" for yesterday', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const result = dateToString(yesterday);
      expect(result).toBe('Publicado Ontem');
    });

    it('should return "x dias atrás" for other days', () => {
      const date = new Date('2021-01-01');
      const result = dateToString(date);
      expect(result).not.toBe('Publicado Hoje');
      expect(result).not.toBe('Publicado Ontem');
    });
  });

  describe('parseDate', () => {
    it('should return correct date object', () => {
      const dateString = '01/01/2021 12:00:00';
      const result = parseDate(dateString);
      expect(result).toEqual(new Date('2021-01-01T12:00:00'));
      expect(result).toBeInstanceOf(Date);
    });
  });
});
