import { Test, TestingModule } from '@nestjs/testing';
import { DuckDuckGoSearchResponseMock } from 'test/mock/services/search-engines/duck-duck-go/search-result.mock';
import { HistoryResponseDTO } from '~/modules/searches/dto/query-history.dto';
import { SearchDTO } from '~/modules/searches/dto/search.dto';
import { ListQueryHistory } from '~/modules/searches/use-cases/list-query-history';
import { HashDB } from '~/services/db/hash';

describe('ListQueryHistory Use Case', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await getModuleTest();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const getModuleTest = async () =>
    Test.createTestingModule({
      imports: [],
      providers: [ListQueryHistory, HashDB],
    }).compile();

  it('Should return search history', async () => {
    const useCase = module.get<ListQueryHistory>(ListQueryHistory);

    const mockHistory = [
      SearchDTO.toDTO({ ...DuckDuckGoSearchResponseMock, name: 'Elden ring' }),
    ];
    const hashDB = module.get<HashDB>(HashDB);
    const listResult = {
      items: mockHistory,
      pages: 1,
    };
    jest.spyOn(hashDB, 'list').mockReturnValue(listResult);
    const response = useCase.execute({ page: 1 });

    expect(response).toEqual(HistoryResponseDTO.toDTO(listResult));
  });
});
