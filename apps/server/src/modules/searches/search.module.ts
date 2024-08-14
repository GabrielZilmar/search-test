import { Module } from '@nestjs/common';
import { SearchController } from 'src/modules/searches/search.controller';

@Module({
  controllers: [SearchController],
  providers: [],
})
export class SearchModule {}
