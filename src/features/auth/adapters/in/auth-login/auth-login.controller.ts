import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { AuthLoginService } from '../../../application/services/auth-login/auth-login.service';
import { LoginDto } from '../../out/dto/login.dto';

@Controller('auth/login')
export class AuthLoginController {
  constructor(private readonly authLoginService: AuthLoginService) {}

  @Post()
  async execute(@Body() body: LoginDto) {
    return await this.authLoginService.login(body);
  }
}
