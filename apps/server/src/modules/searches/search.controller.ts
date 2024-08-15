import { Body, Controller, Post } from '@nestjs/common';
import { SearchBodyDTO } from '~/modules/searches/dto/search.dto';
import { Search } from '~/modules/searches/use-cases/search';

@Controller('/api/search')
export class SearchController {
  constructor(private readonly searchUseCase: Search) {}

  @Post()
  async search(@Body() body: SearchBodyDTO) {
    return this.searchUseCase.execute({ ...body });
  }
}
