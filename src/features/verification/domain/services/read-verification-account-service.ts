import { VerificationAccount } from "../entities/verification-account.entity";


export interface ReadVerificationAccountService{
    findOneByCode(code: string): Promise<VerificationAccount>
}