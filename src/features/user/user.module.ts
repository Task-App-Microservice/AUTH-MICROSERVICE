import { Module } from '@nestjs/common';
import { CreateUserRepositoryImpl } from './adapters/out/repositories/create/create-user-repository-impl.provider';
import { DatabaseModule } from '../../root/application/database/database.module';
import { ReadUserRepositoryImpl } from './adapters/out/repositories/read/read-user-repository.provider';
import { UpdateUserImplService } from './application/services/update/update-user-impl.service';
import { UpdateUserRepositoryImpl } from './adapters/out/repositories/update/update-user-repository-impl.provider';
import { CreateUserServiceImpl } from './application/services/create/create-user-service-impl.service';
import { ReadUserImplService } from './application/services/read/read-user-impl.service';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [

  ],
  providers: [
    CreateUserRepositoryImpl,
    CreateUserServiceImpl,
    ReadUserRepositoryImpl,
    UpdateUserImplService,
    UpdateUserRepositoryImpl,
    ReadUserImplService
  ],
  exports: [
    UpdateUserImplService,
    ReadUserImplService,
    CreateUserServiceImpl,
  ]
})
export class UserModule {}
