import { InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import path from 'path';
import fs from 'fs';
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
  const searchTerm = 'Elden ring';

  beforeAll(() => {
    const filePath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '/services/',
      'db',
      'hash',
      'data.json',
    );
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  });

  beforeEach(async () => {
    module = await getModuleTest();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const getModuleTest = async () =>
    Test.createTestingModule({
      imports: [],
      providers: [Search, DuckDuckGo, HashDB],
    }).compile();

  it('Should return search result', async () => {
    const useCase = module.get<Search>(Search);

    const response = await useCase.execute({ searchTerm });
    expect(response).toEqual(
      SearchDTO.toDTO({ ...DuckDuckGoSearchResponseMock, name: searchTerm }),
    );
  });

  it('Should throw error', async () => {
    const useCase = module.get<Search>(Search);
    const errorMock = new Error('Error');
    jest.spyOn(useCase, 'execute').mockRejectedValue(errorMock);

    await expect(useCase.execute({ searchTerm: searchTerm })).rejects.toThrow(
      new InternalServerErrorException(errorMock.message),
    );
  });

  it('Should return search result from cache', async () => {
    const useCase = module.get<Search>(Search);
    const hashDB = module.get<HashDB>(HashDB);
    const hashDbSpy = jest.spyOn(hashDB, 'find');

    hashDbSpy.mockReturnValue(
      SearchDTO.toDTO({ ...DuckDuckGoSearchResponseMock, name: searchTerm }),
    );

    const response = await useCase.execute({ searchTerm });

    expect(response).toEqual(
      SearchDTO.toDTO({ ...DuckDuckGoSearchResponseMock, name: searchTerm }),
    );
    expect(hashDbSpy).toHaveBeenCalledWith(searchTerm);
    expect(hashDbSpy).toHaveReturnedWith(
      SearchDTO.toDTO({ ...DuckDuckGoSearchResponseMock, name: searchTerm }),
    );
  });

  it('Should insert search result to cache', async () => {
    const useCase = module.get<Search>(Search);
    const hashDB = module.get<HashDB>(HashDB);
    jest.spyOn(hashDB, 'find').mockReturnValue(null);
    const hashDbSpy = jest.spyOn(hashDB, 'insert');
    hashDbSpy.mockReturnValue(true);

    const response = await useCase.execute({ searchTerm });

    expect(response).toEqual(
      SearchDTO.toDTO({ ...DuckDuckGoSearchResponseMock, name: searchTerm }),
    );
    expect(hashDbSpy).toHaveBeenCalledWith(
      searchTerm,
      SearchDTO.toDTO({ ...DuckDuckGoSearchResponseMock, name: searchTerm }),
    );
    expect(hashDbSpy).toHaveReturnedWith(true);
  });
});
