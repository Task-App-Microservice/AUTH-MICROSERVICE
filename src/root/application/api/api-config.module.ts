import { Module } from '@nestjs/common';
import { ApiKeyGuard } from './guard/api-kay.guard';

@Module({
  imports: [],
  controllers: [],
  providers: [
    ApiKeyGuard
  ],
  exports: [
    ApiKeyGuard
  ]
})
export class ApiConfigModule {}
