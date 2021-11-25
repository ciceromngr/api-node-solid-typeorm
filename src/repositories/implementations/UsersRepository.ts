import { EntityRepository, Repository } from "typeorm";
import { Users } from "../../database/entities/Users";
import { ICreateUserRequestDAO } from "../../useCases/createUsers/DAO/CreateUsersDAO";
import { ICreateUsersRepository } from "../ICreateUsersRepository";

@EntityRepository(Users)
class UsersRepository extends Repository<Users> implements ICreateUsersRepository{
    
    async findUsers(): Promise<any> {
        return this.find()
    }

    async findOneUser(props: any): Promise<Users> {
        return this.findOne(props)
    }
    
    async saved(users: Users): Promise<void> {
        this.save(users)
    }

    async created(data: ICreateUserRequestDAO): Promise<Users> {
        return this.create(data)
    }
    
}

export { UsersRepository }