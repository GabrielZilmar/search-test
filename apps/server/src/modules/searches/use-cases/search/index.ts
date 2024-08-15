import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SearchDTO, SearchBodyDTO } from '~/modules/searches/dto/search.dto';
import { HashDB } from '~/services/db/hash';
import { DuckDuckGo } from '~/services/search-engines/duck-duck-go';
import { UseCase } from '~/shared/core/use-case';

type SearchParams = SearchBodyDTO;
type SearchResponse = SearchDTO;

@Injectable()
export class Search implements UseCase<SearchParams, SearchDTO> {
  constructor(
    private readonly duckDuckGo: DuckDuckGo,
    private readonly hashDB: HashDB,
  ) {}

  async execute({ searchTerm }: SearchParams): Promise<SearchResponse> {
    const searchResult = this.hashDB.find(searchTerm);
    if (searchResult) {
      return searchResult;
    }

    try {
      const searchResult = await this.duckDuckGo.search(searchTerm);
      const resultDTO = SearchDTO.toDTO(searchResult);
      this.hashDB.insert(searchTerm, resultDTO);
      return resultDTO;
    } catch (e) {
      throw new InternalServerErrorException((e as Error).message);
    }
  }
}
