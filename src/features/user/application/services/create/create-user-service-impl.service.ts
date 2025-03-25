import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserService, UserDto } from '../../../domain/services/create-user-service';
import { CreateUserRepositoryImpl } from '../../../adapters/out/repositories/create/create-user-repository-impl.provider';
import { ReadUserRepositoryImpl } from '../../../adapters/out/repositories/read/read-user-repository.provider';
import { User } from '../../../domain/entities/user.entity';
import { ConflictExceptionGlobal } from 'src/root/exceptions/conflict.exception';
@Injectable()
export class CreateUserServiceImpl implements CreateUserService {

  constructor(
    private readonly createUserRepo: CreateUserRepositoryImpl,
    private readonly readUserRepo: ReadUserRepositoryImpl
  ) { }

  async create(dto: UserDto): Promise<User> {

    const userExisting = await this.readUserRepo.findOneByEmail(dto.email);

    if (userExisting) throw new ConflictExceptionGlobal("Já existe um usuário registrado com este e-mail.",
      [
        {
            field: "email",
            message: "O e-mail informado já está em uso."
        }
    ]
    );

    
    const user = new User({...dto});

    return await this.createUserRepo.save({
      ...user
    })
    
  }
}
