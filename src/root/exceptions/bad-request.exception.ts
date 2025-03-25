import { BadRequestException, ConflictException } from '@nestjs/common';

export class BadRequestExceptionGlobal<T> extends BadRequestException{
  constructor(message: string,error?: T, instance?: string) {
    super({
      statusCode: 400,
      success: false,
      detail:message,
      data: null,
      error,
      instance: instance || "/auth",
      timestamp: new Date().toISOString(),
    });
  }
}