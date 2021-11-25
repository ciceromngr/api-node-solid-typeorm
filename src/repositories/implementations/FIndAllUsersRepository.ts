import { EntityRepository, Repository } from "typeorm";
import { Users } from "../../database/entities/Users";
import { IFindAllUsersRepository } from "../IFindAllUsersRepository";

@EntityRepository(Users)
class FindAllUsersRepository extends Repository<Users> implements IFindAllUsersRepository{
    findAllUsers(): Promise<Users[]> {
        return this.find()
    }
}

export { FindAllUsersRepository }