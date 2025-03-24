import { User } from "../entities/user.entity";

export interface UserDto{
    email: string;
    name: string;
    password: string;
}
export interface CreateUserService{
    create(dto: UserDto): Promise<User>
}