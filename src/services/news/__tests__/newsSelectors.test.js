import { getNewsSelector, getNewsLoading } from '../newsSelectors';

describe('newsSelectors', () => {
  describe('getNewsSelector', () => {
    const mockNews = [{ id: 1, title: 'news 1' }, { id: 2, title: 'news 2' }];

    const expectedState = {
      services: {
        news: {
          results: mockNews,
        },
      },
    };

    it('should return news', () => {
      expect(getNewsSelector(expectedState)).toEqual(mockNews);
    });
  });

  describe('getNewsLoading', () => {
    it('should return true', () => {
      const mockLoaders = {
        GET_NEWS: true,
      };

      const result = getNewsLoading.resultFunc(mockLoaders);
      expect(result).toEqual(true);
    });
  });
});
