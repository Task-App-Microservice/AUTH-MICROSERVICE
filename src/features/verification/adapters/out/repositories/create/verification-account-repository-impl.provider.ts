import { Inject, Injectable } from "@nestjs/common";
import { generateOTP } from "@eternaljs/otp-generator";
import { VerificationAccount } from "src/features/verification/domain/entities/verification-account.entity";
import { CreateVerificationAccountRepository } from "src/features/verification/domain/repositories/create-varification-repository";
import { DatabaseService } from "src/root/application/database/types/database";
import { verificationAccountSchema } from "src/root/application/database/schemas/index.schema";
import { DRIZZLE } from "src/root/application/database/database.module";

@Injectable()
export class CreateVerificationAccountRepositoryImpl implements CreateVerificationAccountRepository {
    constructor(
        @Inject(DRIZZLE)
        private readonly databaseService: DatabaseService
    ) { }

    async save(identifier: string): Promise<VerificationAccount> {
        const code = generateOTP(6);
        const expires = this.generateExpirationDate()
        return await this.databaseService.insert(verificationAccountSchema).values({
            identifier,
            code,
            expires
        }).returning() as unknown as VerificationAccount;
    }

    generateExpirationDate(minutes: number = 5): Date {
        const currentDate = new Date();
        const expirationDate = new Date(currentDate);
        expirationDate.setMinutes(currentDate.getMinutes() + minutes);
        return expirationDate;
    }
}