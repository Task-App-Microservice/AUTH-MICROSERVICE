import { User } from "../entities/user.entity";

export interface UpdateUserRepository{
    verificationEmail(userUuid: string): Promise<User>
}