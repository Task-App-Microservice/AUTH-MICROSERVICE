import { User } from "../entities/user.entity";

export interface ReadUserService{
    findOneByUuid(uuid: string): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
}