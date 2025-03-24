import { Injectable, Logger } from '@nestjs/common';
import { ClientRabbitService } from '../../../rabbit/service/client-rabbit.provider';
import { UserCreatedEvent } from '../core/user-event';
import { OnEvent } from '@nestjs/event-emitter';
import { CreateVerificationAccountImplService } from 'src/features/verification/application/services/create/create-verification-account-impl.service';

@Injectable()
export class CreateUserEventService {
  constructor(
    private readonly client: ClientRabbitService,
    private readonly verificationService: CreateVerificationAccountImplService 
  ) { }

  private readonly logger = new Logger(CreateUserEventService.name, { timestamp: true });
  @OnEvent('user.created')
  async handleUserCreated(event: UserCreatedEvent) {
    const {email, uuid} = event.user
    const codeVerification = await this.verificationService.create({userUuid: uuid})
    const messageBody = `Conta criada com sucesso aqui esta`;
    this.logger.debug('📤 Evento ouvido e enviando mensagem para fila RabbitMQ...');
    return await this.client.rabbitClient.emit("email_send_code", {
      email,
      messageBody,
      code: codeVerification.code
    });
  }
}
