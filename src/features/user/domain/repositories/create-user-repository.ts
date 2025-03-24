import { User } from "../entities/user.entity";

export interface CreateUserRepository{
    save(user: User): Promise<User>
}