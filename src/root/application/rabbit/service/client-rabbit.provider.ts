import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ClientRabbitService {
    constructor(
        @Inject("EMAIL_QUEUE")
        public readonly rabbitClient: ClientProxy
    ){}
}
