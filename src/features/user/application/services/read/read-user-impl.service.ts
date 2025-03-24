import { Injectable, NotFoundException } from '@nestjs/common';
import { ReadUserService } from '../../../domain/services/read-user-service';
import { User } from '../../../domain/entities/user.entity';
import { ReadUserRepositoryImpl } from '../../../adapters/out/repositories/read/read-user-repository.provider';

@Injectable()
export class ReadUserImplService implements ReadUserService {
  constructor(
    private readonly readUserRepo: ReadUserRepositoryImpl
  ) { }
  async findOneByUuid(uuid: string): Promise<User> {
    const userExisting = await this.readUserRepo.findOneByUuid(uuid);
    if(!userExisting) throw new NotFoundException("User not found");
    return userExisting;
  }

  async findOneByEmail(email: string): Promise<User> {
      return await this.readUserRepo.findOneByEmail(email);
  }
}
