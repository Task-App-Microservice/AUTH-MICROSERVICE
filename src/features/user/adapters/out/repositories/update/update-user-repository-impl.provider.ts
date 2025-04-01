import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { User } from 'src/features/user/domain/entities/user.entity';
import { UpdateUserRepository } from 'src/features/user/domain/repositories/update-user-repository';
import { DRIZZLE } from 'src/root/application/database/database.module';
import { userSchema } from 'src/root/application/database/schemas/index.schema';
import { DatabaseService } from 'src/root/application/database/types/database';

@Injectable()
export class UpdateUserRepositoryImpl implements UpdateUserRepository {
    constructor(
        @Inject(DRIZZLE)
        private readonly databaseService: DatabaseService
    ) { }

    async verificationEmail(userUuid: string): Promise<User> {
        const newDateVerification = new Date()
        return await this.databaseService.update(userSchema).set({
            emailVerified: newDateVerification
        }).where(eq(userSchema.uuid, userUuid)).returning() as unknown as User;
    }
}
