import { Inject, Injectable } from '@nestjs/common';
import { VerificationAccount } from 'src/features/user/domain/entities/verification-account.entity';
import { ReadUVerificationAccountRepository } from 'src/features/verification/domain/repositories/read-verification-account-repository';
import { DRIZZLE } from 'src/root/application/database/database.module';
import { DatabaseService } from 'src/root/application/database/types/database';

@Injectable()
export class ReadVerificationAccountRepositoryImpl implements ReadUVerificationAccountRepository {

    constructor(
        @Inject(DRIZZLE)
        private readonly databaseService: DatabaseService
    ) { }

    async findOneByCode(code: string): Promise<VerificationAccount> {
        return await this.databaseService.query.verificationAccountSchema.findFirst({
            where: (verfication, {eq})=>eq(verfication.code, code)
        }) as unknown as VerificationAccount;
    }
}
