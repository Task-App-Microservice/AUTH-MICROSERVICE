import { User } from "../entities/user.entity";

export interface UpdateUserService{
    verificationEmail(uuid: string): Promise<User>
}