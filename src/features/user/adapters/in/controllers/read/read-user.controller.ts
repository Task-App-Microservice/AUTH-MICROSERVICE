import {
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { ReadUserImplService } from 'src/features/user/application/services/read/read-user-impl.service';
import { GlobalResponseInterceptor } from 'src/root/interceptors/global-interceptor.interceptor';
import { CuidValidationPipe } from 'src/root/pipes/cuid-validator.pipe';

@Controller('users')
export class ReadUserController {
  constructor(private readonly readUserService: ReadUserImplService) {}

  @Get(":uuid")
  @UseInterceptors(GlobalResponseInterceptor)
  async getUser(
    @Param("uuid", CuidValidationPipe) uuid: string
  ){
    return {user: await this.readUserService.findOneByUuid(uuid)};
  }
}
