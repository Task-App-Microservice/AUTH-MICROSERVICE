import {
  Body,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AuthRegisterService } from 'src/features/auth/application/services/auth-register/auth-register.service';
import { CreateUserDto } from 'src/features/user/adapters/out/dto/create-user.dto';
import { UserCreatedInterceptor } from 'src/root/interceptors/user-create.interceptor';

@Controller('auth/register')
export class AuthRegisterController {
  constructor(private readonly authRegisterService: AuthRegisterService) {}

  @Post()
  @UseInterceptors(UserCreatedInterceptor)
  async create(@Body() body: CreateUserDto) {
    return await this.authRegisterService.register(body);
  }

}
