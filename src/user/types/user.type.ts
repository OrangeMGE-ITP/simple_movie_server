import { UserEntity } from "../user.entity";

export type UserType = Omit<Omit<UserEntity, 'password'>, 'updateTimestamp'>;