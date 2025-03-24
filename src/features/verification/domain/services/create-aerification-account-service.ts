import { VerificationAccount } from "../entities/verification-account.entity";

export interface VerificationAccountDto{
    userUuid: string;
}
export interface CreateVerificationAccountService{
    create(dto: VerificationAccountDto): Promise<VerificationAccount>
}