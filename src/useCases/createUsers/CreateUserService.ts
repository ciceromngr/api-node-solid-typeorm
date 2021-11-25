import { ICreateUserRequestDAO } from "./DAO/CreateUsersDAO";
import { ICreateUsersRepository } from '../../repositories/ICreateUsersRepository'

export class CreateUsersService {


    constructor(
        private createUsersRepository: ICreateUsersRepository
    ) { }

    async excecute(data: ICreateUserRequestDAO) {
        const userAlreadyExist = await this.createUsersRepository.findOne({ email: data.email })

        if(userAlreadyExist) {
            throw new Error('User Already Exist.')
        }
    }

}