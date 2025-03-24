export class User {
    id: number;
    uuid: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updateAt: Date;
    emailVerified?: Date;

    constructor(user: Partial<User>) {
        Object.assign(this, user)
    }
}