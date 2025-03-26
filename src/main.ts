import { NestFactory } from '@nestjs/core';
import { AppModule } from './root/application/start/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors: {
      origin: [
        "https://tasl-app.onrender.com",
        "http://localhost:3000",
        "https://symmetrical-enigma-767vv6r5x77hp79x-3000.app.github.dev"
      ]
    }
  });
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
