import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthRegisterService } from 'src/features/auth/application/services/auth-register/auth-register.service';
import { CreateUserDto } from 'src/features/user/adapters/out/dto/create-user.dto';
import { ApiKeyGuard } from 'src/root/application/api/guard/api-kay.guard';
import { UserCreatedInterceptor } from 'src/root/interceptors/user-create.interceptor';

@Controller('auth/register')
@UseGuards(ApiKeyGuard)
export class AuthRegisterController {
  constructor(private readonly authRegisterService: AuthRegisterService) {}

  @Post()
  @UseInterceptors(UserCreatedInterceptor)
  async create(@Body() body: CreateUserDto) {
    return await this.authRegisterService.register(body);
  }

}
