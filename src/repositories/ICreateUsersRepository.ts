import { Users } from "../database/entities/Users";
import { ICreateUserRequestDAO } from "../useCases/createUsers/DAO/CreateUsersDAO";

export interface ICreateUsersRepository {
    findOneUser(props: any): Promise<Users>
    saved(users: Users): Promise<void>
    created(data: ICreateUserRequestDAO): Promise<Users>
}