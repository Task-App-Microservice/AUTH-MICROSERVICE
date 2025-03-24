import { Injectable } from '@nestjs/common';
import { VerificationAccount } from 'src/features/user/domain/entities/verification-account.entity';
import { ReadUVerificationAccountRepository } from 'src/features/verification/domain/repositories/read-verification-account-repository';
import { DatabaseService } from 'src/root/application/database/services/database.service';

@Injectable()
export class ReadVerificationAccountRepositoryImpl implements ReadUVerificationAccountRepository {

    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async findOneByCode(code: string): Promise<VerificationAccount> {
        return await this.databaseService.verificationAccount.findUnique({
            where:{
                code
            }
        }) as VerificationAccount;
    }
}
