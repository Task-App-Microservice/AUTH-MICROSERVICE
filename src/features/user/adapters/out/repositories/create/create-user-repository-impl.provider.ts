import { Inject, Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { User } from 'src/features/user/domain/entities/user.entity';
import { CreateUserRepository } from 'src/features/user/domain/repositories/create-user-repository';
import { DRIZZLE } from 'src/root/application/database/database.module';
import { userSchema } from 'src/root/application/database/schemas/index.schema';
import { DatabaseService } from 'src/root/application/database/types/database';

@Injectable()
export class CreateUserRepositoryImpl implements CreateUserRepository{
    constructor(
        @Inject(DRIZZLE)
        private readonly databaseService: DatabaseService
    ){}
    async save(user: User): Promise<User> {
        const passwordHashed = await hash(user.password, 12);
        const [newUser] = await this.databaseService.insert(userSchema).values({
            ...user,
            password: passwordHashed
        }).returning();
        
        const { password, ...userWithoutPassword } = newUser;
        return userWithoutPassword as User;
    }
}
