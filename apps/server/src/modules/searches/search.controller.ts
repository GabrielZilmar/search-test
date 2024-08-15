import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SearchBodyDTO } from '~/modules/searches/dto/search.dto';
import { ListQueryHistory } from '~/modules/searches/use-cases/list-query-history';
import { Search } from '~/modules/searches/use-cases/search';
import { PaginatedDto } from '~/shared/dto/paginated';

@Controller('/api/search')
export class SearchController {
  constructor(
    private readonly searchUseCase: Search,
    private readonly listQueryHistory: ListQueryHistory,
  ) {}

  @Post()
  async search(@Body() body: SearchBodyDTO) {
    return this.searchUseCase.execute({ ...body });
  }

  @Get('/history')
  async listHistory(@Query() query: PaginatedDto) {
    return this.listQueryHistory.execute({ ...query });
  }
}
