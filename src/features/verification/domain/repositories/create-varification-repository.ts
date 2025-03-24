import { VerificationAccount } from "../entities/verification-account.entity";

export interface CreateVerificationAccountRepository{
    save(identifier: string): Promise<VerificationAccount>
}