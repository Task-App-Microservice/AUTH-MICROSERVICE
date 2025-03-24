import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { VerificationCodeDto } from '../../out/dto/verification-code.dto';
import { VerificationAccountImplService } from '../../../application/services/create/verification-account-impl.service';

@Controller('verification/account')
export class VerificationAccountCodeController {
  constructor(
    private readonly verificationAccountService:VerificationAccountImplService
  ){}

  @Post()
  verification(@Body() body: VerificationCodeDto) {
    return this.verificationAccountService.verificationAccount(body.code);
  }

}
