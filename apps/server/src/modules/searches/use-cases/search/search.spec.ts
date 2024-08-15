import { InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { DuckDuckGoSearchResponseMock } from 'test/mock/services/search-engines/duck-duck-go/search-result.mock';
import { SearchDTO } from '~/modules/searches/dto/search.dto';
import { Search } from '~/modules/searches/use-cases/search';
import { HashDB } from '~/services/db/hash';
import { DuckDuckGo } from '~/services/search-engines/duck-duck-go';

(fetch as jest.Mock) = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(DuckDuckGoSearchResponseMock),
  }),
);

describe('Search Use Case', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await getModuleTest();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  const getModuleTest = async () =>
    Test.createTestingModule({
      imports: [],
      providers: [Search, DuckDuckGo, HashDB],
    }).compile();

  it('Should return search result', async () => {
    const useCase = module.get<Search>(Search);
    const response = await useCase.execute({ searchTerm: 'Elden ring' });

    expect(response).toEqual(SearchDTO.toDTO(DuckDuckGoSearchResponseMock));
  });

  it('Should throw error', async () => {
    const useCase = module.get<Search>(Search);
    const errorMock = new Error('Error');
    jest.spyOn(useCase, 'execute').mockRejectedValue(errorMock);

    await expect(useCase.execute({ searchTerm: 'Elden ring' })).rejects.toThrow(
      new InternalServerErrorException(errorMock.message),
    );
  });
});
