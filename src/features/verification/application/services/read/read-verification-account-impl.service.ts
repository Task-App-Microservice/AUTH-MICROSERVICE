import { Injectable } from '@nestjs/common';
import { ReadUserImplService } from 'src/features/user/application/services/read/read-user-impl.service';
import { ReadVerificationAccountRepositoryImpl } from 'src/features/verification/adapters/out/repositories/read/read-verification-account-repository-impl.provider';
import { ReadVerificationAccountService } from 'src/features/verification/domain/services/read-verification-account-service';
import { BadRequestExceptionGlobal } from 'src/root/exceptions/bad-request.exception';
import { ConflictExceptionGlobal } from 'src/root/exceptions/conflict.exception';
import { NotFoundExceptionGlobal } from 'src/root/exceptions/notfound.execptions';

@Injectable()
export class ReadVerificationAccountImplService implements ReadVerificationAccountService {
  constructor(
    private readonly verificationAccountRepository: ReadVerificationAccountRepositoryImpl,
    private readonly userService: ReadUserImplService
  ){}

  async findOneByCode(code: string) {
    const verificationAccount = await this.verificationAccountRepository.findOneByCode(code);
    
    if (!verificationAccount) {
      throw new NotFoundExceptionGlobal('O codigo de verificação incorrecto');
    }

    const user = await this.userService.findOneByUuid(verificationAccount.identifier);

    if (user.emailVerified) {
      throw new ConflictExceptionGlobal('Esta conta ja foi verificada, faça login');
    }

    if (this.isDateExpired(verificationAccount.expires)) {
      throw new BadRequestExceptionGlobal('O codigo enviado expirou, reenvie um novo ');
    }
    
    return verificationAccount;
  }

  isDateExpired(expirationDate: Date): boolean {
    const currentDate = new Date();
    return currentDate > expirationDate;
  }
}
