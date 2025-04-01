import { Inject, Injectable } from '@nestjs/common';
import { ReadUserRepository } from '../../../../domain/repositories/read-user-repository';
import { User } from 'src/features/user/domain/entities/user.entity';
import { DRIZZLE } from 'src/root/application/database/database.module';
import { DatabaseService } from 'src/root/application/database/types/database';

@Injectable()
export class ReadUserRepositoryImpl implements ReadUserRepository {
    constructor(
        @Inject(DRIZZLE)
        private readonly databaseService: DatabaseService
    ) { }

    async findOneByEmail(email: string): Promise<User> {
        return await this.databaseService.query.userSchema.findFirst({
            where: (user, { and, eq }) => and(eq(user.email, email)),
        }) as unknown as User;
    }

    async findOneByUuid(uuid: string): Promise<User> {
        return await this.databaseService.query.userSchema.findFirst({
            where: (user, {and, eq})=> and(
                eq(user.uuid, uuid)
            ),
            columns:{
                password: false
            }
        }) as unknown as User;
    }
}
