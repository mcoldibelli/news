/* eslint-disable @typescript-eslint/naming-convention */
import { vi } from 'vitest';
import { IBGE_HOME } from './constants';
import { parseThumbnail } from './helpers';

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
});
