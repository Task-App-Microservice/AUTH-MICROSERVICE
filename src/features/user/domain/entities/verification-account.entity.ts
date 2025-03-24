export class VerificationAccount {
    identifier: string;
    code: string
    expires: Date

    createdAt: Date

    constructor(verification: Partial<VerificationAccount>){
        Object.assign(this, verification)
    }
}