import { User } from "src/features/user/domain/entities/user.entity";

export class UserCreatedEvent {
    constructor(
      public readonly user: User
    ) {}
  }