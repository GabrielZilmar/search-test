import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SearchModule } from '~/modules/searches/search.module';
import { HashDB } from '~/services/db/hash';
import { DuckDuckGo } from '~/services/search-engines/duck-duck-go';

const allProviders = [DuckDuckGo, HashDB];

@Global()
@Module({
  imports: [
    SearchModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [...allProviders],
  exports: [...allProviders],
})
export class AppModule {}
