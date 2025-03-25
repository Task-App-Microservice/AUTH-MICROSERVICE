import { Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { User } from 'src/features/user/domain/entities/user.entity';
import { CreateUserRepository } from 'src/features/user/domain/repositories/create-user-repository';
import { DatabaseService } from 'src/root/application/database/services/database.service';

@Injectable()
export class CreateUserRepositoryImpl implements CreateUserRepository{
    constructor(
        private readonly databaseService: DatabaseService
    ){}
    async save(user: User): Promise<User> {
        const passwordHashed = await hash(user.password, 12)
        const newUser = await this.databaseService.user.create({
            data:{
                ...user,
                password: passwordHashed
            },
            omit:{
                password: true
            } 
        }) as User;
        
        return {...newUser}
    }
}
