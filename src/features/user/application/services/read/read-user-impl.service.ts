import { Injectable } from '@nestjs/common';
import { ReadUserService } from '../../../domain/services/read-user-service';
import { User } from '../../../domain/entities/user.entity';
import { ReadUserRepositoryImpl } from '../../../adapters/out/repositories/read/read-user-repository.provider';
import { NotFoundExceptionGlobal } from 'src/root/exceptions/notfound.execptions';

@Injectable()
export class ReadUserImplService implements ReadUserService {
  constructor(
    private readonly readUserRepo: ReadUserRepositoryImpl
  ) { }
  async findOneByUuid(uuid: string): Promise<User> {
    const userExisting = await this.readUserRepo.findOneByUuid(uuid);
    if(!userExisting) throw new NotFoundExceptionGlobal("Usúario não encontrado",[
      {
        cause: `Não existe nemnhum usuário com este cuid: ${uuid}`
      }
    ],"users/${cuid}");
    return userExisting;
  }

  async findOneByEmail(email: string): Promise<User> {
      return await this.readUserRepo.findOneByEmail(email);
  }
}
