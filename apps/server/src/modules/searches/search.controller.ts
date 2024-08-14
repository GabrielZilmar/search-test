import { Controller, Get, Query } from '@nestjs/common';
import { SearchQueriesDTO } from '~/modules/searches/dto/search.dto';
import { Search } from '~/modules/searches/use-cases/search';

@Controller('/api/search')
export class SearchController {
  constructor(private readonly searchUseCase: Search) {}

  @Get()
  async search(@Query() query: SearchQueriesDTO) {
    return this.searchUseCase.execute({ ...query });
  }
}
