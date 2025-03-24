import { Injectable } from '@nestjs/common';
import { UpdateUserService } from '../../../domain/services/update-user-service';
import { UpdateUserRepositoryImpl } from '../../../adapters/out/repositories/update/update-user-repository-impl.provider';
import { User } from '../../../domain/entities/user.entity';

@Injectable()
export class UpdateUserImplService implements UpdateUserService {
  constructor(
    private readonly updateUserRepository: UpdateUserRepositoryImpl
  ) { }

  async verificationEmail(uuid: string): Promise<User> {
    return await this.updateUserRepository.verificationEmail(uuid);
  }

}
