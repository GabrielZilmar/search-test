import { Module } from '@nestjs/common';
import { SearchController } from '~/modules/searches/search.controller';
import searchesUseCaseProviders from '~/modules/searches/use-cases/providers';

@Module({
  controllers: [SearchController],
  providers: [...searchesUseCaseProviders],
})
export class SearchModule {}
