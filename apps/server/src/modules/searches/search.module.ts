import { Module } from '@nestjs/common';
import { SearchController } from '~/modules/searches/search.controller';
import searchesUseCaseProviders from '~/modules/searches/use-cases/providers';
import { DuckDuckGo } from '~/services/search-engines/duck-duck-go';

@Module({
  controllers: [SearchController],
  providers: [...searchesUseCaseProviders, DuckDuckGo],
})
export class SearchModule {}
