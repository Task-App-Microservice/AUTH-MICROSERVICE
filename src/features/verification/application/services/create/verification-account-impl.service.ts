import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { ReadVerificationAccountImplService } from '../read/read-verification-account-impl.service';
import { DeleteVerificationAccountImpl } from '../../../adapters/out/repositories/delete/delete-verificatin-account-impl.provider';
import { VerificationAccountService } from 'src/features/verification/domain/services/verification-account-service';
import { UpdateUserImplService } from 'src/features/user/application/services/update/update-user-impl.service';
import { ClientRabbitService } from 'src/root/application/rabbit/service/client-rabbit.provider';
import { TaskClientRabbitService } from 'src/root/application/rabbit/service/task/task-client-rabbit.provider';

@Injectable()
export class VerificationAccountImplService implements VerificationAccountService {

  constructor(
    private readonly userService: UpdateUserImplService,
    private readonly readVerificationService: ReadVerificationAccountImplService,
    private readonly verificationRepo: DeleteVerificationAccountImpl,
     private readonly client: TaskClientRabbitService,
  ) { }


  async verificationAccount(code: string): Promise<{message: string}> {
    const isVerified = await this.readVerificationService.findOneByCode(code);
    const user = await this.userService.verificationEmail(isVerified.identifier);
    this.client.rabbitClient.emit("user_created", {referenceExternalId: isVerified.identifier})
    this.verificationRepo.delete(isVerified.identifier);
    return{
      message: `Email verified: ${user.email}`
    };
  }

}
