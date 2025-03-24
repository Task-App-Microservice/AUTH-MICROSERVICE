import { Injectable } from "@nestjs/common";
import { generateOTP } from "@eternaljs/otp-generator";
import { DatabaseService } from "src/root/application/database/services/database.service";
import { VerificationAccount } from "src/features/verification/domain/entities/verification-account.entity";
import { CreateVerificationAccountRepository } from "src/features/verification/domain/repositories/create-varification-repository";

@Injectable()
export class CreateVerificationAccountRepositoryImpl implements CreateVerificationAccountRepository {
    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async save(identifier: string): Promise<VerificationAccount> {
        const code = generateOTP(6);
        const expires = this.generateExpirationDate()
        return await this.databaseService.verificationAccount.create({
            data:{
                identifier,
                code,
                expires
            } 
        })
    }

    generateExpirationDate(minutes: number = 5): Date {
        const currentDate = new Date();
        const expirationDate = new Date(currentDate);
        expirationDate.setMinutes(currentDate.getMinutes() + minutes);
        return expirationDate;
    }
}