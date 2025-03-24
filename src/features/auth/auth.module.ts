import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthRegisterController } from './adapters/in/auth-regiser/auth-register.controller';
import { AuthRegisterService } from './application/services/auth-register/auth-register.service';
import { AuthLoginService } from './application/services/auth-login/auth-login.service';
import { AuthLoginController } from './adapters/in/auth-login/auth-login.controller';

@Module({
  imports: [
    UserModule
  ],
  controllers: [
    AuthRegisterController,
    AuthLoginController
  ],
  providers: [
    AuthRegisterService,
    AuthLoginService,
  ],
  exports: []
})
export class AuthModule {}
