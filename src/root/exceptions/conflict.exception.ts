import { ConflictException } from '@nestjs/common';

export class ConflictExceptionGlobal<T> extends ConflictException {
  constructor(message: string,error?: T, instance?: string) {
    super({
      statusCode: 409,
      success: false,
      detail:message,
      data: null,
      error,
      instance: instance || "/auth",
      timestamp: new Date().toISOString(),
    });
  }
}