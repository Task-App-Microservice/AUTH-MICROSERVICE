import { VerificationAccount } from "../entities/verification-account.entity";


export interface ReadUVerificationAccountRepository{
    findOneByCode(code: string): Promise<VerificationAccount>
}