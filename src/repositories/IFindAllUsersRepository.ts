import { Users } from "../database/entities/Users";

export interface IFindAllUsersRepository {
    findAllUsers(): Promise<Users[]>
}