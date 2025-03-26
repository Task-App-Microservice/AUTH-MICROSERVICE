import {
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { UnauthorizedExceptionGlobal } from 'src/root/exceptions/unauthorized.exeception';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  private staticKey = '3333'; // Altere para sua chave ou use variável de ambiente

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const apiKey = this.extractApiKey(request);

    if (!apiKey || apiKey !== this.staticKey) {
      throw new UnauthorizedExceptionGlobal('API Key inválida ou ausente');
    }

    return true;
  }

  private extractApiKey(request: Request): string | undefined {
    return request.headers['x-api-key'] as string;
  }
}