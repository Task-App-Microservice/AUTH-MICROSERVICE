import { Injectable } from '@nestjs/common';
import { User } from 'src/features/user/domain/entities/user.entity';
import { UpdateUserRepository } from 'src/features/user/domain/repositories/update-user-repository';
import { DatabaseService } from 'src/root/application/database/services/database.service';

@Injectable()
export class UpdateUserRepositoryImpl implements UpdateUserRepository {
    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async verificationEmail(userUuid: string): Promise<User> {
        const newDateVerification = new Date()
        return await this.databaseService.user.update({
            where: {
                uuid: userUuid
            },
            data: {
                emailVerified: newDateVerification
            }
        }) as User;
    }
}
