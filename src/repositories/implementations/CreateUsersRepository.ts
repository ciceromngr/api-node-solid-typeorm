import { EntityRepository, Repository } from "typeorm";
import { Users } from "../../database/entities/Users";
import { ICreateUserRequestDAO } from "../../useCases/users/createUsers/DAO/CreateUsersDAO";
import { ICreateUsersRepository } from "../ICreateUsersRepository";

@EntityRepository(Users)
class CreateUsersRepository extends Repository<Users> implements ICreateUsersRepository{
    
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

export { CreateUsersRepository }