import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class GlobalResponseInterceptor<T> implements NestInterceptor<T> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        statusCode: context.switchToHttp().getResponse().statusCode,
        success: true,
        detail: "Operação bem sucessidda",
        data: data || null,
        error: null,
        metadata: {
          type: "object"
      },
        timestamp: new Date().toISOString(),
      })),
    );
  }
}