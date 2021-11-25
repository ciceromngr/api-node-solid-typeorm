import { Users } from "../database/entities/Users";
import { ICreateUserRequestDAO } from "../useCases/users/createUsers/DAO/CreateUsersDAO";

export interface ICreateUsersRepository {
    findOneUser(props: any): Promise<Users>
    saved(users: Users): Promise<void>
    created(data: ICreateUserRequestDAO): Promise<Users>
}