import { VerificationAccount } from "../entities/verification-account.entity";

export interface DeleteVerificationAccountRepository{
    delete(uuid: string): Promise<void>
}