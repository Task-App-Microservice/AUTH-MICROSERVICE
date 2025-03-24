import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TaskClientRabbitService {
    constructor(
        @Inject("TASK_QUEUE")
        public readonly rabbitClient: ClientProxy
    ){}
}
