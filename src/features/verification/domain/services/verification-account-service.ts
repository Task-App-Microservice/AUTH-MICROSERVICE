
export interface VerificationAccountDto{
    userUuid: string;
}
export interface VerificationAccountService{
    verificationAccount(userUuid: string): Promise<{message: string}>
}