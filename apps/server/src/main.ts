import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Env from '~/shared/env';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(Env.port);
}
bootstrap();
