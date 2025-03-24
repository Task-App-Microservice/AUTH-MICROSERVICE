import { Injectable } from '@nestjs/common';
import { CreateVerificationAccountService, VerificationAccountDto } from '../../../domain/services/create-aerification-account-service';
import { VerificationAccount } from '../../../domain/entities/verification-account.entity';
import { CreateVerificationAccountRepositoryImpl } from '../../../adapters/out/repositories/create/verification-account-repository-impl.provider';

@Injectable()
export class CreateVerificationAccountImplService implements CreateVerificationAccountService {

  constructor(
    private readonly verificationRepo: CreateVerificationAccountRepositoryImpl,
  ) { }

  async create(dto: VerificationAccountDto): Promise<VerificationAccount> {
    return await this.verificationRepo.save(dto.userUuid)
  }

}
