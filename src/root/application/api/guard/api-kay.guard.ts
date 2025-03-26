import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  
  @Injectable()
  export class ApiKeyGuard implements CanActivate {
    private readonly validApiKey = '3333'; 

    canActivate(context: ExecutionContext): boolean {
      const request = context.switchToHttp().getRequest();
      const apiKey = request.headers['X-API-KEY'] || request.query['api_key'];
  
      if (!apiKey || apiKey !== this.validApiKey) {
        throw new UnauthorizedException('Chave de API inválida ou ausente');
      }
  
      return true; 
    }
  }