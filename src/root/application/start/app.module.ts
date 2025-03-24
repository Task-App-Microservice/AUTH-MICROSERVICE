import { Module } from '@nestjs/common';
import { UserModule } from '../../../features/user/user.module';
import { AuthModule } from '../../../features/auth/auth.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventModule } from '../events/event.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule,
    UserModule,
    EventModule,
    EventEmitterModule.forRoot({})
  ],
})
export class AppModule { }
