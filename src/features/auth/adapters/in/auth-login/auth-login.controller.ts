import {
  Body,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AuthLoginService } from '../../../application/services/auth-login/auth-login.service';
import { LoginDto } from '../../out/dto/login.dto';
import { GlobalResponseInterceptor } from 'src/root/interceptors/global-interceptor.interceptor';

@Controller('auth/login')
export class AuthLoginController {
  constructor(private readonly authLoginService: AuthLoginService) {}

  @Post()
  @UseInterceptors(GlobalResponseInterceptor)
  async execute(@Body() body: LoginDto) {
    return await this.authLoginService.login(body);
  }
}
