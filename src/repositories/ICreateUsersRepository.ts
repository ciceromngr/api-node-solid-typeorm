import { Users } from "../database/entities/Users";

export interface ICreateUsersRepository {
    find(): Promise<Users>;
    findOne(props: any): Promise<Users>
    save(users: Users): Promise<void>
}