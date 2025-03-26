import { NestFactory } from '@nestjs/core';
import { AppModule } from './root/application/start/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Configuração do CORS
  app.enableCors({
    origin: [
      "https://tasl-app.onrender.com",
      "http://localhost:3000",
      "https://symmetrical-enigma-767vv6r5x77hp79x-3000.app.github.dev"
    ],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true, // Se necessário para cookies/token
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
