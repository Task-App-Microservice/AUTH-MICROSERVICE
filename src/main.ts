import { NestFactory } from '@nestjs/core';
import { AppModule } from './root/application/start/app.module';
import { ValidationPipe } from '@nestjs/common';
import { ApiKeyGuard } from './root/application/api/guard/api-kay.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors: true
  });
 // app.useGlobalGuards(new ApiKeyGuard());
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
