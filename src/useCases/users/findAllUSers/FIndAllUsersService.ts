import { getCustomRepository } from "typeorm";
import { Users } from "../../../database/entities/Users";
import { FindAllUsersRepository } from "../../../repositories/implementations/FIndAllUsersRepository";

export class FindAllUsersService {

    async findAllUsers(): Promise<any> {
        const findAllUsersRepository = getCustomRepository(FindAllUsersRepository) 

        const users = await findAllUsersRepository.findAllUsers()

        return users.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            create_at: user.create_at
        }))
    }

}