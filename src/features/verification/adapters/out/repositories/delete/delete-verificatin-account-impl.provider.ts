import { Injectable } from '@nestjs/common';
import { DeleteVerificationAccountRepository } from '../../../../domain/repositories/delete-varification-repository';
import { DatabaseService } from 'src/root/application/database/services/database.service';

@Injectable()
export class DeleteVerificationAccountImpl implements DeleteVerificationAccountRepository {

    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async delete(uuid: string): Promise<void> {
        await this.databaseService.verificationAccount.delete({
            where:{
                identifier: uuid
            }
        });
    }
}
