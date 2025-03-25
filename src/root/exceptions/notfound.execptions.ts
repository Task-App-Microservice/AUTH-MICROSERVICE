import { NotFoundException } from '@nestjs/common';

export class NotFoundExceptionGlobal<T> extends NotFoundException {
  constructor(message: string,error?: T, instance?: string) {
    super({
      statusCode: 404,
      success: false,
      detail:message,
      data: null,
      error,
      instance: instance || "/auth",
      timestamp: new Date().toISOString(),
    });
  }
}