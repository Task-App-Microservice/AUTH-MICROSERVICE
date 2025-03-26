import { Injectable, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "src/features/user/adapters/out/dto/create-user.dto";
import { CreateUserServiceImpl } from "src/features/user/application/services/create/create-user-service-impl.service";
import { ApiKeyGuard } from "src/root/application/api/guard/api-kay.guard";


@Injectable()
export class AuthRegisterService {
  constructor(private readonly userCreateService: CreateUserServiceImpl) {}

  async register(body: CreateUserDto){
    return await this.userCreateService.create(body);
  }
}
