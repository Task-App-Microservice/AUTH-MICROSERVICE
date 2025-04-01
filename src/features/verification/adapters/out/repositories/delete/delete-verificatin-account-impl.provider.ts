import { Inject, Injectable } from '@nestjs/common';
import { DeleteVerificationAccountRepository } from '../../../../domain/repositories/delete-varification-repository';
import { DatabaseService } from 'src/root/application/database/types/database';
import { verificationAccountSchema } from 'src/root/application/database/schemas/index.schema';
import { eq } from 'drizzle-orm';
import { DRIZZLE } from 'src/root/application/database/database.module';

@Injectable()
export class DeleteVerificationAccountImpl implements DeleteVerificationAccountRepository {

    constructor(
        @Inject(DRIZZLE)
        private readonly databaseService: DatabaseService
    ) { }

    async delete(uuid: string): Promise<void> {
        await this.databaseService.delete(verificationAccountSchema).where(eq(verificationAccountSchema.identifier, uuid)) ;
    }
}
