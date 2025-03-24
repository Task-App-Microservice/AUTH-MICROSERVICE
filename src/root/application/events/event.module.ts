import { Module } from '@nestjs/common';
import { RabbitModule } from '../rabbit/rabbit.module';
import { CreateUserEventService } from './user/services/create-user-event.service';
import { VerificationModule } from 'src/features/verification/verification.module';

@Module({
  imports: [
    RabbitModule,
    VerificationModule
  ],
  providers: [
    CreateUserEventService
  ],
  exports: []
})
export class EventModule {}
