import { NestFactory } from '@nestjs/core';
import { AppModule } from './root/application/start/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      enableDebugMessages: true,
    }),
  ); 
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
