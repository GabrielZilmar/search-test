import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SearchDTO, SearchQueriesDTO } from '~/modules/searches/dto/search.dto';
import { DuckDuckGo } from '~/services/search-engines/duck-duck-go';
import { UseCase } from '~/shared/core/use-case';

type SearchParams = SearchQueriesDTO;
type SearchResponse = SearchDTO;

@Injectable()
export class Search implements UseCase<SearchParams, SearchDTO> {
  constructor(private readonly duckDuckGo: DuckDuckGo) {}

  async execute({ searchTerm }: SearchParams): Promise<SearchResponse> {
    try {
      const searchResult = await this.duckDuckGo.search(searchTerm);
      return SearchDTO.toDTO(searchResult);
    } catch (e) {
      throw new InternalServerErrorException((e as Error).message);
    }
  }
}
