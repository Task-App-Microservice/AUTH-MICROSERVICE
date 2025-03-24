import { Module } from '@nestjs/common';
import { CreateVerificationAccountImplService } from './application/services/create/create-verification-account-impl.service';
import { CreateVerificationAccountRepositoryImpl } from './adapters/out/repositories/create/verification-account-repository-impl.provider';
import { DatabaseModule } from '../../root/application/database/database.module';
import { VerificationAccountCodeController } from './adapters/in/read/verfication-account-code.controller';
import { ReadVerificationAccountImplService } from './application/services/read/read-verification-account-impl.service';
import { ReadVerificationAccountRepositoryImpl } from './adapters/out/repositories/read/read-verification-account-repository-impl.provider';
import { UserModule } from '../user/user.module';
import { VerificationAccountImplService } from './application/services/create/verification-account-impl.service';
import { DeleteVerificationAccountImpl } from './adapters/out/repositories/delete/delete-verificatin-account-impl.provider';

@Module({
  imports: [
    DatabaseModule,
    UserModule
  ],
  controllers: [
    VerificationAccountCodeController 
  ],
  providers: [
    CreateVerificationAccountImplService,
    CreateVerificationAccountRepositoryImpl,
    ReadVerificationAccountImplService,
    ReadVerificationAccountRepositoryImpl,
    VerificationAccountImplService,
    DeleteVerificationAccountImpl
  ],
  exports: [
    CreateVerificationAccountImplService
  ]
})
export class VerificationModule {}
