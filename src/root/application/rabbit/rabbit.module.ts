import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClientRabbitService } from './service/client-rabbit.provider';
import { TaskClientRabbitService } from './service/task/task-client-rabbit.provider';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EMAIL_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
          queue: 'messanger',
          queueOptions: { durable: true },
        },
      },
      {
        name: 'TASK_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
          queue: 'tasks_queue',
          queueOptions: { durable: true },
        },
      },
    ]),
  ],
  providers:[
    ClientRabbitService,
    TaskClientRabbitService
  ],
  exports:[
    ClientRabbitService,
    TaskClientRabbitService
  ]
})
export class RabbitModule { }
