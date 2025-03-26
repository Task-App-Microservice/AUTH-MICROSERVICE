import {
    CanActivate,
    ExecutionContext,
    Injectable,
  } from '@nestjs/common';
  import { Request } from 'express';
import { UnauthorizedExceptionGlobal } from 'src/root/exceptions/unauthorized.exeception';
  
  @Injectable()
  export class ApiKeyGuard implements CanActivate {
    private staticKey = '333'; // Altere para sua chave ou use variável de ambiente
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest<Request>();
  
      const apiKey = this.extractKeyApiHeader(request);
  
      if (!apiKey || apiKey !== this.staticKey) {
        throw new UnauthorizedExceptionGlobal('API Key inválida ou ausente');
      }
  
      return true;
    }
  
    private extractKeyApiHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }