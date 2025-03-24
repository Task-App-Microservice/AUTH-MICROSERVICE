import { Injectable } from '@nestjs/common';
import { ReadUserRepository } from '../../../../domain/repositories/read-user-repository';
import { DatabaseService } from 'src/root/application/database/services/database.service';
import { User } from 'src/features/user/domain/entities/user.entity';

@Injectable()
export class ReadUserRepositoryImpl implements ReadUserRepository {
    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async findOneByEmail(email: string): Promise<User> {
        return await this.databaseService.user.findUnique({
            where:{
                email
            },
        }) as User;
    }

    async findOneByUuid(uuid: string): Promise<User> {
        return await this.databaseService.user.findUnique({
            where:{
                uuid
            },
            omit:{
                password: true
            }
        }) as User;
    }
}
